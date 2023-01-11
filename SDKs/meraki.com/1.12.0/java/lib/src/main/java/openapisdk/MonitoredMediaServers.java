package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class MonitoredMediaServers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public MonitoredMediaServers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createOrganizationInsightMonitoredMediaServer - Add a media server to be monitored for this organization
     *
     * Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.
    **/
    public openapisdk.models.operations.CreateOrganizationInsightMonitoredMediaServerResponse createOrganizationInsightMonitoredMediaServer(openapisdk.models.operations.CreateOrganizationInsightMonitoredMediaServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/insight/monitoredMediaServers", request.pathParams);
        
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

        openapisdk.models.operations.CreateOrganizationInsightMonitoredMediaServerResponse res = new openapisdk.models.operations.CreateOrganizationInsightMonitoredMediaServerResponse() {{
            createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationInsightMonitoredMediaServer201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationInsightMonitoredMediaServer - Delete a monitored media server from this organization
     *
     * Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.
    **/
    public openapisdk.models.operations.DeleteOrganizationInsightMonitoredMediaServerResponse deleteOrganizationInsightMonitoredMediaServer(openapisdk.models.operations.DeleteOrganizationInsightMonitoredMediaServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationInsightMonitoredMediaServerResponse res = new openapisdk.models.operations.DeleteOrganizationInsightMonitoredMediaServerResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getOrganizationInsightMonitoredMediaServer - Return a monitored media server for this organization
     *
     * Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    public openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServerResponse getOrganizationInsightMonitoredMediaServer(openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServerResponse res = new openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServerResponse() {{
            getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationInsightMonitoredMediaServers - List the monitored media servers for this organization
     *
     * List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.
    **/
    public openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServersResponse getOrganizationInsightMonitoredMediaServers(openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/insight/monitoredMediaServers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServersResponse res = new openapisdk.models.operations.GetOrganizationInsightMonitoredMediaServersResponse() {{
            getOrganizationInsightMonitoredMediaServers200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationInsightMonitoredMediaServers200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationInsightMonitoredMediaServer - Update a monitored media server for this organization
     *
     * Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.
    **/
    public openapisdk.models.operations.UpdateOrganizationInsightMonitoredMediaServerResponse updateOrganizationInsightMonitoredMediaServer(openapisdk.models.operations.UpdateOrganizationInsightMonitoredMediaServerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/insight/monitoredMediaServers/{monitoredMediaServerId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationInsightMonitoredMediaServerResponse res = new openapisdk.models.operations.UpdateOrganizationInsightMonitoredMediaServerResponse() {{
            updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}