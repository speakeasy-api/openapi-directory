package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Advertisers {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Advertisers(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * displayvideoAdvertisersAssetsUpload - Uploads an asset. Returns the ID of the newly uploaded asset if successful. The asset file size should be no more than 10 MB for images, 200 MB for ZIP files, and 1 GB for videos. Must be used within the [multipart media upload process](/display-video/api/guides/how-tos/upload#multipart). Examples using provided client libraries can be found in our [Creating Creatives guide](/display-video/api/guides/creating-creatives/overview#upload_an_asset).
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersAssetsUploadResponse displayvideoAdvertisersAssetsUpload(openapisdk.models.operations.DisplayvideoAdvertisersAssetsUploadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/assets", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersAssetsUploadResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersAssetsUploadResponse() {{
            createAssetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateAssetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateAssetResponse.class);
                res.createAssetResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersAudit - Audits an advertiser. Returns the counts of used entities per resource type under the advertiser provided. Used entities count towards their respective resource limit. See https://support.google.com/displayvideo/answer/6071450.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersAuditResponse displayvideoAdvertisersAudit(openapisdk.models.operations.DisplayvideoAdvertisersAuditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}:audit", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersAuditResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersAuditResponse() {{
            auditAdvertiserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AuditAdvertiserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AuditAdvertiserResponse.class);
                res.auditAdvertiserResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions - Bulk edits targeting options under a single advertiser. The operation will delete the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditAdvertiserAssignedTargetingOptionsRequest.create_requests .
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse displayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}:bulkEditAdvertiserAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse() {{
            bulkEditAdvertiserAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditAdvertiserAssignedTargetingOptionsResponse.class);
                res.bulkEditAdvertiserAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions - Lists assigned targeting options of an advertiser across targeting types.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse displayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}:bulkListAdvertiserAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse() {{
            bulkListAdvertiserAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkListAdvertiserAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkListAdvertiserAssignedTargetingOptionsResponse.class);
                res.bulkListAdvertiserAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions - Lists assigned targeting options of a campaign across targeting types.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse displayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}:bulkListCampaignAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse() {{
            bulkListCampaignAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkListCampaignAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkListCampaignAssignedTargetingOptionsResponse.class);
                res.bulkListCampaignAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsCreate - Creates a new campaign. Returns the newly created campaign if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsCreateResponse displayvideoAdvertisersCampaignsCreate(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsCreateResponse() {{
            campaign = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Campaign out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Campaign.class);
                res.campaign = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsDelete - Permanently deletes a campaign. A deleted campaign cannot be recovered. The campaign should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsDeleteResponse displayvideoAdvertisersCampaignsDelete(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsDeleteResponse() {{
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
     * displayvideoAdvertisersCampaignsGet - Gets a campaign.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsGetResponse displayvideoAdvertisersCampaignsGet(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsGetResponse() {{
            campaign = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Campaign out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Campaign.class);
                res.campaign = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsList - Lists campaigns in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, campaigns with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsListResponse displayvideoAdvertisersCampaignsList(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsListResponse() {{
            listCampaignsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCampaignsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCampaignsResponse.class);
                res.listCampaignsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsPatch - Updates an existing campaign. Returns the updated campaign if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsPatchResponse displayvideoAdvertisersCampaignsPatch(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsPatchResponse() {{
            campaign = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Campaign out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Campaign.class);
                res.campaign = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a campaign.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGet(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsGetResponse() {{
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
     * displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a campaign for a specified targeting type.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse displayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsList(openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/campaigns/{campaignId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCampaignsTargetingTypesAssignedTargetingOptionsListResponse() {{
            listCampaignAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCampaignAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCampaignAssignedTargetingOptionsResponse.class);
                res.listCampaignAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersChannelsCreate - Creates a new channel. Returns the newly created channel if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsCreateResponse displayvideoAdvertisersChannelsCreate(openapisdk.models.operations.DisplayvideoAdvertisersChannelsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsCreateResponse() {{
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
     * displayvideoAdvertisersChannelsList - Lists channels for a partner or advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsListResponse displayvideoAdvertisersChannelsList(openapisdk.models.operations.DisplayvideoAdvertisersChannelsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsListResponse() {{
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
     * displayvideoAdvertisersChannelsPatch - Updates a channel. Returns the updated channel if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsPatchResponse displayvideoAdvertisersChannelsPatch(openapisdk.models.operations.DisplayvideoAdvertisersChannelsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels/{channelId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsPatchResponse() {{
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
     * displayvideoAdvertisersChannelsSitesBulkEdit - Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse displayvideoAdvertisersChannelsSitesBulkEdit(openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:bulkEdit", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesBulkEditResponse() {{
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
     * displayvideoAdvertisersChannelsSitesDelete - Deletes a site from a channel.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse displayvideoAdvertisersChannelsSitesDelete(openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites/{urlOrAppId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesDeleteResponse() {{
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
     * displayvideoAdvertisersChannelsSitesList - Lists sites in a channel.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesListResponse displayvideoAdvertisersChannelsSitesList(openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesListResponse() {{
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
     * displayvideoAdvertisersChannelsSitesReplace - Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse displayvideoAdvertisersChannelsSitesReplace(openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/channels/{channelId}/sites:replace", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersChannelsSitesReplaceResponse() {{
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
     * displayvideoAdvertisersCreate - Creates a new advertiser. Returns the newly created advertiser if successful. This method can take up to 180 seconds to complete.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreateResponse displayvideoAdvertisersCreate(openapisdk.models.operations.DisplayvideoAdvertisersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers");
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreateResponse() {{
            advertiser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Advertiser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Advertiser.class);
                res.advertiser = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCreativesCreate - Creates a new creative. Returns the newly created creative if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreativesCreateResponse displayvideoAdvertisersCreativesCreate(openapisdk.models.operations.DisplayvideoAdvertisersCreativesCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/creatives", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreativesCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreativesCreateResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCreativesDelete - Deletes a creative. Returns error code `NOT_FOUND` if the creative does not exist. The creative should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, before it can be deleted.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreativesDeleteResponse displayvideoAdvertisersCreativesDelete(openapisdk.models.operations.DisplayvideoAdvertisersCreativesDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreativesDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreativesDeleteResponse() {{
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
     * displayvideoAdvertisersCreativesGet - Gets a creative.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreativesGetResponse displayvideoAdvertisersCreativesGet(openapisdk.models.operations.DisplayvideoAdvertisersCreativesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreativesGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreativesGetResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCreativesList - Lists creatives in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, creatives with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreativesListResponse displayvideoAdvertisersCreativesList(openapisdk.models.operations.DisplayvideoAdvertisersCreativesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/creatives", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreativesListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreativesListResponse() {{
            listCreativesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListCreativesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListCreativesResponse.class);
                res.listCreativesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersCreativesPatch - Updates an existing creative. Returns the updated creative if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersCreativesPatchResponse displayvideoAdvertisersCreativesPatch(openapisdk.models.operations.DisplayvideoAdvertisersCreativesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/creatives/{creativeId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersCreativesPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersCreativesPatchResponse() {{
            creative = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Creative out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Creative.class);
                res.creative = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersDelete - Deletes an advertiser. Deleting an advertiser will delete all of its child resources, for example, campaigns, insertion orders and line items. A deleted advertiser cannot be recovered.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersDeleteResponse displayvideoAdvertisersDelete(openapisdk.models.operations.DisplayvideoAdvertisersDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersDeleteResponse() {{
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
     * displayvideoAdvertisersGet - Gets an advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersGetResponse displayvideoAdvertisersGet(openapisdk.models.operations.DisplayvideoAdvertisersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersGetResponse() {{
            advertiser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Advertiser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Advertiser.class);
                res.advertiser = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions - Lists assigned targeting options of an insertion order across targeting types.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse displayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}:bulkListInsertionOrderAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersBulkListInsertionOrderAssignedTargetingOptionsResponse() {{
            bulkListInsertionOrderAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkListInsertionOrderAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkListInsertionOrderAssignedTargetingOptionsResponse.class);
                res.bulkListInsertionOrderAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersCreate - Creates a new insertion order. Returns the newly created insertion order if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse displayvideoAdvertisersInsertionOrdersCreate(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersCreateResponse() {{
            insertionOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsertionOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsertionOrder.class);
                res.insertionOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersDelete - Deletes an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist. The insertion order should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse displayvideoAdvertisersInsertionOrdersDelete(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersDeleteResponse() {{
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
     * displayvideoAdvertisersInsertionOrdersGet - Gets an insertion order. Returns error code `NOT_FOUND` if the insertion order does not exist.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersGetResponse displayvideoAdvertisersInsertionOrdersGet(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersGetResponse() {{
            insertionOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsertionOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsertionOrder.class);
                res.insertionOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersList - Lists insertion orders in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, insertion orders with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersListResponse displayvideoAdvertisersInsertionOrdersList(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersListResponse() {{
            listInsertionOrdersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInsertionOrdersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInsertionOrdersResponse.class);
                res.listInsertionOrdersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersPatch - Updates an existing insertion order. Returns the updated insertion order if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse displayvideoAdvertisersInsertionOrdersPatch(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersPatchResponse() {{
            insertionOrder = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsertionOrder out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsertionOrder.class);
                res.insertionOrder = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an insertion order.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGet(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsGetResponse() {{
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
     * displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an insertion order.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse displayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsList(openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/insertionOrders/{insertionOrderId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInsertionOrdersTargetingTypesAssignedTargetingOptionsListResponse() {{
            listInsertionOrderAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInsertionOrderAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInsertionOrderAssignedTargetingOptionsResponse.class);
                res.listInsertionOrderAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInvoicesList - Lists invoices posted for an advertiser in a given month. Invoices generated by billing profiles with a "Partner" invoice level are not retrievable through this method.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInvoicesListResponse displayvideoAdvertisersInvoicesList(openapisdk.models.operations.DisplayvideoAdvertisersInvoicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/invoices", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInvoicesListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInvoicesListResponse() {{
            listInvoicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListInvoicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListInvoicesResponse.class);
                res.listInvoicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersInvoicesLookupInvoiceCurrency - Retrieves the invoice currency used by an advertiser in a given month.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse displayvideoAdvertisersInvoicesLookupInvoiceCurrency(openapisdk.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/invoices:lookupInvoiceCurrency", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersInvoicesLookupInvoiceCurrencyResponse() {{
            lookupInvoiceCurrencyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LookupInvoiceCurrencyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LookupInvoiceCurrencyResponse.class);
                res.lookupInvoiceCurrencyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions - Bulk edits targeting options under a single line item. The operation will delete the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.delete_requests and then create the assigned targeting options provided in BulkEditLineItemAssignedTargetingOptionsRequest.create_requests. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * UpdateLineItem * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse displayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkEditLineItemAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkEditLineItemAssignedTargetingOptionsResponse() {{
            bulkEditLineItemAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditLineItemAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditLineItemAssignedTargetingOptionsResponse.class);
                res.bulkEditLineItemAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions - Lists assigned targeting options of a line item across targeting types.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse displayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptions(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}:bulkListLineItemAssignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsBulkListLineItemAssignedTargetingOptionsResponse() {{
            bulkListLineItemAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkListLineItemAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkListLineItemAssignedTargetingOptionsResponse.class);
                res.bulkListLineItemAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsCreate - Creates a new line item. Returns the newly created line item if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsCreateResponse displayvideoAdvertisersLineItemsCreate(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsCreateResponse() {{
            lineItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LineItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LineItem.class);
                res.lineItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsDelete - Deletes a line item. Returns error code `NOT_FOUND` if the line item does not exist. The line item should be archived first, i.e. set entity_status to `ENTITY_STATUS_ARCHIVED`, to be able to delete it.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsDeleteResponse displayvideoAdvertisersLineItemsDelete(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsDeleteResponse() {{
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
     * displayvideoAdvertisersLineItemsGenerateDefault - Creates a new line item with settings (including targeting) inherited from the insertion order and an `ENTITY_STATUS_DRAFT` entity_status. Returns the newly created line item if successful. There are default values based on the three fields: * The insertion order's insertion_order_type * The insertion order's automation_type * The given line_item_type
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse displayvideoAdvertisersLineItemsGenerateDefault(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems:generateDefault", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGenerateDefaultResponse() {{
            lineItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LineItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LineItem.class);
                res.lineItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsGet - Gets a line item.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGetResponse displayvideoAdvertisersLineItemsGet(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsGetResponse() {{
            lineItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LineItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LineItem.class);
                res.lineItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsList - Lists line items in an advertiser. The order is defined by the order_by parameter. If a filter by entity_status is not specified, line items with `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsListResponse displayvideoAdvertisersLineItemsList(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsListResponse() {{
            listLineItemsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLineItemsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLineItemsResponse.class);
                res.listLineItemsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsPatch - Updates an existing line item. Returns the updated line item if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdateLineItems * CreateLineItemAssignedTargetingOption * DeleteLineItemAssignedTargetingOption
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsPatchResponse displayvideoAdvertisersLineItemsPatch(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsPatchResponse() {{
            lineItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LineItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LineItem.class);
                res.lineItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to a line item. Returns the assigned targeting option if successful. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * DeleteLineItemAssignedTargetingOption
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreate(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsCreateResponse() {{
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
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from a line item. Requests to this endpoint cannot be made concurrently with the following requests updating the same line item: * BulkEditAssignedTargetingOptions * BulkUpdate * UpdateLineItem * CreateLineItemAssignedTargetingOption
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDelete(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsDeleteResponse() {{
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
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to a line item.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGet(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsGetResponse() {{
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
     * displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to a line item.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse displayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsList(openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/lineItems/{lineItemId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLineItemsTargetingTypesAssignedTargetingOptionsListResponse() {{
            listLineItemAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLineItemAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLineItemAssignedTargetingOptionsResponse.class);
                res.listLineItemAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersList - Lists advertisers that are accessible to the current user. The order is defined by the order_by parameter. A single partner_id is required. Cross-partner listing is not supported.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersListResponse displayvideoAdvertisersList(openapisdk.models.operations.DisplayvideoAdvertisersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers");
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersListResponse() {{
            listAdvertisersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAdvertisersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAdvertisersResponse.class);
                res.listAdvertisersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit - Bulk edits multiple assignments between locations and a single location list. The operation will delete the assigned locations provided in BulkEditAssignedLocationsRequest.deleted_assigned_locations and then create the assigned locations provided in BulkEditAssignedLocationsRequest.created_assigned_locations.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse displayvideoAdvertisersLocationListsAssignedLocationsBulkEdit(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations:bulkEdit", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditResponse() {{
            bulkEditAssignedLocationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditAssignedLocationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditAssignedLocationsResponse.class);
                res.bulkEditAssignedLocationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsCreate - Creates an assignment between a location and a location list.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse displayvideoAdvertisersLocationListsAssignedLocationsCreate(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsCreateResponse() {{
            assignedLocation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AssignedLocation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AssignedLocation.class);
                res.assignedLocation = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsAssignedLocationsDelete - Deletes the assignment between a location and a location list.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse displayvideoAdvertisersLocationListsAssignedLocationsDelete(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations/{assignedLocationId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsDeleteResponse() {{
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
     * displayvideoAdvertisersLocationListsAssignedLocationsList - Lists locations assigned to a location list.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse displayvideoAdvertisersLocationListsAssignedLocationsList(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}/assignedLocations", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsAssignedLocationsListResponse() {{
            listAssignedLocationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAssignedLocationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAssignedLocationsResponse.class);
                res.listAssignedLocationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsCreate - Creates a new location list. Returns the newly created location list if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsCreateResponse displayvideoAdvertisersLocationListsCreate(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsCreateResponse() {{
            locationList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationList.class);
                res.locationList = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsList - Lists location lists based on a given advertiser id.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsListResponse displayvideoAdvertisersLocationListsList(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsListResponse() {{
            listLocationListsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListLocationListsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListLocationListsResponse.class);
                res.listLocationListsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersLocationListsPatch - Updates a location list. Returns the updated location list if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersLocationListsPatchResponse displayvideoAdvertisersLocationListsPatch(openapisdk.models.operations.DisplayvideoAdvertisersLocationListsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/locationLists/{locationListId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersLocationListsPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersLocationListsPatchResponse() {{
            locationList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LocationList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LocationList.class);
                res.locationList = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersActivate - Activates a manual trigger. Each activation of the manual trigger must be at least 5 minutes apart, otherwise an error will be returned.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersActivateResponse displayvideoAdvertisersManualTriggersActivate(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersActivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:activate", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersActivateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersActivateResponse() {{
            manualTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ManualTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ManualTrigger.class);
                res.manualTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersCreate - Creates a new manual trigger. Returns the newly created manual trigger if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersCreateResponse displayvideoAdvertisersManualTriggersCreate(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersCreateResponse() {{
            manualTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ManualTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ManualTrigger.class);
                res.manualTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersDeactivate - Deactivates a manual trigger.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse displayvideoAdvertisersManualTriggersDeactivate(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}:deactivate", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersDeactivateResponse() {{
            manualTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ManualTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ManualTrigger.class);
                res.manualTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersGet - Gets a manual trigger.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersGetResponse displayvideoAdvertisersManualTriggersGet(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersGetResponse() {{
            manualTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ManualTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ManualTrigger.class);
                res.manualTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersList - Lists manual triggers that are accessible to the current user for a given advertiser ID. The order is defined by the order_by parameter. A single advertiser_id is required.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersListResponse displayvideoAdvertisersManualTriggersList(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersListResponse() {{
            listManualTriggersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListManualTriggersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListManualTriggersResponse.class);
                res.listManualTriggersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersManualTriggersPatch - Updates a manual trigger. Returns the updated manual trigger if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersPatchResponse displayvideoAdvertisersManualTriggersPatch(openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/manualTriggers/{triggerId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersManualTriggersPatchResponse() {{
            manualTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ManualTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ManualTrigger.class);
                res.manualTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsCreate - Creates a new negative keyword list. Returns the newly created negative keyword list if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse displayvideoAdvertisersNegativeKeywordListsCreate(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsCreateResponse() {{
            negativeKeywordList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NegativeKeywordList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NegativeKeywordList.class);
                res.negativeKeywordList = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsList - Lists negative keyword lists based on a given advertiser id.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse displayvideoAdvertisersNegativeKeywordListsList(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsListResponse() {{
            listNegativeKeywordListsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNegativeKeywordListsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNegativeKeywordListsResponse.class);
                res.listNegativeKeywordListsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit - Bulk edits negative keywords in a single negative keyword list. The operation will delete the negative keywords provided in BulkEditNegativeKeywordsRequest.deleted_negative_keywords and then create the negative keywords provided in BulkEditNegativeKeywordsRequest.created_negative_keywords. This operation is guaranteed to be atomic and will never result in a partial success or partial failure.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEdit(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:bulkEdit", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse() {{
            bulkEditNegativeKeywordsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BulkEditNegativeKeywordsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BulkEditNegativeKeywordsResponse.class);
                res.bulkEditNegativeKeywordsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete - Deletes a negative keyword from a negative keyword list.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDelete(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords/{keywordValue}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse() {{
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
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList - Lists negative keywords in a negative keyword list.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsList(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse() {{
            listNegativeKeywordsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListNegativeKeywordsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListNegativeKeywordsResponse.class);
                res.listNegativeKeywordsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace - Replaces all negative keywords in a single negative keyword list. The operation will replace the keywords in a negative keyword list with keywords provided in ReplaceNegativeKeywordsRequest.new_negative_keywords.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse displayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplace(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}/negativeKeywords:replace", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse() {{
            replaceNegativeKeywordsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ReplaceNegativeKeywordsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ReplaceNegativeKeywordsResponse.class);
                res.replaceNegativeKeywordsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersNegativeKeywordListsPatch - Updates a negative keyword list. Returns the updated negative keyword list if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse displayvideoAdvertisersNegativeKeywordListsPatch(openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/negativeKeywordLists/{negativeKeywordListId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersNegativeKeywordListsPatchResponse() {{
            negativeKeywordList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NegativeKeywordList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NegativeKeywordList.class);
                res.negativeKeywordList = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersPatch - Updates an existing advertiser. Returns the updated advertiser if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersPatchResponse displayvideoAdvertisersPatch(openapisdk.models.operations.DisplayvideoAdvertisersPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersPatchResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersPatchResponse() {{
            advertiser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.Advertiser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.Advertiser.class);
                res.advertiser = out;
            }
        }

        return res;
    }
	
	
    /**
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate - Assigns a targeting option to an advertiser. Returns the assigned targeting option if successful.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreate(openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsCreateResponse() {{
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
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete - Deletes an assigned targeting option from an advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDelete(openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsDeleteResponse() {{
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
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet - Gets a single targeting option assigned to an advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGet(openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsGetResponse() {{
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
     * displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList - Lists the targeting options assigned to an advertiser.
    **/
    public openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse displayvideoAdvertisersTargetingTypesAssignedTargetingOptionsList(openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/advertisers/{advertiserId}/targetingTypes/{targetingType}/assignedTargetingOptions", request.pathParams);
        
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

        openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse res = new openapisdk.models.operations.DisplayvideoAdvertisersTargetingTypesAssignedTargetingOptionsListResponse() {{
            listAdvertiserAssignedTargetingOptionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAdvertiserAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAdvertiserAssignedTargetingOptionsResponse.class);
                res.listAdvertiserAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
	
}