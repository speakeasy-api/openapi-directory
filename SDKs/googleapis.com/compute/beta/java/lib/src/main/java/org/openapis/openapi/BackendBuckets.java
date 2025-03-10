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

public class BackendBuckets {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BackendBuckets(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Adds a key for validating requests with signed URLs for this backend bucket.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyResponse computeBackendBucketsAddSignedUrlKey(org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "signedUrlKey", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsAddSignedUrlKeyResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Deletes the specified BackendBucket resource.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteResponse computeBackendBucketsDelete(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Deletes a key for validating requests with signed URLs for this backend bucket.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyResponse computeBackendBucketsDeleteSignedUrlKey(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsDeleteSignedUrlKeyResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Returns the specified BackendBucket resource.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsGetResponse computeBackendBucketsGet(org.openapis.openapi.models.operations.ComputeBackendBucketsGetRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsGetSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsGetRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsGetRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsGetResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsGetResponse(contentType, httpRes.statusCode()) {{
            backendBucket = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BackendBucket out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BackendBucket.class);
                res.backendBucket = out;
            }
        }

        return res;
    }

    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyResponse computeBackendBucketsGetIamPolicy(org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{resource}/getIamPolicy", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsGetIamPolicyResponse(contentType, httpRes.statusCode()) {{
            policy = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Policy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Policy.class);
                res.policy = out;
            }
        }

        return res;
    }

    /**
     * Creates a BackendBucket resource in the specified project using the data included in the request.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsInsertResponse computeBackendBucketsInsert(org.openapis.openapi.models.operations.ComputeBackendBucketsInsertRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsInsertSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsInsertRequest.class, baseUrl, "/projects/{project}/global/backendBuckets", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "backendBucket", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsInsertRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsInsertResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsInsertResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Retrieves the list of BackendBucket resources available to the specified project.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsListResponse computeBackendBucketsList(org.openapis.openapi.models.operations.ComputeBackendBucketsListRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsListRequest.class, baseUrl, "/projects/{project}/global/backendBuckets", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsListResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsListResponse(contentType, httpRes.statusCode()) {{
            backendBucketList = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BackendBucketList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BackendBucketList.class);
                res.backendBucketList = out;
            }
        }

        return res;
    }

    /**
     * Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsPatchResponse computeBackendBucketsPatch(org.openapis.openapi.models.operations.ComputeBackendBucketsPatchRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsPatchSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsPatchRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "backendBucket1", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsPatchRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsPatchResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsPatchResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Sets the edge security policy for the specified backend bucket.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyResponse computeBackendBucketsSetEdgeSecurityPolicy(org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}/setEdgeSecurityPolicy", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "securityPolicyReference", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsSetEdgeSecurityPolicyResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyResponse computeBackendBucketsSetIamPolicy(org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{resource}/setIamPolicy", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "globalSetPolicyRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsSetIamPolicyResponse(contentType, httpRes.statusCode()) {{
            policy = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Policy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Policy.class);
                res.policy = out;
            }
        }

        return res;
    }

    /**
     * Returns permissions that a caller has on the specified resource.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsResponse computeBackendBucketsTestIamPermissions(org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{resource}/testIamPermissions", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "testPermissionsRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsTestIamPermissionsResponse(contentType, httpRes.statusCode()) {{
            testPermissionsResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.TestPermissionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.TestPermissionsResponse.class);
                res.testPermissionsResponse = out;
            }
        }

        return res;
    }

    /**
     * Updates the specified BackendBucket resource with the data included in the request.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateResponse computeBackendBucketsUpdate(org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateRequest request, org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateRequest.class, baseUrl, "/projects/{project}/global/backendBuckets/{backendBucket}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "backendBucket1", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateResponse res = new org.openapis.openapi.models.operations.ComputeBackendBucketsUpdateResponse(contentType, httpRes.statusCode()) {{
            operation = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
}