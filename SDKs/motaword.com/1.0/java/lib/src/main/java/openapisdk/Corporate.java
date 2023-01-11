package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Corporate {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Corporate(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAvailableCorporatePermissions - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     *
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
    **/
    public openapisdk.models.operations.GetAvailableCorporatePermissionsResponse getAvailableCorporatePermissions() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate/permissions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAvailableCorporatePermissionsResponse res = new openapisdk.models.operations.GetAvailableCorporatePermissionsResponse() {{
            permissionList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PermissionList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PermissionList.class);
                res.permissionList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAvailableCorporatePermissionsById - Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
     *
     * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
    **/
    public openapisdk.models.operations.GetAvailableCorporatePermissionsByIdResponse getAvailableCorporatePermissionsById(openapisdk.models.operations.GetAvailableCorporatePermissionsByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporates/{corporateId}/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAvailableCorporatePermissionsByIdResponse res = new openapisdk.models.operations.GetAvailableCorporatePermissionsByIdResponse() {{
            permissionList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PermissionList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PermissionList.class);
                res.permissionList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporate - Get details of my corporate account
     *
     * Get details of my corporate account
    **/
    public openapisdk.models.operations.GetCorporateResponse getCorporate() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateResponse res = new openapisdk.models.operations.GetCorporateResponse() {{
            corporateAccount = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CorporateAccount out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CorporateAccount.class);
                res.corporateAccount = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporateById - Get details of this corporate account
     *
     * Get details of this corporate account
    **/
    public openapisdk.models.operations.GetCorporateByIdResponse getCorporateById(openapisdk.models.operations.GetCorporateByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporates/{corporateId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateByIdResponse res = new openapisdk.models.operations.GetCorporateByIdResponse() {{
            corporateAccount = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CorporateAccount out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CorporateAccount.class);
                res.corporateAccount = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporateUserGroups - Get a list of user groups for my corporate account
     *
     * Get a list of user groups for my corporate account
    **/
    public openapisdk.models.operations.GetCorporateUserGroupsResponse getCorporateUserGroups() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate/user-groups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateUserGroupsResponse res = new openapisdk.models.operations.GetCorporateUserGroupsResponse() {{
            userGroupList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserGroupList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserGroupList.class);
                res.userGroupList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporateUserGroupsById - Get a list of user groups for this corporate account
     *
     * Get a list of user groups for this corporate account
    **/
    public openapisdk.models.operations.GetCorporateUserGroupsByIdResponse getCorporateUserGroupsById(openapisdk.models.operations.GetCorporateUserGroupsByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporates/{corporateId}/user-groups", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateUserGroupsByIdResponse res = new openapisdk.models.operations.GetCorporateUserGroupsByIdResponse() {{
            userGroupList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserGroupList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserGroupList.class);
                res.userGroupList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporateUsers - Get a list of users for my corporate account
     *
     * Get a list of users for my corporate account
    **/
    public openapisdk.models.operations.GetCorporateUsersResponse getCorporateUsers() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate/users");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateUsersResponse res = new openapisdk.models.operations.GetCorporateUsersResponse() {{
            userList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserList.class);
                res.userList = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCorporateUsersById - Get a list of users for this corporate account
     *
     * Get a list of users for this corporate account
    **/
    public openapisdk.models.operations.GetCorporateUsersByIdResponse getCorporateUsersById(openapisdk.models.operations.GetCorporateUsersByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporates/{corporateId}/users", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetCorporateUsersByIdResponse res = new openapisdk.models.operations.GetCorporateUsersByIdResponse() {{
            userList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserList.class);
                res.userList = out;
            }
        }

        return res;
    }
	
	
    /**
     * saveCorporateUser - Create or update a corporate user
     *
     * Create or update a corporate user
    **/
    public openapisdk.models.operations.SaveCorporateUserResponse saveCorporateUser(openapisdk.models.operations.SaveCorporateUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate/users");
        
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

        openapisdk.models.operations.SaveCorporateUserResponse res = new openapisdk.models.operations.SaveCorporateUserResponse() {{
            user = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.User out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.User.class);
                res.user = out;
            }
        }

        return res;
    }
	
	
    /**
     * saveCorporateUserGroup - Create or update a corporate user group
     *
     * Create or update a corporate user group
    **/
    public openapisdk.models.operations.SaveCorporateUserGroupResponse saveCorporateUserGroup(openapisdk.models.operations.SaveCorporateUserGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporate/user-groups");
        
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

        openapisdk.models.operations.SaveCorporateUserGroupResponse res = new openapisdk.models.operations.SaveCorporateUserGroupResponse() {{
            userGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserGroup.class);
                res.userGroup = out;
            }
        }

        return res;
    }
	
	
    /**
     * saveCorporateUserGroupById - Create or update a corporate user group for this corporate account
     *
     * Create or update a corporate user group for this corporate account
    **/
    public openapisdk.models.operations.SaveCorporateUserGroupByIdResponse saveCorporateUserGroupById(openapisdk.models.operations.SaveCorporateUserGroupByIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/corporates/{corporateId}/user-groups", request.pathParams);
        
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

        openapisdk.models.operations.SaveCorporateUserGroupByIdResponse res = new openapisdk.models.operations.SaveCorporateUserGroupByIdResponse() {{
            userGroup = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserGroup out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserGroup.class);
                res.userGroup = out;
            }
        }

        return res;
    }
	
}