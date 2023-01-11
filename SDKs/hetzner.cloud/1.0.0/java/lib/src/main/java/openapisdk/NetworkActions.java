package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class NetworkActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public NetworkActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getNetworksIdActions - Get all Actions for a Network
     *
     * Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetNetworksIdActionsResponse getNetworksIdActions(openapisdk.models.operations.GetNetworksIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions", request.pathParams);
        
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

        openapisdk.models.operations.GetNetworksIdActionsResponse res = new openapisdk.models.operations.GetNetworksIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetNetworksIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetNetworksIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworksIdActionsActionId - Get an Action for a Network
     *
     * Returns a specific Action for a Network.
    **/
    public openapisdk.models.operations.GetNetworksIdActionsActionIdResponse getNetworksIdActionsActionId(openapisdk.models.operations.GetNetworksIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworksIdActionsActionIdResponse res = new openapisdk.models.operations.GetNetworksIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetNetworksIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetNetworksIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsAddRoute - Add a route to a Network
     *
     * Adds a route entry to a Network.
     * 
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsAddRouteResponse postNetworksIdActionsAddRoute(openapisdk.models.operations.PostNetworksIdActionsAddRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/add_route", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsAddRouteResponse res = new openapisdk.models.operations.PostNetworksIdActionsAddRouteResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsAddRouteActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsAddRouteActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsAddSubnet - Add a subnet to a Network
     *
     * Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
     * 
     * Note: if the parent Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsAddSubnetResponse postNetworksIdActionsAddSubnet(openapisdk.models.operations.PostNetworksIdActionsAddSubnetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/add_subnet", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsAddSubnetResponse res = new openapisdk.models.operations.PostNetworksIdActionsAddSubnetResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsAddSubnetActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsAddSubnetActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsChangeIpRange - Change IP range of a Network
     *
     * Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
     * 
     * For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
     * 
     * After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
     * 
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeResponse postNetworksIdActionsChangeIpRange(openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/change_ip_range", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeResponse res = new openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsChangeIpRangeActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsChangeProtection - Change Network Protection
     *
     * Changes the protection configuration of a Network.
     * 
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsChangeProtectionResponse postNetworksIdActionsChangeProtection(openapisdk.models.operations.PostNetworksIdActionsChangeProtectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/change_protection", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsChangeProtectionResponse res = new openapisdk.models.operations.PostNetworksIdActionsChangeProtectionResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsChangeProtectionActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsChangeProtectionActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsDeleteRoute - Delete a route from a Network
     *
     * Delete a route entry from a Network.
     * 
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsDeleteRouteResponse postNetworksIdActionsDeleteRoute(openapisdk.models.operations.PostNetworksIdActionsDeleteRouteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/delete_route", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsDeleteRouteResponse res = new openapisdk.models.operations.PostNetworksIdActionsDeleteRouteResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsDeleteRouteActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsDeleteRouteActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postNetworksIdActionsDeleteSubnet - Delete a subnet from a Network
     *
     * Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
     * 
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetResponse postNetworksIdActionsDeleteSubnet(openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{id}/actions/delete_subnet", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetResponse res = new openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostNetworksIdActionsDeleteSubnetActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}