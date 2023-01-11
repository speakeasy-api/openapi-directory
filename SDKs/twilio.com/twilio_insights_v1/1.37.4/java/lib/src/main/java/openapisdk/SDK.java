

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
		"https://insights.twilio.com",
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
	
	
    public openapisdk.models.operations.FetchAccountSettingsResponse fetchAccountSettings(openapisdk.models.operations.FetchAccountSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAccountSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/Settings");
        
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

        openapisdk.models.operations.FetchAccountSettingsResponse res = new openapisdk.models.operations.FetchAccountSettingsResponse() {{
            insightsV1AccountSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1AccountSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1AccountSettings.class);
                res.insightsV1AccountSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchAnnotation - Fetch a specific Annotation.
    **/
    public openapisdk.models.operations.FetchAnnotationResponse fetchAnnotation(openapisdk.models.operations.FetchAnnotationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAnnotationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{CallSid}/Annotation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAnnotationResponse res = new openapisdk.models.operations.FetchAnnotationResponse() {{
            insightsV1CallAnnotation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1CallAnnotation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1CallAnnotation.class);
                res.insightsV1CallAnnotation = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchCallResponse fetchCall(openapisdk.models.operations.FetchCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallResponse res = new openapisdk.models.operations.FetchCallResponse() {{
            insightsV1Call = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1Call out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1Call.class);
                res.insightsV1Call = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConference - Fetch a specific Conference.
    **/
    public openapisdk.models.operations.FetchConferenceResponse fetchConference(openapisdk.models.operations.FetchConferenceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConferenceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conferences/{ConferenceSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConferenceResponse res = new openapisdk.models.operations.FetchConferenceResponse() {{
            insightsV1Conference = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1Conference out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1Conference.class);
                res.insightsV1Conference = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConferenceParticipant - Fetch a specific Conference Participant Summary.
    **/
    public openapisdk.models.operations.FetchConferenceParticipantResponse fetchConferenceParticipant(openapisdk.models.operations.FetchConferenceParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConferenceParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conferences/{ConferenceSid}/Participants/{ParticipantSid}", request.pathParams);
        
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

        openapisdk.models.operations.FetchConferenceParticipantResponse res = new openapisdk.models.operations.FetchConferenceParticipantResponse() {{
            insightsV1ConferenceConferenceParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1ConferenceConferenceParticipant.class);
                res.insightsV1ConferenceConferenceParticipant = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSummaryResponse fetchSummary(openapisdk.models.operations.FetchSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{CallSid}/Summary", request.pathParams);
        
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

        openapisdk.models.operations.FetchSummaryResponse res = new openapisdk.models.operations.FetchSummaryResponse() {{
            insightsV1CallSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1CallSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1CallSummary.class);
                res.insightsV1CallSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVideoParticipantSummary - Get Video Log Analyzer data for a Room Participant.
    **/
    public openapisdk.models.operations.FetchVideoParticipantSummaryResponse fetchVideoParticipantSummary(openapisdk.models.operations.FetchVideoParticipantSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVideoParticipantSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVideoParticipantSummaryResponse res = new openapisdk.models.operations.FetchVideoParticipantSummaryResponse() {{
            insightsV1VideoRoomSummaryVideoParticipantSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1VideoRoomSummaryVideoParticipantSummary.class);
                res.insightsV1VideoRoomSummaryVideoParticipantSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVideoRoomSummary - Get Video Log Analyzer data for a Room.
    **/
    public openapisdk.models.operations.FetchVideoRoomSummaryResponse fetchVideoRoomSummary(openapisdk.models.operations.FetchVideoRoomSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVideoRoomSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Video/Rooms/{RoomSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVideoRoomSummaryResponse res = new openapisdk.models.operations.FetchVideoRoomSummaryResponse() {{
            insightsV1VideoRoomSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1VideoRoomSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1VideoRoomSummary.class);
                res.insightsV1VideoRoomSummary = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListCallSummariesResponse listCallSummaries(openapisdk.models.operations.ListCallSummariesRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCallSummariesRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/Summaries");
        
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

        openapisdk.models.operations.ListCallSummariesResponse res = new openapisdk.models.operations.ListCallSummariesResponse() {{
            listCallSummariesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCallSummariesListCallSummariesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCallSummariesListCallSummariesResponse.class);
                res.listCallSummariesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConference - Retrieve a list of Conferences.
    **/
    public openapisdk.models.operations.ListConferenceResponse listConference(openapisdk.models.operations.ListConferenceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConferenceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conferences");
        
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

        openapisdk.models.operations.ListConferenceResponse res = new openapisdk.models.operations.ListConferenceResponse() {{
            listConferenceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConferenceListConferenceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConferenceListConferenceResponse.class);
                res.listConferenceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConferenceParticipant - List Conference Participants.
    **/
    public openapisdk.models.operations.ListConferenceParticipantResponse listConferenceParticipant(openapisdk.models.operations.ListConferenceParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConferenceParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conferences/{ConferenceSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.ListConferenceParticipantResponse res = new openapisdk.models.operations.ListConferenceParticipantResponse() {{
            listConferenceParticipantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConferenceParticipantListConferenceParticipantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConferenceParticipantListConferenceParticipantResponse.class);
                res.listConferenceParticipantResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListEventResponse listEvent(openapisdk.models.operations.ListEventRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEventRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{CallSid}/Events", request.pathParams);
        
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

        openapisdk.models.operations.ListEventResponse res = new openapisdk.models.operations.ListEventResponse() {{
            listEventResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEventListEventResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEventListEventResponse.class);
                res.listEventResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListMetricResponse listMetric(openapisdk.models.operations.ListMetricRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMetricRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{CallSid}/Metrics", request.pathParams);
        
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

        openapisdk.models.operations.ListMetricResponse res = new openapisdk.models.operations.ListMetricResponse() {{
            listMetricResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMetricListMetricResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMetricListMetricResponse.class);
                res.listMetricResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listVideoParticipantSummary - Get a list of room participants.
    **/
    public openapisdk.models.operations.ListVideoParticipantSummaryResponse listVideoParticipantSummary(openapisdk.models.operations.ListVideoParticipantSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVideoParticipantSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Video/Rooms/{RoomSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.ListVideoParticipantSummaryResponse res = new openapisdk.models.operations.ListVideoParticipantSummaryResponse() {{
            listVideoParticipantSummaryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVideoParticipantSummaryListVideoParticipantSummaryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVideoParticipantSummaryListVideoParticipantSummaryResponse.class);
                res.listVideoParticipantSummaryResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listVideoRoomSummary - Get a list of Programmable Video Rooms.
    **/
    public openapisdk.models.operations.ListVideoRoomSummaryResponse listVideoRoomSummary(openapisdk.models.operations.ListVideoRoomSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVideoRoomSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Video/Rooms");
        
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

        openapisdk.models.operations.ListVideoRoomSummaryResponse res = new openapisdk.models.operations.ListVideoRoomSummaryResponse() {{
            listVideoRoomSummaryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVideoRoomSummaryListVideoRoomSummaryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVideoRoomSummaryListVideoRoomSummaryResponse.class);
                res.listVideoRoomSummaryResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateAccountSettingsResponse updateAccountSettings(openapisdk.models.operations.UpdateAccountSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAccountSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/Settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAccountSettingsResponse res = new openapisdk.models.operations.UpdateAccountSettingsResponse() {{
            insightsV1AccountSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1AccountSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1AccountSettings.class);
                res.insightsV1AccountSettings = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateAnnotation - Create/Update the annotation for the call
    **/
    public openapisdk.models.operations.UpdateAnnotationResponse updateAnnotation(openapisdk.models.operations.UpdateAnnotationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAnnotationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Voice/{CallSid}/Annotation", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAnnotationResponse res = new openapisdk.models.operations.UpdateAnnotationResponse() {{
            insightsV1CallAnnotation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.InsightsV1CallAnnotation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.InsightsV1CallAnnotation.class);
                res.insightsV1CallAnnotation = out;
            }
        }

        return res;
    }
	
}