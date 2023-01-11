package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortSchedules {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortSchedules(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkSwitchPortSchedule - Add a switch port schedule
     *
     * Add a switch port schedule
    **/
    public openapisdk.models.operations.CreateNetworkSwitchPortScheduleResponse createNetworkSwitchPortSchedule(openapisdk.models.operations.CreateNetworkSwitchPortScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/portSchedules", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchPortScheduleResponse res = new openapisdk.models.operations.CreateNetworkSwitchPortScheduleResponse() {{
            createNetworkSwitchPortSchedule201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchPortSchedule201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkSwitchPortSchedule - Delete a switch port schedule
     *
     * Delete a switch port schedule
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchPortScheduleResponse deleteNetworkSwitchPortSchedule(openapisdk.models.operations.DeleteNetworkSwitchPortScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchPortScheduleResponse res = new openapisdk.models.operations.DeleteNetworkSwitchPortScheduleResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchPortSchedules - List switch port schedules
     *
     * List switch port schedules
    **/
    public openapisdk.models.operations.GetNetworkSwitchPortSchedulesResponse getNetworkSwitchPortSchedules(openapisdk.models.operations.GetNetworkSwitchPortSchedulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/portSchedules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchPortSchedulesResponse res = new openapisdk.models.operations.GetNetworkSwitchPortSchedulesResponse() {{
            getNetworkSwitchPortSchedules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchPortSchedules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchPortSchedule - Update a switch port schedule
     *
     * Update a switch port schedule
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchPortScheduleResponse updateNetworkSwitchPortSchedule(openapisdk.models.operations.UpdateNetworkSwitchPortScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/portSchedules/{portScheduleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchPortScheduleResponse res = new openapisdk.models.operations.UpdateNetworkSwitchPortScheduleResponse() {{
            updateNetworkSwitchPortSchedule200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchPortSchedule200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}