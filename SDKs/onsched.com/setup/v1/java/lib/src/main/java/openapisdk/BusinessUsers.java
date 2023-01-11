package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class BusinessUsers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BusinessUsers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1BusinessusersId - Permanently deletes businessUser object.
     *
     * Use this endpoint to permanently delete a businessUser.
    **/
    public openapisdk.models.operations.DeleteSetupV1BusinessusersIdResponse deleteSetupV1BusinessusersId(openapisdk.models.operations.DeleteSetupV1BusinessusersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1BusinessusersIdResponse res = new openapisdk.models.operations.DeleteSetupV1BusinessusersIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getSetupV1Businessusers - Returns a list of business users.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1BusinessusersResponse getSetupV1Businessusers(openapisdk.models.operations.GetSetupV1BusinessusersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers");
        
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

        openapisdk.models.operations.GetSetupV1BusinessusersResponse res = new openapisdk.models.operations.GetSetupV1BusinessusersResponse() {{
            businessUserListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.businessUserListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1BusinessusersPermissions - Returns a list of system roles and permission.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1BusinessusersPermissionsResponse getSetupV1BusinessusersPermissions(openapisdk.models.operations.GetSetupV1BusinessusersPermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers/permissions");
        
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

        openapisdk.models.operations.GetSetupV1BusinessusersPermissionsResponse res = new openapisdk.models.operations.GetSetupV1BusinessusersPermissionsResponse() {{
            businessPermissionListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.businessPermissionListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1BusinessusersEmailCompanies - Returns a list of companies for the business user.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1BusinessusersEmailCompaniesResponse getSetupV1BusinessusersEmailCompanies(openapisdk.models.operations.GetSetupV1BusinessusersEmailCompaniesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers/{email}/companies", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1BusinessusersEmailCompaniesResponse res = new openapisdk.models.operations.GetSetupV1BusinessusersEmailCompaniesResponse() {{
            authorizedCompanyListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthorizedCompanyListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthorizedCompanyListViewModel.class);
                res.authorizedCompanyListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1BusinessusersId - Returns a businessUser object.
     *
     * The result returned is a single businessUser object. An id is required to find the businessUser. Find businessUser id's using the GET setup/v1/businessuserts end point,
    **/
    public openapisdk.models.operations.GetSetupV1BusinessusersIdResponse getSetupV1BusinessusersId(openapisdk.models.operations.GetSetupV1BusinessusersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1BusinessusersIdResponse res = new openapisdk.models.operations.GetSetupV1BusinessusersIdResponse() {{
            businessUserViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessUserViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessUserViewModel.class);
                res.businessUserViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Businessusers - Creates a new businessUser object.
     *
     * Use this endpoint to create a new businessUser. If not specified the business location id defaults to the first location in the company.
     * Name, Email Address and role are required for creating a new businessUser. If the businessUser is a bookable resource then resourceId is required. 
     * For role, use one of the values listed below. Do not include what is shown in brackets, this is there for description of the role only.
     * 
     * Business Roles:
     * bizowner (Business Owner)
     * bizadmin (Business Administrator)
     * bizresource (Business User - Bookable Resource)
     * bizclerk (Business User - Portal Booking Privileges)
     * bizuser (Business User - Portal View Only Privileges)
    **/
    public openapisdk.models.operations.PostSetupV1BusinessusersResponse postSetupV1Businessusers(openapisdk.models.operations.PostSetupV1BusinessusersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1BusinessusersResponse res = new openapisdk.models.operations.PostSetupV1BusinessusersResponse() {{
            businessUserViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessUserViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessUserViewModel.class);
                res.businessUserViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1BusinessusersId - Updates a businessUser object.
     *
     * Use this endpoint to update a businessUser.
    **/
    public openapisdk.models.operations.PutSetupV1BusinessusersIdResponse putSetupV1BusinessusersId(openapisdk.models.operations.PutSetupV1BusinessusersIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/businessusers/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1BusinessusersIdResponse res = new openapisdk.models.operations.PutSetupV1BusinessusersIdResponse() {{
            businessUserViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessUserViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessUserViewModel.class);
                res.businessUserViewModel = out;
            }
        }

        return res;
    }
	
}