/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

public class EventTags {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public EventTags(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Deletes an existing event tag.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsDeleteResponse dfareportingEventTagsDelete(org.openapis.openapi.models.operations.DfareportingEventTagsDeleteRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsDeleteSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsDeleteRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags/{id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsDeleteRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsDeleteResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsDeleteResponse(contentType, httpRes.statusCode()) {{
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }

    /**
     * Gets one event tag by ID.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsGetResponse dfareportingEventTagsGet(org.openapis.openapi.models.operations.DfareportingEventTagsGetRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsGetSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsGetRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags/{id}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsGetRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsGetResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsGetResponse(contentType, httpRes.statusCode()) {{
            eventTag = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.EventTag out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.EventTag.class);
                res.eventTag = out;
            }
        }

        return res;
    }

    /**
     * Inserts a new event tag.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsInsertResponse dfareportingEventTagsInsert(org.openapis.openapi.models.operations.DfareportingEventTagsInsertRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsInsertSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsInsertRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "eventTag", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsInsertRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsInsertResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsInsertResponse(contentType, httpRes.statusCode()) {{
            eventTag = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.EventTag out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.EventTag.class);
                res.eventTag = out;
            }
        }

        return res;
    }

    /**
     * Retrieves a list of event tags, possibly filtered.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsListResponse dfareportingEventTagsList(org.openapis.openapi.models.operations.DfareportingEventTagsListRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsListRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsListResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsListResponse(contentType, httpRes.statusCode()) {{
            eventTagsListResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.EventTagsListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.EventTagsListResponse.class);
                res.eventTagsListResponse = out;
            }
        }

        return res;
    }

    /**
     * Updates an existing event tag. This method supports patch semantics.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsPatchResponse dfareportingEventTagsPatch(org.openapis.openapi.models.operations.DfareportingEventTagsPatchRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsPatchSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsPatchRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "eventTag", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsPatchRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsPatchResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsPatchResponse(contentType, httpRes.statusCode()) {{
            eventTag = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.EventTag out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.EventTag.class);
                res.eventTag = out;
            }
        }

        return res;
    }

    /**
     * Updates an existing event tag.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DfareportingEventTagsUpdateResponse dfareportingEventTagsUpdate(org.openapis.openapi.models.operations.DfareportingEventTagsUpdateRequest request, org.openapis.openapi.models.operations.DfareportingEventTagsUpdateSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DfareportingEventTagsUpdateRequest.class, baseUrl, "/userprofiles/{profileId}/eventTags", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "eventTag", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DfareportingEventTagsUpdateRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DfareportingEventTagsUpdateResponse res = new org.openapis.openapi.models.operations.DfareportingEventTagsUpdateResponse(contentType, httpRes.statusCode()) {{
            eventTag = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.EventTag out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.EventTag.class);
                res.eventTag = out;
            }
        }

        return res;
    }
}