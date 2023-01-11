package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Applications {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Applications(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * cancelGroupApplication - Cancel a Group Application
     *
     * Cancels a group application to the carrier based on the ID provided.
    **/
    public openapisdk.models.operations.CancelGroupApplicationResponse cancelGroupApplication(openapisdk.models.operations.CancelGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/{version}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CancelGroupApplicationResponse res = new openapisdk.models.operations.CancelGroupApplicationResponse() {{
            groupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupApplicationResult.class);
                res.groupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * createGroupApplication - Create new Group Application
     *
     * After creating a group, you can then create one or more new applications (one per carrier). Just pass the carrier ID and carrier group ID (if known) for the carrier associated with the application and the application type. The carrier group ID will allow us to reference the group in the carrier’s system if that has already been allocated.
    **/
    public openapisdk.models.operations.CreateGroupApplicationResponse createGroupApplication(openapisdk.models.operations.CreateGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/groups/{group_id}/applications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateGroupApplicationResponse res = new openapisdk.models.operations.CreateGroupApplicationResponse() {{
            groupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupApplicationResult.class);
                res.groupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * editGroupApplication - Edit a Group Application
     *
     * Edit a group application based on the ID provided. The version parameter must match the latest group application version.
    **/
    public openapisdk.models.operations.EditGroupApplicationResponse editGroupApplication(openapisdk.models.operations.EditGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/{version}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EditGroupApplicationResponse res = new openapisdk.models.operations.EditGroupApplicationResponse() {{
            groupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupApplicationResult.class);
                res.groupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllApplications - Get All Applications
     *
     * Returns a list of all applications
    **/
    public openapisdk.models.operations.GetAllApplicationsResponse getAllApplications(openapisdk.models.operations.GetAllApplicationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications");
        
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

        openapisdk.models.operations.GetAllApplicationsResponse res = new openapisdk.models.operations.GetAllApplicationsResponse() {{
            paginatedGroupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedGroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedGroupApplicationResult.class);
                res.paginatedGroupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGroupApplication - Get Group Application
     *
     * Returns the latest version of a single group application based on the ID provided.
    **/
    public openapisdk.models.operations.GetGroupApplicationResponse getGroupApplication(openapisdk.models.operations.GetGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetGroupApplicationResponse res = new openapisdk.models.operations.GetGroupApplicationResponse() {{
            groupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupApplicationResult.class);
                res.groupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getGroupApplications - Get Group Applications
     *
     * Returns a list of all applications for the given group
    **/
    public openapisdk.models.operations.GetGroupApplicationsResponse getGroupApplications(openapisdk.models.operations.GetGroupApplicationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/groups/{group_id}/applications", request.pathParams);
        
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

        openapisdk.models.operations.GetGroupApplicationsResponse res = new openapisdk.models.operations.GetGroupApplicationsResponse() {{
            paginatedGroupApplicationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PaginatedGroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PaginatedGroupApplicationResult.class);
                res.paginatedGroupApplicationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * submitGroupApplication - Submit a Group Application
     *
     * Submits a group application to the carrier based on the ID provided.
    **/
    public openapisdk.models.operations.SubmitGroupApplicationResponse submitGroupApplication(openapisdk.models.operations.SubmitGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/{version}/submit", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SubmitGroupApplicationResponse res = new openapisdk.models.operations.SubmitGroupApplicationResponse() {{
            groupApplicationResult = null;
            applicationValidationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GroupApplicationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GroupApplicationResult.class);
                res.groupApplicationResult = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationValidationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationValidationResult.class);
                res.applicationValidationResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * validateGroupApplication - Validate Group Application
     *
     * Returns a list of errors if the group application is not valid else an empty list is returned
    **/
    public openapisdk.models.operations.ValidateGroupApplicationResponse validateGroupApplication(openapisdk.models.operations.ValidateGroupApplicationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v1/applications/{application_id}/validate", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ValidateGroupApplicationResponse res = new openapisdk.models.operations.ValidateGroupApplicationResponse() {{
            applicationValidationResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApplicationValidationResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApplicationValidationResult.class);
                res.applicationValidationResult = out;
            }
        }

        return res;
    }
	
}