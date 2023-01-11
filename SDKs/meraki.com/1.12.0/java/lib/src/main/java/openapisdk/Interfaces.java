package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Interfaces {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Interfaces(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
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
	
}