package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Labels {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Labels(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * drivelabelsLabelsCreate - Creates a new Label.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsCreateResponse drivelabelsLabelsCreate(openapisdk.models.operations.DrivelabelsLabelsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/labels");
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsCreateResponse res = new openapisdk.models.operations.DrivelabelsLabelsCreateResponse() {{
            googleAppsDriveLabelsV2betaLabel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel.class);
                res.googleAppsDriveLabelsV2betaLabel = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsDelta - Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsDeltaResponse drivelabelsLabelsDelta(openapisdk.models.operations.DrivelabelsLabelsDeltaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}:delta", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsDeltaResponse res = new openapisdk.models.operations.DrivelabelsLabelsDeltaResponse() {{
            googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse.class);
                res.googleAppsDriveLabelsV2betaDeltaUpdateLabelResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsDisable - Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsDisableResponse drivelabelsLabelsDisable(openapisdk.models.operations.DrivelabelsLabelsDisableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}:disable", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsDisableResponse res = new openapisdk.models.operations.DrivelabelsLabelsDisableResponse() {{
            googleAppsDriveLabelsV2betaLabel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel.class);
                res.googleAppsDriveLabelsV2betaLabel = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsEnable - Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsEnableResponse drivelabelsLabelsEnable(openapisdk.models.operations.DrivelabelsLabelsEnableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}:enable", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsEnableResponse res = new openapisdk.models.operations.DrivelabelsLabelsEnableResponse() {{
            googleAppsDriveLabelsV2betaLabel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel.class);
                res.googleAppsDriveLabelsV2betaLabel = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsList - List labels.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsListResponse drivelabelsLabelsList(openapisdk.models.operations.DrivelabelsLabelsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/labels");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsListResponse res = new openapisdk.models.operations.DrivelabelsLabelsListResponse() {{
            googleAppsDriveLabelsV2betaListLabelsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelsResponse.class);
                res.googleAppsDriveLabelsV2betaListLabelsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsPublish - Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsPublishResponse drivelabelsLabelsPublish(openapisdk.models.operations.DrivelabelsLabelsPublishRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}:publish", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsPublishResponse res = new openapisdk.models.operations.DrivelabelsLabelsPublishResponse() {{
            googleAppsDriveLabelsV2betaLabel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel.class);
                res.googleAppsDriveLabelsV2betaLabel = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsRevisionsLocksList - Lists the LabelLocks on a Label.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsLocksListResponse drivelabelsLabelsRevisionsLocksList(openapisdk.models.operations.DrivelabelsLabelsRevisionsLocksListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/locks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsLocksListResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsLocksListResponse() {{
            googleAppsDriveLabelsV2betaListLabelLocksResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelLocksResponse.class);
                res.googleAppsDriveLabelsV2betaListLabelLocksResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsRevisionsPermissionsBatchDelete - Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse drivelabelsLabelsRevisionsPermissionsBatchDelete(openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/permissions:batchDelete", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchDeleteResponse() {{
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
     * drivelabelsLabelsRevisionsPermissionsBatchUpdate - Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse drivelabelsLabelsRevisionsPermissionsBatchUpdate(openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/permissions:batchUpdate", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsBatchUpdateResponse() {{
            googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse.class);
                res.googleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsRevisionsPermissionsCreate - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse drivelabelsLabelsRevisionsPermissionsCreate(openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/permissions", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsCreateResponse() {{
            googleAppsDriveLabelsV2betaLabelPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission.class);
                res.googleAppsDriveLabelsV2betaLabelPermission = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsRevisionsPermissionsDelete - Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse drivelabelsLabelsRevisionsPermissionsDelete(openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsDeleteResponse() {{
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
     * drivelabelsLabelsRevisionsPermissionsList - Lists a Label's permissions.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsListResponse drivelabelsLabelsRevisionsPermissionsList(openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/permissions", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsListResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsPermissionsListResponse() {{
            googleAppsDriveLabelsV2betaListLabelPermissionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse.class);
                res.googleAppsDriveLabelsV2betaListLabelPermissionsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsRevisionsUpdatePermissions - Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse drivelabelsLabelsRevisionsUpdatePermissions(openapisdk.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{parent}/permissions", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse res = new openapisdk.models.operations.DrivelabelsLabelsRevisionsUpdatePermissionsResponse() {{
            googleAppsDriveLabelsV2betaLabelPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabelPermission.class);
                res.googleAppsDriveLabelsV2betaLabelPermission = out;
            }
        }

        return res;
    }
	
	
    /**
     * drivelabelsLabelsUpdateLabelCopyMode - Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
    **/
    public openapisdk.models.operations.DrivelabelsLabelsUpdateLabelCopyModeResponse drivelabelsLabelsUpdateLabelCopyMode(openapisdk.models.operations.DrivelabelsLabelsUpdateLabelCopyModeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2beta/{name}:updateLabelCopyMode", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DrivelabelsLabelsUpdateLabelCopyModeResponse res = new openapisdk.models.operations.DrivelabelsLabelsUpdateLabelCopyModeResponse() {{
            googleAppsDriveLabelsV2betaLabel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleAppsDriveLabelsV2betaLabel.class);
                res.googleAppsDriveLabelsV2betaLabel = out;
            }
        }

        return res;
    }
	
}