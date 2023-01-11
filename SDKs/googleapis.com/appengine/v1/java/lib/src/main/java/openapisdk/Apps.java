package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Apps {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Apps(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * appengineAppsAuthorizedCertificatesCreate - Uploads the specified SSL certificate.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse appengineAppsAuthorizedCertificatesCreate(openapisdk.models.operations.AppengineAppsAuthorizedCertificatesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedCertificates", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedCertificatesCreateResponse() {{
            authorizedCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthorizedCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthorizedCertificate.class);
                res.authorizedCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsAuthorizedCertificatesDelete - Deletes the specified SSL certificate.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedCertificatesDeleteResponse appengineAppsAuthorizedCertificatesDelete(openapisdk.models.operations.AppengineAppsAuthorizedCertificatesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedCertificatesDeleteResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedCertificatesDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsAuthorizedCertificatesGet - Gets the specified SSL certificate.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedCertificatesGetResponse appengineAppsAuthorizedCertificatesGet(openapisdk.models.operations.AppengineAppsAuthorizedCertificatesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedCertificatesGetResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedCertificatesGetResponse() {{
            authorizedCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthorizedCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthorizedCertificate.class);
                res.authorizedCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsAuthorizedCertificatesList - Lists all SSL certificates the user is authorized to administer.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedCertificatesListResponse appengineAppsAuthorizedCertificatesList(openapisdk.models.operations.AppengineAppsAuthorizedCertificatesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedCertificates", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedCertificatesListResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedCertificatesListResponse() {{
            listAuthorizedCertificatesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAuthorizedCertificatesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAuthorizedCertificatesResponse.class);
                res.listAuthorizedCertificatesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsAuthorizedCertificatesPatch - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedCertificatesPatchResponse appengineAppsAuthorizedCertificatesPatch(openapisdk.models.operations.AppengineAppsAuthorizedCertificatesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedCertificatesPatchResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedCertificatesPatchResponse() {{
            authorizedCertificate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuthorizedCertificate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuthorizedCertificate.class);
                res.authorizedCertificate = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsAuthorizedDomainsList - Lists all domains the user is authorized to administer.
    **/
    public openapisdk.models.operations.AppengineAppsAuthorizedDomainsListResponse appengineAppsAuthorizedDomainsList(openapisdk.models.operations.AppengineAppsAuthorizedDomainsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/authorizedDomains", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsAuthorizedDomainsListResponse res = new openapisdk.models.operations.AppengineAppsAuthorizedDomainsListResponse() {{
            listAuthorizedDomainsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAuthorizedDomainsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAuthorizedDomainsResponse.class);
                res.listAuthorizedDomainsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsCreate - Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
    **/
    public openapisdk.models.operations.AppengineAppsCreateResponse appengineAppsCreate(openapisdk.models.operations.AppengineAppsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps");
        
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

        openapisdk.models.operations.AppengineAppsCreateResponse res = new openapisdk.models.operations.AppengineAppsCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsDomainMappingsCreate - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
    **/
    public openapisdk.models.operations.AppengineAppsDomainMappingsCreateResponse appengineAppsDomainMappingsCreate(openapisdk.models.operations.AppengineAppsDomainMappingsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/domainMappings", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsDomainMappingsCreateResponse res = new openapisdk.models.operations.AppengineAppsDomainMappingsCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsDomainMappingsDelete - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
    **/
    public openapisdk.models.operations.AppengineAppsDomainMappingsDeleteResponse appengineAppsDomainMappingsDelete(openapisdk.models.operations.AppengineAppsDomainMappingsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/domainMappings/{domainMappingsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsDomainMappingsDeleteResponse res = new openapisdk.models.operations.AppengineAppsDomainMappingsDeleteResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsDomainMappingsGet - Gets the specified domain mapping.
    **/
    public openapisdk.models.operations.AppengineAppsDomainMappingsGetResponse appengineAppsDomainMappingsGet(openapisdk.models.operations.AppengineAppsDomainMappingsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/domainMappings/{domainMappingsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsDomainMappingsGetResponse res = new openapisdk.models.operations.AppengineAppsDomainMappingsGetResponse() {{
            domainMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DomainMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DomainMapping.class);
                res.domainMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsDomainMappingsList - Lists the domain mappings on an application.
    **/
    public openapisdk.models.operations.AppengineAppsDomainMappingsListResponse appengineAppsDomainMappingsList(openapisdk.models.operations.AppengineAppsDomainMappingsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/domainMappings", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsDomainMappingsListResponse res = new openapisdk.models.operations.AppengineAppsDomainMappingsListResponse() {{
            listDomainMappingsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListDomainMappingsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListDomainMappingsResponse.class);
                res.listDomainMappingsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsDomainMappingsPatch - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
    **/
    public openapisdk.models.operations.AppengineAppsDomainMappingsPatchResponse appengineAppsDomainMappingsPatch(openapisdk.models.operations.AppengineAppsDomainMappingsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/domainMappings/{domainMappingsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsDomainMappingsPatchResponse res = new openapisdk.models.operations.AppengineAppsDomainMappingsPatchResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesBatchUpdate - Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse appengineAppsFirewallIngressRulesBatchUpdate(openapisdk.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules:batchUpdate", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesBatchUpdateResponse() {{
            batchUpdateIngressRulesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BatchUpdateIngressRulesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BatchUpdateIngressRulesResponse.class);
                res.batchUpdateIngressRulesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesCreate - Creates a firewall rule for the application.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesCreateResponse appengineAppsFirewallIngressRulesCreate(openapisdk.models.operations.AppengineAppsFirewallIngressRulesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesCreateResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesCreateResponse() {{
            firewallRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirewallRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirewallRule.class);
                res.firewallRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesDelete - Deletes the specified firewall rule.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesDeleteResponse appengineAppsFirewallIngressRulesDelete(openapisdk.models.operations.AppengineAppsFirewallIngressRulesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesDeleteResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesDeleteResponse() {{
            empty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.empty = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesGet - Gets the specified firewall rule.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesGetResponse appengineAppsFirewallIngressRulesGet(openapisdk.models.operations.AppengineAppsFirewallIngressRulesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesGetResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesGetResponse() {{
            firewallRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirewallRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirewallRule.class);
                res.firewallRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesList - Lists the firewall rules of an application.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesListResponse appengineAppsFirewallIngressRulesList(openapisdk.models.operations.AppengineAppsFirewallIngressRulesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesListResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesListResponse() {{
            listIngressRulesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListIngressRulesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListIngressRulesResponse.class);
                res.listIngressRulesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsFirewallIngressRulesPatch - Updates the specified firewall rule.
    **/
    public openapisdk.models.operations.AppengineAppsFirewallIngressRulesPatchResponse appengineAppsFirewallIngressRulesPatch(openapisdk.models.operations.AppengineAppsFirewallIngressRulesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsFirewallIngressRulesPatchResponse res = new openapisdk.models.operations.AppengineAppsFirewallIngressRulesPatchResponse() {{
            firewallRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FirewallRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FirewallRule.class);
                res.firewallRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsGet - Gets information about an application.
    **/
    public openapisdk.models.operations.AppengineAppsGetResponse appengineAppsGet(openapisdk.models.operations.AppengineAppsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsGetResponse res = new openapisdk.models.operations.AppengineAppsGetResponse() {{
            application = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Application out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Application.class);
                res.application = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsLocationsGet - Gets information about a location.
    **/
    public openapisdk.models.operations.AppengineAppsLocationsGetResponse appengineAppsLocationsGet(openapisdk.models.operations.AppengineAppsLocationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/locations/{locationsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsLocationsGetResponse res = new openapisdk.models.operations.AppengineAppsLocationsGetResponse() {{
            location = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Location out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Location.class);
                res.location = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsLocationsList - Lists information about the supported locations for this service.
    **/
    public openapisdk.models.operations.AppengineAppsLocationsListResponse appengineAppsLocationsList(openapisdk.models.operations.AppengineAppsLocationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/locations", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsLocationsListResponse res = new openapisdk.models.operations.AppengineAppsLocationsListResponse() {{
            listLocationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLocationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLocationsResponse.class);
                res.listLocationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    public openapisdk.models.operations.AppengineAppsOperationsGetResponse appengineAppsOperationsGet(openapisdk.models.operations.AppengineAppsOperationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/operations/{operationsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsOperationsGetResponse res = new openapisdk.models.operations.AppengineAppsOperationsGetResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    public openapisdk.models.operations.AppengineAppsOperationsListResponse appengineAppsOperationsList(openapisdk.models.operations.AppengineAppsOperationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/operations", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsOperationsListResponse res = new openapisdk.models.operations.AppengineAppsOperationsListResponse() {{
            listOperationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListOperationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListOperationsResponse.class);
                res.listOperationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsPatch - Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
    **/
    public openapisdk.models.operations.AppengineAppsPatchResponse appengineAppsPatch(openapisdk.models.operations.AppengineAppsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsPatchResponse res = new openapisdk.models.operations.AppengineAppsPatchResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsRepair - Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
    **/
    public openapisdk.models.operations.AppengineAppsRepairResponse appengineAppsRepair(openapisdk.models.operations.AppengineAppsRepairRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}:repair", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsRepairResponse res = new openapisdk.models.operations.AppengineAppsRepairResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesDelete - Deletes the specified service and all enclosed versions.
    **/
    public openapisdk.models.operations.AppengineAppsServicesDeleteResponse appengineAppsServicesDelete(openapisdk.models.operations.AppengineAppsServicesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesDeleteResponse res = new openapisdk.models.operations.AppengineAppsServicesDeleteResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesGet - Gets the current configuration of the specified service.
    **/
    public openapisdk.models.operations.AppengineAppsServicesGetResponse appengineAppsServicesGet(openapisdk.models.operations.AppengineAppsServicesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesGetResponse res = new openapisdk.models.operations.AppengineAppsServicesGetResponse() {{
            service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Service.class);
                res.service = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesList - Lists all the services in the application.
    **/
    public openapisdk.models.operations.AppengineAppsServicesListResponse appengineAppsServicesList(openapisdk.models.operations.AppengineAppsServicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesListResponse res = new openapisdk.models.operations.AppengineAppsServicesListResponse() {{
            listServicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListServicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListServicesResponse.class);
                res.listServicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesPatch - Updates the configuration of the specified service.
    **/
    public openapisdk.models.operations.AppengineAppsServicesPatchResponse appengineAppsServicesPatch(openapisdk.models.operations.AppengineAppsServicesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesPatchResponse res = new openapisdk.models.operations.AppengineAppsServicesPatchResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsCreate - Deploys code and resource files to a new version.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsCreateResponse appengineAppsServicesVersionsCreate(openapisdk.models.operations.AppengineAppsServicesVersionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsCreateResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsCreateResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsDelete - Deletes an existing Version resource.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsDeleteResponse appengineAppsServicesVersionsDelete(openapisdk.models.operations.AppengineAppsServicesVersionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsDeleteResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsDeleteResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsGet - Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsGetResponse appengineAppsServicesVersionsGet(openapisdk.models.operations.AppengineAppsServicesVersionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsGetResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsGetResponse() {{
            version = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Version out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Version.class);
                res.version = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsInstancesDebug - Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDebugResponse appengineAppsServicesVersionsInstancesDebug(openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDebugRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDebugResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDebugResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsInstancesDelete - Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDeleteResponse appengineAppsServicesVersionsInstancesDelete(openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDeleteResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsInstancesDeleteResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsInstancesGet - Gets instance information.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsInstancesGetResponse appengineAppsServicesVersionsInstancesGet(openapisdk.models.operations.AppengineAppsServicesVersionsInstancesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsInstancesGetResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsInstancesGetResponse() {{
            instance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Instance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Instance.class);
                res.instance = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsInstancesList - Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsInstancesListResponse appengineAppsServicesVersionsInstancesList(openapisdk.models.operations.AppengineAppsServicesVersionsInstancesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsInstancesListResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsInstancesListResponse() {{
            listInstancesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInstancesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInstancesResponse.class);
                res.listInstancesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsList - Lists the versions of a service.
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsListResponse appengineAppsServicesVersionsList(openapisdk.models.operations.AppengineAppsServicesVersionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsListResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsListResponse() {{
            listVersionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListVersionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListVersionsResponse.class);
                res.listVersionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * appengineAppsServicesVersionsPatch - Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)
    **/
    public openapisdk.models.operations.AppengineAppsServicesVersionsPatchResponse appengineAppsServicesVersionsPatch(openapisdk.models.operations.AppengineAppsServicesVersionsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}", request.pathParams);
        
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

        openapisdk.models.operations.AppengineAppsServicesVersionsPatchResponse res = new openapisdk.models.operations.AppengineAppsServicesVersionsPatchResponse() {{
            operation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Operation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Operation.class);
                res.operation = out;
            }
        }

        return res;
    }
	
}