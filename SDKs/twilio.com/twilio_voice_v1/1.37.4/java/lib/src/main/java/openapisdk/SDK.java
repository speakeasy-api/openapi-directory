

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
		"https://voice.twilio.com",
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
	
	
    public openapisdk.models.operations.CreateByocTrunkResponse createByocTrunk(openapisdk.models.operations.CreateByocTrunkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateByocTrunkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ByocTrunks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateByocTrunkResponse res = new openapisdk.models.operations.CreateByocTrunkResponse() {{
            voiceV1ByocTrunk = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ByocTrunk out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ByocTrunk.class);
                res.voiceV1ByocTrunk = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateConnectionPolicyResponse createConnectionPolicy(openapisdk.models.operations.CreateConnectionPolicyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConnectionPolicyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateConnectionPolicyResponse res = new openapisdk.models.operations.CreateConnectionPolicyResponse() {{
            voiceV1ConnectionPolicy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicy.class);
                res.voiceV1ConnectionPolicy = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateConnectionPolicyTargetResponse createConnectionPolicyTarget(openapisdk.models.operations.CreateConnectionPolicyTargetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConnectionPolicyTargetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateConnectionPolicyTargetResponse res = new openapisdk.models.operations.CreateConnectionPolicyTargetResponse() {{
            voiceV1ConnectionPolicyConnectionPolicyTarget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget.class);
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = out;
            }
        }

        return res;
    }
	
	
    /**
     * createDialingPermissionsCountryBulkUpdate - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    **/
    public openapisdk.models.operations.CreateDialingPermissionsCountryBulkUpdateResponse createDialingPermissionsCountryBulkUpdate(openapisdk.models.operations.CreateDialingPermissionsCountryBulkUpdateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateDialingPermissionsCountryBulkUpdateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/DialingPermissions/BulkCountryUpdates");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateDialingPermissionsCountryBulkUpdateResponse res = new openapisdk.models.operations.CreateDialingPermissionsCountryBulkUpdateResponse() {{
            voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate.class);
                res.voiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateIpRecordResponse createIpRecord(openapisdk.models.operations.CreateIpRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIpRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpRecords");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIpRecordResponse res = new openapisdk.models.operations.CreateIpRecordResponse() {{
            voiceV1IpRecord = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1IpRecord out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1IpRecord.class);
                res.voiceV1IpRecord = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateSourceIpMappingResponse createSourceIpMapping(openapisdk.models.operations.CreateSourceIpMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSourceIpMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SourceIpMappings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSourceIpMappingResponse res = new openapisdk.models.operations.CreateSourceIpMappingResponse() {{
            voiceV1SourceIpMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1SourceIpMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1SourceIpMapping.class);
                res.voiceV1SourceIpMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteArchivedCall - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
    **/
    public openapisdk.models.operations.DeleteArchivedCallResponse deleteArchivedCall(openapisdk.models.operations.DeleteArchivedCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteArchivedCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Archives/{Date}/Calls/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteArchivedCallResponse res = new openapisdk.models.operations.DeleteArchivedCallResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteByocTrunkResponse deleteByocTrunk(openapisdk.models.operations.DeleteByocTrunkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteByocTrunkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ByocTrunks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteByocTrunkResponse res = new openapisdk.models.operations.DeleteByocTrunkResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteConnectionPolicyResponse deleteConnectionPolicy(openapisdk.models.operations.DeleteConnectionPolicyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConnectionPolicyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConnectionPolicyResponse res = new openapisdk.models.operations.DeleteConnectionPolicyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteConnectionPolicyTargetResponse deleteConnectionPolicyTarget(openapisdk.models.operations.DeleteConnectionPolicyTargetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConnectionPolicyTargetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConnectionPolicyTargetResponse res = new openapisdk.models.operations.DeleteConnectionPolicyTargetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteIpRecordResponse deleteIpRecord(openapisdk.models.operations.DeleteIpRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteIpRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpRecords/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteIpRecordResponse res = new openapisdk.models.operations.DeleteIpRecordResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSourceIpMappingResponse deleteSourceIpMapping(openapisdk.models.operations.DeleteSourceIpMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSourceIpMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SourceIpMappings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSourceIpMappingResponse res = new openapisdk.models.operations.DeleteSourceIpMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchByocTrunkResponse fetchByocTrunk(openapisdk.models.operations.FetchByocTrunkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchByocTrunkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ByocTrunks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchByocTrunkResponse res = new openapisdk.models.operations.FetchByocTrunkResponse() {{
            voiceV1ByocTrunk = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ByocTrunk out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ByocTrunk.class);
                res.voiceV1ByocTrunk = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchConnectionPolicyResponse fetchConnectionPolicy(openapisdk.models.operations.FetchConnectionPolicyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConnectionPolicyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConnectionPolicyResponse res = new openapisdk.models.operations.FetchConnectionPolicyResponse() {{
            voiceV1ConnectionPolicy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicy.class);
                res.voiceV1ConnectionPolicy = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchConnectionPolicyTargetResponse fetchConnectionPolicyTarget(openapisdk.models.operations.FetchConnectionPolicyTargetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConnectionPolicyTargetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConnectionPolicyTargetResponse res = new openapisdk.models.operations.FetchConnectionPolicyTargetResponse() {{
            voiceV1ConnectionPolicyConnectionPolicyTarget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget.class);
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDialingPermissionsCountry - Retrieve voice dialing country permissions identified by the given ISO country code
    **/
    public openapisdk.models.operations.FetchDialingPermissionsCountryResponse fetchDialingPermissionsCountry(openapisdk.models.operations.FetchDialingPermissionsCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDialingPermissionsCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/DialingPermissions/Countries/{IsoCode}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDialingPermissionsCountryResponse res = new openapisdk.models.operations.FetchDialingPermissionsCountryResponse() {{
            voiceV1DialingPermissionsDialingPermissionsCountryInstance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance.class);
                res.voiceV1DialingPermissionsDialingPermissionsCountryInstance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchDialingPermissionsSettings - Retrieve voice dialing permissions inheritance for the sub-account
    **/
    public openapisdk.models.operations.FetchDialingPermissionsSettingsResponse fetchDialingPermissionsSettings(openapisdk.models.operations.FetchDialingPermissionsSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchDialingPermissionsSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchDialingPermissionsSettingsResponse res = new openapisdk.models.operations.FetchDialingPermissionsSettingsResponse() {{
            voiceV1DialingPermissionsDialingPermissionsSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings.class);
                res.voiceV1DialingPermissionsDialingPermissionsSettings = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchIpRecordResponse fetchIpRecord(openapisdk.models.operations.FetchIpRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchIpRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpRecords/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchIpRecordResponse res = new openapisdk.models.operations.FetchIpRecordResponse() {{
            voiceV1IpRecord = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1IpRecord out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1IpRecord.class);
                res.voiceV1IpRecord = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSourceIpMappingResponse fetchSourceIpMapping(openapisdk.models.operations.FetchSourceIpMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSourceIpMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SourceIpMappings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSourceIpMappingResponse res = new openapisdk.models.operations.FetchSourceIpMappingResponse() {{
            voiceV1SourceIpMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1SourceIpMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1SourceIpMapping.class);
                res.voiceV1SourceIpMapping = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListByocTrunkResponse listByocTrunk(openapisdk.models.operations.ListByocTrunkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListByocTrunkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ByocTrunks");
        
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

        openapisdk.models.operations.ListByocTrunkResponse res = new openapisdk.models.operations.ListByocTrunkResponse() {{
            listByocTrunkResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListByocTrunkListByocTrunkResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListByocTrunkListByocTrunkResponse.class);
                res.listByocTrunkResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListConnectionPolicyResponse listConnectionPolicy(openapisdk.models.operations.ListConnectionPolicyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConnectionPolicyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies");
        
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

        openapisdk.models.operations.ListConnectionPolicyResponse res = new openapisdk.models.operations.ListConnectionPolicyResponse() {{
            listConnectionPolicyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConnectionPolicyListConnectionPolicyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConnectionPolicyListConnectionPolicyResponse.class);
                res.listConnectionPolicyResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListConnectionPolicyTargetResponse listConnectionPolicyTarget(openapisdk.models.operations.ListConnectionPolicyTargetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConnectionPolicyTargetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets", request.pathParams);
        
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

        openapisdk.models.operations.ListConnectionPolicyTargetResponse res = new openapisdk.models.operations.ListConnectionPolicyTargetResponse() {{
            listConnectionPolicyTargetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConnectionPolicyTargetListConnectionPolicyTargetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConnectionPolicyTargetListConnectionPolicyTargetResponse.class);
                res.listConnectionPolicyTargetResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDialingPermissionsCountry - Retrieve all voice dialing country permissions for this account
    **/
    public openapisdk.models.operations.ListDialingPermissionsCountryResponse listDialingPermissionsCountry(openapisdk.models.operations.ListDialingPermissionsCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDialingPermissionsCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/DialingPermissions/Countries");
        
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

        openapisdk.models.operations.ListDialingPermissionsCountryResponse res = new openapisdk.models.operations.ListDialingPermissionsCountryResponse() {{
            listDialingPermissionsCountryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDialingPermissionsCountryListDialingPermissionsCountryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDialingPermissionsCountryListDialingPermissionsCountryResponse.class);
                res.listDialingPermissionsCountryResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listDialingPermissionsHrsPrefixes - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
    **/
    public openapisdk.models.operations.ListDialingPermissionsHrsPrefixesResponse listDialingPermissionsHrsPrefixes(openapisdk.models.operations.ListDialingPermissionsHrsPrefixesRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDialingPermissionsHrsPrefixesRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/DialingPermissions/Countries/{IsoCode}/HighRiskSpecialPrefixes", request.pathParams);
        
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

        openapisdk.models.operations.ListDialingPermissionsHrsPrefixesResponse res = new openapisdk.models.operations.ListDialingPermissionsHrsPrefixesResponse() {{
            listDialingPermissionsHrsPrefixesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse.class);
                res.listDialingPermissionsHrsPrefixesResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListIpRecordResponse listIpRecord(openapisdk.models.operations.ListIpRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIpRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpRecords");
        
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

        openapisdk.models.operations.ListIpRecordResponse res = new openapisdk.models.operations.ListIpRecordResponse() {{
            listIpRecordResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIpRecordListIpRecordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIpRecordListIpRecordResponse.class);
                res.listIpRecordResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSourceIpMappingResponse listSourceIpMapping(openapisdk.models.operations.ListSourceIpMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSourceIpMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SourceIpMappings");
        
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

        openapisdk.models.operations.ListSourceIpMappingResponse res = new openapisdk.models.operations.ListSourceIpMappingResponse() {{
            listSourceIpMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSourceIpMappingListSourceIpMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSourceIpMappingListSourceIpMappingResponse.class);
                res.listSourceIpMappingResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateByocTrunkResponse updateByocTrunk(openapisdk.models.operations.UpdateByocTrunkRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateByocTrunkRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ByocTrunks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateByocTrunkResponse res = new openapisdk.models.operations.UpdateByocTrunkResponse() {{
            voiceV1ByocTrunk = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ByocTrunk out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ByocTrunk.class);
                res.voiceV1ByocTrunk = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateConnectionPolicyResponse updateConnectionPolicy(openapisdk.models.operations.UpdateConnectionPolicyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConnectionPolicyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConnectionPolicyResponse res = new openapisdk.models.operations.UpdateConnectionPolicyResponse() {{
            voiceV1ConnectionPolicy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicy.class);
                res.voiceV1ConnectionPolicy = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateConnectionPolicyTargetResponse updateConnectionPolicyTarget(openapisdk.models.operations.UpdateConnectionPolicyTargetRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConnectionPolicyTargetRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ConnectionPolicies/{ConnectionPolicySid}/Targets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConnectionPolicyTargetResponse res = new openapisdk.models.operations.UpdateConnectionPolicyTargetResponse() {{
            voiceV1ConnectionPolicyConnectionPolicyTarget = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1ConnectionPolicyConnectionPolicyTarget.class);
                res.voiceV1ConnectionPolicyConnectionPolicyTarget = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDialingPermissionsSettings - Update voice dialing permissions inheritance for the sub-account
    **/
    public openapisdk.models.operations.UpdateDialingPermissionsSettingsResponse updateDialingPermissionsSettings(openapisdk.models.operations.UpdateDialingPermissionsSettingsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateDialingPermissionsSettingsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateDialingPermissionsSettingsResponse res = new openapisdk.models.operations.UpdateDialingPermissionsSettingsResponse() {{
            voiceV1DialingPermissionsDialingPermissionsSettings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1DialingPermissionsDialingPermissionsSettings.class);
                res.voiceV1DialingPermissionsDialingPermissionsSettings = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateIpRecordResponse updateIpRecord(openapisdk.models.operations.UpdateIpRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateIpRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/IpRecords/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateIpRecordResponse res = new openapisdk.models.operations.UpdateIpRecordResponse() {{
            voiceV1IpRecord = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1IpRecord out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1IpRecord.class);
                res.voiceV1IpRecord = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSourceIpMappingResponse updateSourceIpMapping(openapisdk.models.operations.UpdateSourceIpMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSourceIpMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SourceIpMappings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSourceIpMappingResponse res = new openapisdk.models.operations.UpdateSourceIpMappingResponse() {{
            voiceV1SourceIpMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VoiceV1SourceIpMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VoiceV1SourceIpMapping.class);
                res.voiceV1SourceIpMapping = out;
            }
        }

        return res;
    }
	
}