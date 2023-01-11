package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Routing {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Routing(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createDeviceSwitchRoutingInterface - Create a layer 3 interface for a switch
     *
     * Create a layer 3 interface for a switch
    **/
    public openapisdk.models.operations.CreateDeviceSwitchRoutingInterfaceResponse createDeviceSwitchRoutingInterface(openapisdk.models.operations.CreateDeviceSwitchRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces", request.pathParams);
        
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

        openapisdk.models.operations.CreateDeviceSwitchRoutingInterfaceResponse res = new openapisdk.models.operations.CreateDeviceSwitchRoutingInterfaceResponse() {{
            createDeviceSwitchRoutingInterface201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createDeviceSwitchRoutingInterface201ApplicationJSONObject = out;
            }
        }

        return res;
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
     * createNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
     *
     * Create a multicast rendezvous point
    **/
    public openapisdk.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse createNetworkSwitchRoutingMulticastRendezvousPoint(openapisdk.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse res = new openapisdk.models.operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse() {{
            createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
     *
     * Create a layer 3 interface for a switch stack
    **/
    public openapisdk.models.operations.CreateNetworkSwitchStackRoutingInterfaceResponse createNetworkSwitchStackRoutingInterface(openapisdk.models.operations.CreateNetworkSwitchStackRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchStackRoutingInterfaceResponse res = new openapisdk.models.operations.CreateNetworkSwitchStackRoutingInterfaceResponse() {{
            createNetworkSwitchStackRoutingInterface201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchStackRoutingInterface201ApplicationJSONObject = out;
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
     * deleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
     *
     * Delete a layer 3 interface from the switch
    **/
    public openapisdk.models.operations.DeleteDeviceSwitchRoutingInterfaceResponse deleteDeviceSwitchRoutingInterface(openapisdk.models.operations.DeleteDeviceSwitchRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDeviceSwitchRoutingInterfaceResponse res = new openapisdk.models.operations.DeleteDeviceSwitchRoutingInterfaceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
     * deleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
     *
     * Delete a multicast rendezvous point
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse deleteNetworkSwitchRoutingMulticastRendezvousPoint(openapisdk.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse res = new openapisdk.models.operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
     *
     * Delete a layer 3 interface from a switch stack
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchStackRoutingInterfaceResponse deleteNetworkSwitchStackRoutingInterface(openapisdk.models.operations.DeleteNetworkSwitchStackRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchStackRoutingInterfaceResponse res = new openapisdk.models.operations.DeleteNetworkSwitchStackRoutingInterfaceResponse() {{
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
     * getDeviceSwitchRoutingInterface - Return a layer 3 interface for a switch
     *
     * Return a layer 3 interface for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceResponse getDeviceSwitchRoutingInterface(openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceResponse res = new openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceResponse() {{
            getDeviceSwitchRoutingInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchRoutingInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
     *
     * Return a layer 3 interface DHCP configuration for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceDhcpResponse getDeviceSwitchRoutingInterfaceDhcp(openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceDhcpResponse res = new openapisdk.models.operations.GetDeviceSwitchRoutingInterfaceDhcpResponse() {{
            getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchRoutingInterfaces - List layer 3 interfaces for a switch
     *
     * List layer 3 interfaces for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchRoutingInterfacesResponse getDeviceSwitchRoutingInterfaces(openapisdk.models.operations.GetDeviceSwitchRoutingInterfacesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchRoutingInterfacesResponse res = new openapisdk.models.operations.GetDeviceSwitchRoutingInterfacesResponse() {{
            getDeviceSwitchRoutingInterfaces200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchRoutingInterfaces200ApplicationJSONObject = out;
            }
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
     * getNetworkSwitchRoutingMulticast - Return multicast settings for a network
     *
     * Return multicast settings for a network
    **/
    public openapisdk.models.operations.GetNetworkSwitchRoutingMulticastResponse getNetworkSwitchRoutingMulticast(openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchRoutingMulticastResponse res = new openapisdk.models.operations.GetNetworkSwitchRoutingMulticastResponse() {{
            getNetworkSwitchRoutingMulticast200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchRoutingMulticast200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoint - Return a multicast rendezvous point
     *
     * Return a multicast rendezvous point
    **/
    public openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse getNetworkSwitchRoutingMulticastRendezvousPoint(openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse res = new openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse() {{
            getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoints - List multicast rendezvous points
     *
     * List multicast rendezvous points
    **/
    public openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse getNetworkSwitchRoutingMulticastRendezvousPoints(openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse res = new openapisdk.models.operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse() {{
            getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
     *
     * Return layer 3 OSPF routing configuration
    **/
    public openapisdk.models.operations.GetNetworkSwitchRoutingOspfResponse getNetworkSwitchRoutingOspf(openapisdk.models.operations.GetNetworkSwitchRoutingOspfRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/ospf", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchRoutingOspfResponse res = new openapisdk.models.operations.GetNetworkSwitchRoutingOspfResponse() {{
            getNetworkSwitchRoutingOspf200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchRoutingOspf200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStackRoutingInterface - Return a layer 3 interface from a switch stack
     *
     * Return a layer 3 interface from a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceResponse getNetworkSwitchStackRoutingInterface(openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceResponse res = new openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceResponse() {{
            getNetworkSwitchStackRoutingInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStackRoutingInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
     *
     * Return a layer 3 interface DHCP configuration for a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse getNetworkSwitchStackRoutingInterfaceDhcp(openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse res = new openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse() {{
            getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStackRoutingInterfaces - List layer 3 interfaces for a switch stack
     *
     * List layer 3 interfaces for a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfacesResponse getNetworkSwitchStackRoutingInterfaces(openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfacesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfacesResponse res = new openapisdk.models.operations.GetNetworkSwitchStackRoutingInterfacesResponse() {{
            getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStackRoutingInterfaces200ApplicationJSONObject = out;
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
     * updateDeviceSwitchRoutingInterface - Update a layer 3 interface for a switch
     *
     * Update a layer 3 interface for a switch
    **/
    public openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceResponse updateDeviceSwitchRoutingInterface(openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceResponse res = new openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceResponse() {{
            updateDeviceSwitchRoutingInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceSwitchRoutingInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
     *
     * Update a layer 3 interface DHCP configuration for a switch
    **/
    public openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse updateDeviceSwitchRoutingInterfaceDhcp(openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/routing/interfaces/{interfaceId}/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse res = new openapisdk.models.operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse() {{
            updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceSwitchRoutingInterfaceDhcp200ApplicationJSONObject = out;
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
     * updateNetworkSwitchRoutingMulticast - Update multicast settings for a network
     *
     * Update multicast settings for a network
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastResponse updateNetworkSwitchRoutingMulticast(openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastResponse res = new openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastResponse() {{
            updateNetworkSwitchRoutingMulticast200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchRoutingMulticast200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchRoutingMulticastRendezvousPoint - Update a multicast rendezvous point
     *
     * Update a multicast rendezvous point
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse updateNetworkSwitchRoutingMulticastRendezvousPoint(openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/multicast/rendezvousPoints/{rendezvousPointId}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse res = new openapisdk.models.operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse() {{
            updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
     *
     * Update layer 3 OSPF routing configuration
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchRoutingOspfResponse updateNetworkSwitchRoutingOspf(openapisdk.models.operations.UpdateNetworkSwitchRoutingOspfRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/routing/ospf", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchRoutingOspfResponse res = new openapisdk.models.operations.UpdateNetworkSwitchRoutingOspfResponse() {{
            updateNetworkSwitchRoutingOspf200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchRoutingOspf200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchStackRoutingInterface - Update a layer 3 interface for a switch stack
     *
     * Update a layer 3 interface for a switch stack
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceResponse updateNetworkSwitchStackRoutingInterface(openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceResponse res = new openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceResponse() {{
            updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchStackRoutingInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
     *
     * Update a layer 3 interface DHCP configuration for a switch stack
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse updateNetworkSwitchStackRoutingInterfaceDhcp(openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/routing/interfaces/{interfaceId}/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse res = new openapisdk.models.operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse() {{
            updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchStackRoutingInterfaceDhcp200ApplicationJSONObject = out;
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