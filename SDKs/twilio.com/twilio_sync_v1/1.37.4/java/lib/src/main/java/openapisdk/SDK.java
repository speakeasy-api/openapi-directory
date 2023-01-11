

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"https://sync.twilio.com",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    public openapisdk.models.operations.CreateDocumentResponse createDocument(openapisdk.models.operations.CreateDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDocumentResponse res = new openapisdk.models.operations.CreateDocumentResponse() {{
            syncV1ServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceDocument.class);
                res.syncV1ServiceDocument = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateServiceResponse createService(openapisdk.models.operations.CreateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateServiceResponse res = new openapisdk.models.operations.CreateServiceResponse() {{
            syncV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1Service.class);
                res.syncV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * createStreamMessage - Create a new Stream Message.
    **/
    public openapisdk.models.operations.CreateStreamMessageResponse createStreamMessage(openapisdk.models.operations.CreateStreamMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateStreamMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateStreamMessageResponse res = new openapisdk.models.operations.CreateStreamMessageResponse() {{
            syncV1ServiceSyncStreamStreamMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncStreamStreamMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncStreamStreamMessage.class);
                res.syncV1ServiceSyncStreamStreamMessage = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncListResponse createSyncList(openapisdk.models.operations.CreateSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncListResponse res = new openapisdk.models.operations.CreateSyncListResponse() {{
            syncV1ServiceSyncList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncList.class);
                res.syncV1ServiceSyncList = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncListItemResponse createSyncListItem(openapisdk.models.operations.CreateSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncListItemResponse res = new openapisdk.models.operations.CreateSyncListItemResponse() {{
            syncV1ServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem.class);
                res.syncV1ServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncMapResponse createSyncMap(openapisdk.models.operations.CreateSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncMapResponse res = new openapisdk.models.operations.CreateSyncMapResponse() {{
            syncV1ServiceSyncMap = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMap.class);
                res.syncV1ServiceSyncMap = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSyncMapItemResponse createSyncMapItem(openapisdk.models.operations.CreateSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncMapItemResponse res = new openapisdk.models.operations.CreateSyncMapItemResponse() {{
            syncV1ServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem.class);
                res.syncV1ServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSyncStream - Create a new Stream.
    **/
    public openapisdk.models.operations.CreateSyncStreamResponse createSyncStream(openapisdk.models.operations.CreateSyncStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSyncStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSyncStreamResponse res = new openapisdk.models.operations.CreateSyncStreamResponse() {{
            syncV1ServiceSyncStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncStream.class);
                res.syncV1ServiceSyncStream = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteDocumentResponse deleteDocument(openapisdk.models.operations.DeleteDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDocumentResponse res = new openapisdk.models.operations.DeleteDocumentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteDocumentPermission - Delete a specific Sync Document Permission.
    **/
    public openapisdk.models.operations.DeleteDocumentPermissionResponse deleteDocumentPermission(openapisdk.models.operations.DeleteDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteDocumentPermissionResponse res = new openapisdk.models.operations.DeleteDocumentPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteServiceResponse deleteService(openapisdk.models.operations.DeleteServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceResponse res = new openapisdk.models.operations.DeleteServiceResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncListResponse deleteSyncList(openapisdk.models.operations.DeleteSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncListResponse res = new openapisdk.models.operations.DeleteSyncListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncListItemResponse deleteSyncListItem(openapisdk.models.operations.DeleteSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncListItemResponse res = new openapisdk.models.operations.DeleteSyncListItemResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncListPermission - Delete a specific Sync List Permission.
    **/
    public openapisdk.models.operations.DeleteSyncListPermissionResponse deleteSyncListPermission(openapisdk.models.operations.DeleteSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncListPermissionResponse res = new openapisdk.models.operations.DeleteSyncListPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncMapResponse deleteSyncMap(openapisdk.models.operations.DeleteSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncMapResponse res = new openapisdk.models.operations.DeleteSyncMapResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSyncMapItemResponse deleteSyncMapItem(openapisdk.models.operations.DeleteSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncMapItemResponse res = new openapisdk.models.operations.DeleteSyncMapItemResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncMapPermission - Delete a specific Sync Map Permission.
    **/
    public openapisdk.models.operations.DeleteSyncMapPermissionResponse deleteSyncMapPermission(openapisdk.models.operations.DeleteSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncMapPermissionResponse res = new openapisdk.models.operations.DeleteSyncMapPermissionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSyncStream - Delete a specific Stream.
    **/
    public openapisdk.models.operations.DeleteSyncStreamResponse deleteSyncStream(openapisdk.models.operations.DeleteSyncStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSyncStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSyncStreamResponse res = new openapisdk.models.operations.DeleteSyncStreamResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchDocumentResponse fetchDocument(openapisdk.models.operations.FetchDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDocumentResponse res = new openapisdk.models.operations.FetchDocumentResponse() {{
            syncV1ServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceDocument.class);
                res.syncV1ServiceDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDocumentPermission - Fetch a specific Sync Document Permission.
    **/
    public openapisdk.models.operations.FetchDocumentPermissionResponse fetchDocumentPermission(openapisdk.models.operations.FetchDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDocumentPermissionResponse res = new openapisdk.models.operations.FetchDocumentPermissionResponse() {{
            syncV1ServiceDocumentDocumentPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission.class);
                res.syncV1ServiceDocumentDocumentPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchServiceResponse fetchService(openapisdk.models.operations.FetchServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceResponse res = new openapisdk.models.operations.FetchServiceResponse() {{
            syncV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1Service.class);
                res.syncV1Service = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncListResponse fetchSyncList(openapisdk.models.operations.FetchSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncListResponse res = new openapisdk.models.operations.FetchSyncListResponse() {{
            syncV1ServiceSyncList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncList.class);
                res.syncV1ServiceSyncList = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncListItemResponse fetchSyncListItem(openapisdk.models.operations.FetchSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncListItemResponse res = new openapisdk.models.operations.FetchSyncListItemResponse() {{
            syncV1ServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem.class);
                res.syncV1ServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncListPermission - Fetch a specific Sync List Permission.
    **/
    public openapisdk.models.operations.FetchSyncListPermissionResponse fetchSyncListPermission(openapisdk.models.operations.FetchSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncListPermissionResponse res = new openapisdk.models.operations.FetchSyncListPermissionResponse() {{
            syncV1ServiceSyncListSyncListPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission.class);
                res.syncV1ServiceSyncListSyncListPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncMapResponse fetchSyncMap(openapisdk.models.operations.FetchSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncMapResponse res = new openapisdk.models.operations.FetchSyncMapResponse() {{
            syncV1ServiceSyncMap = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMap.class);
                res.syncV1ServiceSyncMap = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSyncMapItemResponse fetchSyncMapItem(openapisdk.models.operations.FetchSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncMapItemResponse res = new openapisdk.models.operations.FetchSyncMapItemResponse() {{
            syncV1ServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem.class);
                res.syncV1ServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncMapPermission - Fetch a specific Sync Map Permission.
    **/
    public openapisdk.models.operations.FetchSyncMapPermissionResponse fetchSyncMapPermission(openapisdk.models.operations.FetchSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncMapPermissionResponse res = new openapisdk.models.operations.FetchSyncMapPermissionResponse() {{
            syncV1ServiceSyncMapSyncMapPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission.class);
                res.syncV1ServiceSyncMapSyncMapPermission = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSyncStream - Fetch a specific Stream.
    **/
    public openapisdk.models.operations.FetchSyncStreamResponse fetchSyncStream(openapisdk.models.operations.FetchSyncStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSyncStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSyncStreamResponse res = new openapisdk.models.operations.FetchSyncStreamResponse() {{
            syncV1ServiceSyncStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncStream.class);
                res.syncV1ServiceSyncStream = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListDocumentResponse listDocument(openapisdk.models.operations.ListDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents", request.pathParams);
        
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

        openapisdk.models.operations.ListDocumentResponse res = new openapisdk.models.operations.ListDocumentResponse() {{
            listDocumentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDocumentListDocumentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDocumentListDocumentResponse.class);
                res.listDocumentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDocumentPermission - Retrieve a list of all Permissions applying to a Sync Document.
    **/
    public openapisdk.models.operations.ListDocumentPermissionResponse listDocumentPermission(openapisdk.models.operations.ListDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListDocumentPermissionResponse res = new openapisdk.models.operations.ListDocumentPermissionResponse() {{
            listDocumentPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDocumentPermissionListDocumentPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDocumentPermissionListDocumentPermissionResponse.class);
                res.listDocumentPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListServiceResponse listService(openapisdk.models.operations.ListServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services");
        
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

        openapisdk.models.operations.ListServiceResponse res = new openapisdk.models.operations.ListServiceResponse() {{
            listServiceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceListServiceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceListServiceResponse.class);
                res.listServiceResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncListResponse listSyncList(openapisdk.models.operations.ListSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncListResponse res = new openapisdk.models.operations.ListSyncListResponse() {{
            listSyncListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncListListSyncListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncListListSyncListResponse.class);
                res.listSyncListResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncListItemResponse listSyncListItem(openapisdk.models.operations.ListSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncListItemResponse res = new openapisdk.models.operations.ListSyncListItemResponse() {{
            listSyncListItemResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncListItemListSyncListItemResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncListItemListSyncListItemResponse.class);
                res.listSyncListItemResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncListPermission - Retrieve a list of all Permissions applying to a Sync List.
    **/
    public openapisdk.models.operations.ListSyncListPermissionResponse listSyncListPermission(openapisdk.models.operations.ListSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncListPermissionResponse res = new openapisdk.models.operations.ListSyncListPermissionResponse() {{
            listSyncListPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncListPermissionListSyncListPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncListPermissionListSyncListPermissionResponse.class);
                res.listSyncListPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncMapResponse listSyncMap(openapisdk.models.operations.ListSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncMapResponse res = new openapisdk.models.operations.ListSyncMapResponse() {{
            listSyncMapResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncMapListSyncMapResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncMapListSyncMapResponse.class);
                res.listSyncMapResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSyncMapItemResponse listSyncMapItem(openapisdk.models.operations.ListSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncMapItemResponse res = new openapisdk.models.operations.ListSyncMapItemResponse() {{
            listSyncMapItemResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncMapItemListSyncMapItemResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncMapItemListSyncMapItemResponse.class);
                res.listSyncMapItemResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncMapPermission - Retrieve a list of all Permissions applying to a Sync Map.
    **/
    public openapisdk.models.operations.ListSyncMapPermissionResponse listSyncMapPermission(openapisdk.models.operations.ListSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncMapPermissionResponse res = new openapisdk.models.operations.ListSyncMapPermissionResponse() {{
            listSyncMapPermissionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncMapPermissionListSyncMapPermissionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncMapPermissionListSyncMapPermissionResponse.class);
                res.listSyncMapPermissionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSyncStream - Retrieve a list of all Streams in a Service Instance.
    **/
    public openapisdk.models.operations.ListSyncStreamResponse listSyncStream(openapisdk.models.operations.ListSyncStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSyncStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams", request.pathParams);
        
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

        openapisdk.models.operations.ListSyncStreamResponse res = new openapisdk.models.operations.ListSyncStreamResponse() {{
            listSyncStreamResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSyncStreamListSyncStreamResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSyncStreamListSyncStreamResponse.class);
                res.listSyncStreamResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateDocumentResponse updateDocument(openapisdk.models.operations.UpdateDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDocumentResponse res = new openapisdk.models.operations.UpdateDocumentResponse() {{
            syncV1ServiceDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceDocument.class);
                res.syncV1ServiceDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDocumentPermission - Update an identity's access to a specific Sync Document.
    **/
    public openapisdk.models.operations.UpdateDocumentPermissionResponse updateDocumentPermission(openapisdk.models.operations.UpdateDocumentPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDocumentPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDocumentPermissionResponse res = new openapisdk.models.operations.UpdateDocumentPermissionResponse() {{
            syncV1ServiceDocumentDocumentPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceDocumentDocumentPermission.class);
                res.syncV1ServiceDocumentDocumentPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateServiceResponse updateService(openapisdk.models.operations.UpdateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceResponse res = new openapisdk.models.operations.UpdateServiceResponse() {{
            syncV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1Service.class);
                res.syncV1Service = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncListResponse updateSyncList(openapisdk.models.operations.UpdateSyncListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncListResponse res = new openapisdk.models.operations.UpdateSyncListResponse() {{
            syncV1ServiceSyncList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncList.class);
                res.syncV1ServiceSyncList = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncListItemResponse updateSyncListItem(openapisdk.models.operations.UpdateSyncListItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncListItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncListItemResponse res = new openapisdk.models.operations.UpdateSyncListItemResponse() {{
            syncV1ServiceSyncListSyncListItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncListSyncListItem.class);
                res.syncV1ServiceSyncListSyncListItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncListPermission - Update an identity's access to a specific Sync List.
    **/
    public openapisdk.models.operations.UpdateSyncListPermissionResponse updateSyncListPermission(openapisdk.models.operations.UpdateSyncListPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncListPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncListPermissionResponse res = new openapisdk.models.operations.UpdateSyncListPermissionResponse() {{
            syncV1ServiceSyncListSyncListPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncListSyncListPermission.class);
                res.syncV1ServiceSyncListSyncListPermission = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncMapResponse updateSyncMap(openapisdk.models.operations.UpdateSyncMapRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncMapRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncMapResponse res = new openapisdk.models.operations.UpdateSyncMapResponse() {{
            syncV1ServiceSyncMap = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMap out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMap.class);
                res.syncV1ServiceSyncMap = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSyncMapItemResponse updateSyncMapItem(openapisdk.models.operations.UpdateSyncMapItemRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncMapItemRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncMapItemResponse res = new openapisdk.models.operations.UpdateSyncMapItemResponse() {{
            syncV1ServiceSyncMapSyncMapItem = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapItem.class);
                res.syncV1ServiceSyncMapSyncMapItem = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncMapPermission - Update an identity's access to a specific Sync Map.
    **/
    public openapisdk.models.operations.UpdateSyncMapPermissionResponse updateSyncMapPermission(openapisdk.models.operations.UpdateSyncMapPermissionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncMapPermissionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncMapPermissionResponse res = new openapisdk.models.operations.UpdateSyncMapPermissionResponse() {{
            syncV1ServiceSyncMapSyncMapPermission = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncMapSyncMapPermission.class);
                res.syncV1ServiceSyncMapSyncMapPermission = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSyncStream - Update a specific Stream.
    **/
    public openapisdk.models.operations.UpdateSyncStreamResponse updateSyncStream(openapisdk.models.operations.UpdateSyncStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSyncStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Streams/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSyncStreamResponse res = new openapisdk.models.operations.UpdateSyncStreamResponse() {{
            syncV1ServiceSyncStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SyncV1ServiceSyncStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SyncV1ServiceSyncStream.class);
                res.syncV1ServiceSyncStream = out;
            }
        }

        return res;
    }
	
}