package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class InventorySourceGroups {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public InventorySourceGroups(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources:bulkEdit", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse() {{
            bulkEditAssignedInventorySourcesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditAssignedInventorySourcesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditAssignedInventorySourcesResponse.class);
                res.bulkEditAssignedInventorySourcesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesCreate - Creates an assignment between an inventory source and an inventory source group.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse() {{
            assignedInventorySource = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssignedInventorySource out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssignedInventorySource.class);
                res.assignedInventorySource = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesDelete - Deletes the assignment between an inventory source and an inventory source group.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources/{assignedInventorySourceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesList - Lists inventory sources assigned to an inventory source group.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse displayvideoInventorySourceGroupsAssignedInventorySourcesList(openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}/assignedInventorySources", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse() {{
            listAssignedInventorySourcesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAssignedInventorySourcesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAssignedInventorySourcesResponse.class);
                res.listAssignedInventorySourcesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsCreate - Creates a new inventory source group. Returns the newly created inventory source group if successful.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsCreateResponse displayvideoInventorySourceGroupsCreate(openapisdk.models.operations.DisplayvideoInventorySourceGroupsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsCreateResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsCreateResponse() {{
            inventorySourceGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InventorySourceGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InventorySourceGroup.class);
                res.inventorySourceGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsDelete - Deletes an inventory source group.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsDeleteResponse displayvideoInventorySourceGroupsDelete(openapisdk.models.operations.DisplayvideoInventorySourceGroupsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsDeleteResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsGet - Gets an inventory source group.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsGetResponse displayvideoInventorySourceGroupsGet(openapisdk.models.operations.DisplayvideoInventorySourceGroupsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups/{inventorySourceGroupId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsGetResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsGetResponse() {{
            inventorySourceGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InventorySourceGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InventorySourceGroup.class);
                res.inventorySourceGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoInventorySourceGroupsList - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
    **/
    public openapisdk.models.operations.DisplayvideoInventorySourceGroupsListResponse displayvideoInventorySourceGroupsList(openapisdk.models.operations.DisplayvideoInventorySourceGroupsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/inventorySourceGroups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DisplayvideoInventorySourceGroupsListResponse res = new openapisdk.models.operations.DisplayvideoInventorySourceGroupsListResponse() {{
            listInventorySourceGroupsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInventorySourceGroupsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInventorySourceGroupsResponse.class);
                res.listInventorySourceGroupsResponse = out;
            }
        }

        return res;
    }
	
}