

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

/** SDK Documentation: https://api.stackexchange.com/**/
public class SDK {
	public static final String[] SERVERS = {
		"https://api.stackexchange.com/2.0",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * getAccessTokensAccessTokens - Reads the properties for a set of access tokens.
     *  
     * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
     *  
     * This method returns a list of access_tokens.
     * 
    **/
    public openapisdk.models.operations.GetAccessTokensAccessTokensResponse getAccessTokensAccessTokens(openapisdk.models.operations.GetAccessTokensAccessTokensRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/access-tokens/{accessTokens}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAccessTokensAccessTokensResponse res = new openapisdk.models.operations.GetAccessTokensAccessTokensResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getAccessTokensAccessTokensInvalidate - Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
     *  
     * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
     *  
     * This method returns a list of access_tokens.
     * 
    **/
    public openapisdk.models.operations.GetAccessTokensAccessTokensInvalidateResponse getAccessTokensAccessTokensInvalidate(openapisdk.models.operations.GetAccessTokensAccessTokensInvalidateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/access-tokens/{accessTokens}/invalidate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAccessTokensAccessTokensInvalidateResponse res = new openapisdk.models.operations.GetAccessTokensAccessTokensInvalidateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getAnswers - Returns all the undeleted answers in the system.
     *  
     * The sorts accepted by this method operate on the follow fields of the answer object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetAnswersResponse getAnswers(openapisdk.models.operations.GetAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/answers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnswersResponse res = new openapisdk.models.operations.GetAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getAnswersIds - Gets the set of answers identified by ids.
     *  
     * This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the answer object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetAnswersIdsResponse getAnswersIds(openapisdk.models.operations.GetAnswersIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/answers/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnswersIdsResponse res = new openapisdk.models.operations.GetAnswersIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getAnswersIdsComments - Gets the comments on a set of answers.
     *  
     * If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetAnswersIdsCommentsResponse getAnswersIdsComments(openapisdk.models.operations.GetAnswersIdsCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/answers/{ids}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAnswersIdsCommentsResponse res = new openapisdk.models.operations.GetAnswersIdsCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getAppsAccessTokensDeAuthenticate - Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
     *  
     * This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
     *  
     * Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
     *  
     * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
     *  
     * This method returns a list of access_tokens.
     * 
    **/
    public openapisdk.models.operations.GetAppsAccessTokensDeAuthenticateResponse getAppsAccessTokensDeAuthenticate(openapisdk.models.operations.GetAppsAccessTokensDeAuthenticateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/apps/{accessTokens}/de-authenticate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAppsAccessTokensDeAuthenticateResponse res = new openapisdk.models.operations.GetAppsAccessTokensDeAuthenticateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadges - Returns all the badges in the system.
     *  
     * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
     *  
     * This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
     *  
     * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
     *  
     * rank is the default sort.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesResponse getBadges(openapisdk.models.operations.GetBadgesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesResponse res = new openapisdk.models.operations.GetBadgesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadgesName - Gets all explicitly named badges in the system.
     *  
     * A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
     *  
     * For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
     *  
     * rank is the default sort.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesNameResponse getBadgesName(openapisdk.models.operations.GetBadgesNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges/name");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesNameResponse res = new openapisdk.models.operations.GetBadgesNameResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadgesRecipients - Returns recently awarded badges in the system.
     *  
     * As these badges have been awarded, they will have the badge.user property set.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesRecipientsResponse getBadgesRecipients(openapisdk.models.operations.GetBadgesRecipientsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges/recipients");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesRecipientsResponse res = new openapisdk.models.operations.GetBadgesRecipientsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadgesTags - Returns the badges that are awarded for participation in specific tags.
     *  
     * For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
     *  
     * rank is the default sort.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesTagsResponse getBadgesTags(openapisdk.models.operations.GetBadgesTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges/tags");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesTagsResponse res = new openapisdk.models.operations.GetBadgesTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadgesIds - Gets the badges identified in id.
     *  
     * Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
     *  
     * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
     *  
     * This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
     *  
     * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
     *  
     * rank is the default sort.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesIdsResponse getBadgesIds(openapisdk.models.operations.GetBadgesIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesIdsResponse res = new openapisdk.models.operations.GetBadgesIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getBadgesIdsRecipients - Returns recently awarded badges in the system, constrained to a certain set of badges.
     *  
     * As these badges have been awarded, they will have the badge.user property set.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetBadgesIdsRecipientsResponse getBadgesIdsRecipients(openapisdk.models.operations.GetBadgesIdsRecipientsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/badges/{ids}/recipients", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBadgesIdsRecipientsResponse res = new openapisdk.models.operations.GetBadgesIdsRecipientsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getComments - Gets all the comments on the site.
     *  
     * If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
     *  
     * If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetCommentsResponse getComments(openapisdk.models.operations.GetCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/comments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCommentsResponse res = new openapisdk.models.operations.GetCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getCommentsIds - Gets the comments identified in id.
     *  
     * This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetCommentsIdsResponse getCommentsIds(openapisdk.models.operations.GetCommentsIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/comments/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCommentsIdsResponse res = new openapisdk.models.operations.GetCommentsIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getErrors - Returns the various error codes that can be produced by the API.
     *  
     * This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
     *  
     * For testing purposes, look into the /errors/{id} method which simulates errors given a code.
     *  
     * This method returns a list of errors.
     * 
    **/
    public openapisdk.models.operations.GetErrorsResponse getErrors(openapisdk.models.operations.GetErrorsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/errors");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetErrorsResponse res = new openapisdk.models.operations.GetErrorsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getErrorsId - This method allows you to generate an error.
     *  
     * This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
     *  
     * This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.
     * 
    **/
    public openapisdk.models.operations.GetErrorsIdResponse getErrorsId(openapisdk.models.operations.GetErrorsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/errors/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetErrorsIdResponse res = new openapisdk.models.operations.GetErrorsIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getEvents - Returns a stream of events that have occurred on the site.
     *  
     * The API considers the following "events":
     *  - posting a question
     *  - posting an answer
     *  - posting a comment
     *  - editing a post
     *  - creating a user
     * 
     *   
     * 
     *  
     * Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
     *  
     * It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
     *  
     * This method returns a list of events.
     * 
    **/
    public openapisdk.models.operations.GetEventsResponse getEvents(openapisdk.models.operations.GetEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/events");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetEventsResponse res = new openapisdk.models.operations.GetEventsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getFiltersCreate - Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
     *  
     * Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
     *  
     * If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
     *  
     * When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
     *  
     * It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
     *  
     * This method returns a single filter.
     * 
    **/
    public openapisdk.models.operations.GetFiltersCreateResponse getFiltersCreate(openapisdk.models.operations.GetFiltersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/filters/create");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFiltersCreateResponse res = new openapisdk.models.operations.GetFiltersCreateResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getFiltersFilters - Returns the fields included by the given filters, and the "safeness" of those filters.
     *  
     * It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
     *  
     * {filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
     *  
     * This method returns a list of filters.
     * 
    **/
    public openapisdk.models.operations.GetFiltersFiltersResponse getFiltersFilters(openapisdk.models.operations.GetFiltersFiltersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/filters/{filters}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFiltersFiltersResponse res = new openapisdk.models.operations.GetFiltersFiltersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getInbox - Returns a user's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetInboxResponse getInbox(openapisdk.models.operations.GetInboxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/inbox");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInboxResponse res = new openapisdk.models.operations.GetInboxResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getInboxUnread - Returns the unread items in a user's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetInboxUnreadResponse getInboxUnread(openapisdk.models.operations.GetInboxUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/inbox/unread");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInboxUnreadResponse res = new openapisdk.models.operations.GetInboxUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getInfo - Returns a collection of statistics about the site.
     *  
     * Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
     *  
     * This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
     *  
     * This method returns an info object.
     * 
    **/
    public openapisdk.models.operations.GetInfoResponse getInfo(openapisdk.models.operations.GetInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/info");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetInfoResponse res = new openapisdk.models.operations.GetInfoResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMe - Returns the user associated with the passed access_token.
     *  
     * This method returns a user.
     * 
    **/
    public openapisdk.models.operations.GetMeResponse getMe(openapisdk.models.operations.GetMeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeResponse res = new openapisdk.models.operations.GetMeResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeAnswers - Returns the answers owned by the user associated with the given access_token.
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetMeAnswersResponse getMeAnswers(openapisdk.models.operations.GetMeAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/answers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeAnswersResponse res = new openapisdk.models.operations.GetMeAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeAssociated - Returns all of a user's associated accounts, given an access_token for them.
     *  
     * This method returns a list of network users.
     * 
    **/
    public openapisdk.models.operations.GetMeAssociatedResponse getMeAssociated(openapisdk.models.operations.GetMeAssociatedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/associated");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeAssociatedResponse res = new openapisdk.models.operations.GetMeAssociatedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeBadges - Returns the badges earned by the user associated with the given access_token.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetMeBadgesResponse getMeBadges(openapisdk.models.operations.GetMeBadgesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/badges");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeBadgesResponse res = new openapisdk.models.operations.GetMeBadgesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeComments - Returns the comments owned by the user associated with the given access_token.
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetMeCommentsResponse getMeComments(openapisdk.models.operations.GetMeCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/comments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeCommentsResponse res = new openapisdk.models.operations.GetMeCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeCommentsToId - Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetMeCommentsToIdResponse getMeCommentsToId(openapisdk.models.operations.GetMeCommentsToIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/comments/{toId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeCommentsToIdResponse res = new openapisdk.models.operations.GetMeCommentsToIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeFavorites - Returns the questions favorites by the user associated with the given access_token.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeFavoritesResponse getMeFavorites(openapisdk.models.operations.GetMeFavoritesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/favorites");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeFavoritesResponse res = new openapisdk.models.operations.GetMeFavoritesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeInbox - Returns the user identified by access_token's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetMeInboxResponse getMeInbox(openapisdk.models.operations.GetMeInboxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/inbox");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeInboxResponse res = new openapisdk.models.operations.GetMeInboxResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeInboxUnread - Returns the unread items in the user identified by access_token's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetMeInboxUnreadResponse getMeInboxUnread(openapisdk.models.operations.GetMeInboxUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/inbox/unread");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeInboxUnreadResponse res = new openapisdk.models.operations.GetMeInboxUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeMentioned - Returns the comments mentioning the user associated with the given access_token.
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetMeMentionedResponse getMeMentioned(openapisdk.models.operations.GetMeMentionedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/mentioned");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeMentionedResponse res = new openapisdk.models.operations.GetMeMentionedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeMerges - Returns a record of merges that have occurred involving a user identified by an access_token.
     *  
     * This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
     *  
     * This is most useful when confirming that an account_id is in fact "new" to an application.
     *  
     * Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
     *  
     * Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
     *  
     * This method returns a list of account_merge.
     * 
    **/
    public openapisdk.models.operations.GetMeMergesResponse getMeMerges(openapisdk.models.operations.GetMeMergesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/merges");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeMergesResponse res = new openapisdk.models.operations.GetMeMergesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeNotifications - Returns a user's notifications, given an access_token.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetMeNotificationsResponse getMeNotifications(openapisdk.models.operations.GetMeNotificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/notifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeNotificationsResponse res = new openapisdk.models.operations.GetMeNotificationsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeNotificationsUnread - Returns a user's unread notifications, given an access_token.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetMeNotificationsUnreadResponse getMeNotificationsUnread(openapisdk.models.operations.GetMeNotificationsUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/notifications/unread");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeNotificationsUnreadResponse res = new openapisdk.models.operations.GetMeNotificationsUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMePrivileges - Returns the privileges the user identified by access_token has.
     *  
     * This method returns a list of privileges.
     * 
    **/
    public openapisdk.models.operations.GetMePrivilegesResponse getMePrivileges(openapisdk.models.operations.GetMePrivilegesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/privileges");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMePrivilegesResponse res = new openapisdk.models.operations.GetMePrivilegesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeQuestions - Returns the questions owned by the user associated with the given access_token.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeQuestionsResponse getMeQuestions(openapisdk.models.operations.GetMeQuestionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/questions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeQuestionsResponse res = new openapisdk.models.operations.GetMeQuestionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeQuestionsFeatured - Returns the questions that have active bounties offered by the user associated with the given access_token.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeQuestionsFeaturedResponse getMeQuestionsFeatured(openapisdk.models.operations.GetMeQuestionsFeaturedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/questions/featured");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeQuestionsFeaturedResponse res = new openapisdk.models.operations.GetMeQuestionsFeaturedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeQuestionsNoAnswers - Returns the questions owned by the user associated with the given access_token that have no answers.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeQuestionsNoAnswersResponse getMeQuestionsNoAnswers(openapisdk.models.operations.GetMeQuestionsNoAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/questions/no-answers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeQuestionsNoAnswersResponse res = new openapisdk.models.operations.GetMeQuestionsNoAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeQuestionsUnaccepted - Returns the questions owned by the user associated with the given access_token that have no accepted answer.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeQuestionsUnacceptedResponse getMeQuestionsUnaccepted(openapisdk.models.operations.GetMeQuestionsUnacceptedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/questions/unaccepted");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeQuestionsUnacceptedResponse res = new openapisdk.models.operations.GetMeQuestionsUnacceptedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeQuestionsUnanswered - Returns the questions owned by the user associated with the given access_token that are not considered answered.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeQuestionsUnansweredResponse getMeQuestionsUnanswered(openapisdk.models.operations.GetMeQuestionsUnansweredRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/questions/unanswered");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeQuestionsUnansweredResponse res = new openapisdk.models.operations.GetMeQuestionsUnansweredResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeReputation - Returns the reputation changed for the user associated with the given access_token.
     *  
     * This method returns a list of reputation changes.
     * 
    **/
    public openapisdk.models.operations.GetMeReputationResponse getMeReputation(openapisdk.models.operations.GetMeReputationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/reputation");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeReputationResponse res = new openapisdk.models.operations.GetMeReputationResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeReputationHistory - Returns user's public reputation history.
     *  
     * This method returns a list of reputation_history.
     * 
    **/
    public openapisdk.models.operations.GetMeReputationHistoryResponse getMeReputationHistory(openapisdk.models.operations.GetMeReputationHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/reputation-history");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeReputationHistoryResponse res = new openapisdk.models.operations.GetMeReputationHistoryResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeReputationHistoryFull - Returns user's full reputation history, including private events.
     *  
     *  This method requires an access_token, with a scope containing "private_info".
     * 
     *  
     * This method returns a list of reputation_history.
     * 
    **/
    public openapisdk.models.operations.GetMeReputationHistoryFullResponse getMeReputationHistoryFull(openapisdk.models.operations.GetMeReputationHistoryFullRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/reputation-history/full");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeReputationHistoryFullResponse res = new openapisdk.models.operations.GetMeReputationHistoryFullResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeSuggestedEdits - Returns the suggested edits the user identified by access_token has submitted.
     *  
     * This method returns a list of suggested-edits.
     * 
    **/
    public openapisdk.models.operations.GetMeSuggestedEditsResponse getMeSuggestedEdits(openapisdk.models.operations.GetMeSuggestedEditsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/suggested-edits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeSuggestedEditsResponse res = new openapisdk.models.operations.GetMeSuggestedEditsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTags - Returns the tags the user identified by the access_token passed is active in.
     *  
     * This method returns a list of tags.
     * 
    **/
    public openapisdk.models.operations.GetMeTagsResponse getMeTags(openapisdk.models.operations.GetMeTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/tags");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTagsResponse res = new openapisdk.models.operations.GetMeTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTagsTagsTopAnswers - Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetMeTagsTagsTopAnswersResponse getMeTagsTagsTopAnswers(openapisdk.models.operations.GetMeTagsTagsTopAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/tags/{tags}/top-answers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTagsTagsTopAnswersResponse res = new openapisdk.models.operations.GetMeTagsTagsTopAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTagsTagsTopQuestions - Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetMeTagsTagsTopQuestionsResponse getMeTagsTagsTopQuestions(openapisdk.models.operations.GetMeTagsTagsTopQuestionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/tags/{tags}/top-questions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTagsTagsTopQuestionsResponse res = new openapisdk.models.operations.GetMeTagsTagsTopQuestionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTimeline - Returns a subset of the actions the user identified by the passed access_token has taken on the site.
     *  
     * This method returns a list of user timeline objects.
     * 
    **/
    public openapisdk.models.operations.GetMeTimelineResponse getMeTimeline(openapisdk.models.operations.GetMeTimelineRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/timeline");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTimelineResponse res = new openapisdk.models.operations.GetMeTimelineResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTopAnswerTags - Returns the user identified by access_token's top 30 tags by answer score.
     *  
     * This method returns a list of top tag objects.
     * 
    **/
    public openapisdk.models.operations.GetMeTopAnswerTagsResponse getMeTopAnswerTags(openapisdk.models.operations.GetMeTopAnswerTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/top-answer-tags");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTopAnswerTagsResponse res = new openapisdk.models.operations.GetMeTopAnswerTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeTopQuestionTags - Returns the user identified by access_token's top 30 tags by question score.
     *  
     * This method returns a list of top tag objects.
     * 
    **/
    public openapisdk.models.operations.GetMeTopQuestionTagsResponse getMeTopQuestionTags(openapisdk.models.operations.GetMeTopQuestionTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/top-question-tags");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeTopQuestionTagsResponse res = new openapisdk.models.operations.GetMeTopQuestionTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getMeWritePermissions - Returns the write permissions a user has via the api, given an access token.
     *  
     * The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
     *  
     * This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
     *  
     * This method returns a list of write_permissions.
     * 
    **/
    public openapisdk.models.operations.GetMeWritePermissionsResponse getMeWritePermissions(openapisdk.models.operations.GetMeWritePermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/me/write-permissions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMeWritePermissionsResponse res = new openapisdk.models.operations.GetMeWritePermissionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getNotifications - Returns a user's notifications.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetNotificationsResponse getNotifications(openapisdk.models.operations.GetNotificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNotificationsResponse res = new openapisdk.models.operations.GetNotificationsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getNotificationsUnread - Returns a user's unread notifications.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetNotificationsUnreadResponse getNotificationsUnread(openapisdk.models.operations.GetNotificationsUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/notifications/unread");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNotificationsUnreadResponse res = new openapisdk.models.operations.GetNotificationsUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPosts - Fetches all posts (questions and answers) on the site.
     *  
     * In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
     *  
     * Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
     *  
     * The sorts accepted by this method operate on the follow fields of the post object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of posts.
     * 
    **/
    public openapisdk.models.operations.GetPostsResponse getPosts(openapisdk.models.operations.GetPostsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPostsResponse res = new openapisdk.models.operations.GetPostsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPostsIds - Fetches a set of posts by ids.
     *  
     * This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
     *  
     * The sorts accepted by this method operate on the follow fields of the post object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of posts.
     * 
    **/
    public openapisdk.models.operations.GetPostsIdsResponse getPostsIds(openapisdk.models.operations.GetPostsIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPostsIdsResponse res = new openapisdk.models.operations.GetPostsIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPostsIdsComments - Gets the comments on the posts identified in ids, regardless of the type of the posts.
     *  
     * This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetPostsIdsCommentsResponse getPostsIdsComments(openapisdk.models.operations.GetPostsIdsCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts/{ids}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPostsIdsCommentsResponse res = new openapisdk.models.operations.GetPostsIdsCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPostsIdsRevisions - Returns edit revisions for the posts identified in ids.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
     *  
     * This method returns a list of revisions.
     * 
    **/
    public openapisdk.models.operations.GetPostsIdsRevisionsResponse getPostsIdsRevisions(openapisdk.models.operations.GetPostsIdsRevisionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts/{ids}/revisions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPostsIdsRevisionsResponse res = new openapisdk.models.operations.GetPostsIdsRevisionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPostsIdsSuggestedEdits - Returns suggsted edits on the posts identified in ids.
     *  
     *  - creation - creation_date
     *  - approval - approval_date
     *  - rejection - rejection_date
     *   creation is the default sort.
     *  
     *  {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
     * 
     *  
     * This method returns a list of suggested-edits.
     * 
    **/
    public openapisdk.models.operations.GetPostsIdsSuggestedEditsResponse getPostsIdsSuggestedEdits(openapisdk.models.operations.GetPostsIdsSuggestedEditsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts/{ids}/suggested-edits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPostsIdsSuggestedEditsResponse res = new openapisdk.models.operations.GetPostsIdsSuggestedEditsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getPrivileges - Returns the earnable privileges on a site.
     *  
     * Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
     *  
     * While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
     *  
     * This method returns a list of privileges.
     * 
    **/
    public openapisdk.models.operations.GetPrivilegesResponse getPrivileges(openapisdk.models.operations.GetPrivilegesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/privileges");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPrivilegesResponse res = new openapisdk.models.operations.GetPrivilegesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestions - Gets all the questions on the site.
     *  
     * This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
     *  
     * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - hot - by the formula ordering the hot tab Does not accept min or max
     *  - week - by the formula ordering the week tab Does not accept min or max
     *  - month - by the formula ordering the month tab Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsResponse getQuestions(openapisdk.models.operations.GetQuestionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsResponse res = new openapisdk.models.operations.GetQuestionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsFeatured - Returns all the questions with active bounties in the system.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsFeaturedResponse getQuestionsFeatured(openapisdk.models.operations.GetQuestionsFeaturedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/featured");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsFeaturedResponse res = new openapisdk.models.operations.GetQuestionsFeaturedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsNoAnswers - Returns questions which have received no answers.
     *  
     * Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
     *  
     * This method corresponds roughly with the this site tab.
     *  
     * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsNoAnswersResponse getQuestionsNoAnswers(openapisdk.models.operations.GetQuestionsNoAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/no-answers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsNoAnswersResponse res = new openapisdk.models.operations.GetQuestionsNoAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsUnanswered - Returns questions the site considers to be unanswered.
     *  
     * Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
     *  
     * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
     *  
     * Compare with /questions/no-answers.
     *  
     * This method corresponds roughly with the unanswered tab.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsUnansweredResponse getQuestionsUnanswered(openapisdk.models.operations.GetQuestionsUnansweredRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/unanswered");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsUnansweredResponse res = new openapisdk.models.operations.GetQuestionsUnansweredResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIds - Returns the questions identified in {ids}.
     *  
     * This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsResponse getQuestionsIds(openapisdk.models.operations.GetQuestionsIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsResponse res = new openapisdk.models.operations.GetQuestionsIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIdsAnswers - Gets the answers to a set of questions identified in id.
     *  
     * This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the answer object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsAnswersResponse getQuestionsIdsAnswers(openapisdk.models.operations.GetQuestionsIdsAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}/answers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsAnswersResponse res = new openapisdk.models.operations.GetQuestionsIdsAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIdsComments - Gets the comments on a question.
     *  
     * If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsCommentsResponse getQuestionsIdsComments(openapisdk.models.operations.GetQuestionsIdsCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsCommentsResponse res = new openapisdk.models.operations.GetQuestionsIdsCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIdsLinked - Gets questions which link to those questions identified in {ids}.
     *  
     * This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
     *  
     * A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsLinkedResponse getQuestionsIdsLinked(openapisdk.models.operations.GetQuestionsIdsLinkedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}/linked", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsLinkedResponse res = new openapisdk.models.operations.GetQuestionsIdsLinkedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIdsRelated - Returns questions that the site considers related to those identified in {ids}.
     *  
     * The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsRelatedResponse getQuestionsIdsRelated(openapisdk.models.operations.GetQuestionsIdsRelatedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}/related", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsRelatedResponse res = new openapisdk.models.operations.GetQuestionsIdsRelatedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getQuestionsIdsTimeline - Returns a subset of the events that have happened to the questions identified in id.
     *  
     * This provides data similar to that found on a question's timeline page.
     *  
     * Voting data is scrubbed to deter inferencing of voter identity.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
     *  
     * This method returns a list of question timeline events.
     * 
    **/
    public openapisdk.models.operations.GetQuestionsIdsTimelineResponse getQuestionsIdsTimeline(openapisdk.models.operations.GetQuestionsIdsTimelineRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/questions/{ids}/timeline", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetQuestionsIdsTimelineResponse res = new openapisdk.models.operations.GetQuestionsIdsTimelineResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getRevisionsIds - Returns edit revisions identified by ids in {ids}.
     *  
     * {ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
     *  
     * This method returns a list of revisions.
     * 
    **/
    public openapisdk.models.operations.GetRevisionsIdsResponse getRevisionsIds(openapisdk.models.operations.GetRevisionsIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/revisions/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetRevisionsIdsResponse res = new openapisdk.models.operations.GetRevisionsIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSearch - Searches a site for any questions which fit the given criteria.
     *  
     * This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
     *  
     * At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
     *  
     * tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - relevance - matches the relevance tab on the site itself Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetSearchResponse getSearch(openapisdk.models.operations.GetSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSearchResponse res = new openapisdk.models.operations.GetSearchResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSearchAdvanced - Searches a site for any questions which fit the given criteria.
     *  
     * Search criteria are expressed using the following parameters:
     *   - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
     *  - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
     *  - answers - the minimum number of answers returned questions must have.
     *  - body - text which must appear in returned questions' bodies.
     *  - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
     *  - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
     *  - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
     *  - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
     *  - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
     *  - title - text which must appear in returned questions' titles.
     *  - user - the id of the user who must own the questions returned.
     *  - url - a url which must be contained in a post, may include a wildcard.
     *  - views - the minimum number of views returned questions must have.
     *  - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.
     * 
     *   
     * At least one additional parameter must be set if nottagged is set, for performance reasons.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - relevance - matches the relevance tab on the site itself Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetSearchAdvancedResponse getSearchAdvanced(openapisdk.models.operations.GetSearchAdvancedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/advanced");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSearchAdvancedResponse res = new openapisdk.models.operations.GetSearchAdvancedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSimilar - Returns questions which are similar to a hypothetical one based on a title and tag combination.
     *  
     * This method is roughly equivalent to a site's related questions suggestion on the ask page.
     *  
     * This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
     *  
     * Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
     *  
     * If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetSimilarResponse getSimilar(openapisdk.models.operations.GetSimilarRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/similar");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSimilarResponse res = new openapisdk.models.operations.GetSimilarResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSites - Returns all sites in the network.
     *  
     * This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
     *  
     * The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
     *  
     * This method returns a list of sites.
     * 
    **/
    public openapisdk.models.operations.GetSitesResponse getSites(openapisdk.models.operations.GetSitesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/sites");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSitesResponse res = new openapisdk.models.operations.GetSitesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSuggestedEdits - Returns all the suggested edits in the systems.
     *  
     * This method returns a list of suggested-edits.
     *  
     * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
     *  - creation - creation_date
     *  - approval - approval_date Does not return unapproved suggested_edits
     *  - rejection - rejection_date Does not return unrejected suggested_edits
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
    **/
    public openapisdk.models.operations.GetSuggestedEditsResponse getSuggestedEdits(openapisdk.models.operations.GetSuggestedEditsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/suggested-edits");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSuggestedEditsResponse res = new openapisdk.models.operations.GetSuggestedEditsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getSuggestedEditsIds - Returns suggested edits identified in ids.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
     *  - creation - creation_date
     *  - approval - approval_date Does not return unapproved suggested_edits
     *  - rejection - rejection_date Does not return unrejected suggested_edits
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of suggested-edits.
     * 
    **/
    public openapisdk.models.operations.GetSuggestedEditsIdsResponse getSuggestedEditsIds(openapisdk.models.operations.GetSuggestedEditsIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/suggested-edits/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSuggestedEditsIdsResponse res = new openapisdk.models.operations.GetSuggestedEditsIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTags - Returns the tags found on a site.
     *  
     * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
     *  
     * This method returns a list of tags.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag object:
     *  - popular - count
     *  - activity - the creation_date of the last question asked with the tag
     *  - name - name
     *   popular is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
    **/
    public openapisdk.models.operations.GetTagsResponse getTags(openapisdk.models.operations.GetTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsResponse res = new openapisdk.models.operations.GetTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsModeratorOnly - Returns the tags found on a site that only moderators can use.
     *  
     * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
     *  
     * This method returns a list of tags.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag object:
     *  - popular - count
     *  - activity - the creation_date of the last question asked with the tag
     *  - name - name
     *   popular is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
    **/
    public openapisdk.models.operations.GetTagsModeratorOnlyResponse getTagsModeratorOnly(openapisdk.models.operations.GetTagsModeratorOnlyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/moderator-only");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsModeratorOnlyResponse res = new openapisdk.models.operations.GetTagsModeratorOnlyResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsRequired - Returns the tags found on a site that fulfill required tag constraints on questions.
     *  
     * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
     *  
     * This method returns a list of tags.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag object:
     *  - popular - count
     *  - activity - the creation_date of the last question asked with the tag
     *  - name - name
     *   popular is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
    **/
    public openapisdk.models.operations.GetTagsRequiredResponse getTagsRequired(openapisdk.models.operations.GetTagsRequiredRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/required");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsRequiredResponse res = new openapisdk.models.operations.GetTagsRequiredResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsSynonyms - Returns all tag synonyms found a site.
     *  
     * When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag_synonym object:
     *  - creation - creation_date
     *  - applied - applied_count
     *  - activity - last_applied_date
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of tag_synonyms.
     * 
    **/
    public openapisdk.models.operations.GetTagsSynonymsResponse getTagsSynonyms(openapisdk.models.operations.GetTagsSynonymsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/synonyms");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsSynonymsResponse res = new openapisdk.models.operations.GetTagsSynonymsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagsFaq - Returns the frequently asked questions for the given set of tags in {tags}.
     *  
     * For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
     *  
     * {tags} can contain up to 5 individual tags per request.
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagsFaqResponse getTagsTagsFaq(openapisdk.models.operations.GetTagsTagsFaqRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tags}/faq", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagsFaqResponse res = new openapisdk.models.operations.GetTagsTagsFaqResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagsInfo - Returns tag objects representing the tags in {tags} found on the site.
     *  
     * This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
     *  
     * This method returns a list of tags.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag object:
     *  - popular - count
     *  - activity - the creation_date of the last question asked with the tag
     *  - name - name
     *   popular is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagsInfoResponse getTagsTagsInfo(openapisdk.models.operations.GetTagsTagsInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tags}/info", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagsInfoResponse res = new openapisdk.models.operations.GetTagsTagsInfoResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagsRelated - Returns the tags that are most related to those in {tags}.
     *  
     * Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
     *  
     * count on tag objects returned is the number of question with that tag that also share all those in {tags}.
     *  
     * {tags} can contain up to 4 individual tags per request.
     *  
     * This method returns a list of tags.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagsRelatedResponse getTagsTagsRelated(openapisdk.models.operations.GetTagsTagsRelatedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tags}/related", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagsRelatedResponse res = new openapisdk.models.operations.GetTagsTagsRelatedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagsSynonyms - Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
     *  
     * {tags} can contain up to 20 individual tags per request.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag_synonym object:
     *  - creation - creation_date
     *  - applied - applied_count
     *  - activity - last_applied_date
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of tag synonyms.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagsSynonymsResponse getTagsTagsSynonyms(openapisdk.models.operations.GetTagsTagsSynonymsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tags}/synonyms", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagsSynonymsResponse res = new openapisdk.models.operations.GetTagsTagsSynonymsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagsWikis - Returns the wikis that go with the given set of tags in {tags}.
     *  
     * Be aware that not all tags have wikis.
     *  
     * {tags} can contain up to 20 individual tags per request.
     *  
     * This method returns a list of tag wikis.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagsWikisResponse getTagsTagsWikis(openapisdk.models.operations.GetTagsTagsWikisRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tags}/wikis", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagsWikisResponse res = new openapisdk.models.operations.GetTagsTagsWikisResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagTopAnswerersPeriod - Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
     *  
     * This is a view onto the data presented on the tag info page on the sites.
     *  
     * This method returns a list of tag score objects.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagTopAnswerersPeriodResponse getTagsTagTopAnswerersPeriod(openapisdk.models.operations.GetTagsTagTopAnswerersPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tag}/top-answerers/{period}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagTopAnswerersPeriodResponse res = new openapisdk.models.operations.GetTagsTagTopAnswerersPeriodResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getTagsTagTopAskersPeriod - Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
     *  
     * This is a view onto the data presented on the tag info page on the sites.
     *  
     * This method returns a list of tag score objects.
     * 
    **/
    public openapisdk.models.operations.GetTagsTagTopAskersPeriodResponse getTagsTagTopAskersPeriod(openapisdk.models.operations.GetTagsTagTopAskersPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/tags/{tag}/top-askers/{period}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTagsTagTopAskersPeriodResponse res = new openapisdk.models.operations.GetTagsTagTopAskersPeriodResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsers - Returns all users on a site.
     *  
     * This method returns a list of users.
     *  
     * The sorts accepted by this method operate on the follow fields of the user object:
     *  - reputation - reputation
     *  - creation - creation_date
     *  - name - display_name
     *  - modified - last_modified_date
     *   reputation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".
     * 
    **/
    public openapisdk.models.operations.GetUsersResponse getUsers(openapisdk.models.operations.GetUsersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersResponse res = new openapisdk.models.operations.GetUsersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersModerators - Gets those users on a site who can exercise moderation powers.
     *  
     * Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
     *  
     * The sorts accepted by this method operate on the follow fields of the user object:
     *  - reputation - reputation
     *  - creation - creation_date
     *  - name - display_name
     *  - modified - last_modified_date
     *   reputation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of users.
     * 
    **/
    public openapisdk.models.operations.GetUsersModeratorsResponse getUsersModerators(openapisdk.models.operations.GetUsersModeratorsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/moderators");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersModeratorsResponse res = new openapisdk.models.operations.GetUsersModeratorsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersModeratorsElected - Returns those users on a site who both have moderator powers, and were actually elected.
     *  
     * This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
     *  
     * The sorts accepted by this method operate on the follow fields of the user object:
     *  - reputation - reputation
     *  - creation - creation_date
     *  - name - display_name
     *  - modified - last_modified_date
     *   reputation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of users.
     * 
    **/
    public openapisdk.models.operations.GetUsersModeratorsElectedResponse getUsersModeratorsElected(openapisdk.models.operations.GetUsersModeratorsElectedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/moderators/elected");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersModeratorsElectedResponse res = new openapisdk.models.operations.GetUsersModeratorsElectedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIds - Gets the users identified in ids in {ids}.
     *  
     * Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the user object:
     *  - reputation - reputation
     *  - creation - creation_date
     *  - name - display_name
     *  - modified - last_modified_date
     *   reputation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of users.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsResponse getUsersIds(openapisdk.models.operations.GetUsersIdsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsResponse res = new openapisdk.models.operations.GetUsersIdsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsAnswers - Returns the answers the users in {ids} have posted.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the answer object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsAnswersResponse getUsersIdsAnswers(openapisdk.models.operations.GetUsersIdsAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/answers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsAnswersResponse res = new openapisdk.models.operations.GetUsersIdsAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsAssociated - Returns all of a user's associated accounts, given their account_ids in {ids}.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
     *  
     * This method returns a list of network_users.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsAssociatedResponse getUsersIdsAssociated(openapisdk.models.operations.GetUsersIdsAssociatedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/associated", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsAssociatedResponse res = new openapisdk.models.operations.GetUsersIdsAssociatedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsBadges - Get the badges the users in {ids} have earned.
     *  
     * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
     *  
     * This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
     *  
     * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
     *  
     * rank is the default sort.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of badges.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsBadgesResponse getUsersIdsBadges(openapisdk.models.operations.GetUsersIdsBadgesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/badges", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsBadgesResponse res = new openapisdk.models.operations.GetUsersIdsBadgesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsComments - Get the comments posted by users in {ids}.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsCommentsResponse getUsersIdsComments(openapisdk.models.operations.GetUsersIdsCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsCommentsResponse res = new openapisdk.models.operations.GetUsersIdsCommentsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsCommentsToid - Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
     *  
     * This method is useful for extracting conversations, especially over time or across multiple posts.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsCommentsToidResponse getUsersIdsCommentsToid(openapisdk.models.operations.GetUsersIdsCommentsToidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/comments/{toid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsCommentsToidResponse res = new openapisdk.models.operations.GetUsersIdsCommentsToidResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsFavorites - Get the questions that users in {ids} have favorited.
     *  
     * This method is effectively a view onto a user's favorites tab.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *  - added - when the user favorited the question
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsFavoritesResponse getUsersIdsFavorites(openapisdk.models.operations.GetUsersIdsFavoritesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/favorites", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsFavoritesResponse res = new openapisdk.models.operations.GetUsersIdsFavoritesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsMentioned - Gets all the comments that the users in {ids} were mentioned in.
     *  
     * Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the comment object:
     *  - creation - creation_date
     *  - votes - score
     *   It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of comments.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsMentionedResponse getUsersIdsMentioned(openapisdk.models.operations.GetUsersIdsMentionedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/mentioned", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsMentionedResponse res = new openapisdk.models.operations.GetUsersIdsMentionedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsMerges - Returns a record of merges that have occurred involving the passed account ids.
     *  
     * This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
     *  
     * This is most useful when confirming that an account_id is in fact "new" to an application.
     *  
     * Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
     *  
     * Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
     *  
     * This method returns a list of account_merge.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsMergesResponse getUsersIdsMerges(openapisdk.models.operations.GetUsersIdsMergesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/merges", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsMergesResponse res = new openapisdk.models.operations.GetUsersIdsMergesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsQuestions - Gets the questions asked by the users in {ids}.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsQuestionsResponse getUsersIdsQuestions(openapisdk.models.operations.GetUsersIdsQuestionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/questions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsQuestionsResponse res = new openapisdk.models.operations.GetUsersIdsQuestionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsQuestionsFeatured - Gets the questions on which the users in {ids} have active bounties.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsQuestionsFeaturedResponse getUsersIdsQuestionsFeatured(openapisdk.models.operations.GetUsersIdsQuestionsFeaturedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/questions/featured", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsQuestionsFeaturedResponse res = new openapisdk.models.operations.GetUsersIdsQuestionsFeaturedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsQuestionsNoAnswers - Gets the questions asked by the users in {ids} which have no answers.
     *  
     * Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsQuestionsNoAnswersResponse getUsersIdsQuestionsNoAnswers(openapisdk.models.operations.GetUsersIdsQuestionsNoAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/questions/no-answers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsQuestionsNoAnswersResponse res = new openapisdk.models.operations.GetUsersIdsQuestionsNoAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsQuestionsUnaccepted - Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
     *  
     * Questions returned by this method have answers, but the owner has not opted to accept any of them.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsQuestionsUnacceptedResponse getUsersIdsQuestionsUnaccepted(openapisdk.models.operations.GetUsersIdsQuestionsUnacceptedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/questions/unaccepted", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsQuestionsUnacceptedResponse res = new openapisdk.models.operations.GetUsersIdsQuestionsUnacceptedResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsQuestionsUnanswered - Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
     *  
     * These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
     *  
     * To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsQuestionsUnansweredResponse getUsersIdsQuestionsUnanswered(openapisdk.models.operations.GetUsersIdsQuestionsUnansweredRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/questions/unanswered", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsQuestionsUnansweredResponse res = new openapisdk.models.operations.GetUsersIdsQuestionsUnansweredResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsReputation - Gets a subset of the reputation changes for users in {ids}.
     *  
     * Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of reputation objects.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsReputationResponse getUsersIdsReputation(openapisdk.models.operations.GetUsersIdsReputationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/reputation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsReputationResponse res = new openapisdk.models.operations.GetUsersIdsReputationResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsReputationHistory - Returns users' public reputation history.
     *  
     * This method returns a list of reputation_history.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsReputationHistoryResponse getUsersIdsReputationHistory(openapisdk.models.operations.GetUsersIdsReputationHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/reputation-history", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsReputationHistoryResponse res = new openapisdk.models.operations.GetUsersIdsReputationHistoryResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsSuggestedEdits - Returns the suggested edits a users in {ids} have submitted.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
     *  - creation - creation_date
     *  - approval - approval_date Does not return unapproved suggested_edits
     *  - rejection - rejection_date Does not return unrejected suggested_edits
     *   creation is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of suggested-edits.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsSuggestedEditsResponse getUsersIdsSuggestedEdits(openapisdk.models.operations.GetUsersIdsSuggestedEditsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/suggested-edits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsSuggestedEditsResponse res = new openapisdk.models.operations.GetUsersIdsSuggestedEditsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsTags - Returns the tags the users identified in {ids} have been active in.
     *  
     * This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * The sorts accepted by this method operate on the follow fields of the tag object:
     *  - popular - count
     *  - activity - the creation_date of the last question asked with the tag
     *  - name - name
     *   popular is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of tags.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsTagsResponse getUsersIdsTags(openapisdk.models.operations.GetUsersIdsTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsTagsResponse res = new openapisdk.models.operations.GetUsersIdsTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdsTimeline - Returns a subset of the actions the users in {ids} have taken on the site.
     *  
     * This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
     *  
     * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of user timeline objects.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdsTimelineResponse getUsersIdsTimeline(openapisdk.models.operations.GetUsersIdsTimelineRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{ids}/timeline", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdsTimelineResponse res = new openapisdk.models.operations.GetUsersIdsTimelineResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdInbox - Returns a user's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdInboxResponse getUsersIdInbox(openapisdk.models.operations.GetUsersIdInboxRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/inbox", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdInboxResponse res = new openapisdk.models.operations.GetUsersIdInboxResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdInboxUnread - Returns the unread items in a user's inbox.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of inbox items.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdInboxUnreadResponse getUsersIdInboxUnread(openapisdk.models.operations.GetUsersIdInboxUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/inbox/unread", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdInboxUnreadResponse res = new openapisdk.models.operations.GetUsersIdInboxUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdNotifications - Returns a user's notifications.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdNotificationsResponse getUsersIdNotifications(openapisdk.models.operations.GetUsersIdNotificationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/notifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdNotificationsResponse res = new openapisdk.models.operations.GetUsersIdNotificationsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdNotificationsUnread - Returns a user's unread notifications.
     *  
     * This method requires an access_token, with a scope containing "read_inbox".
     *  
     * This method returns a list of notifications.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdNotificationsUnreadResponse getUsersIdNotificationsUnread(openapisdk.models.operations.GetUsersIdNotificationsUnreadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/notifications/unread", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdNotificationsUnreadResponse res = new openapisdk.models.operations.GetUsersIdNotificationsUnreadResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdPrivileges - Returns the privileges a user has.
     *  
     * Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
     *  
     * {id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of privileges.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdPrivilegesResponse getUsersIdPrivileges(openapisdk.models.operations.GetUsersIdPrivilegesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/privileges", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdPrivilegesResponse res = new openapisdk.models.operations.GetUsersIdPrivilegesResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdReputationHistoryFull - Returns a user's full reputation history, including private events.
     *  
     * This method requires an access_token, with a scope containing "private_info".
     *  
     * This method returns a list of reputation_history.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdReputationHistoryFullResponse getUsersIdReputationHistoryFull(openapisdk.models.operations.GetUsersIdReputationHistoryFullRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/reputation-history/full", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdReputationHistoryFullResponse res = new openapisdk.models.operations.GetUsersIdReputationHistoryFullResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdTagsTagsTopAnswers - Returns the top 30 answers a user has posted in response to questions with the given tags.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
     *  
     * The sorts accepted by this method operate on the follow fields of the answer object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of answers.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdTagsTagsTopAnswersResponse getUsersIdTagsTagsTopAnswers(openapisdk.models.operations.GetUsersIdTagsTagsTopAnswersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/tags/{tags}/top-answers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdTagsTagsTopAnswersResponse res = new openapisdk.models.operations.GetUsersIdTagsTagsTopAnswersResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdTagsTagsTopQuestions - Returns the top 30 questions a user has asked with the given tags.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
     *  
     * The sorts accepted by this method operate on the follow fields of the question object:
     *  - activity - last_activity_date
     *  - creation - creation_date
     *  - votes - score
     *   activity is the default sort.
     *  
     *  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
     * 
     *  
     * This method returns a list of questions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdTagsTagsTopQuestionsResponse getUsersIdTagsTagsTopQuestions(openapisdk.models.operations.GetUsersIdTagsTagsTopQuestionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/tags/{tags}/top-questions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdTagsTagsTopQuestionsResponse res = new openapisdk.models.operations.GetUsersIdTagsTagsTopQuestionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdTopAnswerTags - Returns a single user's top tags by answer score.
     *  
     * This a subset of the data returned on a user's tags tab.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of top_tag objects.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdTopAnswerTagsResponse getUsersIdTopAnswerTags(openapisdk.models.operations.GetUsersIdTopAnswerTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/top-answer-tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdTopAnswerTagsResponse res = new openapisdk.models.operations.GetUsersIdTopAnswerTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdTopQuestionTags - Returns a single user's top tags by question score.
     *  
     * This a subset of the data returned on a user's tags tab.
     *  
     * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
     *  
     * This method returns a list of top_tag objects.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdTopQuestionTagsResponse getUsersIdTopQuestionTags(openapisdk.models.operations.GetUsersIdTopQuestionTagsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/top-question-tags", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdTopQuestionTagsResponse res = new openapisdk.models.operations.GetUsersIdTopQuestionTagsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * getUsersIdWritePermissions - Returns the write permissions a user has via the api.
     *  
     * The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
     *  
     * This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
     *  
     * This method returns a list of write_permissions.
     * 
    **/
    public openapisdk.models.operations.GetUsersIdWritePermissionsResponse getUsersIdWritePermissions(openapisdk.models.operations.GetUsersIdWritePermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{id}/write-permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersIdWritePermissionsResponse res = new openapisdk.models.operations.GetUsersIdWritePermissionsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * postCommentsIdDelete - Deletes a comment.
     *  
     * Use an access_token with write_access to delete a comment.
     *  
     * In practice, this method will never return an object.
     * 
    **/
    public openapisdk.models.operations.PostCommentsIdDeleteResponse postCommentsIdDelete(openapisdk.models.operations.PostCommentsIdDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/comments/{id}/delete", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCommentsIdDeleteResponse res = new openapisdk.models.operations.PostCommentsIdDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * postCommentsIdEdit - Edit an existing comment.
     *  
     * Use an access_token with write_access to edit an existing comment.
     *  
     * This method return the created comment.
     * 
    **/
    public openapisdk.models.operations.PostCommentsIdEditResponse postCommentsIdEdit(openapisdk.models.operations.PostCommentsIdEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/comments/{id}/edit", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCommentsIdEditResponse res = new openapisdk.models.operations.PostCommentsIdEditResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
	
    /**
     * postPostsIdCommentsAdd - Create a new comment.
     *  
     * Use an access_token with write_access to create a new comment on a post.
     *  
     * This method returns the created comment.
     * 
    **/
    public openapisdk.models.operations.PostPostsIdCommentsAddResponse postPostsIdCommentsAdd(openapisdk.models.operations.PostPostsIdCommentsAddRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/posts/{id}/comments/add", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPostsIdCommentsAddResponse res = new openapisdk.models.operations.PostPostsIdCommentsAddResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 402) {
        }
        else if (httpRes.statusCode() == 403) {
        }
        else if (httpRes.statusCode() == 404) {
        }
        else if (httpRes.statusCode() == 405) {
        }
        else if (httpRes.statusCode() == 406) {
        }
        else if (httpRes.statusCode() == 500) {
        }
        else if (httpRes.statusCode() == 502) {
        }
        else if (httpRes.statusCode() == 503) {
        }

        return res;
    }
	
}