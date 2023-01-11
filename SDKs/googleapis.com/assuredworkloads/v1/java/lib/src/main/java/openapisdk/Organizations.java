package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Organizations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Organizations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * assuredworkloadsOrganizationsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse assuredworkloadsOrganizationsLocationsOperationsList(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}/operations", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsOperationsListResponse() {{
            googleLongrunningListOperationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningListOperationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningListOperationsResponse.class);
                res.googleLongrunningListOperationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsCreate - Creates Assured Workload.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse assuredworkloadsOrganizationsLocationsWorkloadsCreate(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/workloads", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse() {{
            googleLongrunningOperation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleLongrunningOperation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleLongrunningOperation.class);
                res.googleLongrunningOperation = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsDelete - Deletes the workload. Make sure that workload's direct children are already in a deleted state, otherwise the request will fail with a FAILED_PRECONDITION error.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse assuredworkloadsOrganizationsLocationsWorkloadsDelete(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsDeleteResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsList - Lists Assured Workloads under a CRM Node.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse assuredworkloadsOrganizationsLocationsWorkloadsList(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/workloads", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsListResponse() {{
            googleCloudAssuredworkloadsV1ListWorkloadsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListWorkloadsResponse.class);
                res.googleCloudAssuredworkloadsV1ListWorkloadsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions - Update the permissions settings for an existing partner workload. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse assuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissions(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:mutatePartnerPermissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsMutatePartnerPermissionsResponse() {{
            googleCloudAssuredworkloadsV1Workload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload.class);
                res.googleCloudAssuredworkloadsV1Workload = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsPatch - Updates an existing workload. Currently allows updating of workload display_name and labels. For force updates don't set etag field in the Workload. Only one update operation per workload can be in progress.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse assuredworkloadsOrganizationsLocationsWorkloadsPatch(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse() {{
            googleCloudAssuredworkloadsV1Workload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Workload.class);
                res.googleCloudAssuredworkloadsV1Workload = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources - Restrict the list of resources allowed in the Workload environment. The current list of allowed products can be found at https://cloud.google.com/assured-workloads/docs/supported-products In addition to assuredworkloads.workload.update permission, the user should also have orgpolicy.policy.set permission on the folder resource to use this functionality.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse assuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResources(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:restrictAllowedResources", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsRestrictAllowedResourcesResponse() {{
            googleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleCloudAssuredworkloadsV1RestrictAllowedResourcesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge - Acknowledges an existing violation. By acknowledging a violation, users acknowledge the existence of a compliance violation in their workload and decide to ignore it due to a valid business justification. Acknowledgement is a permanent operation and it cannot be reverted.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse assuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledge(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:acknowledge", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse() {{
            googleCloudAssuredworkloadsV1AcknowledgeViolationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleCloudAssuredworkloadsV1AcknowledgeViolationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet - Retrieves Assured Workload Violation based on ID.
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse assuredworkloadsOrganizationsLocationsWorkloadsViolationsGet(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsGetResponse() {{
            googleCloudAssuredworkloadsV1Violation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Violation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudAssuredworkloadsV1Violation.class);
                res.googleCloudAssuredworkloadsV1Violation = out;
            }
        }

        return res;
    }
	
	
    /**
     * assuredworkloadsOrganizationsLocationsWorkloadsViolationsList - Lists the Violations in the AssuredWorkload Environment. Callers may also choose to read across multiple Workloads as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of workload-id in the parent. Format `organizations/{org_id}/locations/{location}/workloads/-`
    **/
    public openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse assuredworkloadsOrganizationsLocationsWorkloadsViolationsList(openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/violations", request.pathParams);
        
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

        openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse res = new openapisdk.models.operations.AssuredworkloadsOrganizationsLocationsWorkloadsViolationsListResponse() {{
            googleCloudAssuredworkloadsV1ListViolationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudAssuredworkloadsV1ListViolationsResponse.class);
                res.googleCloudAssuredworkloadsV1ListViolationsResponse = out;
            }
        }

        return res;
    }
	
}