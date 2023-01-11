package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
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
     * assignOrganizationLicensesSeats - Assign SM seats to a network
     *
     * Assign SM seats to a network. This will increase the managed SM device limit of the network
    **/
    public openapisdk.models.operations.AssignOrganizationLicensesSeatsResponse assignOrganizationLicensesSeats(openapisdk.models.operations.AssignOrganizationLicensesSeatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/assignSeats", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignOrganizationLicensesSeatsResponse res = new openapisdk.models.operations.AssignOrganizationLicensesSeatsResponse() {{
            assignOrganizationLicensesSeats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.assignOrganizationLicensesSeats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * claimIntoOrganization - Claim a list of devices, licenses, and/or orders into an organization
     *
     * Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.
    **/
    public openapisdk.models.operations.ClaimIntoOrganizationResponse claimIntoOrganization(openapisdk.models.operations.ClaimIntoOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/claim", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ClaimIntoOrganizationResponse res = new openapisdk.models.operations.ClaimIntoOrganizationResponse() {{
            claimIntoOrganization200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.claimIntoOrganization200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * cloneOrganization - Create a new organization by cloning the addressed organization
     *
     * Create a new organization by cloning the addressed organization
    **/
    public openapisdk.models.operations.CloneOrganizationResponse cloneOrganization(openapisdk.models.operations.CloneOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/clone", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CloneOrganizationResponse res = new openapisdk.models.operations.CloneOrganizationResponse() {{
            cloneOrganization201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.cloneOrganization201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * combineOrganizationNetworks - Combine multiple networks into a single network
     *
     * Combine multiple networks into a single network
    **/
    public openapisdk.models.operations.CombineOrganizationNetworksResponse combineOrganizationNetworks(openapisdk.models.operations.CombineOrganizationNetworksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/networks/combine", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CombineOrganizationNetworksResponse res = new openapisdk.models.operations.CombineOrganizationNetworksResponse() {{
            combineOrganizationNetworks200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.combineOrganizationNetworks200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganization - Create a new organization
     *
     * Create a new organization
    **/
    public openapisdk.models.operations.CreateOrganizationResponse createOrganization(openapisdk.models.operations.CreateOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationResponse res = new openapisdk.models.operations.CreateOrganizationResponse() {{
            createOrganization201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganization201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationActionBatch - Create an action batch
     *
     * Create an action batch
    **/
    public openapisdk.models.operations.CreateOrganizationActionBatchResponse createOrganizationActionBatch(openapisdk.models.operations.CreateOrganizationActionBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/actionBatches", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationActionBatchResponse res = new openapisdk.models.operations.CreateOrganizationActionBatchResponse() {{
            createOrganizationActionBatch201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationActionBatch201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationAdaptivePolicyAcl - Creates new adaptive policy ACL
     *
     * Creates new adaptive policy ACL
    **/
    public openapisdk.models.operations.CreateOrganizationAdaptivePolicyAclResponse createOrganizationAdaptivePolicyAcl(openapisdk.models.operations.CreateOrganizationAdaptivePolicyAclRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/acls", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationAdaptivePolicyAclResponse res = new openapisdk.models.operations.CreateOrganizationAdaptivePolicyAclResponse() {{
            createOrganizationAdaptivePolicyAcl200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationAdaptivePolicyAcl200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationAdmin - Create a new dashboard administrator
     *
     * Create a new dashboard administrator
    **/
    public openapisdk.models.operations.CreateOrganizationAdminResponse createOrganizationAdmin(openapisdk.models.operations.CreateOrganizationAdminRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/admins", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationAdminResponse res = new openapisdk.models.operations.CreateOrganizationAdminResponse() {{
            createOrganizationAdmin201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationAdmin201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationBrandingPolicy - Add a new branding policy to an organization
     *
     * Add a new branding policy to an organization
    **/
    public openapisdk.models.operations.CreateOrganizationBrandingPolicyResponse createOrganizationBrandingPolicy(openapisdk.models.operations.CreateOrganizationBrandingPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationBrandingPolicyResponse res = new openapisdk.models.operations.CreateOrganizationBrandingPolicyResponse() {{
            createOrganizationBrandingPolicy201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationBrandingPolicy201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationConfigTemplate - Create a new configuration template
     *
     * Create a new configuration template
    **/
    public openapisdk.models.operations.CreateOrganizationConfigTemplateResponse createOrganizationConfigTemplate(openapisdk.models.operations.CreateOrganizationConfigTemplateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationConfigTemplateResponse res = new openapisdk.models.operations.CreateOrganizationConfigTemplateResponse() {{
            createOrganizationConfigTemplate201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationConfigTemplate201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationNetwork - Create a network
     *
     * Create a network
    **/
    public openapisdk.models.operations.CreateOrganizationNetworkResponse createOrganizationNetwork(openapisdk.models.operations.CreateOrganizationNetworkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/networks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationNetworkResponse res = new openapisdk.models.operations.CreateOrganizationNetworkResponse() {{
            createOrganizationNetwork201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationNetwork201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationSamlIdp - Create a SAML IdP for your organization.
     *
     * Create a SAML IdP for your organization.
    **/
    public openapisdk.models.operations.CreateOrganizationSamlIdpResponse createOrganizationSamlIdp(openapisdk.models.operations.CreateOrganizationSamlIdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml/idps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationSamlIdpResponse res = new openapisdk.models.operations.CreateOrganizationSamlIdpResponse() {{
            createOrganizationSamlIdp201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationSamlIdp201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * createOrganizationSamlRole - Create a SAML role
     *
     * Create a SAML role
    **/
    public openapisdk.models.operations.CreateOrganizationSamlRoleResponse createOrganizationSamlRole(openapisdk.models.operations.CreateOrganizationSamlRoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/samlRoles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateOrganizationSamlRoleResponse res = new openapisdk.models.operations.CreateOrganizationSamlRoleResponse() {{
            createOrganizationSamlRole201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createOrganizationSamlRole201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteOrganization - Delete an organization
     *
     * Delete an organization
    **/
    public openapisdk.models.operations.DeleteOrganizationResponse deleteOrganization(openapisdk.models.operations.DeleteOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationResponse res = new openapisdk.models.operations.DeleteOrganizationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationActionBatch - Delete an action batch
     *
     * Delete an action batch
    **/
    public openapisdk.models.operations.DeleteOrganizationActionBatchResponse deleteOrganizationActionBatch(openapisdk.models.operations.DeleteOrganizationActionBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationActionBatchResponse res = new openapisdk.models.operations.DeleteOrganizationActionBatchResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationAdaptivePolicyAcl - Deletes the specified adaptive policy ACL
     *
     * Deletes the specified adaptive policy ACL. Note this adaptive policy ACL will also be removed from policies using it.
    **/
    public openapisdk.models.operations.DeleteOrganizationAdaptivePolicyAclResponse deleteOrganizationAdaptivePolicyAcl(openapisdk.models.operations.DeleteOrganizationAdaptivePolicyAclRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationAdaptivePolicyAclResponse res = new openapisdk.models.operations.DeleteOrganizationAdaptivePolicyAclResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationAdmin - Revoke all access for a dashboard administrator within this organization
     *
     * Revoke all access for a dashboard administrator within this organization
    **/
    public openapisdk.models.operations.DeleteOrganizationAdminResponse deleteOrganizationAdmin(openapisdk.models.operations.DeleteOrganizationAdminRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/admins/{adminId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationAdminResponse res = new openapisdk.models.operations.DeleteOrganizationAdminResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationBrandingPolicy - Delete a branding policy
     *
     * Delete a branding policy
    **/
    public openapisdk.models.operations.DeleteOrganizationBrandingPolicyResponse deleteOrganizationBrandingPolicy(openapisdk.models.operations.DeleteOrganizationBrandingPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationBrandingPolicyResponse res = new openapisdk.models.operations.DeleteOrganizationBrandingPolicyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationConfigTemplate - Remove a configuration template
     *
     * Remove a configuration template
    **/
    public openapisdk.models.operations.DeleteOrganizationConfigTemplateResponse deleteOrganizationConfigTemplate(openapisdk.models.operations.DeleteOrganizationConfigTemplateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationConfigTemplateResponse res = new openapisdk.models.operations.DeleteOrganizationConfigTemplateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationSamlIdp - Remove a SAML IdP in your organization.
     *
     * Remove a SAML IdP in your organization.
    **/
    public openapisdk.models.operations.DeleteOrganizationSamlIdpResponse deleteOrganizationSamlIdp(openapisdk.models.operations.DeleteOrganizationSamlIdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml/idps/{idpId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationSamlIdpResponse res = new openapisdk.models.operations.DeleteOrganizationSamlIdpResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteOrganizationSamlRole - Remove a SAML role
     *
     * Remove a SAML role
    **/
    public openapisdk.models.operations.DeleteOrganizationSamlRoleResponse deleteOrganizationSamlRole(openapisdk.models.operations.DeleteOrganizationSamlRoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrganizationSamlRoleResponse res = new openapisdk.models.operations.DeleteOrganizationSamlRoleResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getOrganization - Return an organization
     *
     * Return an organization
    **/
    public openapisdk.models.operations.GetOrganizationResponse getOrganization(openapisdk.models.operations.GetOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationResponse res = new openapisdk.models.operations.GetOrganizationResponse() {{
            getOrganization200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganization200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationActionBatch - Return an action batch
     *
     * Return an action batch
    **/
    public openapisdk.models.operations.GetOrganizationActionBatchResponse getOrganizationActionBatch(openapisdk.models.operations.GetOrganizationActionBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationActionBatchResponse res = new openapisdk.models.operations.GetOrganizationActionBatchResponse() {{
            getOrganizationActionBatch200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationActionBatch200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationActionBatches - Return the list of action batches in the organization
     *
     * Return the list of action batches in the organization
    **/
    public openapisdk.models.operations.GetOrganizationActionBatchesResponse getOrganizationActionBatches(openapisdk.models.operations.GetOrganizationActionBatchesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/actionBatches", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationActionBatchesResponse res = new openapisdk.models.operations.GetOrganizationActionBatchesResponse() {{
            getOrganizationActionBatches200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationActionBatches200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationAdaptivePolicyAcl - Returns the adaptive policy ACL information
     *
     * Returns the adaptive policy ACL information
    **/
    public openapisdk.models.operations.GetOrganizationAdaptivePolicyAclResponse getOrganizationAdaptivePolicyAcl(openapisdk.models.operations.GetOrganizationAdaptivePolicyAclRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationAdaptivePolicyAclResponse res = new openapisdk.models.operations.GetOrganizationAdaptivePolicyAclResponse() {{
            getOrganizationAdaptivePolicyAcl200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationAdaptivePolicyAcl200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationAdaptivePolicyAcls - List adaptive policy ACLs in a organization
     *
     * List adaptive policy ACLs in a organization
    **/
    public openapisdk.models.operations.GetOrganizationAdaptivePolicyAclsResponse getOrganizationAdaptivePolicyAcls(openapisdk.models.operations.GetOrganizationAdaptivePolicyAclsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/acls", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationAdaptivePolicyAclsResponse res = new openapisdk.models.operations.GetOrganizationAdaptivePolicyAclsResponse() {{
            getOrganizationAdaptivePolicyAcls200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationAdaptivePolicyAcls200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationAdaptivePolicySettings - Returns global adaptive policy settings in an organization
     *
     * Returns global adaptive policy settings in an organization
    **/
    public openapisdk.models.operations.GetOrganizationAdaptivePolicySettingsResponse getOrganizationAdaptivePolicySettings(openapisdk.models.operations.GetOrganizationAdaptivePolicySettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationAdaptivePolicySettingsResponse res = new openapisdk.models.operations.GetOrganizationAdaptivePolicySettingsResponse() {{
            getOrganizationAdaptivePolicySettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationAdaptivePolicySettings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationAdmins - List the dashboard administrators in this organization
     *
     * List the dashboard administrators in this organization
    **/
    public openapisdk.models.operations.GetOrganizationAdminsResponse getOrganizationAdmins(openapisdk.models.operations.GetOrganizationAdminsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/admins", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationAdminsResponse res = new openapisdk.models.operations.GetOrganizationAdminsResponse() {{
            getOrganizationAdmins200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationAdmins200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationApiRequests - List the API requests made by an organization
     *
     * List the API requests made by an organization
    **/
    public openapisdk.models.operations.GetOrganizationApiRequestsResponse getOrganizationApiRequests(openapisdk.models.operations.GetOrganizationApiRequestsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/apiRequests", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationApiRequestsResponse res = new openapisdk.models.operations.GetOrganizationApiRequestsResponse() {{
            getOrganizationApiRequests200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationApiRequests200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationApiRequestsOverview - Return an aggregated overview of API requests data
     *
     * Return an aggregated overview of API requests data
    **/
    public openapisdk.models.operations.GetOrganizationApiRequestsOverviewResponse getOrganizationApiRequestsOverview(openapisdk.models.operations.GetOrganizationApiRequestsOverviewRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/apiRequests/overview", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationApiRequestsOverviewResponse res = new openapisdk.models.operations.GetOrganizationApiRequestsOverviewResponse() {{
            getOrganizationApiRequestsOverview200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationApiRequestsOverview200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationBrandingPolicies - List the branding policies of an organization
     *
     * List the branding policies of an organization
    **/
    public openapisdk.models.operations.GetOrganizationBrandingPoliciesResponse getOrganizationBrandingPolicies(openapisdk.models.operations.GetOrganizationBrandingPoliciesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationBrandingPoliciesResponse res = new openapisdk.models.operations.GetOrganizationBrandingPoliciesResponse() {{
            getOrganizationBrandingPolicies200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationBrandingPolicies200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationBrandingPoliciesPriorities - Return the branding policy IDs of an organization in priority order
     *
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
    **/
    public openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse getOrganizationBrandingPoliciesPriorities(openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/priorities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse res = new openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse() {{
            getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationBrandingPolicy - Return a branding policy
     *
     * Return a branding policy
    **/
    public openapisdk.models.operations.GetOrganizationBrandingPolicyResponse getOrganizationBrandingPolicy(openapisdk.models.operations.GetOrganizationBrandingPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationBrandingPolicyResponse res = new openapisdk.models.operations.GetOrganizationBrandingPolicyResponse() {{
            getOrganizationBrandingPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationBrandingPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigTemplate - Return a single configuration template
     *
     * Return a single configuration template
    **/
    public openapisdk.models.operations.GetOrganizationConfigTemplateResponse getOrganizationConfigTemplate(openapisdk.models.operations.GetOrganizationConfigTemplateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationConfigTemplateResponse res = new openapisdk.models.operations.GetOrganizationConfigTemplateResponse() {{
            getOrganizationConfigTemplate200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigTemplate200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigTemplates - List the configuration templates for this organization
     *
     * List the configuration templates for this organization
    **/
    public openapisdk.models.operations.GetOrganizationConfigTemplatesResponse getOrganizationConfigTemplates(openapisdk.models.operations.GetOrganizationConfigTemplatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationConfigTemplatesResponse res = new openapisdk.models.operations.GetOrganizationConfigTemplatesResponse() {{
            getOrganizationConfigTemplates200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigTemplates200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationConfigurationChanges - View the Change Log for your organization
     *
     * View the Change Log for your organization
    **/
    public openapisdk.models.operations.GetOrganizationConfigurationChangesResponse getOrganizationConfigurationChanges(openapisdk.models.operations.GetOrganizationConfigurationChangesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configurationChanges", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationConfigurationChangesResponse res = new openapisdk.models.operations.GetOrganizationConfigurationChangesResponse() {{
            getOrganizationConfigurationChanges200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationConfigurationChanges200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationDevices - List the devices in an organization
     *
     * List the devices in an organization
    **/
    public openapisdk.models.operations.GetOrganizationDevicesResponse getOrganizationDevices(openapisdk.models.operations.GetOrganizationDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/devices", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationDevicesResponse res = new openapisdk.models.operations.GetOrganizationDevicesResponse() {{
            getOrganizationDevices200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationDevices200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationDevicesStatuses - List the status of every Meraki device in the organization
     *
     * List the status of every Meraki device in the organization
    **/
    public openapisdk.models.operations.GetOrganizationDevicesStatusesResponse getOrganizationDevicesStatuses(openapisdk.models.operations.GetOrganizationDevicesStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/devices/statuses", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationDevicesStatusesResponse res = new openapisdk.models.operations.GetOrganizationDevicesStatusesResponse() {{
            getOrganizationDevicesStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationDevicesStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationDevicesUplinksLossAndLatency - Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
    **/
    public openapisdk.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse getOrganizationDevicesUplinksLossAndLatency(openapisdk.models.operations.GetOrganizationDevicesUplinksLossAndLatencyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/devices/uplinksLossAndLatency", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse res = new openapisdk.models.operations.GetOrganizationDevicesUplinksLossAndLatencyResponse() {{
            getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationDevicesUplinksLossAndLatency200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationInventoryDevice - Return a single device from the inventory of an organization
     *
     * Return a single device from the inventory of an organization
    **/
    public openapisdk.models.operations.GetOrganizationInventoryDeviceResponse getOrganizationInventoryDevice(openapisdk.models.operations.GetOrganizationInventoryDeviceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/inventoryDevices/{serial}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationInventoryDeviceResponse res = new openapisdk.models.operations.GetOrganizationInventoryDeviceResponse() {{
            getOrganizationInventoryDevice200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationInventoryDevice200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationInventoryDevices - Return the device inventory for an organization
     *
     * Return the device inventory for an organization
    **/
    public openapisdk.models.operations.GetOrganizationInventoryDevicesResponse getOrganizationInventoryDevices(openapisdk.models.operations.GetOrganizationInventoryDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/inventoryDevices", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationInventoryDevicesResponse res = new openapisdk.models.operations.GetOrganizationInventoryDevicesResponse() {{
            getOrganizationInventoryDevices200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationInventoryDevices200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationLicense - Display a license
     *
     * Display a license
    **/
    public openapisdk.models.operations.GetOrganizationLicenseResponse getOrganizationLicense(openapisdk.models.operations.GetOrganizationLicenseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/{licenseId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationLicenseResponse res = new openapisdk.models.operations.GetOrganizationLicenseResponse() {{
            getOrganizationLicense200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationLicense200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationLicenses - List the licenses for an organization
     *
     * List the licenses for an organization
    **/
    public openapisdk.models.operations.GetOrganizationLicensesResponse getOrganizationLicenses(openapisdk.models.operations.GetOrganizationLicensesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationLicensesResponse res = new openapisdk.models.operations.GetOrganizationLicensesResponse() {{
            getOrganizationLicenses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationLicenses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationLicensesOverview - Return an overview of the license state for an organization
     *
     * Return an overview of the license state for an organization
    **/
    public openapisdk.models.operations.GetOrganizationLicensesOverviewResponse getOrganizationLicensesOverview(openapisdk.models.operations.GetOrganizationLicensesOverviewRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/overview", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationLicensesOverviewResponse res = new openapisdk.models.operations.GetOrganizationLicensesOverviewResponse() {{
            getOrganizationLicensesOverview200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationLicensesOverview200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationLoginSecurity - Returns the login security settings for an organization.
     *
     * Returns the login security settings for an organization.
    **/
    public openapisdk.models.operations.GetOrganizationLoginSecurityResponse getOrganizationLoginSecurity(openapisdk.models.operations.GetOrganizationLoginSecurityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/loginSecurity", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationLoginSecurityResponse res = new openapisdk.models.operations.GetOrganizationLoginSecurityResponse() {{
            getOrganizationLoginSecurity200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationLoginSecurity200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationNetworks - List the networks that the user has privileges on in an organization
     *
     * List the networks that the user has privileges on in an organization
    **/
    public openapisdk.models.operations.GetOrganizationNetworksResponse getOrganizationNetworks(openapisdk.models.operations.GetOrganizationNetworksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/networks", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationNetworksResponse res = new openapisdk.models.operations.GetOrganizationNetworksResponse() {{
            getOrganizationNetworks200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationNetworks200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationOpenapiSpec - Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
    **/
    public openapisdk.models.operations.GetOrganizationOpenapiSpecResponse getOrganizationOpenapiSpec(openapisdk.models.operations.GetOrganizationOpenapiSpecRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/openapiSpec", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationOpenapiSpecResponse res = new openapisdk.models.operations.GetOrganizationOpenapiSpecResponse() {{
            getOrganizationOpenapiSpec200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationOpenapiSpec200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSaml - Returns the SAML SSO enabled settings for an organization.
     *
     * Returns the SAML SSO enabled settings for an organization.
    **/
    public openapisdk.models.operations.GetOrganizationSamlResponse getOrganizationSaml(openapisdk.models.operations.GetOrganizationSamlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSamlResponse res = new openapisdk.models.operations.GetOrganizationSamlResponse() {{
            getOrganizationSaml200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSaml200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSamlIdp - Get a SAML IdP from your organization.
     *
     * Get a SAML IdP from your organization.
    **/
    public openapisdk.models.operations.GetOrganizationSamlIdpResponse getOrganizationSamlIdp(openapisdk.models.operations.GetOrganizationSamlIdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml/idps/{idpId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSamlIdpResponse res = new openapisdk.models.operations.GetOrganizationSamlIdpResponse() {{
            getOrganizationSamlIdp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSamlIdp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSamlIdps - List the SAML IdPs in your organization.
     *
     * List the SAML IdPs in your organization.
    **/
    public openapisdk.models.operations.GetOrganizationSamlIdpsResponse getOrganizationSamlIdps(openapisdk.models.operations.GetOrganizationSamlIdpsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml/idps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSamlIdpsResponse res = new openapisdk.models.operations.GetOrganizationSamlIdpsResponse() {{
            getOrganizationSamlIdps200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSamlIdps200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSamlRole - Return a SAML role
     *
     * Return a SAML role
    **/
    public openapisdk.models.operations.GetOrganizationSamlRoleResponse getOrganizationSamlRole(openapisdk.models.operations.GetOrganizationSamlRoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSamlRoleResponse res = new openapisdk.models.operations.GetOrganizationSamlRoleResponse() {{
            getOrganizationSamlRole200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSamlRole200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSamlRoles - List the SAML roles for this organization
     *
     * List the SAML roles for this organization
    **/
    public openapisdk.models.operations.GetOrganizationSamlRolesResponse getOrganizationSamlRoles(openapisdk.models.operations.GetOrganizationSamlRolesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/samlRoles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSamlRolesResponse res = new openapisdk.models.operations.GetOrganizationSamlRolesResponse() {{
            getOrganizationSamlRoles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSamlRoles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationSnmp - Return the SNMP settings for an organization
     *
     * Return the SNMP settings for an organization
    **/
    public openapisdk.models.operations.GetOrganizationSnmpResponse getOrganizationSnmp(openapisdk.models.operations.GetOrganizationSnmpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/snmp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationSnmpResponse res = new openapisdk.models.operations.GetOrganizationSnmpResponse() {{
            getOrganizationSnmp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationSnmp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationUplinksStatuses - List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
    **/
    public openapisdk.models.operations.GetOrganizationUplinksStatusesResponse getOrganizationUplinksStatuses(openapisdk.models.operations.GetOrganizationUplinksStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/uplinks/statuses", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationUplinksStatusesResponse res = new openapisdk.models.operations.GetOrganizationUplinksStatusesResponse() {{
            getOrganizationUplinksStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationUplinksStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationWebhooksAlertTypes - Return a list of alert types to be used with managing webhook alerts
     *
     * Return a list of alert types to be used with managing webhook alerts
    **/
    public openapisdk.models.operations.GetOrganizationWebhooksAlertTypesResponse getOrganizationWebhooksAlertTypes(openapisdk.models.operations.GetOrganizationWebhooksAlertTypesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/webhooks/alertTypes", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationWebhooksAlertTypesResponse res = new openapisdk.models.operations.GetOrganizationWebhooksAlertTypesResponse() {{
            getOrganizationWebhooksAlertTypes200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationWebhooksAlertTypes200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizationWebhooksLogs - Return the log of webhook POSTs sent
     *
     * Return the log of webhook POSTs sent
    **/
    public openapisdk.models.operations.GetOrganizationWebhooksLogsResponse getOrganizationWebhooksLogs(openapisdk.models.operations.GetOrganizationWebhooksLogsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/webhooks/logs", request.pathParams);
        
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

        openapisdk.models.operations.GetOrganizationWebhooksLogsResponse res = new openapisdk.models.operations.GetOrganizationWebhooksLogsResponse() {{
            getOrganizationWebhooksLogs200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationWebhooksLogs200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrganizations - List the organizations that the user has privileges on
     *
     * List the organizations that the user has privileges on
    **/
    public openapisdk.models.operations.GetOrganizationsResponse getOrganizations() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationsResponse res = new openapisdk.models.operations.GetOrganizationsResponse() {{
            getOrganizations200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizations200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * moveOrganizationLicenses - Move licenses to another organization
     *
     * Move licenses to another organization. This will also move any devices that the licenses are assigned to
    **/
    public openapisdk.models.operations.MoveOrganizationLicensesResponse moveOrganizationLicenses(openapisdk.models.operations.MoveOrganizationLicensesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/move", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MoveOrganizationLicensesResponse res = new openapisdk.models.operations.MoveOrganizationLicensesResponse() {{
            moveOrganizationLicenses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.moveOrganizationLicenses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * moveOrganizationLicensesSeats - Move SM seats to another organization
     *
     * Move SM seats to another organization
    **/
    public openapisdk.models.operations.MoveOrganizationLicensesSeatsResponse moveOrganizationLicensesSeats(openapisdk.models.operations.MoveOrganizationLicensesSeatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/moveSeats", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MoveOrganizationLicensesSeatsResponse res = new openapisdk.models.operations.MoveOrganizationLicensesSeatsResponse() {{
            moveOrganizationLicensesSeats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.moveOrganizationLicensesSeats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * renewOrganizationLicensesSeats - Renew SM seats of a license
     *
     * Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license
    **/
    public openapisdk.models.operations.RenewOrganizationLicensesSeatsResponse renewOrganizationLicensesSeats(openapisdk.models.operations.RenewOrganizationLicensesSeatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/renewSeats", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RenewOrganizationLicensesSeatsResponse res = new openapisdk.models.operations.RenewOrganizationLicensesSeatsResponse() {{
            renewOrganizationLicensesSeats200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.renewOrganizationLicensesSeats200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganization - Update an organization
     *
     * Update an organization
    **/
    public openapisdk.models.operations.UpdateOrganizationResponse updateOrganization(openapisdk.models.operations.UpdateOrganizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationResponse res = new openapisdk.models.operations.UpdateOrganizationResponse() {{
            updateOrganization200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganization200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationActionBatch - Update an action batch
     *
     * Update an action batch
    **/
    public openapisdk.models.operations.UpdateOrganizationActionBatchResponse updateOrganizationActionBatch(openapisdk.models.operations.UpdateOrganizationActionBatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/actionBatches/{actionBatchId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationActionBatchResponse res = new openapisdk.models.operations.UpdateOrganizationActionBatchResponse() {{
            updateOrganizationActionBatch200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationActionBatch200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationAdaptivePolicyAcl - Updates an adaptive policy ACL
     *
     * Updates an adaptive policy ACL
    **/
    public openapisdk.models.operations.UpdateOrganizationAdaptivePolicyAclResponse updateOrganizationAdaptivePolicyAcl(openapisdk.models.operations.UpdateOrganizationAdaptivePolicyAclRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/acls/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationAdaptivePolicyAclResponse res = new openapisdk.models.operations.UpdateOrganizationAdaptivePolicyAclResponse() {{
            updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationAdaptivePolicyAcl200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationAdaptivePolicySettings - Update global adaptive policy settings
     *
     * Update global adaptive policy settings
    **/
    public openapisdk.models.operations.UpdateOrganizationAdaptivePolicySettingsResponse updateOrganizationAdaptivePolicySettings(openapisdk.models.operations.UpdateOrganizationAdaptivePolicySettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/adaptivePolicy/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationAdaptivePolicySettingsResponse res = new openapisdk.models.operations.UpdateOrganizationAdaptivePolicySettingsResponse() {{
            updateOrganizationAdaptivePolicySettings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationAdaptivePolicySettings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationAdmin - Update an administrator
     *
     * Update an administrator
    **/
    public openapisdk.models.operations.UpdateOrganizationAdminResponse updateOrganizationAdmin(openapisdk.models.operations.UpdateOrganizationAdminRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/admins/{adminId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationAdminResponse res = new openapisdk.models.operations.UpdateOrganizationAdminResponse() {{
            updateOrganizationAdmin200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationAdmin200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationBrandingPoliciesPriorities - Update the priority ordering of an organization's branding policies.
     *
     * Update the priority ordering of an organization's branding policies.
    **/
    public openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse updateOrganizationBrandingPoliciesPriorities(openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/priorities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse res = new openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse() {{
            updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationBrandingPolicy - Update a branding policy
     *
     * Update a branding policy
    **/
    public openapisdk.models.operations.UpdateOrganizationBrandingPolicyResponse updateOrganizationBrandingPolicy(openapisdk.models.operations.UpdateOrganizationBrandingPolicyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/{brandingPolicyId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationBrandingPolicyResponse res = new openapisdk.models.operations.UpdateOrganizationBrandingPolicyResponse() {{
            updateOrganizationBrandingPolicy200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationBrandingPolicy200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationConfigTemplate - Update a configuration template
     *
     * Update a configuration template
    **/
    public openapisdk.models.operations.UpdateOrganizationConfigTemplateResponse updateOrganizationConfigTemplate(openapisdk.models.operations.UpdateOrganizationConfigTemplateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/configTemplates/{configTemplateId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationConfigTemplateResponse res = new openapisdk.models.operations.UpdateOrganizationConfigTemplateResponse() {{
            updateOrganizationConfigTemplate200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationConfigTemplate200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationLicense - Update a license
     *
     * Update a license
    **/
    public openapisdk.models.operations.UpdateOrganizationLicenseResponse updateOrganizationLicense(openapisdk.models.operations.UpdateOrganizationLicenseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/licenses/{licenseId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationLicenseResponse res = new openapisdk.models.operations.UpdateOrganizationLicenseResponse() {{
            updateOrganizationLicense200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationLicense200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationLoginSecurity - Update the login security settings for an organization
     *
     * Update the login security settings for an organization
    **/
    public openapisdk.models.operations.UpdateOrganizationLoginSecurityResponse updateOrganizationLoginSecurity(openapisdk.models.operations.UpdateOrganizationLoginSecurityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/loginSecurity", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationLoginSecurityResponse res = new openapisdk.models.operations.UpdateOrganizationLoginSecurityResponse() {{
            updateOrganizationLoginSecurity200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationLoginSecurity200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationSaml - Updates the SAML SSO enabled settings for an organization.
     *
     * Updates the SAML SSO enabled settings for an organization.
    **/
    public openapisdk.models.operations.UpdateOrganizationSamlResponse updateOrganizationSaml(openapisdk.models.operations.UpdateOrganizationSamlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationSamlResponse res = new openapisdk.models.operations.UpdateOrganizationSamlResponse() {{
            updateOrganizationSaml200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationSaml200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationSamlIdp - Update a SAML IdP in your organization
     *
     * Update a SAML IdP in your organization
    **/
    public openapisdk.models.operations.UpdateOrganizationSamlIdpResponse updateOrganizationSamlIdp(openapisdk.models.operations.UpdateOrganizationSamlIdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/saml/idps/{idpId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationSamlIdpResponse res = new openapisdk.models.operations.UpdateOrganizationSamlIdpResponse() {{
            updateOrganizationSamlIdp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationSamlIdp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationSamlRole - Update a SAML role
     *
     * Update a SAML role
    **/
    public openapisdk.models.operations.UpdateOrganizationSamlRoleResponse updateOrganizationSamlRole(openapisdk.models.operations.UpdateOrganizationSamlRoleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/samlRoles/{samlRoleId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationSamlRoleResponse res = new openapisdk.models.operations.UpdateOrganizationSamlRoleResponse() {{
            updateOrganizationSamlRole200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationSamlRole200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationSnmp - Update the SNMP settings for an organization
     *
     * Update the SNMP settings for an organization
    **/
    public openapisdk.models.operations.UpdateOrganizationSnmpResponse updateOrganizationSnmp(openapisdk.models.operations.UpdateOrganizationSnmpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/snmp", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationSnmpResponse res = new openapisdk.models.operations.UpdateOrganizationSnmpResponse() {{
            updateOrganizationSnmp200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationSnmp200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}