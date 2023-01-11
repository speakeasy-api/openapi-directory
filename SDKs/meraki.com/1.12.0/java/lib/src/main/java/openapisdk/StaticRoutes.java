package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class StaticRoutes {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public StaticRoutes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
     *
     * Create a layer 3 static route for a switch
    **/
    public openapisdk.models.operations.CreateDeviceSwitchRoutingStaticRouteResponse createDeviceSwitchRoutingStaticRoute(openapisdk.models.operations.CreateDeviceSwitchRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/staticRoutes", request.pathParams);
        
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

        openapisdk.models.operations.CreateDeviceSwitchRoutingStaticRouteResponse res = new openapisdk.models.operations.CreateDeviceSwitchRoutingStaticRouteResponse() {{
            createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createDeviceSwitchRoutingStaticRoute201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkApplianceStaticRoute - Add a static route for an MX or teleworker network
     *
     * Add a static route for an MX or teleworker network
    **/
    public openapisdk.models.operations.CreateNetworkApplianceStaticRouteResponse createNetworkApplianceStaticRoute(openapisdk.models.operations.CreateNetworkApplianceStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/staticRoutes", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkApplianceStaticRouteResponse res = new openapisdk.models.operations.CreateNetworkApplianceStaticRouteResponse() {{
            createNetworkApplianceStaticRoute201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkApplianceStaticRoute201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
     *
     * Create a layer 3 static route for a switch stack
    **/
    public openapisdk.models.operations.CreateNetworkSwitchStackRoutingStaticRouteResponse createNetworkSwitchStackRoutingStaticRoute(openapisdk.models.operations.CreateNetworkSwitchStackRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchStackRoutingStaticRouteResponse res = new openapisdk.models.operations.CreateNetworkSwitchStackRoutingStaticRouteResponse() {{
            createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchStackRoutingStaticRoute201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
     *
     * Delete a layer 3 static route for a switch
    **/
    public openapisdk.models.operations.DeleteDeviceSwitchRoutingStaticRouteResponse deleteDeviceSwitchRoutingStaticRoute(openapisdk.models.operations.DeleteDeviceSwitchRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeviceSwitchRoutingStaticRouteResponse res = new openapisdk.models.operations.DeleteDeviceSwitchRoutingStaticRouteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteNetworkApplianceStaticRoute - Delete a static route from an MX or teleworker network
     *
     * Delete a static route from an MX or teleworker network
    **/
    public openapisdk.models.operations.DeleteNetworkApplianceStaticRouteResponse deleteNetworkApplianceStaticRoute(openapisdk.models.operations.DeleteNetworkApplianceStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkApplianceStaticRouteResponse res = new openapisdk.models.operations.DeleteNetworkApplianceStaticRouteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteNetworkSwitchStackRoutingStaticRoute - Delete a layer 3 static route for a switch stack
     *
     * Delete a layer 3 static route for a switch stack
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse deleteNetworkSwitchStackRoutingStaticRoute(openapisdk.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse res = new openapisdk.models.operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
     *
     * Return a layer 3 static route for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchRoutingStaticRouteResponse getDeviceSwitchRoutingStaticRoute(openapisdk.models.operations.GetDeviceSwitchRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchRoutingStaticRouteResponse res = new openapisdk.models.operations.GetDeviceSwitchRoutingStaticRouteResponse() {{
            getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchRoutingStaticRoutes - List layer 3 static routes for a switch
     *
     * List layer 3 static routes for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchRoutingStaticRoutesResponse getDeviceSwitchRoutingStaticRoutes(openapisdk.models.operations.GetDeviceSwitchRoutingStaticRoutesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/staticRoutes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchRoutingStaticRoutesResponse res = new openapisdk.models.operations.GetDeviceSwitchRoutingStaticRoutesResponse() {{
            getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchRoutingStaticRoutes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkApplianceStaticRoute - Return a static route for an MX or teleworker network
     *
     * Return a static route for an MX or teleworker network
    **/
    public openapisdk.models.operations.GetNetworkApplianceStaticRouteResponse getNetworkApplianceStaticRoute(openapisdk.models.operations.GetNetworkApplianceStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceStaticRouteResponse res = new openapisdk.models.operations.GetNetworkApplianceStaticRouteResponse() {{
            getNetworkApplianceStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkApplianceStaticRoutes - List the static routes for an MX or teleworker network
     *
     * List the static routes for an MX or teleworker network
    **/
    public openapisdk.models.operations.GetNetworkApplianceStaticRoutesResponse getNetworkApplianceStaticRoutes(openapisdk.models.operations.GetNetworkApplianceStaticRoutesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/staticRoutes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceStaticRoutesResponse res = new openapisdk.models.operations.GetNetworkApplianceStaticRoutesResponse() {{
            getNetworkApplianceStaticRoutes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceStaticRoutes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
     *
     * Return a layer 3 static route for a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRouteResponse getNetworkSwitchStackRoutingStaticRoute(openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRouteResponse res = new openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRouteResponse() {{
            getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStackRoutingStaticRoutes - List layer 3 static routes for a switch stack
     *
     * List layer 3 static routes for a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRoutesResponse getNetworkSwitchStackRoutingStaticRoutes(openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRoutesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRoutesResponse res = new openapisdk.models.operations.GetNetworkSwitchStackRoutingStaticRoutesResponse() {{
            getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStackRoutingStaticRoutes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
     *
     * Update a layer 3 static route for a switch
    **/
    public openapisdk.models.operations.UpdateDeviceSwitchRoutingStaticRouteResponse updateDeviceSwitchRoutingStaticRoute(openapisdk.models.operations.UpdateDeviceSwitchRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceSwitchRoutingStaticRouteResponse res = new openapisdk.models.operations.UpdateDeviceSwitchRoutingStaticRouteResponse() {{
            updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceSwitchRoutingStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkApplianceStaticRoute - Update a static route for an MX or teleworker network
     *
     * Update a static route for an MX or teleworker network
    **/
    public openapisdk.models.operations.UpdateNetworkApplianceStaticRouteResponse updateNetworkApplianceStaticRoute(openapisdk.models.operations.UpdateNetworkApplianceStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkApplianceStaticRouteResponse res = new openapisdk.models.operations.UpdateNetworkApplianceStaticRouteResponse() {{
            updateNetworkApplianceStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkApplianceStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
     *
     * Update a layer 3 static route for a switch stack
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse updateNetworkSwitchStackRoutingStaticRoute(openapisdk.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/staticRoutes/{staticRouteId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse res = new openapisdk.models.operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse() {{
            updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchStackRoutingStaticRoute200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}