package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class L7FirewallRules {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public L7FirewallRules(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getNetworkApplianceFirewallL7FirewallRules - List the MX L7 firewall rules for an MX network
     *
     * List the MX L7 firewall rules for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesResponse getNetworkApplianceFirewallL7FirewallRules(openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesResponse res = new openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesResponse() {{
            getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkApplianceFirewallL7FirewallRulesApplicationCategories - Return the L7 firewall application categories and their associated applications for an MX network
     *
     * Return the L7 firewall application categories and their associated applications for an MX network
    **/
    public openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/firewall/l7FirewallRules/applicationCategories", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse res = new openapisdk.models.operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse() {{
            getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJSONObject = out;
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
     * updateNetworkApplianceFirewallL7FirewallRules - Update the MX L7 firewall rules for an MX network
     *
     * Update the MX L7 firewall rules for an MX network
    **/
    public openapisdk.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse updateNetworkApplianceFirewallL7FirewallRules(openapisdk.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/appliance/firewall/l7FirewallRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse res = new openapisdk.models.operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse() {{
            updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkApplianceFirewallL7FirewallRules200ApplicationJSONObject = out;
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
	
}