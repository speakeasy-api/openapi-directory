package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class CustomPerformanceClasses {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CustomPerformanceClasses(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkApplianceTrafficShapingCustomPerformanceClass - Add a custom performance class for an MX network
     *
     * Add a custom performance class for an MX network
    **/
    public openapisdk.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse createNetworkApplianceTrafficShapingCustomPerformanceClass(openapisdk.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = new openapisdk.models.operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {{
            createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkApplianceTrafficShapingCustomPerformanceClass201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkApplianceTrafficShapingCustomPerformanceClass - Delete a custom performance class from an MX network
     *
     * Delete a custom performance class from an MX network
    **/
    public openapisdk.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse deleteNetworkApplianceTrafficShapingCustomPerformanceClass(openapisdk.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = new openapisdk.models.operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClass - Return a custom performance class for an MX network
     *
     * Return a custom performance class for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse getNetworkApplianceTrafficShapingCustomPerformanceClass(openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = new openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {{
            getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkApplianceTrafficShapingCustomPerformanceClasses - List all custom performance classes for an MX network
     *
     * List all custom performance classes for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse getNetworkApplianceTrafficShapingCustomPerformanceClasses(openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse res = new openapisdk.models.operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse() {{
            getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceTrafficShapingCustomPerformanceClasses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkApplianceTrafficShapingCustomPerformanceClass - Update a custom performance class for an MX network
     *
     * Update a custom performance class for an MX network
    **/
    public openapisdk.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse updateNetworkApplianceTrafficShapingCustomPerformanceClass(openapisdk.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/trafficShaping/customPerformanceClasses/{customPerformanceClassId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse res = new openapisdk.models.operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse() {{
            updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkApplianceTrafficShapingCustomPerformanceClass200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}