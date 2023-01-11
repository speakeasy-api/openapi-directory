package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class FloatingIpActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FloatingIpActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getFloatingIpsIdActions - Get all Actions for a Floating IP
     *
     * Returns all Action objects for a Floating IP. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetFloatingIpsIdActionsResponse getFloatingIpsIdActions(openapisdk.models.operations.GetFloatingIpsIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions", request.pathParams);
        
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

        openapisdk.models.operations.GetFloatingIpsIdActionsResponse res = new openapisdk.models.operations.GetFloatingIpsIdActionsResponse() {{
            getFloatingIpsIdActions200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFloatingIpsIdActions200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFloatingIpsIdActions200ApplicationJson.class);
                res.getFloatingIpsIdActions200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFloatingIpsIdActionsActionId - Get an Action for a Floating IP
     *
     * Returns a specific Action object for a Floating IP.
    **/
    public openapisdk.models.operations.GetFloatingIpsIdActionsActionIdResponse getFloatingIpsIdActionsActionId(openapisdk.models.operations.GetFloatingIpsIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFloatingIpsIdActionsActionIdResponse res = new openapisdk.models.operations.GetFloatingIpsIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFloatingIpsIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFloatingIpsIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFloatingIpsIdActionsAssign - Assign a Floating IP to a Server
     *
     * Assigns a Floating IP to a Server.
    **/
    public openapisdk.models.operations.PostFloatingIpsIdActionsAssignResponse postFloatingIpsIdActionsAssign(openapisdk.models.operations.PostFloatingIpsIdActionsAssignRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions/assign", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFloatingIpsIdActionsAssignResponse res = new openapisdk.models.operations.PostFloatingIpsIdActionsAssignResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFloatingIpsIdActionsAssignActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFloatingIpsIdActionsAssignActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFloatingIpsIdActionsChangeDnsPtr - Change reverse DNS entry for a Floating IP
     *
     * Changes the hostname that will appear when getting the hostname belonging to this Floating IP.
    **/
    public openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrResponse postFloatingIpsIdActionsChangeDnsPtr(openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions/change_dns_ptr", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrResponse res = new openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFloatingIpsIdActionsChangeDnsPtrActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFloatingIpsIdActionsChangeProtection - Change Floating IP Protection
     *
     * Changes the protection configuration of the Floating IP.
    **/
    public openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionResponse postFloatingIpsIdActionsChangeProtection(openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions/change_protection", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionResponse res = new openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFloatingIpsIdActionsChangeProtectionActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFloatingIpsIdActionsUnassign - Unassign a Floating IP
     *
     * Unassigns a Floating IP, resulting in it being unreachable. You may assign it to a Server again at a later time.
    **/
    public openapisdk.models.operations.PostFloatingIpsIdActionsUnassignResponse postFloatingIpsIdActionsUnassign(openapisdk.models.operations.PostFloatingIpsIdActionsUnassignRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/floating_ips/{id}/actions/unassign", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFloatingIpsIdActionsUnassignResponse res = new openapisdk.models.operations.PostFloatingIpsIdActionsUnassignResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFloatingIpsIdActionsUnassignActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFloatingIpsIdActionsUnassignActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}