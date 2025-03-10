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

public class RegionInstantSnapshots {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public RegionInstantSnapshots(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Deletes the specified InstantSnapshot resource. Keep in mind that deleting a single instantSnapshot might not necessarily delete all the data on that instantSnapshot. If any data on the instantSnapshot that is marked for deletion is needed for subsequent instantSnapshots, the data will be moved to the next corresponding instantSnapshot. For more information, see Deleting instantSnapshots.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteResponse computeRegionInstantSnapshotsDelete(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsDeleteResponse(contentType, httpRes.statusCode()) {{
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
     * Export the changed blocks between two instant snapshots to a customer's bucket in the user specified format.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportResponse computeRegionInstantSnapshotsExport(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}/export", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "regionInstantSnapshotsExportRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsExportResponse(contentType, httpRes.statusCode()) {{
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
     * Returns the specified InstantSnapshot resource in the specified region.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetResponse computeRegionInstantSnapshotsGet(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetResponse(contentType, httpRes.statusCode()) {{
            instantSnapshot = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.InstantSnapshot out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.InstantSnapshot.class);
                res.instantSnapshot = out;
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
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyResponse computeRegionInstantSnapshotsGetIamPolicy(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{resource}/getIamPolicy", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsGetIamPolicyResponse(contentType, httpRes.statusCode()) {{
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
     * Creates an instant snapshot in the specified region.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertResponse computeRegionInstantSnapshotsInsert(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "instantSnapshot", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsInsertResponse(contentType, httpRes.statusCode()) {{
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
     * Retrieves the list of InstantSnapshot resources contained within the specified region.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListResponse computeRegionInstantSnapshotsList(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsListResponse(contentType, httpRes.statusCode()) {{
            instantSnapshotList = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.InstantSnapshotList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.InstantSnapshotList.class);
                res.instantSnapshotList = out;
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
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyResponse computeRegionInstantSnapshotsSetIamPolicy(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicySecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{resource}/setIamPolicy", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "regionSetPolicyRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetIamPolicyResponse(contentType, httpRes.statusCode()) {{
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
     * Sets the labels on a instantSnapshot in the given region. To learn more about labels, read the Labeling Resources documentation.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsResponse computeRegionInstantSnapshotsSetLabels(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{resource}/setLabels", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "regionSetLabelsRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsSetLabelsResponse(contentType, httpRes.statusCode()) {{
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
     * Returns permissions that a caller has on the specified resource.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsResponse computeRegionInstantSnapshotsTestIamPermissions(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsRequest request, org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsRequest.class, baseUrl, "/projects/{project}/regions/{region}/instantSnapshots/{resource}/testIamPermissions", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "testPermissionsRequest", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsResponse res = new org.openapis.openapi.models.operations.ComputeRegionInstantSnapshotsTestIamPermissionsResponse(contentType, httpRes.statusCode()) {{
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
}