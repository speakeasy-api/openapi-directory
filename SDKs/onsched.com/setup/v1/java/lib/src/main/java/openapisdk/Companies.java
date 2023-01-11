package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Companies {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Companies(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1CompaniesDomainsId - Deletes a whitelisted domain for the authorized company
     * Returns view of domain deleted
    **/
    public openapisdk.models.operations.DeleteSetupV1CompaniesDomainsIdResponse deleteSetupV1CompaniesDomainsId(openapisdk.models.operations.DeleteSetupV1CompaniesDomainsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/domains/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1CompaniesDomainsIdResponse res = new openapisdk.models.operations.DeleteSetupV1CompaniesDomainsIdResponse() {{
            companyDomainViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyDomainViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyDomainViewModel.class);
                res.companyDomainViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1CompaniesEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    public openapisdk.models.operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse deleteSetupV1CompaniesEmailTemplatesMaster() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/email/templates/master");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse res = new openapisdk.models.operations.DeleteSetupV1CompaniesEmailTemplatesMasterResponse() {{
            masterEmailTemplateSettingsViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MasterEmailTemplateSettingsViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MasterEmailTemplateSettingsViewModel.class);
                res.masterEmailTemplateSettingsViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1CompaniesRegionsId - Delete a region
     *
     * Deletes a region.
     * 
     * If the region is related to any business locations it cannot be deleted
    **/
    public openapisdk.models.operations.DeleteSetupV1CompaniesRegionsIdResponse deleteSetupV1CompaniesRegionsId(openapisdk.models.operations.DeleteSetupV1CompaniesRegionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/regions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1CompaniesRegionsIdResponse res = new openapisdk.models.operations.DeleteSetupV1CompaniesRegionsIdResponse() {{
            regionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RegionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RegionViewModel.class);
                res.regionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Companies - Returns a company profile information of the authorized company
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesResponse getSetupV1Companies() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesResponse res = new openapisdk.models.operations.GetSetupV1CompaniesResponse() {{
            companyViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyViewModel.class);
                res.companyViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesDomains - Returns a list of whitelisted domains for the authorized company
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesDomainsResponse getSetupV1CompaniesDomains() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/domains");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesDomainsResponse res = new openapisdk.models.operations.GetSetupV1CompaniesDomainsResponse() {{
            companyDomainListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyDomainListViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyDomainListViewModel.class);
                res.companyDomainListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesDomainsId - Returns a whitelisted domain for the authorized company
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesDomainsIdResponse getSetupV1CompaniesDomainsId(openapisdk.models.operations.GetSetupV1CompaniesDomainsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/domains/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesDomainsIdResponse res = new openapisdk.models.operations.GetSetupV1CompaniesDomainsIdResponse() {{
            companyDomainViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyDomainViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyDomainViewModel.class);
                res.companyDomainViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * This endpoint returns only company level templates so the scope is always company
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesResponse getSetupV1CompaniesEmailTemplates() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/email/templates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesResponse res = new openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesResponse() {{
            emailTemplateListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.emailTemplateListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesMasterResponse getSetupV1CompaniesEmailTemplatesMaster() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/email/templates/master");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesMasterResponse res = new openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesMasterResponse() {{
            masterEmailTemplateSettingsViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MasterEmailTemplateSettingsViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MasterEmailTemplateSettingsViewModel.class);
                res.masterEmailTemplateSettingsViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesEmailTemplatesTemplateName - Returns default or custom email template from the authorized company
     *
     * The default email template is returned when a custom template is not found
     * The response content is in html format.
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse getSetupV1CompaniesEmailTemplatesTemplateName(openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/email/templates/{templateName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse res = new openapisdk.models.operations.GetSetupV1CompaniesEmailTemplatesTemplateNameResponse() {{
            contentResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ContentResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ContentResult.class);
                res.contentResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesRegions - Returns a list of regions.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesRegionsResponse getSetupV1CompaniesRegions(openapisdk.models.operations.GetSetupV1CompaniesRegionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/regions");
        
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

        openapisdk.models.operations.GetSetupV1CompaniesRegionsResponse res = new openapisdk.models.operations.GetSetupV1CompaniesRegionsResponse() {{
            regionListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.regionListViewModel = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesRegionsId - Get a Region
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesRegionsIdResponse getSetupV1CompaniesRegionsId(openapisdk.models.operations.GetSetupV1CompaniesRegionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/regions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesRegionsIdResponse res = new openapisdk.models.operations.GetSetupV1CompaniesRegionsIdResponse() {{
            regionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RegionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RegionViewModel.class);
                res.regionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1CompaniesTimezonesDate - Returns timezone information for all supported Timezone's
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    public openapisdk.models.operations.GetSetupV1CompaniesTimezonesDateResponse getSetupV1CompaniesTimezonesDate(openapisdk.models.operations.GetSetupV1CompaniesTimezonesDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/timezones/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1CompaniesTimezonesDateResponse res = new openapisdk.models.operations.GetSetupV1CompaniesTimezonesDateResponse() {{
            timezoneViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TimezoneViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TimezoneViewModel.class);
                res.timezoneViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1Companies - Creates a company profile.
     *
     * Use this endpoint to create a new Company Profile. 
     * This endpoint is restricted by scope and limited to use by OnSched internal apps
     * 
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    public openapisdk.models.operations.PostSetupV1CompaniesResponse postSetupV1Companies(openapisdk.models.operations.PostSetupV1CompaniesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CompaniesResponse res = new openapisdk.models.operations.PostSetupV1CompaniesResponse() {{
            companyViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyViewModel.class);
                res.companyViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1CompaniesDomains - Creates a whitelisted domain for the authorized company
     * Returns view of domain created
    **/
    public openapisdk.models.operations.PostSetupV1CompaniesDomainsResponse postSetupV1CompaniesDomains(openapisdk.models.operations.PostSetupV1CompaniesDomainsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/domains");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CompaniesDomainsResponse res = new openapisdk.models.operations.PostSetupV1CompaniesDomainsResponse() {{
            companyDomainViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyDomainViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyDomainViewModel.class);
                res.companyDomainViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1CompaniesEmailTemplatesMaster - Updates / creates custom master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    public openapisdk.models.operations.PostSetupV1CompaniesEmailTemplatesMasterResponse postSetupV1CompaniesEmailTemplatesMaster(openapisdk.models.operations.PostSetupV1CompaniesEmailTemplatesMasterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/email/templates/master");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CompaniesEmailTemplatesMasterResponse res = new openapisdk.models.operations.PostSetupV1CompaniesEmailTemplatesMasterResponse() {{
            masterEmailTemplateSettingsViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MasterEmailTemplateSettingsViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MasterEmailTemplateSettingsViewModel.class);
                res.masterEmailTemplateSettingsViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1CompaniesRegions - Create a new region
     *
     * Creates a new region.
     * 
     * Regions can be mapped to business locations. Locations can be filtered by region id
    **/
    public openapisdk.models.operations.PostSetupV1CompaniesRegionsResponse postSetupV1CompaniesRegions(openapisdk.models.operations.PostSetupV1CompaniesRegionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/regions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1CompaniesRegionsResponse res = new openapisdk.models.operations.PostSetupV1CompaniesRegionsResponse() {{
            regionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RegionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RegionViewModel.class);
                res.regionViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1Companies - Updates a company object.
     *
     * Use this endpoint to update the authorized company. 
     * 
     * Your client credentials resolve to a single company.
     * 
     * The timezoneName can be expressed as an Iana Timezone e.g. America/New_York
     * or a Microsoft Timezone e.g. Eastern Standard Time
    **/
    public openapisdk.models.operations.PutSetupV1CompaniesResponse putSetupV1Companies(openapisdk.models.operations.PutSetupV1CompaniesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CompaniesResponse res = new openapisdk.models.operations.PutSetupV1CompaniesResponse() {{
            companyViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyViewModel.class);
                res.companyViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1CompaniesDomainsId - Updates a whitelisted domain for the authorized company
     * Returns view of domain updated
    **/
    public openapisdk.models.operations.PutSetupV1CompaniesDomainsIdResponse putSetupV1CompaniesDomainsId(openapisdk.models.operations.PutSetupV1CompaniesDomainsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/domains/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CompaniesDomainsIdResponse res = new openapisdk.models.operations.PutSetupV1CompaniesDomainsIdResponse() {{
            companyDomainViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CompanyDomainViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CompanyDomainViewModel.class);
                res.companyDomainViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1CompaniesRegionsId - Update a region
     *
     * Updates a region.
     * 
     * Regions can be mapped to business locations. Locations can be filtered by region id.
    **/
    public openapisdk.models.operations.PutSetupV1CompaniesRegionsIdResponse putSetupV1CompaniesRegionsId(openapisdk.models.operations.PutSetupV1CompaniesRegionsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/companies/regions/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1CompaniesRegionsIdResponse res = new openapisdk.models.operations.PutSetupV1CompaniesRegionsIdResponse() {{
            regionViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.RegionViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RegionViewModel.class);
                res.regionViewModel = out;
            }
        }

        return res;
    }
	
}