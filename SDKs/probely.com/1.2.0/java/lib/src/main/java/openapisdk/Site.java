package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Site {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Site(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getTargetsTargetIdSite - Retrieve target's site
    **/
    public openapisdk.models.operations.GetTargetsTargetIdSiteResponse getTargetsTargetIdSite(openapisdk.models.operations.GetTargetsTargetIdSiteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/site/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdSiteResponse res = new openapisdk.models.operations.GetTargetsTargetIdSiteResponse() {{
            site = null;
            getTargetsTargetIdSite401ApplicationJSONObject = null;
            getTargetsTargetIdSite404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Site out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Site.class);
                res.site = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdSite401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdSite401ApplicationJson.class);
                res.getTargetsTargetIdSite401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdSite404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdSite404ApplicationJson.class);
                res.getTargetsTargetIdSite404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdSite - Partial update target's site
     *
     * Note that the URL can only be set once.
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdSiteResponse patchTargetsTargetIdSite(openapisdk.models.operations.PatchTargetsTargetIdSiteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/site/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PatchTargetsTargetIdSiteResponse res = new openapisdk.models.operations.PatchTargetsTargetIdSiteResponse() {{
            site = null;
            patchTargetsTargetIdSite400ApplicationJSONObject = null;
            patchTargetsTargetIdSite401ApplicationJSONObject = null;
            patchTargetsTargetIdSite403ApplicationJSONObject = null;
            patchTargetsTargetIdSite404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Site out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Site.class);
                res.site = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdSite400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdSite400ApplicationJson.class);
                res.patchTargetsTargetIdSite400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdSite401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdSite401ApplicationJson.class);
                res.patchTargetsTargetIdSite401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdSite403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdSite403ApplicationJson.class);
                res.patchTargetsTargetIdSite403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdSite404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdSite404ApplicationJson.class);
                res.patchTargetsTargetIdSite404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdSiteVerify - Verify site ownership
    **/
    public openapisdk.models.operations.PostTargetsTargetIdSiteVerifyResponse postTargetsTargetIdSiteVerify(openapisdk.models.operations.PostTargetsTargetIdSiteVerifyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/site/verify/", request.pathParams);
        
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

        openapisdk.models.operations.PostTargetsTargetIdSiteVerifyResponse res = new openapisdk.models.operations.PostTargetsTargetIdSiteVerifyResponse() {{
            postTargetsTargetIdSiteVerify200ApplicationJSONObject = null;
            postTargetsTargetIdSiteVerify400ApplicationJSONObject = null;
            postTargetsTargetIdSiteVerify401ApplicationJSONObject = null;
            postTargetsTargetIdSiteVerify403ApplicationJSONObject = null;
            postTargetsTargetIdSiteVerify404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdSiteVerify200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdSiteVerify200ApplicationJson.class);
                res.postTargetsTargetIdSiteVerify200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdSiteVerify400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdSiteVerify400ApplicationJson.class);
                res.postTargetsTargetIdSiteVerify400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdSiteVerify401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdSiteVerify401ApplicationJson.class);
                res.postTargetsTargetIdSiteVerify401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdSiteVerify403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdSiteVerify403ApplicationJson.class);
                res.postTargetsTargetIdSiteVerify403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdSiteVerify404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdSiteVerify404ApplicationJson.class);
                res.postTargetsTargetIdSiteVerify404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdSite - Update target's site
     *
     * Note that the URL can only be set once.
    **/
    public openapisdk.models.operations.PutTargetsTargetIdSiteResponse putTargetsTargetIdSite(openapisdk.models.operations.PutTargetsTargetIdSiteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/site/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutTargetsTargetIdSiteResponse res = new openapisdk.models.operations.PutTargetsTargetIdSiteResponse() {{
            site = null;
            putTargetsTargetIdSite400ApplicationJSONObject = null;
            putTargetsTargetIdSite401ApplicationJSONObject = null;
            putTargetsTargetIdSite403ApplicationJSONObject = null;
            putTargetsTargetIdSite404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Site out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Site.class);
                res.site = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdSite400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdSite400ApplicationJson.class);
                res.putTargetsTargetIdSite400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdSite401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdSite401ApplicationJson.class);
                res.putTargetsTargetIdSite401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdSite403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdSite403ApplicationJson.class);
                res.putTargetsTargetIdSite403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdSite404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdSite404ApplicationJson.class);
                res.putTargetsTargetIdSite404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}