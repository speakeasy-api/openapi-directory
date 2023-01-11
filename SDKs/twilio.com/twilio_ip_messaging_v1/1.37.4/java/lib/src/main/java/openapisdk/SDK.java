

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
		"https://ip-messaging.twilio.com",
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
	
	
    public openapisdk.models.operations.CreateChannelResponse createChannel(openapisdk.models.operations.CreateChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateChannelResponse res = new openapisdk.models.operations.CreateChannelResponse() {{
            ipMessagingV1ServiceChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannel.class);
                res.ipMessagingV1ServiceChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateCredentialResponse createCredential(openapisdk.models.operations.CreateCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCredentialResponse res = new openapisdk.models.operations.CreateCredentialResponse() {{
            ipMessagingV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Credential.class);
                res.ipMessagingV1Credential = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateInviteResponse createInvite(openapisdk.models.operations.CreateInviteRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateInviteRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateInviteResponse res = new openapisdk.models.operations.CreateInviteResponse() {{
            ipMessagingV1ServiceChannelInvite = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelInvite out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelInvite.class);
                res.ipMessagingV1ServiceChannelInvite = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateMemberResponse createMember(openapisdk.models.operations.CreateMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMemberResponse res = new openapisdk.models.operations.CreateMemberResponse() {{
            ipMessagingV1ServiceChannelMember = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMember out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMember.class);
                res.ipMessagingV1ServiceChannelMember = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateMessageResponse createMessage(openapisdk.models.operations.CreateMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMessageResponse res = new openapisdk.models.operations.CreateMessageResponse() {{
            ipMessagingV1ServiceChannelMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMessage.class);
                res.ipMessagingV1ServiceChannelMessage = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateRoleResponse createRole(openapisdk.models.operations.CreateRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Roles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRoleResponse res = new openapisdk.models.operations.CreateRoleResponse() {{
            ipMessagingV1ServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceRole.class);
                res.ipMessagingV1ServiceRole = out;
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
            ipMessagingV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Service.class);
                res.ipMessagingV1Service = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateUserResponse createUser(openapisdk.models.operations.CreateUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUserResponse res = new openapisdk.models.operations.CreateUserResponse() {{
            ipMessagingV1ServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceUser.class);
                res.ipMessagingV1ServiceUser = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteChannelResponse deleteChannel(openapisdk.models.operations.DeleteChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteChannelResponse res = new openapisdk.models.operations.DeleteChannelResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteCredentialResponse deleteCredential(openapisdk.models.operations.DeleteCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCredentialResponse res = new openapisdk.models.operations.DeleteCredentialResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteInviteResponse deleteInvite(openapisdk.models.operations.DeleteInviteRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteInviteRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteInviteResponse res = new openapisdk.models.operations.DeleteInviteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteMemberResponse deleteMember(openapisdk.models.operations.DeleteMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMemberResponse res = new openapisdk.models.operations.DeleteMemberResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteMessageResponse deleteMessage(openapisdk.models.operations.DeleteMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMessageResponse res = new openapisdk.models.operations.DeleteMessageResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteRoleResponse deleteRole(openapisdk.models.operations.DeleteRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRoleResponse res = new openapisdk.models.operations.DeleteRoleResponse() {{
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
	
	
    public openapisdk.models.operations.DeleteUserResponse deleteUser(openapisdk.models.operations.DeleteUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserResponse res = new openapisdk.models.operations.DeleteUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchChannelResponse fetchChannel(openapisdk.models.operations.FetchChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchChannelResponse res = new openapisdk.models.operations.FetchChannelResponse() {{
            ipMessagingV1ServiceChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannel.class);
                res.ipMessagingV1ServiceChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchCredentialResponse fetchCredential(openapisdk.models.operations.FetchCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCredentialResponse res = new openapisdk.models.operations.FetchCredentialResponse() {{
            ipMessagingV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Credential.class);
                res.ipMessagingV1Credential = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchInviteResponse fetchInvite(openapisdk.models.operations.FetchInviteRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchInviteRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchInviteResponse res = new openapisdk.models.operations.FetchInviteResponse() {{
            ipMessagingV1ServiceChannelInvite = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelInvite out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelInvite.class);
                res.ipMessagingV1ServiceChannelInvite = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchMemberResponse fetchMember(openapisdk.models.operations.FetchMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMemberResponse res = new openapisdk.models.operations.FetchMemberResponse() {{
            ipMessagingV1ServiceChannelMember = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMember out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMember.class);
                res.ipMessagingV1ServiceChannelMember = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchMessageResponse fetchMessage(openapisdk.models.operations.FetchMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMessageResponse res = new openapisdk.models.operations.FetchMessageResponse() {{
            ipMessagingV1ServiceChannelMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMessage.class);
                res.ipMessagingV1ServiceChannelMessage = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRoleResponse fetchRole(openapisdk.models.operations.FetchRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoleResponse res = new openapisdk.models.operations.FetchRoleResponse() {{
            ipMessagingV1ServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceRole.class);
                res.ipMessagingV1ServiceRole = out;
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
            ipMessagingV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Service.class);
                res.ipMessagingV1Service = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchUserResponse fetchUser(openapisdk.models.operations.FetchUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUserResponse res = new openapisdk.models.operations.FetchUserResponse() {{
            ipMessagingV1ServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceUser.class);
                res.ipMessagingV1ServiceUser = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListChannelResponse listChannel(openapisdk.models.operations.ListChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels", request.pathParams);
        
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

        openapisdk.models.operations.ListChannelResponse res = new openapisdk.models.operations.ListChannelResponse() {{
            listChannelResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListChannelListChannelResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListChannelListChannelResponse.class);
                res.listChannelResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListCredentialResponse listCredential(openapisdk.models.operations.ListCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials");
        
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

        openapisdk.models.operations.ListCredentialResponse res = new openapisdk.models.operations.ListCredentialResponse() {{
            listCredentialResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCredentialListCredentialResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCredentialListCredentialResponse.class);
                res.listCredentialResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListInviteResponse listInvite(openapisdk.models.operations.ListInviteRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListInviteRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Invites", request.pathParams);
        
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

        openapisdk.models.operations.ListInviteResponse res = new openapisdk.models.operations.ListInviteResponse() {{
            listInviteResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListInviteListInviteResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListInviteListInviteResponse.class);
                res.listInviteResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListMemberResponse listMember(openapisdk.models.operations.ListMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members", request.pathParams);
        
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

        openapisdk.models.operations.ListMemberResponse res = new openapisdk.models.operations.ListMemberResponse() {{
            listMemberResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMemberListMemberResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMemberListMemberResponse.class);
                res.listMemberResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListMessageResponse listMessage(openapisdk.models.operations.ListMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages", request.pathParams);
        
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

        openapisdk.models.operations.ListMessageResponse res = new openapisdk.models.operations.ListMessageResponse() {{
            listMessageResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMessageListMessageResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMessageListMessageResponse.class);
                res.listMessageResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListRoleResponse listRole(openapisdk.models.operations.ListRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Roles", request.pathParams);
        
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

        openapisdk.models.operations.ListRoleResponse res = new openapisdk.models.operations.ListRoleResponse() {{
            listRoleResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRoleListRoleResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRoleListRoleResponse.class);
                res.listRoleResponse = out;
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
	
	
    public openapisdk.models.operations.ListUserResponse listUser(openapisdk.models.operations.ListUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users", request.pathParams);
        
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

        openapisdk.models.operations.ListUserResponse res = new openapisdk.models.operations.ListUserResponse() {{
            listUserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUserListUserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUserListUserResponse.class);
                res.listUserResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUserChannelResponse listUserChannel(openapisdk.models.operations.ListUserChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUserChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users/{UserSid}/Channels", request.pathParams);
        
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

        openapisdk.models.operations.ListUserChannelResponse res = new openapisdk.models.operations.ListUserChannelResponse() {{
            listUserChannelResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUserChannelListUserChannelResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUserChannelListUserChannelResponse.class);
                res.listUserChannelResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateChannelResponse updateChannel(openapisdk.models.operations.UpdateChannelRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateChannelRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateChannelResponse res = new openapisdk.models.operations.UpdateChannelResponse() {{
            ipMessagingV1ServiceChannel = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannel out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannel.class);
                res.ipMessagingV1ServiceChannel = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateCredentialResponse updateCredential(openapisdk.models.operations.UpdateCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCredentialResponse res = new openapisdk.models.operations.UpdateCredentialResponse() {{
            ipMessagingV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Credential.class);
                res.ipMessagingV1Credential = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateMemberResponse updateMember(openapisdk.models.operations.UpdateMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Members/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMemberResponse res = new openapisdk.models.operations.UpdateMemberResponse() {{
            ipMessagingV1ServiceChannelMember = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMember out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMember.class);
                res.ipMessagingV1ServiceChannelMember = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateMessageResponse updateMessage(openapisdk.models.operations.UpdateMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Channels/{ChannelSid}/Messages/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMessageResponse res = new openapisdk.models.operations.UpdateMessageResponse() {{
            ipMessagingV1ServiceChannelMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceChannelMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceChannelMessage.class);
                res.ipMessagingV1ServiceChannelMessage = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateRoleResponse updateRole(openapisdk.models.operations.UpdateRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoleResponse res = new openapisdk.models.operations.UpdateRoleResponse() {{
            ipMessagingV1ServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceRole.class);
                res.ipMessagingV1ServiceRole = out;
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
            ipMessagingV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1Service.class);
                res.ipMessagingV1Service = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateUserResponse updateUser(openapisdk.models.operations.UpdateUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ServiceSid}/Users/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUserResponse res = new openapisdk.models.operations.UpdateUserResponse() {{
            ipMessagingV1ServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IpMessagingV1ServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IpMessagingV1ServiceUser.class);
                res.ipMessagingV1ServiceUser = out;
            }
        }

        return res;
    }
	
}