package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Activities {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Activities(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteWorkspaceIdMembersMemberIdActivitiesId - Delete a post activity
    **/
    public openapisdk.models.operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse deleteWorkspaceIdMembersMemberIdActivitiesId(openapisdk.models.operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/members/{member_id}/activities/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse res = new openapisdk.models.operations.DeleteWorkspaceIdMembersMemberIdActivitiesIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getWorkspaceIdActivities - List activities for a workspace
    **/
    public openapisdk.models.operations.GetWorkspaceIdActivitiesResponse getWorkspaceIdActivities(openapisdk.models.operations.GetWorkspaceIdActivitiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/activities", request.pathParams);
        
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

        openapisdk.models.operations.GetWorkspaceIdActivitiesResponse res = new openapisdk.models.operations.GetWorkspaceIdActivitiesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getWorkspaceIdActivitiesId - Get an activity in the workspace
    **/
    public openapisdk.models.operations.GetWorkspaceIdActivitiesIdResponse getWorkspaceIdActivitiesId(openapisdk.models.operations.GetWorkspaceIdActivitiesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/activities/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspaceIdActivitiesIdResponse res = new openapisdk.models.operations.GetWorkspaceIdActivitiesIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * getWorkspaceIdMembersMemberIdActivities - List activities for a member
    **/
    public openapisdk.models.operations.GetWorkspaceIdMembersMemberIdActivitiesResponse getWorkspaceIdMembersMemberIdActivities(openapisdk.models.operations.GetWorkspaceIdMembersMemberIdActivitiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/members/{member_id}/activities", request.pathParams);
        
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

        openapisdk.models.operations.GetWorkspaceIdMembersMemberIdActivitiesResponse res = new openapisdk.models.operations.GetWorkspaceIdMembersMemberIdActivitiesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postWorkspaceIdActivities - Create a Custom or a Content activity for a new or existing member
     *
     * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
    **/
    public openapisdk.models.operations.PostWorkspaceIdActivitiesResponse postWorkspaceIdActivities(openapisdk.models.operations.PostWorkspaceIdActivitiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/activities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWorkspaceIdActivitiesResponse res = new openapisdk.models.operations.PostWorkspaceIdActivitiesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
	
    /**
     * postWorkspaceIdMembersMemberIdActivities - Create a Custom or a Content activity for a member
    **/
    public openapisdk.models.operations.PostWorkspaceIdMembersMemberIdActivitiesResponse postWorkspaceIdMembersMemberIdActivities(openapisdk.models.operations.PostWorkspaceIdMembersMemberIdActivitiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/members/{member_id}/activities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostWorkspaceIdMembersMemberIdActivitiesResponse res = new openapisdk.models.operations.PostWorkspaceIdMembersMemberIdActivitiesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
	
    /**
     * putWorkspaceIdMembersMemberIdActivitiesId - Update a custom activity for a member
    **/
    public openapisdk.models.operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse putWorkspaceIdMembersMemberIdActivitiesId(openapisdk.models.operations.PutWorkspaceIdMembersMemberIdActivitiesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{workspace_id}/members/{member_id}/activities/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse res = new openapisdk.models.operations.PutWorkspaceIdMembersMemberIdActivitiesIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 422) {
        }

        return res;
    }
	
}