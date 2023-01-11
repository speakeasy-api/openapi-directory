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
     * identitytoolkitProjectsIdentityPlatformInitializeAuth - Initialize Identity Platform for a Cloud project. Identity Platform is an end-to-end authentication system for third-party users to access your apps and services. These could include mobile/web apps, games, APIs and beyond. This is the publicly available variant of EnableIdentityPlatform that is only available to billing-enabled projects.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse identitytoolkitProjectsIdentityPlatformInitializeAuth(openapisdk.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{project}/identityPlatform:initializeAuth", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsIdentityPlatformInitializeAuthResponse() {{
            googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsCreate - Create a tenant. Requires write permission on the Agent project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsCreateResponse identitytoolkitProjectsTenantsCreate(openapisdk.models.operations.IdentitytoolkitProjectsTenantsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/tenants", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsCreateResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsCreateResponse() {{
            googleCloudIdentitytoolkitAdminV2Tenant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2Tenant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2Tenant.class);
                res.googleCloudIdentitytoolkitAdminV2Tenant = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate - Create a default supported Idp configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreate(openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/defaultSupportedIdpConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsCreateResponse() {{
            googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig.class);
                res.googleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList - List all default supported Idp configurations for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse identitytoolkitProjectsTenantsDefaultSupportedIdpConfigsList(openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/defaultSupportedIdpConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsDefaultSupportedIdpConfigsListResponse() {{
            googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse.class);
                res.googleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsGetIamPolicy - Gets the access control policy for a resource. An error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it. Caller must have the right Google IAM permission on the resource.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse identitytoolkitProjectsTenantsGetIamPolicy(openapisdk.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{resource}:getIamPolicy", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsGetIamPolicyResponse() {{
            googleIamV1Policy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleIamV1Policy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleIamV1Policy.class);
                res.googleIamV1Policy = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsInboundSamlConfigsCreate - Create an inbound SAML configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse identitytoolkitProjectsTenantsInboundSamlConfigsCreate(openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/inboundSamlConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsCreateResponse() {{
            googleCloudIdentitytoolkitAdminV2InboundSamlConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.class);
                res.googleCloudIdentitytoolkitAdminV2InboundSamlConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsInboundSamlConfigsList - List all inbound SAML configurations for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse identitytoolkitProjectsTenantsInboundSamlConfigsList(openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/inboundSamlConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsInboundSamlConfigsListResponse() {{
            googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse.class);
                res.googleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsList - List tenants under the given agent project. Requires read permission on the Agent project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsListResponse identitytoolkitProjectsTenantsList(openapisdk.models.operations.IdentitytoolkitProjectsTenantsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/tenants", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsListResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsListResponse() {{
            googleCloudIdentitytoolkitAdminV2ListTenantsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse.class);
                res.googleCloudIdentitytoolkitAdminV2ListTenantsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsCreate - Create an Oidc Idp configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse identitytoolkitProjectsTenantsOauthIdpConfigsCreate(openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/oauthIdpConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsCreateResponse() {{
            googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.class);
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsDelete - Delete an Oidc Idp configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse identitytoolkitProjectsTenantsOauthIdpConfigsDelete(openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsDeleteResponse() {{
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
     * identitytoolkitProjectsTenantsOauthIdpConfigsGet - Retrieve an Oidc Idp configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse identitytoolkitProjectsTenantsOauthIdpConfigsGet(openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsGetResponse() {{
            googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.class);
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsList - List all Oidc Idp configurations for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse identitytoolkitProjectsTenantsOauthIdpConfigsList(openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{parent}/oauthIdpConfigs", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsListResponse() {{
            googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse.class);
                res.googleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsOauthIdpConfigsPatch - Update an Oidc Idp configuration for an Identity Toolkit project.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse identitytoolkitProjectsTenantsOauthIdpConfigsPatch(openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{name}", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsOauthIdpConfigsPatchResponse() {{
            googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig.class);
                res.googleCloudIdentitytoolkitAdminV2OAuthIdpConfig = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsSetIamPolicy - Sets the access control policy for a resource. If the policy exists, it is replaced. Caller must have the right Google IAM permission on the resource.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse identitytoolkitProjectsTenantsSetIamPolicy(openapisdk.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{resource}:setIamPolicy", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsSetIamPolicyResponse() {{
            googleIamV1Policy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleIamV1Policy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleIamV1Policy.class);
                res.googleIamV1Policy = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitProjectsTenantsTestIamPermissions - Returns the caller's permissions on a resource. An error is returned if the resource does not exist. A caller is not required to have Google IAM permission to make this request.
    **/
    public openapisdk.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse identitytoolkitProjectsTenantsTestIamPermissions(openapisdk.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/{resource}:testIamPermissions", request.pathParams);
        
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

        openapisdk.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse res = new openapisdk.models.operations.IdentitytoolkitProjectsTenantsTestIamPermissionsResponse() {{
            googleIamV1TestIamPermissionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleIamV1TestIamPermissionsResponse.class);
                res.googleIamV1TestIamPermissionsResponse = out;
            }
        }

        return res;
    }
	
}