package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Bidders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Bidders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * realtimebiddingBiddersCreativesWatch - Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersCreativesWatchResponse realtimebiddingBiddersCreativesWatch(openapisdk.models.operations.RealtimebiddingBiddersCreativesWatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/creatives:watch", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersCreativesWatchResponse res = new openapisdk.models.operations.RealtimebiddingBiddersCreativesWatchResponse() {{
            watchCreativesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.WatchCreativesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.WatchCreativesResponse.class);
                res.watchCreativesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersEndpointsList - Lists all the bidder's endpoints.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersEndpointsListResponse realtimebiddingBiddersEndpointsList(openapisdk.models.operations.RealtimebiddingBiddersEndpointsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/endpoints", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersEndpointsListResponse res = new openapisdk.models.operations.RealtimebiddingBiddersEndpointsListResponse() {{
            listEndpointsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListEndpointsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListEndpointsResponse.class);
                res.listEndpointsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersList - Lists all the bidder accounts that belong to the caller.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersListResponse realtimebiddingBiddersList(openapisdk.models.operations.RealtimebiddingBiddersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/bidders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersListResponse res = new openapisdk.models.operations.RealtimebiddingBiddersListResponse() {{
            listBiddersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListBiddersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListBiddersResponse.class);
                res.listBiddersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsActivate - Activates a pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse realtimebiddingBiddersPretargetingConfigsActivate(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:activate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsActivateResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedApps - Adds targeted apps to the pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse realtimebiddingBiddersPretargetingConfigsAddTargetedApps(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:addTargetedApps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedAppsResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers - Adds targeted publishers to the pretargeting config.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse realtimebiddingBiddersPretargetingConfigsAddTargetedPublishers(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:addTargetedPublishers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedPublishersResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsAddTargetedSites - Adds targeted sites to the pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse realtimebiddingBiddersPretargetingConfigsAddTargetedSites(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:addTargetedSites", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsAddTargetedSitesResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsCreate - Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse realtimebiddingBiddersPretargetingConfigsCreate(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/pretargetingConfigs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsCreateResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsDelete - Deletes a pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse realtimebiddingBiddersPretargetingConfigsDelete(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsList - Lists all pretargeting configurations for a single bidder.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsListResponse realtimebiddingBiddersPretargetingConfigsList(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/pretargetingConfigs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsListResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsListResponse() {{
            listPretargetingConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPretargetingConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPretargetingConfigsResponse.class);
                res.listPretargetingConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps - Removes targeted apps from the pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse realtimebiddingBiddersPretargetingConfigsRemoveTargetedApps(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:removeTargetedApps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedAppsResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers - Removes targeted publishers from the pretargeting config.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse realtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishers(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:removeTargetedPublishers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedPublishersResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites - Removes targeted sites from the pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse realtimebiddingBiddersPretargetingConfigsRemoveTargetedSites(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{pretargetingConfig}:removeTargetedSites", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsRemoveTargetedSitesResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPretargetingConfigsSuspend - Suspends a pretargeting configuration.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse realtimebiddingBiddersPretargetingConfigsSuspend(openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:suspend", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPretargetingConfigsSuspendResponse() {{
            pretargetingConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PretargetingConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PretargetingConfig.class);
                res.pretargetingConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPublisherConnectionsBatchApprove - Batch approves multiple publisher connections.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse realtimebiddingBiddersPublisherConnectionsBatchApprove(openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/publisherConnections:batchApprove", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchApproveResponse() {{
            batchApprovePublisherConnectionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BatchApprovePublisherConnectionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BatchApprovePublisherConnectionsResponse.class);
                res.batchApprovePublisherConnectionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPublisherConnectionsBatchReject - Batch rejects multiple publisher connections.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse realtimebiddingBiddersPublisherConnectionsBatchReject(openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/publisherConnections:batchReject", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsBatchRejectResponse() {{
            batchRejectPublisherConnectionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BatchRejectPublisherConnectionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BatchRejectPublisherConnectionsResponse.class);
                res.batchRejectPublisherConnectionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * realtimebiddingBiddersPublisherConnectionsList - Lists publisher connections for a given bidder.
    **/
    public openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsListResponse realtimebiddingBiddersPublisherConnectionsList(openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/publisherConnections", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsListResponse res = new openapisdk.models.operations.RealtimebiddingBiddersPublisherConnectionsListResponse() {{
            listPublisherConnectionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPublisherConnectionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPublisherConnectionsResponse.class);
                res.listPublisherConnectionsResponse = out;
            }
        }

        return res;
    }
	
}