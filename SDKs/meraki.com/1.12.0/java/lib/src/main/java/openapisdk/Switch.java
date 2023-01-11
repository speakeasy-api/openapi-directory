package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Switch {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Switch(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addNetworkSwitchStack - Add a switch to a stack
     *
     * Add a switch to a stack
    **/
    public openapisdk.models.operations.AddNetworkSwitchStackResponse addNetworkSwitchStack(openapisdk.models.operations.AddNetworkSwitchStackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/add", request.pathParams);
        
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

        openapisdk.models.operations.AddNetworkSwitchStackResponse res = new openapisdk.models.operations.AddNetworkSwitchStackResponse() {{
            addNetworkSwitchStack200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.addNetworkSwitchStack200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * cloneOrganizationSwitchDevices - Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
    **/
    public openapisdk.models.operations.CloneOrganizationSwitchDevicesResponse cloneOrganizationSwitchDevices(openapisdk.models.operations.CloneOrganizationSwitchDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/switch/devices/clone", request.pathParams);
        
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

        openapisdk.models.operations.CloneOrganizationSwitchDevicesResponse res = new openapisdk.models.operations.CloneOrganizationSwitchDevicesResponse() {{
            cloneOrganizationSwitchDevices200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.cloneOrganizationSwitchDevices200ApplicationJSONObject = out;
            }
        }

        return res;
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
     * createNetworkSwitchAccessPolicy - Create an access policy for a switch network
     *
     * Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    public openapisdk.models.operations.CreateNetworkSwitchAccessPolicyResponse createNetworkSwitchAccessPolicy(openapisdk.models.operations.CreateNetworkSwitchAccessPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessPolicies", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchAccessPolicyResponse res = new openapisdk.models.operations.CreateNetworkSwitchAccessPolicyResponse() {{
            createNetworkSwitchAccessPolicy201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchAccessPolicy201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNetworkSwitchLinkAggregation - Create a link aggregation group
     *
     * Create a link aggregation group
    **/
    public openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse createNetworkSwitchLinkAggregation(openapisdk.models.operations.CreateNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.CreateNetworkSwitchLinkAggregationResponse() {{
            createNetworkSwitchLinkAggregation201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchLinkAggregation201ApplicationJSONObject = out;
            }
        }

        return res;
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
     * createNetworkSwitchQosRule - Add a quality of service rule
     *
     * Add a quality of service rule
    **/
    public openapisdk.models.operations.CreateNetworkSwitchQosRuleResponse createNetworkSwitchQosRule(openapisdk.models.operations.CreateNetworkSwitchQosRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchQosRuleResponse res = new openapisdk.models.operations.CreateNetworkSwitchQosRuleResponse() {{
            createNetworkSwitchQosRule201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchQosRule201ApplicationJSONObject = out;
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
     * createNetworkSwitchStack - Create a stack
     *
     * Create a stack
    **/
    public openapisdk.models.operations.CreateNetworkSwitchStackResponse createNetworkSwitchStack(openapisdk.models.operations.CreateNetworkSwitchStackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkSwitchStackResponse res = new openapisdk.models.operations.CreateNetworkSwitchStackResponse() {{
            createNetworkSwitchStack201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkSwitchStack201ApplicationJSONObject = out;
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
     * cycleDeviceSwitchPorts - Cycle a set of switch ports
     *
     * Cycle a set of switch ports
    **/
    public openapisdk.models.operations.CycleDeviceSwitchPortsResponse cycleDeviceSwitchPorts(openapisdk.models.operations.CycleDeviceSwitchPortsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports/cycle", request.pathParams);
        
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

        openapisdk.models.operations.CycleDeviceSwitchPortsResponse res = new openapisdk.models.operations.CycleDeviceSwitchPortsResponse() {{
            cycleDeviceSwitchPorts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.cycleDeviceSwitchPorts200ApplicationJSONObject = out;
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
     * deleteNetworkSwitchAccessPolicy - Delete an access policy for a switch network
     *
     * Delete an access policy for a switch network
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchAccessPolicyResponse deleteNetworkSwitchAccessPolicy(openapisdk.models.operations.DeleteNetworkSwitchAccessPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchAccessPolicyResponse res = new openapisdk.models.operations.DeleteNetworkSwitchAccessPolicyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteNetworkSwitchLinkAggregation - Split a link aggregation group into separate ports
     *
     * Split a link aggregation group into separate ports
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse deleteNetworkSwitchLinkAggregation(openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.DeleteNetworkSwitchLinkAggregationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
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
     * deleteNetworkSwitchQosRule - Delete a quality of service rule
     *
     * Delete a quality of service rule
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchQosRuleResponse deleteNetworkSwitchQosRule(openapisdk.models.operations.DeleteNetworkSwitchQosRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchQosRuleResponse res = new openapisdk.models.operations.DeleteNetworkSwitchQosRuleResponse() {{
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
     * deleteNetworkSwitchStack - Delete a stack
     *
     * Delete a stack
    **/
    public openapisdk.models.operations.DeleteNetworkSwitchStackResponse deleteNetworkSwitchStack(openapisdk.models.operations.DeleteNetworkSwitchStackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkSwitchStackResponse res = new openapisdk.models.operations.DeleteNetworkSwitchStackResponse() {{
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
     * getDeviceSwitchPort - Return a switch port
     *
     * Return a switch port
    **/
    public openapisdk.models.operations.GetDeviceSwitchPortResponse getDeviceSwitchPort(openapisdk.models.operations.GetDeviceSwitchPortRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports/{portId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchPortResponse res = new openapisdk.models.operations.GetDeviceSwitchPortResponse() {{
            getDeviceSwitchPort200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchPort200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchPorts - List the switch ports for a switch
     *
     * List the switch ports for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchPortsResponse getDeviceSwitchPorts(openapisdk.models.operations.GetDeviceSwitchPortsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchPortsResponse res = new openapisdk.models.operations.GetDeviceSwitchPortsResponse() {{
            getDeviceSwitchPorts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchPorts200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchPortsStatuses - Return the status for all the ports of a switch
     *
     * Return the status for all the ports of a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchPortsStatusesResponse getDeviceSwitchPortsStatuses(openapisdk.models.operations.GetDeviceSwitchPortsStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports/statuses", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceSwitchPortsStatusesResponse res = new openapisdk.models.operations.GetDeviceSwitchPortsStatusesResponse() {{
            getDeviceSwitchPortsStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchPortsStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceSwitchPortsStatusesPackets - Return the packet counters for all the ports of a switch
     *
     * Return the packet counters for all the ports of a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse getDeviceSwitchPortsStatusesPackets(openapisdk.models.operations.GetDeviceSwitchPortsStatusesPacketsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports/statuses/packets", request.pathParams);
        
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

        openapisdk.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse res = new openapisdk.models.operations.GetDeviceSwitchPortsStatusesPacketsResponse() {{
            getDeviceSwitchPortsStatusesPackets200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchPortsStatusesPackets200ApplicationJSONObject = out;
            }
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
     * getDeviceSwitchWarmSpare - Return warm spare configuration for a switch
     *
     * Return warm spare configuration for a switch
    **/
    public openapisdk.models.operations.GetDeviceSwitchWarmSpareResponse getDeviceSwitchWarmSpare(openapisdk.models.operations.GetDeviceSwitchWarmSpareRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/warmSpare", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceSwitchWarmSpareResponse res = new openapisdk.models.operations.GetDeviceSwitchWarmSpareResponse() {{
            getDeviceSwitchWarmSpare200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceSwitchWarmSpare200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchAccessControlLists - Return the access control lists for a MS network
     *
     * Return the access control lists for a MS network
    **/
    public openapisdk.models.operations.GetNetworkSwitchAccessControlListsResponse getNetworkSwitchAccessControlLists(openapisdk.models.operations.GetNetworkSwitchAccessControlListsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessControlLists", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchAccessControlListsResponse res = new openapisdk.models.operations.GetNetworkSwitchAccessControlListsResponse() {{
            getNetworkSwitchAccessControlLists200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchAccessControlLists200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchAccessPolicies - List the access policies for a switch network
     *
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
    **/
    public openapisdk.models.operations.GetNetworkSwitchAccessPoliciesResponse getNetworkSwitchAccessPolicies(openapisdk.models.operations.GetNetworkSwitchAccessPoliciesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessPolicies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchAccessPoliciesResponse res = new openapisdk.models.operations.GetNetworkSwitchAccessPoliciesResponse() {{
            getNetworkSwitchAccessPolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchAccessPolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchAccessPolicy - Return a specific access policy for a switch network
     *
     * Return a specific access policy for a switch network
    **/
    public openapisdk.models.operations.GetNetworkSwitchAccessPolicyResponse getNetworkSwitchAccessPolicy(openapisdk.models.operations.GetNetworkSwitchAccessPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchAccessPolicyResponse res = new openapisdk.models.operations.GetNetworkSwitchAccessPolicyResponse() {{
            getNetworkSwitchAccessPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchAccessPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchAlternateManagementInterface - Return the switch alternate management interface for the network
     *
     * Return the switch alternate management interface for the network
    **/
    public openapisdk.models.operations.GetNetworkSwitchAlternateManagementInterfaceResponse getNetworkSwitchAlternateManagementInterface(openapisdk.models.operations.GetNetworkSwitchAlternateManagementInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/alternateManagementInterface", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchAlternateManagementInterfaceResponse res = new openapisdk.models.operations.GetNetworkSwitchAlternateManagementInterfaceResponse() {{
            getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchDhcpServerPolicy - Return the DHCP server policy
     *
     * Return the DHCP server policy
    **/
    public openapisdk.models.operations.GetNetworkSwitchDhcpServerPolicyResponse getNetworkSwitchDhcpServerPolicy(openapisdk.models.operations.GetNetworkSwitchDhcpServerPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/dhcpServerPolicy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchDhcpServerPolicyResponse res = new openapisdk.models.operations.GetNetworkSwitchDhcpServerPolicyResponse() {{
            getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchDhcpServerPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchDscpToCosMappings - Return the DSCP to CoS mappings
     *
     * Return the DSCP to CoS mappings
    **/
    public openapisdk.models.operations.GetNetworkSwitchDscpToCosMappingsResponse getNetworkSwitchDscpToCosMappings(openapisdk.models.operations.GetNetworkSwitchDscpToCosMappingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/dscpToCosMappings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchDscpToCosMappingsResponse res = new openapisdk.models.operations.GetNetworkSwitchDscpToCosMappingsResponse() {{
            getNetworkSwitchDscpToCosMappings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchDscpToCosMappings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchLinkAggregations - List link aggregation groups
     *
     * List link aggregation groups
    **/
    public openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse getNetworkSwitchLinkAggregations(openapisdk.models.operations.GetNetworkSwitchLinkAggregationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse res = new openapisdk.models.operations.GetNetworkSwitchLinkAggregationsResponse() {{
            getNetworkSwitchLinkAggregations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchLinkAggregations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchMtu - Return the MTU configuration
     *
     * Return the MTU configuration
    **/
    public openapisdk.models.operations.GetNetworkSwitchMtuResponse getNetworkSwitchMtu(openapisdk.models.operations.GetNetworkSwitchMtuRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/mtu", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchMtuResponse res = new openapisdk.models.operations.GetNetworkSwitchMtuResponse() {{
            getNetworkSwitchMtu200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchMtu200ApplicationJSONObject = out;
            }
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
     * getNetworkSwitchQosRule - Return a quality of service rule
     *
     * Return a quality of service rule
    **/
    public openapisdk.models.operations.GetNetworkSwitchQosRuleResponse getNetworkSwitchQosRule(openapisdk.models.operations.GetNetworkSwitchQosRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchQosRuleResponse res = new openapisdk.models.operations.GetNetworkSwitchQosRuleResponse() {{
            getNetworkSwitchQosRule200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchQosRule200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchQosRules - List quality of service rules
     *
     * List quality of service rules
    **/
    public openapisdk.models.operations.GetNetworkSwitchQosRulesResponse getNetworkSwitchQosRules(openapisdk.models.operations.GetNetworkSwitchQosRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchQosRulesResponse res = new openapisdk.models.operations.GetNetworkSwitchQosRulesResponse() {{
            getNetworkSwitchQosRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchQosRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchQosRulesOrder - Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * Return the quality of service rule IDs by order in which they will be processed by the switch
    **/
    public openapisdk.models.operations.GetNetworkSwitchQosRulesOrderResponse getNetworkSwitchQosRulesOrder(openapisdk.models.operations.GetNetworkSwitchQosRulesOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules/order", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchQosRulesOrderResponse res = new openapisdk.models.operations.GetNetworkSwitchQosRulesOrderResponse() {{
            getNetworkSwitchQosRulesOrder200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchQosRulesOrder200ApplicationJSONObject = out;
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
     * getNetworkSwitchSettings - Returns the switch network settings
     *
     * Returns the switch network settings
    **/
    public openapisdk.models.operations.GetNetworkSwitchSettingsResponse getNetworkSwitchSettings(openapisdk.models.operations.GetNetworkSwitchSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchSettingsResponse res = new openapisdk.models.operations.GetNetworkSwitchSettingsResponse() {{
            getNetworkSwitchSettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchSettings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStack - Show a switch stack
     *
     * Show a switch stack
    **/
    public openapisdk.models.operations.GetNetworkSwitchStackResponse getNetworkSwitchStack(openapisdk.models.operations.GetNetworkSwitchStackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStackResponse res = new openapisdk.models.operations.GetNetworkSwitchStackResponse() {{
            getNetworkSwitchStack200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStack200ApplicationJSONObject = out;
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
     * getNetworkSwitchStacks - List the switch stacks in a network
     *
     * List the switch stacks in a network
    **/
    public openapisdk.models.operations.GetNetworkSwitchStacksResponse getNetworkSwitchStacks(openapisdk.models.operations.GetNetworkSwitchStacksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStacksResponse res = new openapisdk.models.operations.GetNetworkSwitchStacksResponse() {{
            getNetworkSwitchStacks200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStacks200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStormControl - Return the storm control configuration for a switch network
     *
     * Return the storm control configuration for a switch network
    **/
    public openapisdk.models.operations.GetNetworkSwitchStormControlResponse getNetworkSwitchStormControl(openapisdk.models.operations.GetNetworkSwitchStormControlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stormControl", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStormControlResponse res = new openapisdk.models.operations.GetNetworkSwitchStormControlResponse() {{
            getNetworkSwitchStormControl200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStormControl200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkSwitchStp - Returns STP settings
     *
     * Returns STP settings
    **/
    public openapisdk.models.operations.GetNetworkSwitchStpResponse getNetworkSwitchStp(openapisdk.models.operations.GetNetworkSwitchStpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkSwitchStpResponse res = new openapisdk.models.operations.GetNetworkSwitchStpResponse() {{
            getNetworkSwitchStp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkSwitchStp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigTemplateSwitchProfilePort - Return a switch profile port
     *
     * Return a switch profile port
    **/
    public openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse getOrganizationConfigTemplateSwitchProfilePort(openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse res = new openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortResponse() {{
            getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigTemplateSwitchProfilePorts - Return all the ports of a switch profile
     *
     * Return all the ports of a switch profile
    **/
    public openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse getOrganizationConfigTemplateSwitchProfilePorts(openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse res = new openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse() {{
            getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigTemplateSwitchProfilePorts200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigTemplateSwitchProfiles - List the switch profiles for your switch template configuration
     *
     * List the switch profiles for your switch template configuration
    **/
    public openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse getOrganizationConfigTemplateSwitchProfiles(openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse res = new openapisdk.models.operations.GetOrganizationConfigTemplateSwitchProfilesResponse() {{
            getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigTemplateSwitchProfiles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * removeNetworkSwitchStack - Remove a switch from a stack
     *
     * Remove a switch from a stack
    **/
    public openapisdk.models.operations.RemoveNetworkSwitchStackResponse removeNetworkSwitchStack(openapisdk.models.operations.RemoveNetworkSwitchStackRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stacks/{switchStackId}/remove", request.pathParams);
        
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

        openapisdk.models.operations.RemoveNetworkSwitchStackResponse res = new openapisdk.models.operations.RemoveNetworkSwitchStackResponse() {{
            removeNetworkSwitchStack200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.removeNetworkSwitchStack200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceSwitchPort - Update a switch port
     *
     * Update a switch port
    **/
    public openapisdk.models.operations.UpdateDeviceSwitchPortResponse updateDeviceSwitchPort(openapisdk.models.operations.UpdateDeviceSwitchPortRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/ports/{portId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceSwitchPortResponse res = new openapisdk.models.operations.UpdateDeviceSwitchPortResponse() {{
            updateDeviceSwitchPort200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceSwitchPort200ApplicationJSONObject = out;
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
     * updateDeviceSwitchWarmSpare - Update warm spare configuration for a switch
     *
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
    **/
    public openapisdk.models.operations.UpdateDeviceSwitchWarmSpareResponse updateDeviceSwitchWarmSpare(openapisdk.models.operations.UpdateDeviceSwitchWarmSpareRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/switch/warmSpare", request.pathParams);
        
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

        openapisdk.models.operations.UpdateDeviceSwitchWarmSpareResponse res = new openapisdk.models.operations.UpdateDeviceSwitchWarmSpareResponse() {{
            updateDeviceSwitchWarmSpare200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceSwitchWarmSpare200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchAccessControlLists - Update the access control lists for a MS network
     *
     * Update the access control lists for a MS network
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchAccessControlListsResponse updateNetworkSwitchAccessControlLists(openapisdk.models.operations.UpdateNetworkSwitchAccessControlListsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessControlLists", request.pathParams);
        
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

        openapisdk.models.operations.UpdateNetworkSwitchAccessControlListsResponse res = new openapisdk.models.operations.UpdateNetworkSwitchAccessControlListsResponse() {{
            updateNetworkSwitchAccessControlLists200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchAccessControlLists200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchAccessPolicy - Update an access policy for a switch network
     *
     * Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchAccessPolicyResponse updateNetworkSwitchAccessPolicy(openapisdk.models.operations.UpdateNetworkSwitchAccessPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/accessPolicies/{accessPolicyNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchAccessPolicyResponse res = new openapisdk.models.operations.UpdateNetworkSwitchAccessPolicyResponse() {{
            updateNetworkSwitchAccessPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchAccessPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchAlternateManagementInterface - Update the switch alternate management interface for the network
     *
     * Update the switch alternate management interface for the network
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse updateNetworkSwitchAlternateManagementInterface(openapisdk.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/alternateManagementInterface", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse res = new openapisdk.models.operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse() {{
            updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchAlternateManagementInterface200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchDhcpServerPolicy - Update the DHCP server policy
     *
     * Update the DHCP server policy
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchDhcpServerPolicyResponse updateNetworkSwitchDhcpServerPolicy(openapisdk.models.operations.UpdateNetworkSwitchDhcpServerPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/dhcpServerPolicy", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchDhcpServerPolicyResponse res = new openapisdk.models.operations.UpdateNetworkSwitchDhcpServerPolicyResponse() {{
            updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchDscpToCosMappings - Update the DSCP to CoS mappings
     *
     * Update the DSCP to CoS mappings
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchDscpToCosMappingsResponse updateNetworkSwitchDscpToCosMappings(openapisdk.models.operations.UpdateNetworkSwitchDscpToCosMappingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/dscpToCosMappings", request.pathParams);
        
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

        openapisdk.models.operations.UpdateNetworkSwitchDscpToCosMappingsResponse res = new openapisdk.models.operations.UpdateNetworkSwitchDscpToCosMappingsResponse() {{
            updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchDscpToCosMappings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchLinkAggregation - Update a link aggregation group
     *
     * Update a link aggregation group
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse updateNetworkSwitchLinkAggregation(openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/linkAggregations/{linkAggregationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse res = new openapisdk.models.operations.UpdateNetworkSwitchLinkAggregationResponse() {{
            updateNetworkSwitchLinkAggregation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchLinkAggregation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchMtu - Update the MTU configuration
     *
     * Update the MTU configuration
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchMtuResponse updateNetworkSwitchMtu(openapisdk.models.operations.UpdateNetworkSwitchMtuRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/mtu", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchMtuResponse res = new openapisdk.models.operations.UpdateNetworkSwitchMtuResponse() {{
            updateNetworkSwitchMtu200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchMtu200ApplicationJSONObject = out;
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
	
	
    /**
     * updateNetworkSwitchQosRule - Update a quality of service rule
     *
     * Update a quality of service rule
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchQosRuleResponse updateNetworkSwitchQosRule(openapisdk.models.operations.UpdateNetworkSwitchQosRuleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules/{qosRuleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchQosRuleResponse res = new openapisdk.models.operations.UpdateNetworkSwitchQosRuleResponse() {{
            updateNetworkSwitchQosRule200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchQosRule200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchQosRulesOrder - Update the order in which the rules should be processed by the switch
     *
     * Update the order in which the rules should be processed by the switch
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchQosRulesOrderResponse updateNetworkSwitchQosRulesOrder(openapisdk.models.operations.UpdateNetworkSwitchQosRulesOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/qosRules/order", request.pathParams);
        
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

        openapisdk.models.operations.UpdateNetworkSwitchQosRulesOrderResponse res = new openapisdk.models.operations.UpdateNetworkSwitchQosRulesOrderResponse() {{
            updateNetworkSwitchQosRulesOrder200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchQosRulesOrder200ApplicationJSONObject = out;
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
     * updateNetworkSwitchSettings - Update switch network settings
     *
     * Update switch network settings
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchSettingsResponse updateNetworkSwitchSettings(openapisdk.models.operations.UpdateNetworkSwitchSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchSettingsResponse res = new openapisdk.models.operations.UpdateNetworkSwitchSettingsResponse() {{
            updateNetworkSwitchSettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchSettings200ApplicationJSONObject = out;
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
	
	
    /**
     * updateNetworkSwitchStormControl - Update the storm control configuration for a switch network
     *
     * Update the storm control configuration for a switch network
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchStormControlResponse updateNetworkSwitchStormControl(openapisdk.models.operations.UpdateNetworkSwitchStormControlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stormControl", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchStormControlResponse res = new openapisdk.models.operations.UpdateNetworkSwitchStormControlResponse() {{
            updateNetworkSwitchStormControl200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchStormControl200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkSwitchStp - Updates STP settings
     *
     * Updates STP settings
    **/
    public openapisdk.models.operations.UpdateNetworkSwitchStpResponse updateNetworkSwitchStp(openapisdk.models.operations.UpdateNetworkSwitchStpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/switch/stp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkSwitchStpResponse res = new openapisdk.models.operations.UpdateNetworkSwitchStpResponse() {{
            updateNetworkSwitchStp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkSwitchStp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationConfigTemplateSwitchProfilePort - Update a switch profile port
     *
     * Update a switch profile port
    **/
    public openapisdk.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse updateOrganizationConfigTemplateSwitchProfilePort(openapisdk.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}/switch/profiles/{profileId}/ports/{portId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse res = new openapisdk.models.operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse() {{
            updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationConfigTemplateSwitchProfilePort200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}