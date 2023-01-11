package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Assets {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Assets(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteTargetsTargetIdAssetsId - Delete asset
    **/
    public openapisdk.models.operations.DeleteTargetsTargetIdAssetsIdResponse deleteTargetsTargetIdAssetsId(openapisdk.models.operations.DeleteTargetsTargetIdAssetsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/{id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTargetsTargetIdAssetsIdResponse res = new openapisdk.models.operations.DeleteTargetsTargetIdAssetsIdResponse() {{
            deleteTargetsTargetIdAssetsId401ApplicationJSONObject = null;
            deleteTargetsTargetIdAssetsId403ApplicationJSONObject = null;
            deleteTargetsTargetIdAssetsId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteTargetsTargetIdAssetsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteTargetsTargetIdAssetsId401ApplicationJson.class);
                res.deleteTargetsTargetIdAssetsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteTargetsTargetIdAssetsId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteTargetsTargetIdAssetsId403ApplicationJson.class);
                res.deleteTargetsTargetIdAssetsId403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteTargetsTargetIdAssetsId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteTargetsTargetIdAssetsId404ApplicationJson.class);
                res.deleteTargetsTargetIdAssetsId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdAssets - List target's assets
    **/
    public openapisdk.models.operations.GetTargetsTargetIdAssetsResponse getTargetsTargetIdAssets(openapisdk.models.operations.GetTargetsTargetIdAssetsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
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

        openapisdk.models.operations.GetTargetsTargetIdAssetsResponse res = new openapisdk.models.operations.GetTargetsTargetIdAssetsResponse() {{
            getTargetsTargetIdAssets200ApplicationJSONObject = null;
            getTargetsTargetIdAssets401ApplicationJSONObject = null;
            getTargetsTargetIdAssets404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssets200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssets200ApplicationJson.class);
                res.getTargetsTargetIdAssets200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssets401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssets401ApplicationJson.class);
                res.getTargetsTargetIdAssets401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssets404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssets404ApplicationJson.class);
                res.getTargetsTargetIdAssets404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdAssetsId - Retrieve asset
    **/
    public openapisdk.models.operations.GetTargetsTargetIdAssetsIdResponse getTargetsTargetIdAssetsId(openapisdk.models.operations.GetTargetsTargetIdAssetsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/{id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdAssetsIdResponse res = new openapisdk.models.operations.GetTargetsTargetIdAssetsIdResponse() {{
            asset = null;
            getTargetsTargetIdAssetsId400ApplicationJSONObject = null;
            getTargetsTargetIdAssetsId401ApplicationJSONObject = null;
            getTargetsTargetIdAssetsId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Asset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Asset.class);
                res.asset = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssetsId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssetsId400ApplicationJson.class);
                res.getTargetsTargetIdAssetsId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssetsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssetsId401ApplicationJson.class);
                res.getTargetsTargetIdAssetsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdAssetsId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdAssetsId404ApplicationJson.class);
                res.getTargetsTargetIdAssetsId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdAssetsId - Partial update assets
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdAssetsIdResponse patchTargetsTargetIdAssetsId(openapisdk.models.operations.PatchTargetsTargetIdAssetsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/{id}/", request.pathParams);
        
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

        openapisdk.models.operations.PatchTargetsTargetIdAssetsIdResponse res = new openapisdk.models.operations.PatchTargetsTargetIdAssetsIdResponse() {{
            asset = null;
            patchTargetsTargetIdAssetsId400ApplicationJSONObject = null;
            patchTargetsTargetIdAssetsId401ApplicationJSONObject = null;
            patchTargetsTargetIdAssetsId403ApplicationJSONObject = null;
            patchTargetsTargetIdAssetsId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Asset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Asset.class);
                res.asset = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdAssetsId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdAssetsId400ApplicationJson.class);
                res.patchTargetsTargetIdAssetsId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdAssetsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdAssetsId401ApplicationJson.class);
                res.patchTargetsTargetIdAssetsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdAssetsId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdAssetsId403ApplicationJson.class);
                res.patchTargetsTargetIdAssetsId403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdAssetsId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdAssetsId404ApplicationJson.class);
                res.patchTargetsTargetIdAssetsId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdAssets - Create new asset
    **/
    public openapisdk.models.operations.PostTargetsTargetIdAssetsResponse postTargetsTargetIdAssets(openapisdk.models.operations.PostTargetsTargetIdAssetsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/", request.pathParams);
        
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

        openapisdk.models.operations.PostTargetsTargetIdAssetsResponse res = new openapisdk.models.operations.PostTargetsTargetIdAssetsResponse() {{
            asset = null;
            postTargetsTargetIdAssets400ApplicationJSONObject = null;
            postTargetsTargetIdAssets401ApplicationJSONObject = null;
            postTargetsTargetIdAssets403ApplicationJSONObject = null;
            postTargetsTargetIdAssets404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Asset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Asset.class);
                res.asset = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssets400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssets400ApplicationJson.class);
                res.postTargetsTargetIdAssets400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssets401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssets401ApplicationJson.class);
                res.postTargetsTargetIdAssets401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssets403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssets403ApplicationJson.class);
                res.postTargetsTargetIdAssets403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssets404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssets404ApplicationJson.class);
                res.postTargetsTargetIdAssets404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdAssetsIdVerify - Verify asset ownership
    **/
    public openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerifyResponse postTargetsTargetIdAssetsIdVerify(openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerifyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/{id}/verify/", request.pathParams);
        
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

        openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerifyResponse res = new openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerifyResponse() {{
            postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject = null;
            postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject = null;
            postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject = null;
            postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject = null;
            postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify200ApplicationJson.class);
                res.postTargetsTargetIdAssetsIdVerify200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify400ApplicationJson.class);
                res.postTargetsTargetIdAssetsIdVerify400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify401ApplicationJson.class);
                res.postTargetsTargetIdAssetsIdVerify401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify403ApplicationJson.class);
                res.postTargetsTargetIdAssetsIdVerify403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdAssetsIdVerify404ApplicationJson.class);
                res.postTargetsTargetIdAssetsIdVerify404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdAssetsId - Update asset
    **/
    public openapisdk.models.operations.PutTargetsTargetIdAssetsIdResponse putTargetsTargetIdAssetsId(openapisdk.models.operations.PutTargetsTargetIdAssetsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/assets/{id}/", request.pathParams);
        
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

        openapisdk.models.operations.PutTargetsTargetIdAssetsIdResponse res = new openapisdk.models.operations.PutTargetsTargetIdAssetsIdResponse() {{
            asset = null;
            putTargetsTargetIdAssetsId400ApplicationJSONObject = null;
            putTargetsTargetIdAssetsId401ApplicationJSONObject = null;
            putTargetsTargetIdAssetsId403ApplicationJSONObject = null;
            putTargetsTargetIdAssetsId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Asset out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Asset.class);
                res.asset = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdAssetsId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdAssetsId400ApplicationJson.class);
                res.putTargetsTargetIdAssetsId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdAssetsId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdAssetsId401ApplicationJson.class);
                res.putTargetsTargetIdAssetsId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdAssetsId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdAssetsId403ApplicationJson.class);
                res.putTargetsTargetIdAssetsId403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdAssetsId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdAssetsId404ApplicationJson.class);
                res.putTargetsTargetIdAssetsId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}