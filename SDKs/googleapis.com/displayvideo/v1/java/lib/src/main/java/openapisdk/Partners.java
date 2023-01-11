package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Partners {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Partners(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoPartnersBulkEditPartnerAssignedTargetingOptions - Bulk edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
    **/
    public openapisdk.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse displayvideoPartnersBulkEditPartnerAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}:bulkEditPartnerAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse() {{
            bulkEditPartnerAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse.class);
                res.bulkEditPartnerAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsCreate - Creates a new channel. Returns the newly created channel if successful.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsCreateResponse displayvideoPartnersChannelsCreate(openapisdk.models.operations.DisplayvideoPartnersChannelsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsCreateResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsCreateResponse() {{
            channel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Channel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Channel.class);
                res.channel = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsList - Lists channels for a partner or advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsListResponse displayvideoPartnersChannelsList(openapisdk.models.operations.DisplayvideoPartnersChannelsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsListResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsListResponse() {{
            listChannelsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListChannelsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListChannelsResponse.class);
                res.listChannelsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsPatch - Updates a channel. Returns the updated channel if successful.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsPatchResponse displayvideoPartnersChannelsPatch(openapisdk.models.operations.DisplayvideoPartnersChannelsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels/{channelId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsPatchResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsPatchResponse() {{
            channel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Channel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Channel.class);
                res.channel = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsSitesBulkEdit - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse displayvideoPartnersChannelsSitesBulkEdit(openapisdk.models.operations.DisplayvideoPartnersChannelsSitesBulkEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels/{channelId}/sites:bulkEdit", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse() {{
            bulkEditSitesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditSitesResponse.class);
                res.bulkEditSitesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsSitesDelete - Deletes a site from a channel.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse displayvideoPartnersChannelsSitesDelete(openapisdk.models.operations.DisplayvideoPartnersChannelsSitesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse() {{
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
     * displayvideoPartnersChannelsSitesList - Lists sites in a channel.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsSitesListResponse displayvideoPartnersChannelsSitesList(openapisdk.models.operations.DisplayvideoPartnersChannelsSitesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels/{channelId}/sites", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsSitesListResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsSitesListResponse() {{
            listSitesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListSitesResponse.class);
                res.listSitesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersChannelsSitesReplace - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse displayvideoPartnersChannelsSitesReplace(openapisdk.models.operations.DisplayvideoPartnersChannelsSitesReplaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/channels/{channelId}/sites:replace", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse res = new openapisdk.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse() {{
            replaceSitesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ReplaceSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ReplaceSitesResponse.class);
                res.replaceSitesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersGet - Gets a partner.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersGetResponse displayvideoPartnersGet(openapisdk.models.operations.DisplayvideoPartnersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersGetResponse res = new openapisdk.models.operations.DisplayvideoPartnersGetResponse() {{
            partner = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Partner out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Partner.class);
                res.partner = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersList - Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersListResponse displayvideoPartnersList(openapisdk.models.operations.DisplayvideoPartnersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners");
        
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

        openapisdk.models.operations.DisplayvideoPartnersListResponse res = new openapisdk.models.operations.DisplayvideoPartnersListResponse() {{
            listPartnersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPartnersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPartnersResponse.class);
                res.listPartnersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse res = new openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse() {{
            assignedTargetingOption = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssignedTargetingOption out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssignedTargetingOption.class);
                res.assignedTargetingOption = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from a partner.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse res = new openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse() {{
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
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a partner.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse res = new openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse() {{
            assignedTargetingOption = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssignedTargetingOption out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssignedTargetingOption.class);
                res.assignedTargetingOption = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoPartnersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a partner.
    **/
    public openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse res = new openapisdk.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse() {{
            listPartnerAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListPartnerAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListPartnerAssignedTargetingOptionsResponse.class);
                res.listPartnerAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
}