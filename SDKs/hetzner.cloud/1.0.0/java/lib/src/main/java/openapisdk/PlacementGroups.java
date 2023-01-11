package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class PlacementGroups {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PlacementGroups(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deletePlacementGroupsId - Delete a PlacementGroup
     *
     * Deletes a PlacementGroup.
    **/
    public openapisdk.models.operations.DeletePlacementGroupsIdResponse deletePlacementGroupsId(openapisdk.models.operations.DeletePlacementGroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/placement_groups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeletePlacementGroupsIdResponse res = new openapisdk.models.operations.DeletePlacementGroupsIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getPlacementGroups - Get all PlacementGroups
     *
     * Returns all PlacementGroup objects.
    **/
    public openapisdk.models.operations.GetPlacementGroupsResponse getPlacementGroups(openapisdk.models.operations.GetPlacementGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/placement_groups");
        
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

        openapisdk.models.operations.GetPlacementGroupsResponse res = new openapisdk.models.operations.GetPlacementGroupsResponse() {{
            placementGroupsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetPlacementGroupsPlacementGroupsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetPlacementGroupsPlacementGroupsResponse.class);
                res.placementGroupsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPlacementGroupsId - Get a PlacementGroup
     *
     * Gets a specific PlacementGroup object.
    **/
    public openapisdk.models.operations.GetPlacementGroupsIdResponse getPlacementGroupsId(openapisdk.models.operations.GetPlacementGroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/placement_groups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPlacementGroupsIdResponse res = new openapisdk.models.operations.GetPlacementGroupsIdResponse() {{
            placementGroupResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetPlacementGroupsIdPlacementGroupResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetPlacementGroupsIdPlacementGroupResponse.class);
                res.placementGroupResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPlacementGroups - Create a PlacementGroup
     *
     * Creates a new PlacementGroup.
     * 
    **/
    public openapisdk.models.operations.PostPlacementGroupsResponse postPlacementGroups(openapisdk.models.operations.PostPlacementGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/placement_groups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPlacementGroupsResponse res = new openapisdk.models.operations.PostPlacementGroupsResponse() {{
            createPlacementGroupResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPlacementGroupsCreatePlacementGroupResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPlacementGroupsCreatePlacementGroupResponse.class);
                res.createPlacementGroupResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * putPlacementGroupsId - Update a PlacementGroup
     *
     * Updates the PlacementGroup properties.
     * 
     * Note that when updating labels, the PlacementGroup’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     * 
     * Note: if the PlacementGroup object changes during the request, the response will be a “conflict” error.
     * 
    **/
    public openapisdk.models.operations.PutPlacementGroupsIdResponse putPlacementGroupsId(openapisdk.models.operations.PutPlacementGroupsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/placement_groups/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutPlacementGroupsIdResponse res = new openapisdk.models.operations.PutPlacementGroupsIdResponse() {{
            placementGroupResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutPlacementGroupsIdPlacementGroupResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutPlacementGroupsIdPlacementGroupResponse.class);
                res.placementGroupResponse = out;
            }
        }

        return res;
    }
	
}