package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Scheduled {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Scheduled(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteTargetsTargetIdScheduledscansId - Delete
    **/
    public openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansIdResponse deleteTargetsTargetIdScheduledscansId(openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/{id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansIdResponse res = new openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansIdResponse() {{
            deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject = null;
            deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansId401ApplicationJson.class);
                res.deleteTargetsTargetIdScheduledscansId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteTargetsTargetIdScheduledscansId403ApplicationJson.class);
                res.deleteTargetsTargetIdScheduledscansId403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsAllScheduledscansExpanded - List scheduled scans for all targets expanding recurrence
    **/
    public openapisdk.models.operations.GetTargetsAllScheduledscansExpandedResponse getTargetsAllScheduledscansExpanded(openapisdk.models.operations.GetTargetsAllScheduledscansExpandedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/all/scheduledscans/expanded/");
        
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

        openapisdk.models.operations.GetTargetsAllScheduledscansExpandedResponse res = new openapisdk.models.operations.GetTargetsAllScheduledscansExpandedResponse() {{
            getTargetsAllScheduledscansExpanded200ApplicationJSONObject = null;
            getTargetsAllScheduledscansExpanded404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllScheduledscansExpanded200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllScheduledscansExpanded200ApplicationJson.class);
                res.getTargetsAllScheduledscansExpanded200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsAllScheduledscansExpanded404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsAllScheduledscansExpanded404ApplicationJson.class);
                res.getTargetsAllScheduledscansExpanded404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScheduledscans - List scheduled scans
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScheduledscansResponse getTargetsTargetIdScheduledscans(openapisdk.models.operations.GetTargetsTargetIdScheduledscansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/", request.pathParams);
        
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

        openapisdk.models.operations.GetTargetsTargetIdScheduledscansResponse res = new openapisdk.models.operations.GetTargetsTargetIdScheduledscansResponse() {{
            getTargetsTargetIdScheduledscans200ApplicationJSONObject = null;
            getTargetsTargetIdScheduledscans401ApplicationJSONObject = null;
            getTargetsTargetIdScheduledscans404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscans200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscans200ApplicationJson.class);
                res.getTargetsTargetIdScheduledscans200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscans401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscans401ApplicationJson.class);
                res.getTargetsTargetIdScheduledscans401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscans404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscans404ApplicationJson.class);
                res.getTargetsTargetIdScheduledscans404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScheduledscansExpanded - List scheduled scans expanding recurrence
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpandedResponse getTargetsTargetIdScheduledscansExpanded(openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpandedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/expanded/", request.pathParams);
        
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

        openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpandedResponse res = new openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpandedResponse() {{
            getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject = null;
            getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpanded200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpanded200ApplicationJson.class);
                res.getTargetsTargetIdScheduledscansExpanded200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpanded404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscansExpanded404ApplicationJson.class);
                res.getTargetsTargetIdScheduledscansExpanded404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getTargetsTargetIdScheduledscansId - Retrieve a scheduled scan
    **/
    public openapisdk.models.operations.GetTargetsTargetIdScheduledscansIdResponse getTargetsTargetIdScheduledscansId(openapisdk.models.operations.GetTargetsTargetIdScheduledscansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/{id}/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdScheduledscansIdResponse res = new openapisdk.models.operations.GetTargetsTargetIdScheduledscansIdResponse() {{
            scheduled = null;
            getTargetsTargetIdScheduledscansId401ApplicationJSONObject = null;
            getTargetsTargetIdScheduledscansId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scheduled out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scheduled.class);
                res.scheduled = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscansId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscansId401ApplicationJson.class);
                res.getTargetsTargetIdScheduledscansId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdScheduledscansId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdScheduledscansId404ApplicationJson.class);
                res.getTargetsTargetIdScheduledscansId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdScheduledscansId - Partial update
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdScheduledscansIdResponse patchTargetsTargetIdScheduledscansId(openapisdk.models.operations.PatchTargetsTargetIdScheduledscansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/{id}/", request.pathParams);
        
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

        openapisdk.models.operations.PatchTargetsTargetIdScheduledscansIdResponse res = new openapisdk.models.operations.PatchTargetsTargetIdScheduledscansIdResponse() {{
            scheduled = null;
            patchTargetsTargetIdScheduledscansId400ApplicationJSONObject = null;
            patchTargetsTargetIdScheduledscansId401ApplicationJSONObject = null;
            patchTargetsTargetIdScheduledscansId403ApplicationJSONObject = null;
            patchTargetsTargetIdScheduledscansId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scheduled out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scheduled.class);
                res.scheduled = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId400ApplicationJson.class);
                res.patchTargetsTargetIdScheduledscansId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId401ApplicationJson.class);
                res.patchTargetsTargetIdScheduledscansId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId403ApplicationJson.class);
                res.patchTargetsTargetIdScheduledscansId403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdScheduledscansId404ApplicationJson.class);
                res.patchTargetsTargetIdScheduledscansId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postTargetsTargetIdScheduledscans - Create new scheduled scan
    **/
    public openapisdk.models.operations.PostTargetsTargetIdScheduledscansResponse postTargetsTargetIdScheduledscans(openapisdk.models.operations.PostTargetsTargetIdScheduledscansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/", request.pathParams);
        
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

        openapisdk.models.operations.PostTargetsTargetIdScheduledscansResponse res = new openapisdk.models.operations.PostTargetsTargetIdScheduledscansResponse() {{
            scheduled = null;
            postTargetsTargetIdScheduledscans400ApplicationJSONObject = null;
            postTargetsTargetIdScheduledscans401ApplicationJSONObject = null;
            postTargetsTargetIdScheduledscans403ApplicationJSONObject = null;
            postTargetsTargetIdScheduledscans404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scheduled out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scheduled.class);
                res.scheduled = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScheduledscans400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScheduledscans400ApplicationJson.class);
                res.postTargetsTargetIdScheduledscans400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScheduledscans401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScheduledscans401ApplicationJson.class);
                res.postTargetsTargetIdScheduledscans401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScheduledscans403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScheduledscans403ApplicationJson.class);
                res.postTargetsTargetIdScheduledscans403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostTargetsTargetIdScheduledscans404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostTargetsTargetIdScheduledscans404ApplicationJson.class);
                res.postTargetsTargetIdScheduledscans404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdScheduledscansId - Update a scheduled scan
    **/
    public openapisdk.models.operations.PutTargetsTargetIdScheduledscansIdResponse putTargetsTargetIdScheduledscansId(openapisdk.models.operations.PutTargetsTargetIdScheduledscansIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/scheduledscans/{id}/", request.pathParams);
        
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

        openapisdk.models.operations.PutTargetsTargetIdScheduledscansIdResponse res = new openapisdk.models.operations.PutTargetsTargetIdScheduledscansIdResponse() {{
            scheduled = null;
            putTargetsTargetIdScheduledscansId400ApplicationJSONObject = null;
            putTargetsTargetIdScheduledscansId401ApplicationJSONObject = null;
            putTargetsTargetIdScheduledscansId403ApplicationJSONObject = null;
            putTargetsTargetIdScheduledscansId404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Scheduled out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Scheduled.class);
                res.scheduled = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdScheduledscansId400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdScheduledscansId400ApplicationJson.class);
                res.putTargetsTargetIdScheduledscansId400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdScheduledscansId401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdScheduledscansId401ApplicationJson.class);
                res.putTargetsTargetIdScheduledscansId401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdScheduledscansId403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdScheduledscansId403ApplicationJson.class);
                res.putTargetsTargetIdScheduledscansId403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdScheduledscansId404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdScheduledscansId404ApplicationJson.class);
                res.putTargetsTargetIdScheduledscansId404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}