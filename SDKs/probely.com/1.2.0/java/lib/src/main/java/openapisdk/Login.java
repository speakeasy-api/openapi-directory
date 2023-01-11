package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Login {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Login(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postAuthObtain - Authenticate user
     *
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     * 
    **/
    public openapisdk.models.operations.PostAuthObtainResponse postAuthObtain(openapisdk.models.operations.PostAuthObtainRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/auth/obtain/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthObtainResponse res = new openapisdk.models.operations.PostAuthObtainResponse() {{
            postAuthObtain200ApplicationJSONObject = null;
            postAuthObtain400ApplicationJSONObject = null;
            postAuthObtain500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthObtain200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthObtain200ApplicationJson.class);
                res.postAuthObtain200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthObtain400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthObtain400ApplicationJson.class);
                res.postAuthObtain400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthObtain500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthObtain500ApplicationJson.class);
                res.postAuthObtain500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAuthRefresh - Replace token with a new one
    **/
    public openapisdk.models.operations.PostAuthRefreshResponse postAuthRefresh(openapisdk.models.operations.PostAuthRefreshRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/auth/refresh/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthRefreshResponse res = new openapisdk.models.operations.PostAuthRefreshResponse() {{
            postAuthRefresh200ApplicationJSONObject = null;
            postAuthRefresh400ApplicationJSONObject = null;
            postAuthRefresh500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRefresh200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRefresh200ApplicationJson.class);
                res.postAuthRefresh200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRefresh400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRefresh400ApplicationJson.class);
                res.postAuthRefresh400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRefresh500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRefresh500ApplicationJson.class);
                res.postAuthRefresh500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAuthRevoke - Revoke a token
    **/
    public openapisdk.models.operations.PostAuthRevokeResponse postAuthRevoke(openapisdk.models.operations.PostAuthRevokeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/auth/revoke/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthRevokeResponse res = new openapisdk.models.operations.PostAuthRevokeResponse() {{
            postAuthRevoke200ApplicationJSONObject = null;
            postAuthRevoke400ApplicationJSONObject = null;
            postAuthRevoke500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRevoke200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRevoke200ApplicationJson.class);
                res.postAuthRevoke200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRevoke400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRevoke400ApplicationJson.class);
                res.postAuthRevoke400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthRevoke500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthRevoke500ApplicationJson.class);
                res.postAuthRevoke500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAuthVerify - Verify a token
     *
     * Check for the validity of a user token.
     * 
    **/
    public openapisdk.models.operations.PostAuthVerifyResponse postAuthVerify(openapisdk.models.operations.PostAuthVerifyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/auth/verify/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAuthVerifyResponse res = new openapisdk.models.operations.PostAuthVerifyResponse() {{
            postAuthVerify200ApplicationJSONObject = null;
            postAuthVerify400ApplicationJSONObject = null;
            postAuthVerify500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthVerify200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthVerify200ApplicationJson.class);
                res.postAuthVerify200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthVerify400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthVerify400ApplicationJson.class);
                res.postAuthVerify400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAuthVerify500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAuthVerify500ApplicationJson.class);
                res.postAuthVerify500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postEnterpriseAuthObtain - Enterprise user authentication
     *
     * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
     * 
    **/
    public openapisdk.models.operations.PostEnterpriseAuthObtainResponse postEnterpriseAuthObtain(openapisdk.models.operations.PostEnterpriseAuthObtainRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/auth/obtain/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostEnterpriseAuthObtainResponse res = new openapisdk.models.operations.PostEnterpriseAuthObtainResponse() {{
            postEnterpriseAuthObtain200ApplicationJSONObject = null;
            postEnterpriseAuthObtain400ApplicationJSONObject = null;
            postEnterpriseAuthObtain500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthObtain200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthObtain200ApplicationJson.class);
                res.postEnterpriseAuthObtain200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthObtain400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthObtain400ApplicationJson.class);
                res.postEnterpriseAuthObtain400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthObtain500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthObtain500ApplicationJson.class);
                res.postEnterpriseAuthObtain500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postEnterpriseAuthRefresh - Enterprise token refresh
    **/
    public openapisdk.models.operations.PostEnterpriseAuthRefreshResponse postEnterpriseAuthRefresh(openapisdk.models.operations.PostEnterpriseAuthRefreshRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/auth/refresh/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostEnterpriseAuthRefreshResponse res = new openapisdk.models.operations.PostEnterpriseAuthRefreshResponse() {{
            postEnterpriseAuthRefresh200ApplicationJSONObject = null;
            postEnterpriseAuthRefresh400ApplicationJSONObject = null;
            postEnterpriseAuthRefresh500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRefresh200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRefresh200ApplicationJson.class);
                res.postEnterpriseAuthRefresh200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRefresh400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRefresh400ApplicationJson.class);
                res.postEnterpriseAuthRefresh400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRefresh500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRefresh500ApplicationJson.class);
                res.postEnterpriseAuthRefresh500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postEnterpriseAuthRevoke - Enterprise token revokation
    **/
    public openapisdk.models.operations.PostEnterpriseAuthRevokeResponse postEnterpriseAuthRevoke(openapisdk.models.operations.PostEnterpriseAuthRevokeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/auth/revoke/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostEnterpriseAuthRevokeResponse res = new openapisdk.models.operations.PostEnterpriseAuthRevokeResponse() {{
            postEnterpriseAuthRevoke200ApplicationJSONObject = null;
            postEnterpriseAuthRevoke400ApplicationJSONObject = null;
            postEnterpriseAuthRevoke500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRevoke200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRevoke200ApplicationJson.class);
                res.postEnterpriseAuthRevoke200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRevoke400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRevoke400ApplicationJson.class);
                res.postEnterpriseAuthRevoke400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthRevoke500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthRevoke500ApplicationJson.class);
                res.postEnterpriseAuthRevoke500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postEnterpriseAuthVerify - Enterprise token verification
     *
     * Check for the validity of a user token.
     * 
    **/
    public openapisdk.models.operations.PostEnterpriseAuthVerifyResponse postEnterpriseAuthVerify(openapisdk.models.operations.PostEnterpriseAuthVerifyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/enterprise/auth/verify/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostEnterpriseAuthVerifyResponse res = new openapisdk.models.operations.PostEnterpriseAuthVerifyResponse() {{
            postEnterpriseAuthVerify200ApplicationJSONObject = null;
            postEnterpriseAuthVerify400ApplicationJSONObject = null;
            postEnterpriseAuthVerify500ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthVerify200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthVerify200ApplicationJson.class);
                res.postEnterpriseAuthVerify200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthVerify400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthVerify400ApplicationJson.class);
                res.postEnterpriseAuthVerify400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostEnterpriseAuthVerify500ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostEnterpriseAuthVerify500ApplicationJson.class);
                res.postEnterpriseAuthVerify500ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}