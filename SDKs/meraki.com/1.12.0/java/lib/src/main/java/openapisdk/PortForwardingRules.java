package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortForwardingRules {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortForwardingRules(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
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
     * getNetworkApplianceFirewallPortForwardingRules - Return the port forwarding rules for an MX network
     *
     * Return the port forwarding rules for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse getNetworkApplianceFirewallPortForwardingRules(openapisdk.models.operations.GetNetworkApplianceFirewallPortForwardingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse res = new openapisdk.models.operations.GetNetworkApplianceFirewallPortForwardingRulesResponse() {{
            getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject = out;
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
     * updateNetworkApplianceFirewallPortForwardingRules - Update the port forwarding rules for an MX network
     *
     * Update the port forwarding rules for an MX network
    **/
    public openapisdk.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse updateNetworkApplianceFirewallPortForwardingRules(openapisdk.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/firewall/portForwardingRules", request.pathParams);
        
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

        openapisdk.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse res = new openapisdk.models.operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse() {{
            updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkApplianceFirewallPortForwardingRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}