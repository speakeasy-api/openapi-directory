package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ServerActions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ServerActions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getServersIdActions - Get all Actions for a Server
     *
     * Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
    **/
    public openapisdk.models.operations.GetServersIdActionsResponse getServersIdActions(openapisdk.models.operations.GetServersIdActionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions", request.pathParams);
        
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

        openapisdk.models.operations.GetServersIdActionsResponse res = new openapisdk.models.operations.GetServersIdActionsResponse() {{
            actionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetServersIdActionsActionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetServersIdActionsActionsResponse.class);
                res.actionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getServersIdActionsActionId - Get an Action for a Server
     *
     * Returns a specific Action object for a Server.
    **/
    public openapisdk.models.operations.GetServersIdActionsActionIdResponse getServersIdActionsActionId(openapisdk.models.operations.GetServersIdActionsActionIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/{action_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetServersIdActionsActionIdResponse res = new openapisdk.models.operations.GetServersIdActionsActionIdResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetServersIdActionsActionIdActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetServersIdActionsActionIdActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsAddToPlacementGroup - Add a Server to a Placement Group
     *
     * Adds a Server to a Placement Group.
     * 
     * Server must be powered off for this command to succeed.
     * 
     * #### Call specific error codes
     * 
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupResponse postServersIdActionsAddToPlacementGroup(openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/add_to_placement_group", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupResponse res = new openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsAddToPlacementGroupActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsAttachIso - Attach an ISO to a Server
     *
     * Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.
     * 
     * Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsAttachIsoResponse postServersIdActionsAttachIso(openapisdk.models.operations.PostServersIdActionsAttachIsoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/attach_iso", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsAttachIsoResponse res = new openapisdk.models.operations.PostServersIdActionsAttachIsoResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsAttachIsoActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsAttachIsoActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsAttachToNetwork - Attach a Server to a Network
     *
     * Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.
     * 
     * The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.
     * 
     * Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.
     * 
     * **Call specific error codes**
     * 
     * | Code                             | Description                                                           |
     * |----------------------------------|-----------------------------------------------------------------------|
     * | `server_already_attached`        | The server is already attached to the network                         |
     * | `ip_not_available`               | The provided Network IP is not available                              |
     * | `no_subnet_available`            | No Subnet or IP is available for the Server within the network        |
     * | `networks_overlap`               | The network IP range overlaps with one of the server networks         |
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsAttachToNetworkResponse postServersIdActionsAttachToNetwork(openapisdk.models.operations.PostServersIdActionsAttachToNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/attach_to_network", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsAttachToNetworkResponse res = new openapisdk.models.operations.PostServersIdActionsAttachToNetworkResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsAttachToNetworkActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsAttachToNetworkActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsChangeAliasIps - Change alias IPs of a Network
     *
     * Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.
    **/
    public openapisdk.models.operations.PostServersIdActionsChangeAliasIpsResponse postServersIdActionsChangeAliasIps(openapisdk.models.operations.PostServersIdActionsChangeAliasIpsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/change_alias_ips", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsChangeAliasIpsResponse res = new openapisdk.models.operations.PostServersIdActionsChangeAliasIpsResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsChangeAliasIpsActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsChangeAliasIpsActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsChangeDnsPtr - Change reverse DNS entry for this Server
     *
     * Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.
     * 
     * Floating IPs assigned to the Server are not affected by this.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsChangeDnsPtrResponse postServersIdActionsChangeDnsPtr(openapisdk.models.operations.PostServersIdActionsChangeDnsPtrRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/change_dns_ptr", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsChangeDnsPtrResponse res = new openapisdk.models.operations.PostServersIdActionsChangeDnsPtrResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsChangeDnsPtrActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsChangeDnsPtrActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsChangeProtection - Change Server Protection
     *
     * Changes the protection configuration of the Server.
    **/
    public openapisdk.models.operations.PostServersIdActionsChangeProtectionResponse postServersIdActionsChangeProtection(openapisdk.models.operations.PostServersIdActionsChangeProtectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/change_protection", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsChangeProtectionResponse res = new openapisdk.models.operations.PostServersIdActionsChangeProtectionResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsChangeProtectionActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsChangeProtectionActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsChangeType - Change the Type of a Server
     *
     * Changes the type (Cores, RAM and disk sizes) of a Server.
     * 
     * Server must be powered off for this command to succeed.
     * 
     * This copies the content of its disk, and starts it again.
     * 
     * You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.
     * 
     * If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.
     * 
     * #### Call specific error codes
     * 
     * | Code                          | Description                                                          |
     * |-------------------------------|----------------------------------------------------------------------|
     * | `invalid_server_type`         | The server type does not fit for the given server or is deprecated   |
     * | `server_not_stopped`          | The action requires a stopped server                                 |
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsChangeTypeResponse postServersIdActionsChangeType(openapisdk.models.operations.PostServersIdActionsChangeTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/change_type", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsChangeTypeResponse res = new openapisdk.models.operations.PostServersIdActionsChangeTypeResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsChangeTypeActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsChangeTypeActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsCreateImage - Create Image from a Server
     *
     * Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.
     * 
     * To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.
     * 
     * You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create an `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsCreateImageResponse postServersIdActionsCreateImage(openapisdk.models.operations.PostServersIdActionsCreateImageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/create_image", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsCreateImageResponse res = new openapisdk.models.operations.PostServersIdActionsCreateImageResponse() {{
            postServersIdActionsCreateImage201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsCreateImage201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsCreateImage201ApplicationJson.class);
                res.postServersIdActionsCreateImage201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsDetachFromNetwork - Detach a Server from a Network
     *
     * Detaches a Server from a network. The interface for this network will vanish.
    **/
    public openapisdk.models.operations.PostServersIdActionsDetachFromNetworkResponse postServersIdActionsDetachFromNetwork(openapisdk.models.operations.PostServersIdActionsDetachFromNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/detach_from_network", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsDetachFromNetworkResponse res = new openapisdk.models.operations.PostServersIdActionsDetachFromNetworkResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsDetachFromNetworkActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsDetachFromNetworkActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsDetachIso - Detach an ISO from a Server
     *
     * Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`
    **/
    public openapisdk.models.operations.PostServersIdActionsDetachIsoResponse postServersIdActionsDetachIso(openapisdk.models.operations.PostServersIdActionsDetachIsoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/detach_iso", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsDetachIsoResponse res = new openapisdk.models.operations.PostServersIdActionsDetachIsoResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsDetachIsoActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsDetachIsoActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsDisableBackup - Disable Backups for a Server
     *
     * Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.
     * 
     * Caution: This immediately removes all existing backups for the Server!
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsDisableBackupResponse postServersIdActionsDisableBackup(openapisdk.models.operations.PostServersIdActionsDisableBackupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/disable_backup", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsDisableBackupResponse res = new openapisdk.models.operations.PostServersIdActionsDisableBackupResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsDisableBackupActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsDisableBackupActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsDisableRescue - Disable Rescue Mode for a Server
     *
     * Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.
     * 
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     * 
     * Disabling rescue mode will not reboot your Server — you will have to do this yourself.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsDisableRescueResponse postServersIdActionsDisableRescue(openapisdk.models.operations.PostServersIdActionsDisableRescueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/disable_rescue", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsDisableRescueResponse res = new openapisdk.models.operations.PostServersIdActionsDisableRescueResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsDisableRescueActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsDisableRescueActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsEnableBackup - Enable and Configure Backups for a Server
     *
     * Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.
     * 
     * Backups are automatically created daily.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsEnableBackupResponse postServersIdActionsEnableBackup(openapisdk.models.operations.PostServersIdActionsEnableBackupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/enable_backup", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsEnableBackupResponse res = new openapisdk.models.operations.PostServersIdActionsEnableBackupResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsEnableBackupActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsEnableBackupActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsEnableRescue - Enable Rescue Mode for a Server
     *
     * Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.
     * 
     * In case a Server cannot boot on its own you can use this to access a Server’s disks.
     * 
     * Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.
     * 
     * Enabling rescue mode will not [reboot](https://docs.hetzner.cloud/#server-actions-soft-reboot-a-server) your Server — you will have to do this yourself.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsEnableRescueResponse postServersIdActionsEnableRescue(openapisdk.models.operations.PostServersIdActionsEnableRescueRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/enable_rescue", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsEnableRescueResponse res = new openapisdk.models.operations.PostServersIdActionsEnableRescueResponse() {{
            postServersIdActionsEnableRescue201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsEnableRescue201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsEnableRescue201ApplicationJson.class);
                res.postServersIdActionsEnableRescue201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsPoweroff - Power off a Server
     *
     * Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.
    **/
    public openapisdk.models.operations.PostServersIdActionsPoweroffResponse postServersIdActionsPoweroff(openapisdk.models.operations.PostServersIdActionsPoweroffRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/poweroff", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsPoweroffResponse res = new openapisdk.models.operations.PostServersIdActionsPoweroffResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsPoweroffActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsPoweroffActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsPoweron - Power on a Server
     *
     * Starts a Server by turning its power on.
    **/
    public openapisdk.models.operations.PostServersIdActionsPoweronResponse postServersIdActionsPoweron(openapisdk.models.operations.PostServersIdActionsPoweronRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/poweron", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsPoweronResponse res = new openapisdk.models.operations.PostServersIdActionsPoweronResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsPoweronActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsPoweronActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsReboot - Soft-reboot a Server
     *
     * Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.
    **/
    public openapisdk.models.operations.PostServersIdActionsRebootResponse postServersIdActionsReboot(openapisdk.models.operations.PostServersIdActionsRebootRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/reboot", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsRebootResponse res = new openapisdk.models.operations.PostServersIdActionsRebootResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsRebootActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsRebootActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsRebuild - Rebuild a Server from an Image
     *
     * Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server
     * 
     * The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.
     * 
     * Your Server will automatically be powered off before the rebuild command executes.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsRebuildResponse postServersIdActionsRebuild(openapisdk.models.operations.PostServersIdActionsRebuildRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/rebuild", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsRebuildResponse res = new openapisdk.models.operations.PostServersIdActionsRebuildResponse() {{
            postServersIdActionsRebuild201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsRebuild201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsRebuild201ApplicationJson.class);
                res.postServersIdActionsRebuild201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsRemoveFromPlacementGroup - Remove from Placement Group
     *
     * Removes a Server from a Placement Group.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupResponse postServersIdActionsRemoveFromPlacementGroup(openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/remove_from_placement_group", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupResponse res = new openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsRemoveFromPlacementGroupActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsRequestConsole - Request Console for a Server
     *
     * Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.
    **/
    public openapisdk.models.operations.PostServersIdActionsRequestConsoleResponse postServersIdActionsRequestConsole(openapisdk.models.operations.PostServersIdActionsRequestConsoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/request_console", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsRequestConsoleResponse res = new openapisdk.models.operations.PostServersIdActionsRequestConsoleResponse() {{
            postServersIdActionsRequestConsole201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsRequestConsole201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsRequestConsole201ApplicationJson.class);
                res.postServersIdActionsRequestConsole201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsReset - Reset a Server
     *
     * Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.
    **/
    public openapisdk.models.operations.PostServersIdActionsResetResponse postServersIdActionsReset(openapisdk.models.operations.PostServersIdActionsResetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/reset", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsResetResponse res = new openapisdk.models.operations.PostServersIdActionsResetResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsResetActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsResetActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsResetPassword - Reset root Password of a Server
     *
     * Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (state `on`) in order for this operation to succeed.
     * 
     * This will generate a new password for this Server and return it.
     * 
     * If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.
     * 
    **/
    public openapisdk.models.operations.PostServersIdActionsResetPasswordResponse postServersIdActionsResetPassword(openapisdk.models.operations.PostServersIdActionsResetPasswordRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/reset_password", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsResetPasswordResponse res = new openapisdk.models.operations.PostServersIdActionsResetPasswordResponse() {{
            postServersIdActionsResetPassword201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsResetPassword201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsResetPassword201ApplicationJson.class);
                res.postServersIdActionsResetPassword201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postServersIdActionsShutdown - Shutdown a Server
     *
     * Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI and react to the request, otherwise the Server will not shut down.
    **/
    public openapisdk.models.operations.PostServersIdActionsShutdownResponse postServersIdActionsShutdown(openapisdk.models.operations.PostServersIdActionsShutdownRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/servers/{id}/actions/shutdown", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostServersIdActionsShutdownResponse res = new openapisdk.models.operations.PostServersIdActionsShutdownResponse() {{
            actionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostServersIdActionsShutdownActionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostServersIdActionsShutdownActionResponse.class);
                res.actionResponse = out;
            }
        }

        return res;
    }
	
}