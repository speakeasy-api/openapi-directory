package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Ssids {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Ssids(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkWirelessSsidIdentityPsk - Create an Identity PSK
     *
     * Create an Identity PSK
    **/
    public openapisdk.models.operations.CreateNetworkWirelessSsidIdentityPskResponse createNetworkWirelessSsidIdentityPsk(openapisdk.models.operations.CreateNetworkWirelessSsidIdentityPskRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkWirelessSsidIdentityPskResponse res = new openapisdk.models.operations.CreateNetworkWirelessSsidIdentityPskResponse() {{
            createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkWirelessSsidIdentityPsk201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkWirelessSsidIdentityPsk - Delete an Identity PSK
     *
     * Delete an Identity PSK
    **/
    public openapisdk.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse deleteNetworkWirelessSsidIdentityPsk(openapisdk.models.operations.DeleteNetworkWirelessSsidIdentityPskRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse res = new openapisdk.models.operations.DeleteNetworkWirelessSsidIdentityPskResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsid - Return a single MR SSID
     *
     * Return a single MR SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidResponse getNetworkWirelessSsid(openapisdk.models.operations.GetNetworkWirelessSsidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidResponse() {{
            getNetworkWirelessSsid200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsid200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidBonjourForwarding - List the Bonjour forwarding setting and rules for the SSID
     *
     * List the Bonjour forwarding setting and rules for the SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse getNetworkWirelessSsidBonjourForwarding(openapisdk.models.operations.GetNetworkWirelessSsidBonjourForwardingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidBonjourForwardingResponse() {{
            getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidDeviceTypeGroupPolicies - List the device type group policies for the SSID
     *
     * List the device type group policies for the SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse getNetworkWirelessSsidDeviceTypeGroupPolicies(openapisdk.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse() {{
            getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidEapOverride - Return the EAP overridden parameters for an SSID
     *
     * Return the EAP overridden parameters for an SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidEapOverrideResponse getNetworkWirelessSsidEapOverride(openapisdk.models.operations.GetNetworkWirelessSsidEapOverrideRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidEapOverrideResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidEapOverrideResponse() {{
            getNetworkWirelessSsidEapOverride200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidEapOverride200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidFirewallL3FirewallRules - Return the L3 firewall rules for an SSID on an MR network
     *
     * Return the L3 firewall rules for an SSID on an MR network
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse getNetworkWirelessSsidFirewallL3FirewallRules(openapisdk.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse() {{
            getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidFirewallL7FirewallRules - Return the L7 firewall rules for an SSID on an MR network
     *
     * Return the L7 firewall rules for an SSID on an MR network
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse getNetworkWirelessSsidFirewallL7FirewallRules(openapisdk.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse() {{
            getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidHotspot20 - Return the Hotspot 2.0 settings for an SSID
     *
     * Return the Hotspot 2.0 settings for an SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidHotspot20Response getNetworkWirelessSsidHotspot20(openapisdk.models.operations.GetNetworkWirelessSsidHotspot20Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidHotspot20Response res = new openapisdk.models.operations.GetNetworkWirelessSsidHotspot20Response() {{
            getNetworkWirelessSsidHotspot20200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidHotspot20200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidIdentityPsk - Return an Identity PSK
     *
     * Return an Identity PSK
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidIdentityPskResponse getNetworkWirelessSsidIdentityPsk(openapisdk.models.operations.GetNetworkWirelessSsidIdentityPskRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidIdentityPskResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidIdentityPskResponse() {{
            getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidIdentityPsk200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidIdentityPsks - List all Identity PSKs in a wireless network
     *
     * List all Identity PSKs in a wireless network
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidIdentityPsksResponse getNetworkWirelessSsidIdentityPsks(openapisdk.models.operations.GetNetworkWirelessSsidIdentityPsksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/identityPsks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidIdentityPsksResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidIdentityPsksResponse() {{
            getNetworkWirelessSsidIdentityPsks200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidIdentityPsks200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidSchedules - List the outage schedule for the SSID
     *
     * List the outage schedule for the SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidSchedulesResponse getNetworkWirelessSsidSchedules(openapisdk.models.operations.GetNetworkWirelessSsidSchedulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidSchedulesResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidSchedulesResponse() {{
            getNetworkWirelessSsidSchedules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidSchedules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidSplashSettingsResponse getNetworkWirelessSsidSplashSettings(openapisdk.models.operations.GetNetworkWirelessSsidSplashSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidSplashSettingsResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidSplashSettingsResponse() {{
            getNetworkWirelessSsidSplashSettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidSplashSettings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidTrafficShapingRules - Display the traffic shaping settings for a SSID on an MR network
     *
     * Display the traffic shaping settings for a SSID on an MR network
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidTrafficShapingRulesResponse getNetworkWirelessSsidTrafficShapingRules(openapisdk.models.operations.GetNetworkWirelessSsidTrafficShapingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidTrafficShapingRulesResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidTrafficShapingRulesResponse() {{
            getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsidVpn - List the VPN settings for the SSID.
     *
     * List the VPN settings for the SSID.
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidVpnResponse getNetworkWirelessSsidVpn(openapisdk.models.operations.GetNetworkWirelessSsidVpnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidVpnResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidVpnResponse() {{
            getNetworkWirelessSsidVpn200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsidVpn200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkWirelessSsids - List the MR SSIDs in a network
     *
     * List the MR SSIDs in a network
    **/
    public openapisdk.models.operations.GetNetworkWirelessSsidsResponse getNetworkWirelessSsids(openapisdk.models.operations.GetNetworkWirelessSsidsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkWirelessSsidsResponse res = new openapisdk.models.operations.GetNetworkWirelessSsidsResponse() {{
            getNetworkWirelessSsids200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkWirelessSsids200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsid - Update the attributes of an MR SSID
     *
     * Update the attributes of an MR SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidResponse updateNetworkWirelessSsid(openapisdk.models.operations.UpdateNetworkWirelessSsidRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidResponse() {{
            updateNetworkWirelessSsid200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsid200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidBonjourForwarding - Update the bonjour forwarding setting and rules for the SSID
     *
     * Update the bonjour forwarding setting and rules for the SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse updateNetworkWirelessSsidBonjourForwarding(openapisdk.models.operations.UpdateNetworkWirelessSsidBonjourForwardingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/bonjourForwarding", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidBonjourForwardingResponse() {{
            updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidDeviceTypeGroupPolicies - Update the device type group policies for the SSID
     *
     * Update the device type group policies for the SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse updateNetworkWirelessSsidDeviceTypeGroupPolicies(openapisdk.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/deviceTypeGroupPolicies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse() {{
            updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidDeviceTypeGroupPolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidEapOverride - Update the EAP overridden parameters for an SSID.
     *
     * Update the EAP overridden parameters for an SSID.
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse updateNetworkWirelessSsidEapOverride(openapisdk.models.operations.UpdateNetworkWirelessSsidEapOverrideRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/eapOverride", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidEapOverrideResponse() {{
            updateNetworkWirelessSsidEapOverride200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidEapOverride200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidFirewallL3FirewallRules - Update the L3 firewall rules of an SSID on an MR network
     *
     * Update the L3 firewall rules of an SSID on an MR network
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse updateNetworkWirelessSsidFirewallL3FirewallRules(openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/firewall/l3FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse() {{
            updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidFirewallL7FirewallRules - Update the L7 firewall rules of an SSID on an MR network
     *
     * Update the L7 firewall rules of an SSID on an MR network
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse updateNetworkWirelessSsidFirewallL7FirewallRules(openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/firewall/l7FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse() {{
            updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidHotspot20 - Update the Hotspot 2.0 settings of an SSID
     *
     * Update the Hotspot 2.0 settings of an SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidHotspot20Response updateNetworkWirelessSsidHotspot20(openapisdk.models.operations.UpdateNetworkWirelessSsidHotspot20Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/hotspot20", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidHotspot20Response res = new openapisdk.models.operations.UpdateNetworkWirelessSsidHotspot20Response() {{
            updateNetworkWirelessSsidHotspot20200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidHotspot20200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidIdentityPsk - Update an Identity PSK
     *
     * Update an Identity PSK
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse updateNetworkWirelessSsidIdentityPsk(openapisdk.models.operations.UpdateNetworkWirelessSsidIdentityPskRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/identityPsks/{identityPskId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidIdentityPskResponse() {{
            updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidSchedules - Update the outage schedule for the SSID
     *
     * Update the outage schedule for the SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidSchedulesResponse updateNetworkWirelessSsidSchedules(openapisdk.models.operations.UpdateNetworkWirelessSsidSchedulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/schedules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidSchedulesResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidSchedulesResponse() {{
            updateNetworkWirelessSsidSchedules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidSchedules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse updateNetworkWirelessSsidSplashSettings(openapisdk.models.operations.UpdateNetworkWirelessSsidSplashSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/splash/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidSplashSettingsResponse() {{
            updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidSplashSettings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidTrafficShapingRules - Update the traffic shaping settings for an SSID on an MR network
     *
     * Update the traffic shaping settings for an SSID on an MR network
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse updateNetworkWirelessSsidTrafficShapingRules(openapisdk.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/trafficShaping/rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse() {{
            updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidTrafficShapingRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkWirelessSsidVpn - Update the VPN settings for the SSID
     *
     * Update the VPN settings for the SSID
    **/
    public openapisdk.models.operations.UpdateNetworkWirelessSsidVpnResponse updateNetworkWirelessSsidVpn(openapisdk.models.operations.UpdateNetworkWirelessSsidVpnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/wireless/ssids/{number}/vpn", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkWirelessSsidVpnResponse res = new openapisdk.models.operations.UpdateNetworkWirelessSsidVpnResponse() {{
            updateNetworkWirelessSsidVpn200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkWirelessSsidVpn200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}