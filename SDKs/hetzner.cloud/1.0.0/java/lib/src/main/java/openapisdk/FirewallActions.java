package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class FirewallActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FirewallActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getFirewallsIdActions - Get all Actions for a Firewall
     *
     * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetFirewallsIdActionsResponse getFirewallsIdActions(openapisdk.models.operations.GetFirewallsIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}/actions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFirewallsIdActionsResponse res = new openapisdk.models.operations.GetFirewallsIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFirewallsIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFirewallsIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getFirewallsIdActionsActionId - Get an Action for a Firewall
     *
     * Returns a specific Action for a Firewall.
    **/
    public openapisdk.models.operations.GetFirewallsIdActionsActionIdResponse getFirewallsIdActionsActionId(openapisdk.models.operations.GetFirewallsIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetFirewallsIdActionsActionIdResponse res = new openapisdk.models.operations.GetFirewallsIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetFirewallsIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetFirewallsIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFirewallsIdActionsApplyToResources - Apply to Resources
     *
     * Applies one Firewall to multiple resources.
     * 
     * Currently servers (public network interface) and label selectors are supported.
     * 
     * #### Call specific error codes
     * 
     * | Code                        | Description                                             |
     * |-----------------------------|---------------------------------------------------------|
     * | `firewall_already_applied`  | Firewall was already applied on resource                |
     * | `incompatible_network_type` | The Network type is incompatible for the given resource |
     * 
    **/
    public openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesResponse postFirewallsIdActionsApplyToResources(openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}/actions/apply_to_resources", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesResponse res = new openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFirewallsIdActionsApplyToResourcesActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFirewallsIdActionsRemoveFromResources - Remove from Resources
     *
     * Removes one Firewall from multiple resources.
     * 
     * Currently only Servers (and their public network interfaces) are supported.
     * 
     * #### Call specific error codes
     * 
     * | Code                       | Description                                    |
     * |----------------------------|------------------------------------------------|
     * | `firewall_already_removed` | Firewall was already removed from the resource |
     * 
    **/
    public openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesResponse postFirewallsIdActionsRemoveFromResources(openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}/actions/remove_from_resources", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesResponse res = new openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFirewallsIdActionsRemoveFromResourcesActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postFirewallsIdActionsSetRules - Set Rules
     *
     * Sets the rules of a Firewall.
     * 
     * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
     * 
    **/
    public openapisdk.models.operations.PostFirewallsIdActionsSetRulesResponse postFirewallsIdActionsSetRules(openapisdk.models.operations.PostFirewallsIdActionsSetRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/firewalls/{id}/actions/set_rules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostFirewallsIdActionsSetRulesResponse res = new openapisdk.models.operations.PostFirewallsIdActionsSetRulesResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostFirewallsIdActionsSetRulesActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostFirewallsIdActionsSetRulesActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
}