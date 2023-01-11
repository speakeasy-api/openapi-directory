package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import org.apache.http.NameValuePair;

public class StripeGatewayProcessPaymentsAndRefunds {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public StripeGatewayProcessPaymentsAndRefunds(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId - Disconnects a developer's Stripe account
     *
     * 
     * - Results are returned for the market provided within the basic authentication credentials
     * 
    **/
    public openapisdk.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse deleteStripeGatewayDeveloperDeveloperIdAccountsStripeId(openapisdk.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/developer/{developerId}/accounts/{stripeId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse res = new openapisdk.models.operations.DeleteStripeGatewayDeveloperDeveloperIdAccountsStripeIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteStripeGatewayUserUserIdCardsCardId - Removes a credit card for a user
    **/
    public openapisdk.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse deleteStripeGatewayUserUserIdCardsCardId(openapisdk.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/user/{userId}/cards/{cardId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse res = new openapisdk.models.operations.DeleteStripeGatewayUserUserIdCardsCardIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStripeGatewayDeveloperDeveloperIdAccounts - Returns a developers connected Stripe accounts
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * 
    **/
    public openapisdk.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse getStripeGatewayDeveloperDeveloperIdAccounts(openapisdk.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/developer/{developerId}/accounts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse res = new openapisdk.models.operations.GetStripeGatewayDeveloperDeveloperIdAccountsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStripeGatewayUserUserIdCards - Returns credit cards for this user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * 
    **/
    public openapisdk.models.operations.GetStripeGatewayUserUserIdCardsResponse getStripeGatewayUserUserIdCards(openapisdk.models.operations.GetStripeGatewayUserUserIdCardsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/user/{userId}/cards", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetStripeGatewayUserUserIdCardsResponse res = new openapisdk.models.operations.GetStripeGatewayUserUserIdCardsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postStripeGatewayDeveloperDeveloperIdAccounts - Generate a temporary URL to allow a developer to connect their Stripe account
     *
     * - Results are returned for the market provided within the basic authentication credentials 
     * - The URL generated by this method is only valid for 48 hours.
     * 
    **/
    public openapisdk.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse postStripeGatewayDeveloperDeveloperIdAccounts(openapisdk.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/developer/{developerId}/accounts", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse res = new openapisdk.models.operations.PostStripeGatewayDeveloperDeveloperIdAccountsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postStripeGatewayUserUserIdCards - Adds credit card for this user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     * 
    **/
    public openapisdk.models.operations.PostStripeGatewayUserUserIdCardsResponse postStripeGatewayUserUserIdCards(openapisdk.models.operations.PostStripeGatewayUserUserIdCardsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/user/{userId}/cards", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostStripeGatewayUserUserIdCardsResponse res = new openapisdk.models.operations.PostStripeGatewayUserUserIdCardsResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * postStripeGatewayUserUserIdCardsCardId - Updates a credit card for this user
     *
     * 
     * - Results are returned for the market provided within the basic authentication credentials
     * 
    **/
    public openapisdk.models.operations.PostStripeGatewayUserUserIdCardsCardIdResponse postStripeGatewayUserUserIdCardsCardId(openapisdk.models.operations.PostStripeGatewayUserUserIdCardsCardIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/stripe-gateway/user/{userId}/cards/{cardId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostStripeGatewayUserUserIdCardsCardIdResponse res = new openapisdk.models.operations.PostStripeGatewayUserUserIdCardsCardIdResponse() {{
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 412) {
        }
        else {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}