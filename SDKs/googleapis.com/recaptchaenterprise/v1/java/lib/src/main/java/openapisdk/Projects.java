package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * recaptchaenterpriseProjectsAssessmentsAnnotate - Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse recaptchaenterpriseProjectsAssessmentsAnnotate(openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:annotate", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsAnnotateResponse() {{
            googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsAssessmentsCreate - Creates an Assessment of the likelihood an event is legitimate.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse recaptchaenterpriseProjectsAssessmentsCreate(openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/assessments", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsAssessmentsCreateResponse() {{
            googleCloudRecaptchaenterpriseV1Assessment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Assessment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Assessment.class);
                res.googleCloudRecaptchaenterpriseV1Assessment = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysCreate - Creates a new reCAPTCHA Enterprise key.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysCreateResponse recaptchaenterpriseProjectsKeysCreate(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/keys", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysCreateResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysCreateResponse() {{
            googleCloudRecaptchaenterpriseV1Key = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key.class);
                res.googleCloudRecaptchaenterpriseV1Key = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysDelete - Deletes the specified key.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysDeleteResponse recaptchaenterpriseProjectsKeysDelete(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysDeleteRequest request) throws Exception {
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysDeleteResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysDeleteResponse() {{
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
     * recaptchaenterpriseProjectsKeysGetMetrics - Get some aggregated metrics for a Key. This data can be used to build dashboards.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse recaptchaenterpriseProjectsKeysGetMetrics(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsRequest request) throws Exception {
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysGetMetricsResponse() {{
            googleCloudRecaptchaenterpriseV1Metrics = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Metrics out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Metrics.class);
                res.googleCloudRecaptchaenterpriseV1Metrics = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysList - Returns the list of all keys that belong to a project.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysListResponse recaptchaenterpriseProjectsKeysList(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/keys", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysListResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysListResponse() {{
            googleCloudRecaptchaenterpriseV1ListKeysResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListKeysResponse.class);
                res.googleCloudRecaptchaenterpriseV1ListKeysResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysMigrate - Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Site Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysMigrateResponse recaptchaenterpriseProjectsKeysMigrate(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysMigrateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}:migrate", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysMigrateResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysMigrateResponse() {{
            googleCloudRecaptchaenterpriseV1Key = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key.class);
                res.googleCloudRecaptchaenterpriseV1Key = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysPatch - Updates the specified key.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysPatchResponse recaptchaenterpriseProjectsKeysPatch(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysPatchRequest request) throws Exception {
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysPatchResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysPatchResponse() {{
            googleCloudRecaptchaenterpriseV1Key = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1Key.class);
                res.googleCloudRecaptchaenterpriseV1Key = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey - Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse recaptchaenterpriseProjectsKeysRetrieveLegacySecretKey(openapisdk.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{key}:retrieveLegacySecretKey", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsKeysRetrieveLegacySecretKeyResponse() {{
            googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse.class);
                res.googleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch - Search group memberships related to a given account.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse recaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearch(openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{project}/relatedaccountgroupmemberships:search", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupmembershipsSearchResponse() {{
            googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse.class);
                res.googleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupsList - List groups of related accounts.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse recaptchaenterpriseProjectsRelatedaccountgroupsList(openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/relatedaccountgroups", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsListResponse() {{
            googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse.class);
                res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList - Get memberships in a group of related accounts.
    **/
    public openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse recaptchaenterpriseProjectsRelatedaccountgroupsMembershipsList(openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/memberships", request.pathParams);
        
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

        openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse res = new openapisdk.models.operations.RecaptchaenterpriseProjectsRelatedaccountgroupsMembershipsListResponse() {{
            googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse.class);
                res.googleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse = out;
            }
        }

        return res;
    }
	
}