package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class SlackIntegration {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SlackIntegration(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getTargetsTargetIdIntegrationsSlack - Retrieve slack integration data
    **/
    public openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlackResponse getTargetsTargetIdIntegrationsSlack(openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/slack/", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlackResponse res = new openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlackResponse() {{
            slack = null;
            getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = null;
            getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Slack out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Slack.class);
                res.slack = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlack401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlack401ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlack403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetTargetsTargetIdIntegrationsSlack403ApplicationJson.class);
                res.getTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * patchTargetsTargetIdIntegrationsSlack - Update slack integration data
    **/
    public openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlackResponse patchTargetsTargetIdIntegrationsSlack(openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/slack/", request.pathParams);
        
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

        openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlackResponse res = new openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlackResponse() {{
            slack = null;
            patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = null;
            patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Slack out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Slack.class);
                res.slack = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack401ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack403ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PatchTargetsTargetIdIntegrationsSlack404ApplicationJson.class);
                res.patchTargetsTargetIdIntegrationsSlack404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putTargetsTargetIdIntegrationsSlack - Update slack integration data
    **/
    public openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlackResponse putTargetsTargetIdIntegrationsSlack(openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/targets/{target_id}/integrations/slack/", request.pathParams);
        
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

        openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlackResponse res = new openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlackResponse() {{
            slack = null;
            putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = null;
            putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Slack out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Slack.class);
                res.slack = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack401ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack401ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsSlack401ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack403ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack403ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsSlack403ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack404ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutTargetsTargetIdIntegrationsSlack404ApplicationJson.class);
                res.putTargetsTargetIdIntegrationsSlack404ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}