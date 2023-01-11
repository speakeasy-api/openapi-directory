package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class SessionController {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SessionController(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * sessionControllerChangePassword - Change the password of a customer given their existing and new password.
    **/
    public openapisdk.models.operations.SessionControllerChangePasswordResponse sessionControllerChangePassword(openapisdk.models.operations.SessionControllerChangePasswordRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session/password", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.SessionControllerChangePasswordResponse res = new openapisdk.models.operations.SessionControllerChangePasswordResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * sessionControllerCreateLandlordLogin - Send a request to the in-tray to create a landlord login.
    **/
    public openapisdk.models.operations.SessionControllerCreateLandlordLoginResponse sessionControllerCreateLandlordLogin(openapisdk.models.operations.SessionControllerCreateLandlordLoginRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session/createlandlordlogin", request.pathParams);
        
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

        openapisdk.models.operations.SessionControllerCreateLandlordLoginResponse res = new openapisdk.models.operations.SessionControllerCreateLandlordLoginResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * sessionControllerGetSessionInfo - Gets information about the currently logged on customer.
    **/
    public openapisdk.models.operations.SessionControllerGetSessionInfoResponse sessionControllerGetSessionInfo(openapisdk.models.operations.SessionControllerGetSessionInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session", request.pathParams);
        
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

        openapisdk.models.operations.SessionControllerGetSessionInfoResponse res = new openapisdk.models.operations.SessionControllerGetSessionInfoResponse() {{
            sessionControllerGetSessionInfo200ApplicationJSONString = null;
            sessionControllerGetSessionInfo200ApplicationXMLString = null;
            sessionControllerGetSessionInfo200TextJSONString = null;
            sessionControllerGetSessionInfo200TextXMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerGetSessionInfo200ApplicationJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerGetSessionInfo200ApplicationXMLString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerGetSessionInfo200TextJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerGetSessionInfo200TextXMLString = out;
            }
        }

        return res;
    }
	
	
    /**
     * sessionControllerLogin - Login as a customer given their username and password.
    **/
    public openapisdk.models.operations.SessionControllerLoginResponse sessionControllerLogin(openapisdk.models.operations.SessionControllerLoginRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session", request.pathParams);
        
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

        openapisdk.models.operations.SessionControllerLoginResponse res = new openapisdk.models.operations.SessionControllerLoginResponse() {{
            sessionControllerLogin200ApplicationJSONString = null;
            sessionControllerLogin200ApplicationXMLString = null;
            sessionControllerLogin200TextJSONString = null;
            sessionControllerLogin200TextXMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerLogin200ApplicationJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerLogin200ApplicationXMLString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerLogin200TextJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.sessionControllerLogin200TextXMLString = out;
            }
        }

        return res;
    }
	
	
    /**
     * sessionControllerLogout - Logout a customer previously logged in via the Login endpoint.
    **/
    public openapisdk.models.operations.SessionControllerLogoutResponse sessionControllerLogout(openapisdk.models.operations.SessionControllerLogoutRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.SessionControllerLogoutResponse res = new openapisdk.models.operations.SessionControllerLogoutResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * sessionControllerResetPassword - Reset the customer's password. An email will be sent out to reset.
    **/
    public openapisdk.models.operations.SessionControllerResetPasswordResponse sessionControllerResetPassword(openapisdk.models.operations.SessionControllerResetPasswordRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/customer/{shortName}/session/resetpassword", request.pathParams);
        
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

        openapisdk.models.operations.SessionControllerResetPasswordResponse res = new openapisdk.models.operations.SessionControllerResetPasswordResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
}