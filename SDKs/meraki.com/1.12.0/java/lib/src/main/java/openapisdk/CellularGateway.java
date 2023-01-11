package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class CellularGateway {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CellularGateway(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getDeviceCellularGatewayLan - Show the LAN Settings of a MG
     *
     * Show the LAN Settings of a MG
    **/
    public openapisdk.models.operations.GetDeviceCellularGatewayLanResponse getDeviceCellularGatewayLan(openapisdk.models.operations.GetDeviceCellularGatewayLanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/cellularGateway/lan", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceCellularGatewayLanResponse res = new openapisdk.models.operations.GetDeviceCellularGatewayLanResponse() {{
            getDeviceCellularGatewayLan200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCellularGatewayLan200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getDeviceCellularGatewayPortForwardingRules - Returns the port forwarding rules for a single MG.
     *
     * Returns the port forwarding rules for a single MG.
    **/
    public openapisdk.models.operations.GetDeviceCellularGatewayPortForwardingRulesResponse getDeviceCellularGatewayPortForwardingRules(openapisdk.models.operations.GetDeviceCellularGatewayPortForwardingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/cellularGateway/portForwardingRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceCellularGatewayPortForwardingRulesResponse res = new openapisdk.models.operations.GetDeviceCellularGatewayPortForwardingRulesResponse() {{
            getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCellularGatewayConnectivityMonitoringDestinations - Return the connectivity testing destinations for an MG network
     *
     * Return the connectivity testing destinations for an MG network
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse getNetworkCellularGatewayConnectivityMonitoringDestinations(openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse() {{
            getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCellularGatewayDhcp - List common DHCP settings of MGs
     *
     * List common DHCP settings of MGs
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewayDhcpResponse getNetworkCellularGatewayDhcp(openapisdk.models.operations.GetNetworkCellularGatewayDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewayDhcpResponse res = new openapisdk.models.operations.GetNetworkCellularGatewayDhcpResponse() {{
            getNetworkCellularGatewayDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewayDhcp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCellularGatewaySubnetPool - Return the subnet pool and mask configured for MGs in the network.
     *
     * Return the subnet pool and mask configured for MGs in the network.
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse getNetworkCellularGatewaySubnetPool(openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/subnetPool", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse res = new openapisdk.models.operations.GetNetworkCellularGatewaySubnetPoolResponse() {{
            getNetworkCellularGatewaySubnetPool200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCellularGatewayUplink - Returns the uplink settings for your MG network.
     *
     * Returns the uplink settings for your MG network.
    **/
    public openapisdk.models.operations.GetNetworkCellularGatewayUplinkResponse getNetworkCellularGatewayUplink(openapisdk.models.operations.GetNetworkCellularGatewayUplinkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/uplink", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCellularGatewayUplinkResponse res = new openapisdk.models.operations.GetNetworkCellularGatewayUplinkResponse() {{
            getNetworkCellularGatewayUplink200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCellularGatewayUplink200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationCellularGatewayUplinkStatuses - List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * List the uplink status of every Meraki MG cellular gateway in the organization
    **/
    public openapisdk.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse getOrganizationCellularGatewayUplinkStatuses(openapisdk.models.operations.GetOrganizationCellularGatewayUplinkStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/cellularGateway/uplink/statuses", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse res = new openapisdk.models.operations.GetOrganizationCellularGatewayUplinkStatusesResponse() {{
            getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceCellularGatewayLan - Update the LAN Settings for a single MG.
     *
     * Update the LAN Settings for a single MG.
    **/
    public openapisdk.models.operations.UpdateDeviceCellularGatewayLanResponse updateDeviceCellularGatewayLan(openapisdk.models.operations.UpdateDeviceCellularGatewayLanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/cellularGateway/lan", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceCellularGatewayLanResponse res = new openapisdk.models.operations.UpdateDeviceCellularGatewayLanResponse() {{
            updateDeviceCellularGatewayLan200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceCellularGatewayLan200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceCellularGatewayPortForwardingRules - Updates the port forwarding rules for a single MG.
     *
     * Updates the port forwarding rules for a single MG.
    **/
    public openapisdk.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse updateDeviceCellularGatewayPortForwardingRules(openapisdk.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/cellularGateway/portForwardingRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse res = new openapisdk.models.operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse() {{
            updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceCellularGatewayPortForwardingRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewayConnectivityMonitoringDestinations - Update the connectivity testing destinations for an MG network
     *
     * Update the connectivity testing destinations for an MG network
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse updateNetworkCellularGatewayConnectivityMonitoringDestinations(openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/connectivityMonitoringDestinations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse() {{
            updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewayDhcp - Update common DHCP settings of MGs
     *
     * Update common DHCP settings of MGs
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewayDhcpResponse updateNetworkCellularGatewayDhcp(openapisdk.models.operations.UpdateNetworkCellularGatewayDhcpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/dhcp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewayDhcpResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewayDhcpResponse() {{
            updateNetworkCellularGatewayDhcp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewayDhcp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewaySubnetPool - Update the subnet pool and mask configuration for MGs in the network.
     *
     * Update the subnet pool and mask configuration for MGs in the network.
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse updateNetworkCellularGatewaySubnetPool(openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/subnetPool", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewaySubnetPoolResponse() {{
            updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewaySubnetPool200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCellularGatewayUplink - Updates the uplink settings for your MG network.
     *
     * Updates the uplink settings for your MG network.
    **/
    public openapisdk.models.operations.UpdateNetworkCellularGatewayUplinkResponse updateNetworkCellularGatewayUplink(openapisdk.models.operations.UpdateNetworkCellularGatewayUplinkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/cellularGateway/uplink", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCellularGatewayUplinkResponse res = new openapisdk.models.operations.UpdateNetworkCellularGatewayUplinkResponse() {{
            updateNetworkCellularGatewayUplink200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCellularGatewayUplink200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}