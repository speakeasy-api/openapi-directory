package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class LoadBalancerActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public LoadBalancerActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getLoadBalancersIdActions - Get all Actions for a Load Balancer
     *
     * Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetLoadBalancersIdActionsResponse getLoadBalancersIdActions(openapisdk.models.operations.GetLoadBalancersIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions", request.pathParams);
        
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

        openapisdk.models.operations.GetLoadBalancersIdActionsResponse res = new openapisdk.models.operations.GetLoadBalancersIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLoadBalancersIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLoadBalancersIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getLoadBalancersIdActionsActionId - Get an Action for a Load Balancer
     *
     * Returns a specific Action for a Load Balancer.
    **/
    public openapisdk.models.operations.GetLoadBalancersIdActionsActionIdResponse getLoadBalancersIdActionsActionId(openapisdk.models.operations.GetLoadBalancersIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetLoadBalancersIdActionsActionIdResponse res = new openapisdk.models.operations.GetLoadBalancersIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetLoadBalancersIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetLoadBalancersIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsAddService - Add Service
     *
     * Adds a service to a Load Balancer.
     * 
     * #### Call specific error codes
     * 
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceResponse postLoadBalancersIdActionsAddService(openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/add_service", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsAddServiceActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsAddTarget - Add Target
     *
     * Adds a target to a Load Balancer.
     * 
     * #### Call specific error codes
     * 
     * | Code                                    | Description                                                                                           |
     * |-----------------------------------------|-------------------------------------------------------------------------------------------------------|
     * | `cloud_resource_ip_not_allowed`         | The IP you are trying to add as a target belongs to a Hetzner Cloud resource                          |
     * | `ip_not_owned`                          | The IP you are trying to add as a target is not owned by the Project owner                            |
     * | `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network                                                        |
     * | `robot_unavailable`                     | Robot was not available. The caller may retry the operation after a short delay.                      |
     * | `server_not_attached_to_network`        | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
     * | `target_already_defined`                | The Load Balancer target you are trying to define is already defined                                  |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetResponse postLoadBalancersIdActionsAddTarget(openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/add_target", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsAddTargetActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsAttachToNetwork - Attach a Load Balancer to a Network
     *
     * Attach a Load Balancer to a Network.
     * 
     * **Call specific error codes**
     * 
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `load_balancer_already_attached` | The Load Balancer is already attached to a network                    |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Load Balancer within the network |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkResponse postLoadBalancersIdActionsAttachToNetwork(openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/attach_to_network", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsAttachToNetworkActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsChangeAlgorithm - Change Algorithm
     *
     * Change the algorithm that determines to which target new requests are sent.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmResponse postLoadBalancersIdActionsChangeAlgorithm(openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/change_algorithm", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsChangeAlgorithmActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsChangeDnsPtr - Change reverse DNS entry for this Load Balancer
     *
     * Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.
     * 
     * Floating IPs assigned to the Server are not affected by this.
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrResponse postLoadBalancersIdActionsChangeDnsPtr(openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/change_dns_ptr", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsChangeDnsPtrActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsChangeProtection - Change Load Balancer Protection
     *
     * Changes the protection configuration of a Load Balancer.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionResponse postLoadBalancersIdActionsChangeProtection(openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/change_protection", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsChangeProtectionActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsChangeType - Change the Type of a Load Balancer
     *
     * Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.
     * 
     * **Call specific error codes**
     * 
     * | Code                         | Description                                                     |
     * |------------------------------|-----------------------------------------------------------------|
     * | `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeResponse postLoadBalancersIdActionsChangeType(openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/change_type", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsChangeTypeActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsDeleteService - Delete Service
     *
     * Delete a service of a Load Balancer.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceResponse postLoadBalancersIdActionsDeleteService(openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/delete_service", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsDeleteServiceActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsDetachFromNetwork - Detach a Load Balancer from a Network
     *
     * Detaches a Load Balancer from a network.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkResponse postLoadBalancersIdActionsDetachFromNetwork(openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/detach_from_network", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsDetachFromNetworkActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsDisablePublicInterface - Disable the public interface of a Load Balancer
     *
     * Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.
     * 
     * #### Call specific error codes
     * 
     * | Code                                      | Description                                                                    |
     * |-------------------------------------------|--------------------------------------------------------------------------------|
     * | `load_balancer_not_attached_to_network`   |  The Load Balancer is not attached to a network                                |
     * | `targets_without_use_private_ip`          | The Load Balancer has targets that use the public IP instead of the private IP |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse postLoadBalancersIdActionsDisablePublicInterface(openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/disable_public_interface", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsDisablePublicInterfaceActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsEnablePublicInterface - Enable the public interface of a Load Balancer
     *
     * Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse postLoadBalancersIdActionsEnablePublicInterface(openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/enable_public_interface", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsEnablePublicInterfaceActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsRemoveTarget - Remove Target
     *
     * Removes a target from a Load Balancer.
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetResponse postLoadBalancersIdActionsRemoveTarget(openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/remove_target", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsRemoveTargetActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postLoadBalancersIdActionsUpdateService - Update Service
     *
     * Updates a Load Balancer Service.
     * 
     * #### Call specific error codes
     * 
     * | Code                       | Description                                             |
     * |----------------------------|---------------------------------------------------------|
     * | `source_port_already_used` | The source port you are trying to add is already in use |
     * 
    **/
    public openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceResponse postLoadBalancersIdActionsUpdateService(openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/load_balancers/{id}/actions/update_service", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceResponse res = new openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostLoadBalancersIdActionsUpdateServiceActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}