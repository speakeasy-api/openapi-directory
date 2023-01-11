package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Locations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Locations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteSetupV1LocationsServicesId - Deletes a location service from the specified location
     *
     * Use this endpoint to delete a location service for a location
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsServicesIdResponse deleteSetupV1LocationsServicesId(openapisdk.models.operations.DeleteSetupV1LocationsServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsServicesIdResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsServicesIdResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1LocationsId - Deletes a location object.
     *
     * Use this endpoint to delete a location. The location is not permanently deleted and can be recovered.
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdResponse deleteSetupV1LocationsId(openapisdk.models.operations.DeleteSetupV1LocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1LocationsIdDeleteallimages - Deletes all images from location blob storage container
     *
     * An option exists to use upper case for matching the subdirectory name
     * Legacy apps stored pics using upper case externalId. Api uses lower case names.
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteallimagesResponse deleteSetupV1LocationsIdDeleteallimages(openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteallimagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/deleteallimages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteallimagesResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteallimagesResponse() {{
            deleteSetupV1LocationsIdDeleteallimages200ApplicationJSONBoolean = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Boolean out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Boolean.class);
                res.deleteSetupV1LocationsIdDeleteallimages200ApplicationJSONBoolean = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1LocationsIdDeleteimage - Removes a location image
     *
     * Use this endpoint to delete a previously uploaded location image.
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteimageResponse deleteSetupV1LocationsIdDeleteimage(openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/deleteimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteimageResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdDeleteimageResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1LocationsIdEmailTemplatesMaster - Deletes custom master email template settings reverting to the default
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse deleteSetupV1LocationsIdEmailTemplatesMaster(openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates/master", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesMasterResponse() {{
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
     * deleteSetupV1LocationsIdEmailTemplatesTemplateName - Deletes a custom email template
     *
     * Use this endpoint to remove a custom email template. 
     * 
     * Custom email templates created in the primary location are company scope and inherited by all locations
     * unless overriden in a location. Templates created in any location other than the primary apply to that location only.
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse deleteSetupV1LocationsIdEmailTemplatesTemplateName(openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates/{templateName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse() {{
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
     * deleteSetupV1LocationsIdGoogleServiceAccount - Remove authorized access to all google calendar users in an organization
     *
     * Use this endpoint to remove authorized access to all google calendar users.
     * Calendars will no longer be synced for resources
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse deleteSetupV1LocationsIdGoogleServiceAccount(openapisdk.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/google/service/account", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdGoogleServiceAccountResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * deleteSetupV1LocationsIdServices - Deletes all location services from the specified location
     *
     * Use this endpoint to delete all location services for a location
    **/
    public openapisdk.models.operations.DeleteSetupV1LocationsIdServicesResponse deleteSetupV1LocationsIdServices(openapisdk.models.operations.DeleteSetupV1LocationsIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/services", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSetupV1LocationsIdServicesResponse res = new openapisdk.models.operations.DeleteSetupV1LocationsIdServicesResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1Locations - Returns a list of business locations.
     *
     * Use this api end point if you have multiple business locations in your company.
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsResponse getSetupV1Locations(openapisdk.models.operations.GetSetupV1LocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations");
        
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

        openapisdk.models.operations.GetSetupV1LocationsResponse res = new openapisdk.models.operations.GetSetupV1LocationsResponse() {{
            locationListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.locationListViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1LocationsServicesId - Returns a single location services.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsServicesIdResponse getSetupV1LocationsServicesId(openapisdk.models.operations.GetSetupV1LocationsServicesIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/services/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsServicesIdResponse res = new openapisdk.models.operations.GetSetupV1LocationsServicesIdResponse() {{
            businessServiceViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BusinessServiceViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BusinessServiceViewModel.class);
                res.businessServiceViewModel = out;
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
     * getSetupV1LocationsId - Returns a business location object.
     *
     * The result returned is a single location object. An id is required to find the location. Find location id's using the GET consumer/v1/locations end point,
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdResponse getSetupV1LocationsId(openapisdk.models.operations.GetSetupV1LocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsIdResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1LocationsIdEmailTemplates - Returns email template list from the authorized company
     *
     * Returns a list of email templates that may be customized
     * If the template has been customized, the customized property is true.
     * The scope parameter indicates if the email template has been customized
     * at Business Location level or Company level.
     * Only when querying the primary business location will company scope
     * customized templates display. Otherwise, the scope shows if a template has been customized
     * at the business location level.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesResponse getSetupV1LocationsIdEmailTemplates(openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesResponse() {{
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
     * getSetupV1LocationsIdEmailTemplatesMaster - Returns master email template settings
     *
     * Settings exist for showing or hiding panels
     * and for changing color schemes
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse getSetupV1LocationsIdEmailTemplatesMaster(openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates/master", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesMasterResponse() {{
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
     * getSetupV1LocationsIdEmailTemplatesTemplateName - Returns company default or custom email template from the specified location
     *
     * These are custom email templates defined with Business Scope at a location other than the primary.
     * The default email template is returned when a custom email template is not found.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse getSetupV1LocationsIdEmailTemplatesTemplateName(openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates/{templateName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse() {{
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
     * getSetupV1LocationsIdGoogleServiceAccount - Returns google service account info
     *
     * This endpoint will not go to production. It is temporary.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdGoogleServiceAccountResponse getSetupV1LocationsIdGoogleServiceAccount(openapisdk.models.operations.GetSetupV1LocationsIdGoogleServiceAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/google/service/account", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSetupV1LocationsIdGoogleServiceAccountResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdGoogleServiceAccountResponse() {{
            googleServiceAccountCreds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleServiceAccountCreds out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleServiceAccountCreds.class);
                res.googleServiceAccountCreds = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSetupV1LocationsIdServices - Returns a list of location services.
     *
     * The results are returned in pages. Use the offset and limit parameters to control the page start and size. Default offset is 0, and limit is 20.
     * Use the other query parameters to optionally filter the results list.
    **/
    public openapisdk.models.operations.GetSetupV1LocationsIdServicesResponse getSetupV1LocationsIdServices(openapisdk.models.operations.GetSetupV1LocationsIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/services", request.pathParams);
        
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

        openapisdk.models.operations.GetSetupV1LocationsIdServicesResponse res = new openapisdk.models.operations.GetSetupV1LocationsIdServicesResponse() {{
            businessServiceListViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.businessServiceListViewModel = out;
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
     * postSetupV1Locations - Creates a new location object.
     *
     * Use this endpoint to create a new business location.
     * 
     * Settings can be scoped to company or location. You can have all locations use the defined company settings or individual locations
     * can define their own settings that override the company level settings.
     * 
     * If you wish to update settings then pass in the settings element in the input.
     * When you are working with the Primary location, then the settings will update the company level settings.
     * Otherwise, the settings will update business location settings.
     * 
     * If you wish to create a new location and want to just use the company wide settings, don't pass in the settings element in the input.
    **/
    public openapisdk.models.operations.PostSetupV1LocationsResponse postSetupV1Locations(openapisdk.models.operations.PostSetupV1LocationsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsResponse res = new openapisdk.models.operations.PostSetupV1LocationsResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1LocationsBulk - Creates new location objects.
     *
     * Use this endpoint to create new business locations. The incoming list of 
     * locations cannot exceed 100 location objects for performance purposes.
     * 
     * Each location object may consist of:
     * Name: The Name of the location.
     * AdminName: The Name of the location admin.
     * AdminEmail: The email address of the location admin.
     * TimezoneName: The IANA formatted name of the locations timezone.
     * FriendlyId: A friendly id to use to refer to the location.
     * Address: The physical address of the location.
     * BusinessHours: The hours of operation of the location.
     * Settings: Additional location options that can affect things like 
     * the book ahead restrictions, customer bookings per day, etc.
    **/
    public openapisdk.models.operations.PostSetupV1LocationsBulkResponse postSetupV1LocationsBulk(openapisdk.models.operations.PostSetupV1LocationsBulkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/bulk");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsBulkResponse res = new openapisdk.models.operations.PostSetupV1LocationsBulkResponse() {{
            locationViewModels = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel[].class);
                res.locationViewModels = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1LocationsIdEmailTemplates - Uploads a custom email template
     *
     * Use this endpoint to a create a custom email template. You must convert the content to a base64 encoded string.
     * Updates to the primary business location create company scoped custom templates
     * Updates to non primary business locations create business location scoped custom templates
     * The master template cannot be updated with this endpoint.
    **/
    public openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesResponse postSetupV1LocationsIdEmailTemplates(openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesResponse res = new openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesResponse() {{
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
     * postSetupV1LocationsIdEmailTemplatesMaster - Saves settings for the master email template
     *
     * Use this endpoint to a customize the master email template settings. 
     * Updates to the primary business location create company scoped master email template custom settings
     * Updates to non primary business locations create business location scoped master email template custom settings
    **/
    public openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse postSetupV1LocationsIdEmailTemplatesMaster(openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/email/templates/master", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse res = new openapisdk.models.operations.PostSetupV1LocationsIdEmailTemplatesMasterResponse() {{
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
     * postSetupV1LocationsIdGoogleServiceAccount - Authorize access to all google calendar users in an organization
     *
     * Use this endpoint to authorize access to all google calendar users.
     * You must create a Google Service account as an admin of your GSuite,
     * then save credentials as a Json Key file
    **/
    public openapisdk.models.operations.PostSetupV1LocationsIdGoogleServiceAccountResponse postSetupV1LocationsIdGoogleServiceAccount(openapisdk.models.operations.PostSetupV1LocationsIdGoogleServiceAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/google/service/account", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsIdGoogleServiceAccountResponse res = new openapisdk.models.operations.PostSetupV1LocationsIdGoogleServiceAccountResponse() {{
            googleServiceAccountCreds = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleServiceAccountCreds out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleServiceAccountCreds.class);
                res.googleServiceAccountCreds = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1LocationsIdServices - Adds location services to the specified location
     *
     * Use this endpoint to explicitly define what company scoped services
     * at this location are offered. GET locations allows serviceId as a 
     * search parameter.
    **/
    public openapisdk.models.operations.PostSetupV1LocationsIdServicesResponse postSetupV1LocationsIdServices(openapisdk.models.operations.PostSetupV1LocationsIdServicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/services", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsIdServicesResponse res = new openapisdk.models.operations.PostSetupV1LocationsIdServicesResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * postSetupV1LocationsIdUploadimage - Uploads a location image
     *
     * Use this endpoint to upload a location image. You must convert the image to a base64 encoded string
     * and pass that string as input along with your filename.
    **/
    public openapisdk.models.operations.PostSetupV1LocationsIdUploadimageResponse postSetupV1LocationsIdUploadimage(openapisdk.models.operations.PostSetupV1LocationsIdUploadimageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/uploadimage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostSetupV1LocationsIdUploadimageResponse res = new openapisdk.models.operations.PostSetupV1LocationsIdUploadimageResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1LocationsId - Use this endpoint to change the scope of online booking settings
     *
     * Use this endpoint to update a business location. 
     * 
     * The optional removeRegion query parameter is used to remove the region relationship from the location
     * 
     * If the settings element is populated the scope will be set to location with the settings supplied, otherwise it will be company scope.
     * 
     * If all your settings are uniform across all locations then do not pass settings and the location will use the settings
     * defined on the primary location. This is company scope. Settings cascade down to the locations. You can override any location
     * that needs different settings by providing settings in the update model.
    **/
    public openapisdk.models.operations.PutSetupV1LocationsIdResponse putSetupV1LocationsId(openapisdk.models.operations.PutSetupV1LocationsIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1LocationsIdResponse res = new openapisdk.models.operations.PutSetupV1LocationsIdResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1LocationsIdHolidaysHolidayIdClosed - Sets a business holiday to open or closed.
     *
     * Use this endpoint to set business holidays to open or closed. 
     * 
     * If you pass in an asterisk for the holidayId then all business holidays
     * will be set to the valaue
    **/
    public openapisdk.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse putSetupV1LocationsIdHolidaysHolidayIdClosed(openapisdk.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/holidays/{holidayId}/{closed}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse res = new openapisdk.models.operations.PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1LocationsIdRecover - Recovers a location object.
     *
     * Use this endpoint to recover a deleted business location.
    **/
    public openapisdk.models.operations.PutSetupV1LocationsIdRecoverResponse putSetupV1LocationsIdRecover(openapisdk.models.operations.PutSetupV1LocationsIdRecoverRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/recover", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1LocationsIdRecoverResponse res = new openapisdk.models.operations.PutSetupV1LocationsIdRecoverResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
	
    /**
     * putSetupV1LocationsIdSettingsScopeSettingsScope - Changes the scope of OnlineBooking Settings.
     *
     * Use this endpoint to update a business location. 
     * 
     * settingsScope values are 0 = company scope, 1 = business location scope
     * if you wish to inherit the online settings defined in the primary location then use value 0 for company scope.
     * Otherwise if you wish to override the settings for a specific location then use value = 1 for business location scope
     * ///
    **/
    public openapisdk.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse putSetupV1LocationsIdSettingsScopeSettingsScope(openapisdk.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setup/v1/locations/{id}/settings/scope/{settingsScope}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse res = new openapisdk.models.operations.PutSetupV1LocationsIdSettingsScopeSettingsScopeResponse() {{
            locationViewModel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationViewModel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationViewModel.class);
                res.locationViewModel = out;
            }
        }

        return res;
    }
	
}