

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
		"https://video.twilio.com",
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
	
	
    public openapisdk.models.operations.CreateCompositionResponse createComposition(openapisdk.models.operations.CreateCompositionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCompositionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Compositions");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCompositionResponse res = new openapisdk.models.operations.CreateCompositionResponse() {{
            videoV1Composition = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Composition out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Composition.class);
                res.videoV1Composition = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateCompositionHookResponse createCompositionHook(openapisdk.models.operations.CreateCompositionHookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCompositionHookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionHooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCompositionHookResponse res = new openapisdk.models.operations.CreateCompositionHookResponse() {{
            videoV1CompositionHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1CompositionHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1CompositionHook.class);
                res.videoV1CompositionHook = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateCompositionSettingsResponse createCompositionSettings(openapisdk.models.operations.CreateCompositionSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCompositionSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionSettings/Default");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCompositionSettingsResponse res = new openapisdk.models.operations.CreateCompositionSettingsResponse() {{
            videoV1CompositionSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1CompositionSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1CompositionSettings.class);
                res.videoV1CompositionSettings = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateRecordingSettingsResponse createRecordingSettings(openapisdk.models.operations.CreateRecordingSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateRecordingSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/RecordingSettings/Default");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRecordingSettingsResponse res = new openapisdk.models.operations.CreateRecordingSettingsResponse() {{
            videoV1RecordingSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RecordingSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RecordingSettings.class);
                res.videoV1RecordingSettings = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateRoomResponse createRoom(openapisdk.models.operations.CreateRoomRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateRoomRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRoomResponse res = new openapisdk.models.operations.CreateRoomResponse() {{
            videoV1Room = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Room out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Room.class);
                res.videoV1Room = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteComposition - Delete a Recording Composition resource identified by a Composition SID.
    **/
    public openapisdk.models.operations.DeleteCompositionResponse deleteComposition(openapisdk.models.operations.DeleteCompositionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCompositionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Compositions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCompositionResponse res = new openapisdk.models.operations.DeleteCompositionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCompositionHook - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
    **/
    public openapisdk.models.operations.DeleteCompositionHookResponse deleteCompositionHook(openapisdk.models.operations.DeleteCompositionHookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCompositionHookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionHooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCompositionHookResponse res = new openapisdk.models.operations.DeleteCompositionHookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRecording - Delete a Recording resource identified by a Recording SID.
    **/
    public openapisdk.models.operations.DeleteRecordingResponse deleteRecording(openapisdk.models.operations.DeleteRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Recordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRecordingResponse res = new openapisdk.models.operations.DeleteRecordingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteRoomRecordingResponse deleteRoomRecording(openapisdk.models.operations.DeleteRoomRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRoomRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRoomRecordingResponse res = new openapisdk.models.operations.DeleteRoomRecordingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchComposition - Returns a single Composition resource identified by a Composition SID.
    **/
    public openapisdk.models.operations.FetchCompositionResponse fetchComposition(openapisdk.models.operations.FetchCompositionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCompositionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Compositions/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCompositionResponse res = new openapisdk.models.operations.FetchCompositionResponse() {{
            videoV1Composition = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Composition out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Composition.class);
                res.videoV1Composition = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCompositionHook - Returns a single CompositionHook resource identified by a CompositionHook SID.
    **/
    public openapisdk.models.operations.FetchCompositionHookResponse fetchCompositionHook(openapisdk.models.operations.FetchCompositionHookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCompositionHookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionHooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCompositionHookResponse res = new openapisdk.models.operations.FetchCompositionHookResponse() {{
            videoV1CompositionHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1CompositionHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1CompositionHook.class);
                res.videoV1CompositionHook = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchCompositionSettingsResponse fetchCompositionSettings(openapisdk.models.operations.FetchCompositionSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCompositionSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionSettings/Default");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCompositionSettingsResponse res = new openapisdk.models.operations.FetchCompositionSettingsResponse() {{
            videoV1CompositionSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1CompositionSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1CompositionSettings.class);
                res.videoV1CompositionSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRecording - Returns a single Recording resource identified by a Recording SID.
    **/
    public openapisdk.models.operations.FetchRecordingResponse fetchRecording(openapisdk.models.operations.FetchRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Recordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRecordingResponse res = new openapisdk.models.operations.FetchRecordingResponse() {{
            videoV1Recording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Recording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Recording.class);
                res.videoV1Recording = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRecordingSettingsResponse fetchRecordingSettings(openapisdk.models.operations.FetchRecordingSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/RecordingSettings/Default");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRecordingSettingsResponse res = new openapisdk.models.operations.FetchRecordingSettingsResponse() {{
            videoV1RecordingSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RecordingSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RecordingSettings.class);
                res.videoV1RecordingSettings = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRoomResponse fetchRoom(openapisdk.models.operations.FetchRoomRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomResponse res = new openapisdk.models.operations.FetchRoomResponse() {{
            videoV1Room = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Room out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Room.class);
                res.videoV1Room = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRoomParticipantResponse fetchRoomParticipant(openapisdk.models.operations.FetchRoomParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomParticipantResponse res = new openapisdk.models.operations.FetchRoomParticipantResponse() {{
            videoV1RoomRoomParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipant.class);
                res.videoV1RoomRoomParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRoomParticipantPublishedTrack - Returns a single Track resource represented by TrackName or SID.
    **/
    public openapisdk.models.operations.FetchRoomParticipantPublishedTrackResponse fetchRoomParticipantPublishedTrack(openapisdk.models.operations.FetchRoomParticipantPublishedTrackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomParticipantPublishedTrackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomParticipantPublishedTrackResponse res = new openapisdk.models.operations.FetchRoomParticipantPublishedTrackResponse() {{
            videoV1RoomRoomParticipantRoomParticipantPublishedTrack = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantPublishedTrack.class);
                res.videoV1RoomRoomParticipantRoomParticipantPublishedTrack = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRoomParticipantSubscribeRule - Returns a list of Subscribe Rules for the Participant.
    **/
    public openapisdk.models.operations.FetchRoomParticipantSubscribeRuleResponse fetchRoomParticipantSubscribeRule(openapisdk.models.operations.FetchRoomParticipantSubscribeRuleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomParticipantSubscribeRuleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomParticipantSubscribeRuleResponse res = new openapisdk.models.operations.FetchRoomParticipantSubscribeRuleResponse() {{
            videoV1RoomRoomParticipantRoomParticipantSubscribeRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.class);
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRoomParticipantSubscribedTrack - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
    **/
    public openapisdk.models.operations.FetchRoomParticipantSubscribedTrackResponse fetchRoomParticipantSubscribedTrack(openapisdk.models.operations.FetchRoomParticipantSubscribedTrackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomParticipantSubscribedTrackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomParticipantSubscribedTrackResponse res = new openapisdk.models.operations.FetchRoomParticipantSubscribedTrackResponse() {{
            videoV1RoomRoomParticipantRoomParticipantSubscribedTrack = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack.class);
                res.videoV1RoomRoomParticipantRoomParticipantSubscribedTrack = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRoomRecordingResponse fetchRoomRecording(openapisdk.models.operations.FetchRoomRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Recordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomRecordingResponse res = new openapisdk.models.operations.FetchRoomRecordingResponse() {{
            videoV1RoomRoomRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomRecording.class);
                res.videoV1RoomRoomRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRoomRecordingRule - Returns a list of Recording Rules for the Room.
    **/
    public openapisdk.models.operations.FetchRoomRecordingRuleResponse fetchRoomRecordingRule(openapisdk.models.operations.FetchRoomRecordingRuleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoomRecordingRuleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/RecordingRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoomRecordingRuleResponse res = new openapisdk.models.operations.FetchRoomRecordingRuleResponse() {{
            videoV1RoomRoomRecordingRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomRecordingRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomRecordingRule.class);
                res.videoV1RoomRoomRecordingRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * listComposition - List of all Recording compositions.
    **/
    public openapisdk.models.operations.ListCompositionResponse listComposition(openapisdk.models.operations.ListCompositionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCompositionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Compositions");
        
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

        openapisdk.models.operations.ListCompositionResponse res = new openapisdk.models.operations.ListCompositionResponse() {{
            listCompositionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCompositionListCompositionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCompositionListCompositionResponse.class);
                res.listCompositionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCompositionHook - List of all Recording CompositionHook resources.
    **/
    public openapisdk.models.operations.ListCompositionHookResponse listCompositionHook(openapisdk.models.operations.ListCompositionHookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCompositionHookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionHooks");
        
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

        openapisdk.models.operations.ListCompositionHookResponse res = new openapisdk.models.operations.ListCompositionHookResponse() {{
            listCompositionHookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCompositionHookListCompositionHookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCompositionHookListCompositionHookResponse.class);
                res.listCompositionHookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRecording - List of all Track recordings.
    **/
    public openapisdk.models.operations.ListRecordingResponse listRecording(openapisdk.models.operations.ListRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Recordings");
        
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

        openapisdk.models.operations.ListRecordingResponse res = new openapisdk.models.operations.ListRecordingResponse() {{
            listRecordingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRecordingListRecordingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRecordingListRecordingResponse.class);
                res.listRecordingResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListRoomResponse listRoom(openapisdk.models.operations.ListRoomRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoomRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms");
        
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

        openapisdk.models.operations.ListRoomResponse res = new openapisdk.models.operations.ListRoomResponse() {{
            listRoomResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoomListRoomResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoomListRoomResponse.class);
                res.listRoomResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListRoomParticipantResponse listRoomParticipant(openapisdk.models.operations.ListRoomParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoomParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.ListRoomParticipantResponse res = new openapisdk.models.operations.ListRoomParticipantResponse() {{
            listRoomParticipantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoomParticipantListRoomParticipantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoomParticipantListRoomParticipantResponse.class);
                res.listRoomParticipantResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRoomParticipantPublishedTrack - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
    **/
    public openapisdk.models.operations.ListRoomParticipantPublishedTrackResponse listRoomParticipantPublishedTrack(openapisdk.models.operations.ListRoomParticipantPublishedTrackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoomParticipantPublishedTrackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks", request.pathParams);
        
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

        openapisdk.models.operations.ListRoomParticipantPublishedTrackResponse res = new openapisdk.models.operations.ListRoomParticipantPublishedTrackResponse() {{
            listRoomParticipantPublishedTrackResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoomParticipantPublishedTrackListRoomParticipantPublishedTrackResponse.class);
                res.listRoomParticipantPublishedTrackResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRoomParticipantSubscribedTrack - Returns a list of tracks that are subscribed for the participant.
    **/
    public openapisdk.models.operations.ListRoomParticipantSubscribedTrackResponse listRoomParticipantSubscribedTrack(openapisdk.models.operations.ListRoomParticipantSubscribedTrackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoomParticipantSubscribedTrackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks", request.pathParams);
        
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

        openapisdk.models.operations.ListRoomParticipantSubscribedTrackResponse res = new openapisdk.models.operations.ListRoomParticipantSubscribedTrackResponse() {{
            listRoomParticipantSubscribedTrackResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoomParticipantSubscribedTrackListRoomParticipantSubscribedTrackResponse.class);
                res.listRoomParticipantSubscribedTrackResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListRoomRecordingResponse listRoomRecording(openapisdk.models.operations.ListRoomRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoomRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Recordings", request.pathParams);
        
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

        openapisdk.models.operations.ListRoomRecordingResponse res = new openapisdk.models.operations.ListRoomRecordingResponse() {{
            listRoomRecordingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoomRecordingListRoomRecordingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoomRecordingListRoomRecordingResponse.class);
                res.listRoomRecordingResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateCompositionHookResponse updateCompositionHook(openapisdk.models.operations.UpdateCompositionHookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCompositionHookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CompositionHooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCompositionHookResponse res = new openapisdk.models.operations.UpdateCompositionHookResponse() {{
            videoV1CompositionHook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1CompositionHook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1CompositionHook.class);
                res.videoV1CompositionHook = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateRoomResponse updateRoom(openapisdk.models.operations.UpdateRoomRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoomRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomResponse res = new openapisdk.models.operations.UpdateRoomResponse() {{
            videoV1Room = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1Room out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1Room.class);
                res.videoV1Room = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateRoomParticipantResponse updateRoomParticipant(openapisdk.models.operations.UpdateRoomParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoomParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomParticipantResponse res = new openapisdk.models.operations.UpdateRoomParticipantResponse() {{
            videoV1RoomRoomParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipant.class);
                res.videoV1RoomRoomParticipant = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateRoomParticipantAnonymizeResponse updateRoomParticipantAnonymize(openapisdk.models.operations.UpdateRoomParticipantAnonymizeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoomParticipantAnonymizeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomParticipantAnonymizeResponse res = new openapisdk.models.operations.UpdateRoomParticipantAnonymizeResponse() {{
            videoV1RoomRoomParticipantRoomParticipantAnonymize = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantAnonymize.class);
                res.videoV1RoomRoomParticipantRoomParticipantAnonymize = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRoomParticipantSubscribeRule - Update the Subscribe Rules for the Participant
    **/
    public openapisdk.models.operations.UpdateRoomParticipantSubscribeRuleResponse updateRoomParticipantSubscribeRule(openapisdk.models.operations.UpdateRoomParticipantSubscribeRuleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoomParticipantSubscribeRuleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomParticipantSubscribeRuleResponse res = new openapisdk.models.operations.UpdateRoomParticipantSubscribeRuleResponse() {{
            videoV1RoomRoomParticipantRoomParticipantSubscribeRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomParticipantRoomParticipantSubscribeRule.class);
                res.videoV1RoomRoomParticipantRoomParticipantSubscribeRule = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRoomRecordingRule - Update the Recording Rules for the Room
    **/
    public openapisdk.models.operations.UpdateRoomRecordingRuleResponse updateRoomRecordingRule(openapisdk.models.operations.UpdateRoomRecordingRuleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoomRecordingRuleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Rooms/{RoomSid}/RecordingRules", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomRecordingRuleResponse res = new openapisdk.models.operations.UpdateRoomRecordingRuleResponse() {{
            videoV1RoomRoomRecordingRule = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VideoV1RoomRoomRecordingRule out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VideoV1RoomRoomRecordingRule.class);
                res.videoV1RoomRoomRecordingRule = out;
            }
        }

        return res;
    }
	
}