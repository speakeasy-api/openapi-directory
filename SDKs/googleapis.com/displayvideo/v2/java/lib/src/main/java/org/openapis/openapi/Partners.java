/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

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
     * Creates a new channel. Returns the newly created channel if successful.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateResponse displayvideoPartnersChannelsCreate(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateRequest.class, baseUrl, "/v2/partners/{partnerId}/channels", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "channelInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsCreateResponse(contentType, httpRes.statusCode()) {{
            channel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Channel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Channel.class);
                res.channel = out;
            }
        }

        return res;
    }

    /**
     * Lists channels for a partner or advertiser.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListResponse displayvideoPartnersChannelsList(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListRequest.class, baseUrl, "/v2/partners/{partnerId}/channels", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsListResponse(contentType, httpRes.statusCode()) {{
            listChannelsResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ListChannelsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ListChannelsResponse.class);
                res.listChannelsResponse = out;
            }
        }

        return res;
    }

    /**
     * Updates a channel. Returns the updated channel if successful.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchResponse displayvideoPartnersChannelsPatch(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchRequest.class, baseUrl, "/v2/partners/{partnerId}/channels/{channelId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "channelInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsPatchResponse(contentType, httpRes.statusCode()) {{
            channel = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Channel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Channel.class);
                res.channel = out;
            }
        }

        return res;
    }

    /**
     * Bulk edits sites under a single channel. The operation will delete the sites provided in BulkEditSitesRequest.deleted_sites and then create the sites provided in BulkEditSitesRequest.created_sites.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse displayvideoPartnersChannelsSitesBulkEdit(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditRequest.class, baseUrl, "/v2/partners/{partnerId}/channels/{channelId}/sites:bulkEdit", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "bulkEditSitesRequestInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesBulkEditResponse(contentType, httpRes.statusCode()) {{
            bulkEditSitesResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BulkEditSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BulkEditSitesResponse.class);
                res.bulkEditSitesResponse = out;
            }
        }

        return res;
    }

    /**
     * Deletes a site from a channel.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse displayvideoPartnersChannelsSitesDelete(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteRequest.class, baseUrl, "/v2/partners/{partnerId}/channels/{channelId}/sites/{urlOrAppId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesDeleteResponse(contentType, httpRes.statusCode()) {{
            empty = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), new TypeReference<java.util.Map<String, Object>>() {});
                res.empty = out;
            }
        }

        return res;
    }

    /**
     * Lists sites in a channel.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListResponse displayvideoPartnersChannelsSitesList(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListRequest.class, baseUrl, "/v2/partners/{partnerId}/channels/{channelId}/sites", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesListResponse(contentType, httpRes.statusCode()) {{
            listSitesResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ListSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ListSitesResponse.class);
                res.listSitesResponse = out;
            }
        }

        return res;
    }

    /**
     * Replaces all of the sites under a single channel. The operation will replace the sites under a channel with the sites provided in ReplaceSitesRequest.new_sites.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse displayvideoPartnersChannelsSitesReplace(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceRequest.class, baseUrl, "/v2/partners/{partnerId}/channels/{channelId}/sites:replace", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "replaceSitesRequestInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersChannelsSitesReplaceResponse(contentType, httpRes.statusCode()) {{
            replaceSitesResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ReplaceSitesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ReplaceSitesResponse.class);
                res.replaceSitesResponse = out;
            }
        }

        return res;
    }

    /**
     * Edits targeting options under a single partner. The operation will delete the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.deleteRequests and then create the assigned targeting options provided in BulkEditPartnerAssignedTargetingOptionsRequest.createRequests .
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsResponse displayvideoPartnersEditAssignedTargetingOptions(org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest.class, baseUrl, "/v2/partners/{partnerId}:editAssignedTargetingOptions", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "bulkEditPartnerAssignedTargetingOptionsRequestInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersEditAssignedTargetingOptionsResponse(contentType, httpRes.statusCode()) {{
            bulkEditPartnerAssignedTargetingOptionsResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.BulkEditPartnerAssignedTargetingOptionsResponse.class);
                res.bulkEditPartnerAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }

    /**
     * Gets a partner.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersGetResponse displayvideoPartnersGet(org.openapis.openapi.models.operations.DisplayvideoPartnersGetRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersGetSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersGetRequest.class, baseUrl, "/v2/partners/{partnerId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersGetRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersGetResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersGetResponse(contentType, httpRes.statusCode()) {{
            partner = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.Partner out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.Partner.class);
                res.partner = out;
            }
        }

        return res;
    }

    /**
     * Lists partners that are accessible to the current user. The order is defined by the order_by parameter.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersListResponse displayvideoPartnersList(org.openapis.openapi.models.operations.DisplayvideoPartnersListRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/v2/partners");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersListResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersListResponse(contentType, httpRes.statusCode()) {{
            listPartnersResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ListPartnersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ListPartnersResponse.class);
                res.listPartnersResponse = out;
            }
        }

        return res;
    }

    /**
     * Assigns a targeting option to a partner. Returns the assigned targeting option if successful.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsCreate(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.class, baseUrl, "/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "assignedTargetingOptionInput", "json");
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsCreateResponse(contentType, httpRes.statusCode()) {{
            assignedTargetingOption = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AssignedTargetingOption out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AssignedTargetingOption.class);
                res.assignedTargetingOption = out;
            }
        }

        return res;
    }

    /**
     * Deletes an assigned targeting option from a partner.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsDelete(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest.class, baseUrl, "/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsDeleteResponse(contentType, httpRes.statusCode()) {{
            empty = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), new TypeReference<java.util.Map<String, Object>>() {});
                res.empty = out;
            }
        }

        return res;
    }

    /**
     * Gets a single targeting option assigned to a partner.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsGet(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest.class, baseUrl, "/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions/{assignedTargetingOptionId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsGetResponse(contentType, httpRes.statusCode()) {{
            assignedTargetingOption = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.AssignedTargetingOption out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.AssignedTargetingOption.class);
                res.assignedTargetingOption = out;
            }
        }

        return res;
    }

    /**
     * Lists the targeting options assigned to a partner.
     * @param request the request object containing all of the parameters for the API call
     * @param security the security details to use for authentication
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse displayvideoPartnersTargetingTypesAssignedTargetingOptionsList(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest request, org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListSecurity security) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest.class, baseUrl, "/v2/partners/{partnerId}/targetingTypes/{targetingType}/assignedTargetingOptions", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = org.openapis.openapi.utils.Utils.getQueryParams(org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListRequest.class, request, null);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = org.openapis.openapi.utils.Utils.configureSecurityClient(this._defaultClient, security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse res = new org.openapis.openapi.models.operations.DisplayvideoPartnersTargetingTypesAssignedTargetingOptionsListResponse(contentType, httpRes.statusCode()) {{
            listPartnerAssignedTargetingOptionsResponse = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.shared.ListPartnerAssignedTargetingOptionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.shared.ListPartnerAssignedTargetingOptionsResponse.class);
                res.listPartnerAssignedTargetingOptionsResponse = out;
            }
        }

        return res;
    }
}