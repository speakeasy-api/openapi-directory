

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
		"https://media.twilio.com",
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
	
	
    public openapisdk.models.operations.CreateMediaProcessorResponse createMediaProcessor(openapisdk.models.operations.CreateMediaProcessorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMediaProcessorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaProcessors");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMediaProcessorResponse res = new openapisdk.models.operations.CreateMediaProcessorResponse() {{
            mediaV1MediaProcessor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1MediaProcessor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1MediaProcessor.class);
                res.mediaV1MediaProcessor = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreatePlayerStreamerResponse createPlayerStreamer(openapisdk.models.operations.CreatePlayerStreamerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreatePlayerStreamerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePlayerStreamerResponse res = new openapisdk.models.operations.CreatePlayerStreamerResponse() {{
            mediaV1PlayerStreamer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1PlayerStreamer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1PlayerStreamer.class);
                res.mediaV1PlayerStreamer = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreatePlayerStreamerPlaybackGrantResponse createPlayerStreamerPlaybackGrant(openapisdk.models.operations.CreatePlayerStreamerPlaybackGrantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreatePlayerStreamerPlaybackGrantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePlayerStreamerPlaybackGrantResponse res = new openapisdk.models.operations.CreatePlayerStreamerPlaybackGrantResponse() {{
            mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant.class);
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteMediaRecording - Deletes a MediaRecording resource identified by a SID.
    **/
    public openapisdk.models.operations.DeleteMediaRecordingResponse deleteMediaRecording(openapisdk.models.operations.DeleteMediaRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMediaRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaRecordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMediaRecordingResponse res = new openapisdk.models.operations.DeleteMediaRecordingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchMediaProcessor - Returns a single MediaProcessor resource identified by a SID.
    **/
    public openapisdk.models.operations.FetchMediaProcessorResponse fetchMediaProcessor(openapisdk.models.operations.FetchMediaProcessorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMediaProcessorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaProcessors/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMediaProcessorResponse res = new openapisdk.models.operations.FetchMediaProcessorResponse() {{
            mediaV1MediaProcessor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1MediaProcessor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1MediaProcessor.class);
                res.mediaV1MediaProcessor = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMediaRecording - Returns a single MediaRecording resource identified by a SID.
    **/
    public openapisdk.models.operations.FetchMediaRecordingResponse fetchMediaRecording(openapisdk.models.operations.FetchMediaRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMediaRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaRecordings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMediaRecordingResponse res = new openapisdk.models.operations.FetchMediaRecordingResponse() {{
            mediaV1MediaRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1MediaRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1MediaRecording.class);
                res.mediaV1MediaRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchPlayerStreamer - Returns a single PlayerStreamer resource identified by a SID.
    **/
    public openapisdk.models.operations.FetchPlayerStreamerResponse fetchPlayerStreamer(openapisdk.models.operations.FetchPlayerStreamerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchPlayerStreamerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchPlayerStreamerResponse res = new openapisdk.models.operations.FetchPlayerStreamerResponse() {{
            mediaV1PlayerStreamer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1PlayerStreamer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1PlayerStreamer.class);
                res.mediaV1PlayerStreamer = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchPlayerStreamerPlaybackGrant - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
    **/
    public openapisdk.models.operations.FetchPlayerStreamerPlaybackGrantResponse fetchPlayerStreamerPlaybackGrant(openapisdk.models.operations.FetchPlayerStreamerPlaybackGrantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchPlayerStreamerPlaybackGrantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers/{Sid}/PlaybackGrant", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchPlayerStreamerPlaybackGrantResponse res = new openapisdk.models.operations.FetchPlayerStreamerPlaybackGrantResponse() {{
            mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant.class);
                res.mediaV1PlayerStreamerPlayerStreamerPlaybackGrant = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMediaProcessor - Returns a list of MediaProcessors.
    **/
    public openapisdk.models.operations.ListMediaProcessorResponse listMediaProcessor(openapisdk.models.operations.ListMediaProcessorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMediaProcessorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaProcessors");
        
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

        openapisdk.models.operations.ListMediaProcessorResponse res = new openapisdk.models.operations.ListMediaProcessorResponse() {{
            listMediaProcessorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMediaProcessorListMediaProcessorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMediaProcessorListMediaProcessorResponse.class);
                res.listMediaProcessorResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMediaRecording - Returns a list of MediaRecordings.
    **/
    public openapisdk.models.operations.ListMediaRecordingResponse listMediaRecording(openapisdk.models.operations.ListMediaRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMediaRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaRecordings");
        
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

        openapisdk.models.operations.ListMediaRecordingResponse res = new openapisdk.models.operations.ListMediaRecordingResponse() {{
            listMediaRecordingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMediaRecordingListMediaRecordingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMediaRecordingListMediaRecordingResponse.class);
                res.listMediaRecordingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPlayerStreamer - Returns a list of PlayerStreamers.
    **/
    public openapisdk.models.operations.ListPlayerStreamerResponse listPlayerStreamer(openapisdk.models.operations.ListPlayerStreamerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListPlayerStreamerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers");
        
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

        openapisdk.models.operations.ListPlayerStreamerResponse res = new openapisdk.models.operations.ListPlayerStreamerResponse() {{
            listPlayerStreamerResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPlayerStreamerListPlayerStreamerResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPlayerStreamerListPlayerStreamerResponse.class);
                res.listPlayerStreamerResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMediaProcessor - Updates a MediaProcessor resource identified by a SID.
    **/
    public openapisdk.models.operations.UpdateMediaProcessorResponse updateMediaProcessor(openapisdk.models.operations.UpdateMediaProcessorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMediaProcessorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/MediaProcessors/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMediaProcessorResponse res = new openapisdk.models.operations.UpdateMediaProcessorResponse() {{
            mediaV1MediaProcessor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1MediaProcessor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1MediaProcessor.class);
                res.mediaV1MediaProcessor = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePlayerStreamer - Updates a PlayerStreamer resource identified by a SID.
    **/
    public openapisdk.models.operations.UpdatePlayerStreamerResponse updatePlayerStreamer(openapisdk.models.operations.UpdatePlayerStreamerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdatePlayerStreamerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/PlayerStreamers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePlayerStreamerResponse res = new openapisdk.models.operations.UpdatePlayerStreamerResponse() {{
            mediaV1PlayerStreamer = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MediaV1PlayerStreamer out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MediaV1PlayerStreamer.class);
                res.mediaV1PlayerStreamer = out;
            }
        }

        return res;
    }
	
}