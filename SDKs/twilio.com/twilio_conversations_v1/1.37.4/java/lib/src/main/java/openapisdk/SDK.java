

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
		"https://conversations.twilio.com",
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
	
	
    /**
     * createConfigurationAddress - Create a new address configuration
    **/
    public openapisdk.models.operations.CreateConfigurationAddressResponse createConfigurationAddress(openapisdk.models.operations.CreateConfigurationAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConfigurationAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Addresses");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateConfigurationAddressResponse res = new openapisdk.models.operations.CreateConfigurationAddressResponse() {{
            conversationsV1ConfigurationAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConfigurationAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConfigurationAddress.class);
                res.conversationsV1ConfigurationAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * createConversation - Create a new conversation in your account's default service
    **/
    public openapisdk.models.operations.CreateConversationResponse createConversation(openapisdk.models.operations.CreateConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations");
        
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

        openapisdk.models.operations.CreateConversationResponse res = new openapisdk.models.operations.CreateConversationResponse() {{
            conversationsV1Conversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Conversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Conversation.class);
                res.conversationsV1Conversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * createConversationMessage - Add a new message to the conversation
    **/
    public openapisdk.models.operations.CreateConversationMessageResponse createConversationMessage(openapisdk.models.operations.CreateConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages", request.pathParams);
        
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

        openapisdk.models.operations.CreateConversationMessageResponse res = new openapisdk.models.operations.CreateConversationMessageResponse() {{
            conversationsV1ConversationConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationMessage.class);
                res.conversationsV1ConversationConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * createConversationParticipant - Add a new participant to the conversation
    **/
    public openapisdk.models.operations.CreateConversationParticipantResponse createConversationParticipant(openapisdk.models.operations.CreateConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.CreateConversationParticipantResponse res = new openapisdk.models.operations.CreateConversationParticipantResponse() {{
            conversationsV1ConversationConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationParticipant.class);
                res.conversationsV1ConversationConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * createConversationScopedWebhook - Create a new webhook scoped to the conversation
    **/
    public openapisdk.models.operations.CreateConversationScopedWebhookResponse createConversationScopedWebhook(openapisdk.models.operations.CreateConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Webhooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateConversationScopedWebhookResponse res = new openapisdk.models.operations.CreateConversationScopedWebhookResponse() {{
            conversationsV1ConversationConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook.class);
                res.conversationsV1ConversationConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCredential - Add a new push notification credential to your account
    **/
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
            conversationsV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Credential.class);
                res.conversationsV1Credential = out;
            }
        }

        return res;
    }
	
	
    /**
     * createRole - Create a new user role in your account's default service
    **/
    public openapisdk.models.operations.CreateRoleResponse createRole(openapisdk.models.operations.CreateRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Roles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRoleResponse res = new openapisdk.models.operations.CreateRoleResponse() {{
            conversationsV1Role = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Role out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Role.class);
                res.conversationsV1Role = out;
            }
        }

        return res;
    }
	
	
    /**
     * createService - Create a new conversation service on your account
    **/
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
            conversationsV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Service.class);
                res.conversationsV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceConversation - Create a new conversation in your service
    **/
    public openapisdk.models.operations.CreateServiceConversationResponse createServiceConversation(openapisdk.models.operations.CreateServiceConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations", request.pathParams);
        
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

        openapisdk.models.operations.CreateServiceConversationResponse res = new openapisdk.models.operations.CreateServiceConversationResponse() {{
            conversationsV1ServiceServiceConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversation.class);
                res.conversationsV1ServiceServiceConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceConversationMessage - Add a new message to the conversation in a specific service
    **/
    public openapisdk.models.operations.CreateServiceConversationMessageResponse createServiceConversationMessage(openapisdk.models.operations.CreateServiceConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.pathParams);
        
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

        openapisdk.models.operations.CreateServiceConversationMessageResponse res = new openapisdk.models.operations.CreateServiceConversationMessageResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage.class);
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceConversationParticipant - Add a new participant to the conversation in a specific service
    **/
    public openapisdk.models.operations.CreateServiceConversationParticipantResponse createServiceConversationParticipant(openapisdk.models.operations.CreateServiceConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.CreateServiceConversationParticipantResponse res = new openapisdk.models.operations.CreateServiceConversationParticipantResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant.class);
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceConversationScopedWebhook - Create a new webhook scoped to the conversation in a specific service
    **/
    public openapisdk.models.operations.CreateServiceConversationScopedWebhookResponse createServiceConversationScopedWebhook(openapisdk.models.operations.CreateServiceConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateServiceConversationScopedWebhookResponse res = new openapisdk.models.operations.CreateServiceConversationScopedWebhookResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.class);
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceRole - Create a new user role in your service
    **/
    public openapisdk.models.operations.CreateServiceRoleResponse createServiceRole(openapisdk.models.operations.CreateServiceRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Roles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateServiceRoleResponse res = new openapisdk.models.operations.CreateServiceRoleResponse() {{
            conversationsV1ServiceServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceRole.class);
                res.conversationsV1ServiceServiceRole = out;
            }
        }

        return res;
    }
	
	
    /**
     * createServiceUser - Add a new conversation user to your service
    **/
    public openapisdk.models.operations.CreateServiceUserResponse createServiceUser(openapisdk.models.operations.CreateServiceUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users", request.pathParams);
        
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

        openapisdk.models.operations.CreateServiceUserResponse res = new openapisdk.models.operations.CreateServiceUserResponse() {{
            conversationsV1ServiceServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceUser.class);
                res.conversationsV1ServiceServiceUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * createUser - Add a new conversation user to your account's default service
    **/
    public openapisdk.models.operations.CreateUserResponse createUser(openapisdk.models.operations.CreateUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users");
        
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

        openapisdk.models.operations.CreateUserResponse res = new openapisdk.models.operations.CreateUserResponse() {{
            conversationsV1User = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1User out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1User.class);
                res.conversationsV1User = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteConfigurationAddress - Remove an existing address configuration
    **/
    public openapisdk.models.operations.DeleteConfigurationAddressResponse deleteConfigurationAddress(openapisdk.models.operations.DeleteConfigurationAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConfigurationAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Addresses/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConfigurationAddressResponse res = new openapisdk.models.operations.DeleteConfigurationAddressResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConversation - Remove a conversation from your account's default service
    **/
    public openapisdk.models.operations.DeleteConversationResponse deleteConversation(openapisdk.models.operations.DeleteConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteConversationResponse res = new openapisdk.models.operations.DeleteConversationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConversationMessage - Remove a message from the conversation
    **/
    public openapisdk.models.operations.DeleteConversationMessageResponse deleteConversationMessage(openapisdk.models.operations.DeleteConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteConversationMessageResponse res = new openapisdk.models.operations.DeleteConversationMessageResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConversationParticipant - Remove a participant from the conversation
    **/
    public openapisdk.models.operations.DeleteConversationParticipantResponse deleteConversationParticipant(openapisdk.models.operations.DeleteConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteConversationParticipantResponse res = new openapisdk.models.operations.DeleteConversationParticipantResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConversationScopedWebhook - Remove an existing webhook scoped to the conversation
    **/
    public openapisdk.models.operations.DeleteConversationScopedWebhookResponse deleteConversationScopedWebhook(openapisdk.models.operations.DeleteConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConversationScopedWebhookResponse res = new openapisdk.models.operations.DeleteConversationScopedWebhookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCredential - Remove a push notification credential from your account
    **/
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
	
	
    /**
     * deleteRole - Remove a user role from your account's default service
    **/
    public openapisdk.models.operations.DeleteRoleResponse deleteRole(openapisdk.models.operations.DeleteRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Roles/{Sid}", request.pathParams);
        
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
	
	
    /**
     * deleteService - Remove a conversation service with all its nested resources from your account
    **/
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
	
	
    /**
     * deleteServiceBinding - Remove a push notification binding from the conversation service
    **/
    public openapisdk.models.operations.DeleteServiceBindingResponse deleteServiceBinding(openapisdk.models.operations.DeleteServiceBindingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceBindingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceBindingResponse res = new openapisdk.models.operations.DeleteServiceBindingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceConversation - Remove a conversation from your service
    **/
    public openapisdk.models.operations.DeleteServiceConversationResponse deleteServiceConversation(openapisdk.models.operations.DeleteServiceConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteServiceConversationResponse res = new openapisdk.models.operations.DeleteServiceConversationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceConversationMessage - Remove a message from the conversation
    **/
    public openapisdk.models.operations.DeleteServiceConversationMessageResponse deleteServiceConversationMessage(openapisdk.models.operations.DeleteServiceConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteServiceConversationMessageResponse res = new openapisdk.models.operations.DeleteServiceConversationMessageResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceConversationParticipant - Remove a participant from the conversation
    **/
    public openapisdk.models.operations.DeleteServiceConversationParticipantResponse deleteServiceConversationParticipant(openapisdk.models.operations.DeleteServiceConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteServiceConversationParticipantResponse res = new openapisdk.models.operations.DeleteServiceConversationParticipantResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceConversationScopedWebhook - Remove an existing webhook scoped to the conversation
    **/
    public openapisdk.models.operations.DeleteServiceConversationScopedWebhookResponse deleteServiceConversationScopedWebhook(openapisdk.models.operations.DeleteServiceConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceConversationScopedWebhookResponse res = new openapisdk.models.operations.DeleteServiceConversationScopedWebhookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceRole - Remove a user role from your service
    **/
    public openapisdk.models.operations.DeleteServiceRoleResponse deleteServiceRole(openapisdk.models.operations.DeleteServiceRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceRoleResponse res = new openapisdk.models.operations.DeleteServiceRoleResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceUser - Remove a conversation user from your service
    **/
    public openapisdk.models.operations.DeleteServiceUserResponse deleteServiceUser(openapisdk.models.operations.DeleteServiceUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteServiceUserResponse res = new openapisdk.models.operations.DeleteServiceUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteServiceUserConversation - Delete a specific User Conversation.
    **/
    public openapisdk.models.operations.DeleteServiceUserConversationResponse deleteServiceUserConversation(openapisdk.models.operations.DeleteServiceUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteServiceUserConversationResponse res = new openapisdk.models.operations.DeleteServiceUserConversationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteUser - Remove a conversation user from your account's default service
    **/
    public openapisdk.models.operations.DeleteUserResponse deleteUser(openapisdk.models.operations.DeleteUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteUserResponse res = new openapisdk.models.operations.DeleteUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteUserConversation - Delete a specific User Conversation.
    **/
    public openapisdk.models.operations.DeleteUserConversationResponse deleteUserConversation(openapisdk.models.operations.DeleteUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserConversationResponse res = new openapisdk.models.operations.DeleteUserConversationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchConfiguration - Fetch the global configuration of conversations on your account
    **/
    public openapisdk.models.operations.FetchConfigurationResponse fetchConfiguration(openapisdk.models.operations.FetchConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConfigurationResponse res = new openapisdk.models.operations.FetchConfigurationResponse() {{
            conversationsV1Configuration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Configuration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Configuration.class);
                res.conversationsV1Configuration = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConfigurationAddress - Fetch an address configuration 
    **/
    public openapisdk.models.operations.FetchConfigurationAddressResponse fetchConfigurationAddress(openapisdk.models.operations.FetchConfigurationAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConfigurationAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Addresses/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConfigurationAddressResponse res = new openapisdk.models.operations.FetchConfigurationAddressResponse() {{
            conversationsV1ConfigurationAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConfigurationAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConfigurationAddress.class);
                res.conversationsV1ConfigurationAddress = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchConfigurationWebhookResponse fetchConfigurationWebhook(openapisdk.models.operations.FetchConfigurationWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConfigurationWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Webhooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConfigurationWebhookResponse res = new openapisdk.models.operations.FetchConfigurationWebhookResponse() {{
            conversationsV1ConfigurationConfigurationWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook.class);
                res.conversationsV1ConfigurationConfigurationWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConversation - Fetch a conversation from your account's default service
    **/
    public openapisdk.models.operations.FetchConversationResponse fetchConversation(openapisdk.models.operations.FetchConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConversationResponse res = new openapisdk.models.operations.FetchConversationResponse() {{
            conversationsV1Conversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Conversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Conversation.class);
                res.conversationsV1Conversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConversationMessage - Fetch a message from the conversation
    **/
    public openapisdk.models.operations.FetchConversationMessageResponse fetchConversationMessage(openapisdk.models.operations.FetchConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConversationMessageResponse res = new openapisdk.models.operations.FetchConversationMessageResponse() {{
            conversationsV1ConversationConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationMessage.class);
                res.conversationsV1ConversationConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
    **/
    public openapisdk.models.operations.FetchConversationMessageReceiptResponse fetchConversationMessageReceipt(openapisdk.models.operations.FetchConversationMessageReceiptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConversationMessageReceiptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConversationMessageReceiptResponse res = new openapisdk.models.operations.FetchConversationMessageReceiptResponse() {{
            conversationsV1ConversationConversationMessageConversationMessageReceipt = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationMessageConversationMessageReceipt.class);
                res.conversationsV1ConversationConversationMessageConversationMessageReceipt = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConversationParticipant - Fetch a participant of the conversation
    **/
    public openapisdk.models.operations.FetchConversationParticipantResponse fetchConversationParticipant(openapisdk.models.operations.FetchConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConversationParticipantResponse res = new openapisdk.models.operations.FetchConversationParticipantResponse() {{
            conversationsV1ConversationConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationParticipant.class);
                res.conversationsV1ConversationConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
    **/
    public openapisdk.models.operations.FetchConversationScopedWebhookResponse fetchConversationScopedWebhook(openapisdk.models.operations.FetchConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConversationScopedWebhookResponse res = new openapisdk.models.operations.FetchConversationScopedWebhookResponse() {{
            conversationsV1ConversationConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook.class);
                res.conversationsV1ConversationConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCredential - Fetch a push notification credential from your account
    **/
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
            conversationsV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Credential.class);
                res.conversationsV1Credential = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRole - Fetch a user role from your account's default service
    **/
    public openapisdk.models.operations.FetchRoleResponse fetchRole(openapisdk.models.operations.FetchRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRoleResponse res = new openapisdk.models.operations.FetchRoleResponse() {{
            conversationsV1Role = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Role out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Role.class);
                res.conversationsV1Role = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchService - Fetch a conversation service from your account
    **/
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
            conversationsV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Service.class);
                res.conversationsV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceBinding - Fetch a push notification binding from the conversation service
    **/
    public openapisdk.models.operations.FetchServiceBindingResponse fetchServiceBinding(openapisdk.models.operations.FetchServiceBindingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceBindingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Bindings/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceBindingResponse res = new openapisdk.models.operations.FetchServiceBindingResponse() {{
            conversationsV1ServiceServiceBinding = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceBinding out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceBinding.class);
                res.conversationsV1ServiceServiceBinding = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConfiguration - Fetch the configuration of a conversation service
    **/
    public openapisdk.models.operations.FetchServiceConfigurationResponse fetchServiceConfiguration(openapisdk.models.operations.FetchServiceConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConfigurationResponse res = new openapisdk.models.operations.FetchServiceConfigurationResponse() {{
            conversationsV1ServiceServiceConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration.class);
                res.conversationsV1ServiceServiceConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConversation - Fetch a conversation from your service
    **/
    public openapisdk.models.operations.FetchServiceConversationResponse fetchServiceConversation(openapisdk.models.operations.FetchServiceConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConversationResponse res = new openapisdk.models.operations.FetchServiceConversationResponse() {{
            conversationsV1ServiceServiceConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversation.class);
                res.conversationsV1ServiceServiceConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConversationMessage - Fetch a message from the conversation
    **/
    public openapisdk.models.operations.FetchServiceConversationMessageResponse fetchServiceConversationMessage(openapisdk.models.operations.FetchServiceConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConversationMessageResponse res = new openapisdk.models.operations.FetchServiceConversationMessageResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage.class);
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
    **/
    public openapisdk.models.operations.FetchServiceConversationMessageReceiptResponse fetchServiceConversationMessageReceipt(openapisdk.models.operations.FetchServiceConversationMessageReceiptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConversationMessageReceiptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConversationMessageReceiptResponse res = new openapisdk.models.operations.FetchServiceConversationMessageReceiptResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt.class);
                res.conversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConversationParticipant - Fetch a participant of the conversation
    **/
    public openapisdk.models.operations.FetchServiceConversationParticipantResponse fetchServiceConversationParticipant(openapisdk.models.operations.FetchServiceConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConversationParticipantResponse res = new openapisdk.models.operations.FetchServiceConversationParticipantResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant.class);
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
    **/
    public openapisdk.models.operations.FetchServiceConversationScopedWebhookResponse fetchServiceConversationScopedWebhook(openapisdk.models.operations.FetchServiceConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceConversationScopedWebhookResponse res = new openapisdk.models.operations.FetchServiceConversationScopedWebhookResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.class);
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceNotification - Fetch push notification service settings
    **/
    public openapisdk.models.operations.FetchServiceNotificationResponse fetchServiceNotification(openapisdk.models.operations.FetchServiceNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceNotificationResponse res = new openapisdk.models.operations.FetchServiceNotificationResponse() {{
            conversationsV1ServiceServiceConfigurationServiceNotification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification.class);
                res.conversationsV1ServiceServiceConfigurationServiceNotification = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceRole - Fetch a user role from your service
    **/
    public openapisdk.models.operations.FetchServiceRoleResponse fetchServiceRole(openapisdk.models.operations.FetchServiceRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceRoleResponse res = new openapisdk.models.operations.FetchServiceRoleResponse() {{
            conversationsV1ServiceServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceRole.class);
                res.conversationsV1ServiceServiceRole = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceUser - Fetch a conversation user from your service
    **/
    public openapisdk.models.operations.FetchServiceUserResponse fetchServiceUser(openapisdk.models.operations.FetchServiceUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceUserResponse res = new openapisdk.models.operations.FetchServiceUserResponse() {{
            conversationsV1ServiceServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceUser.class);
                res.conversationsV1ServiceServiceUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceUserConversation - Fetch a specific User Conversation.
    **/
    public openapisdk.models.operations.FetchServiceUserConversationResponse fetchServiceUserConversation(openapisdk.models.operations.FetchServiceUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceUserConversationResponse res = new openapisdk.models.operations.FetchServiceUserConversationResponse() {{
            conversationsV1ServiceServiceUserServiceUserConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation.class);
                res.conversationsV1ServiceServiceUserServiceUserConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchServiceWebhookConfiguration - Fetch a specific service webhook configuration.
    **/
    public openapisdk.models.operations.FetchServiceWebhookConfigurationResponse fetchServiceWebhookConfiguration(openapisdk.models.operations.FetchServiceWebhookConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceWebhookConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceWebhookConfigurationResponse res = new openapisdk.models.operations.FetchServiceWebhookConfigurationResponse() {{
            conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.class);
                res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUser - Fetch a conversation user from your account's default service
    **/
    public openapisdk.models.operations.FetchUserResponse fetchUser(openapisdk.models.operations.FetchUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUserResponse res = new openapisdk.models.operations.FetchUserResponse() {{
            conversationsV1User = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1User out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1User.class);
                res.conversationsV1User = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUserConversation - Fetch a specific User Conversation.
    **/
    public openapisdk.models.operations.FetchUserConversationResponse fetchUserConversation(openapisdk.models.operations.FetchUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUserConversationResponse res = new openapisdk.models.operations.FetchUserConversationResponse() {{
            conversationsV1UserUserConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1UserUserConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1UserUserConversation.class);
                res.conversationsV1UserUserConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConfigurationAddress - Retrieve a list of address configurations for an account
    **/
    public openapisdk.models.operations.ListConfigurationAddressResponse listConfigurationAddress(openapisdk.models.operations.ListConfigurationAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConfigurationAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Addresses");
        
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

        openapisdk.models.operations.ListConfigurationAddressResponse res = new openapisdk.models.operations.ListConfigurationAddressResponse() {{
            listConfigurationAddressResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConfigurationAddressListConfigurationAddressResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConfigurationAddressListConfigurationAddressResponse.class);
                res.listConfigurationAddressResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConversation - Retrieve a list of conversations in your account's default service
    **/
    public openapisdk.models.operations.ListConversationResponse listConversation(openapisdk.models.operations.ListConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations");
        
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

        openapisdk.models.operations.ListConversationResponse res = new openapisdk.models.operations.ListConversationResponse() {{
            listConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConversationListConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConversationListConversationResponse.class);
                res.listConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConversationMessage - Retrieve a list of all messages in the conversation
    **/
    public openapisdk.models.operations.ListConversationMessageResponse listConversationMessage(openapisdk.models.operations.ListConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages", request.pathParams);
        
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

        openapisdk.models.operations.ListConversationMessageResponse res = new openapisdk.models.operations.ListConversationMessageResponse() {{
            listConversationMessageResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConversationMessageListConversationMessageResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConversationMessageListConversationMessageResponse.class);
                res.listConversationMessageResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
    **/
    public openapisdk.models.operations.ListConversationMessageReceiptResponse listConversationMessageReceipt(openapisdk.models.operations.ListConversationMessageReceiptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConversationMessageReceiptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.pathParams);
        
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

        openapisdk.models.operations.ListConversationMessageReceiptResponse res = new openapisdk.models.operations.ListConversationMessageReceiptResponse() {{
            listConversationMessageReceiptResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConversationMessageReceiptListConversationMessageReceiptResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConversationMessageReceiptListConversationMessageReceiptResponse.class);
                res.listConversationMessageReceiptResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConversationParticipant - Retrieve a list of all participants of the conversation
    **/
    public openapisdk.models.operations.ListConversationParticipantResponse listConversationParticipant(openapisdk.models.operations.ListConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.ListConversationParticipantResponse res = new openapisdk.models.operations.ListConversationParticipantResponse() {{
            listConversationParticipantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConversationParticipantListConversationParticipantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConversationParticipantListConversationParticipantResponse.class);
                res.listConversationParticipantResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
    **/
    public openapisdk.models.operations.ListConversationScopedWebhookResponse listConversationScopedWebhook(openapisdk.models.operations.ListConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Webhooks", request.pathParams);
        
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

        openapisdk.models.operations.ListConversationScopedWebhookResponse res = new openapisdk.models.operations.ListConversationScopedWebhookResponse() {{
            listConversationScopedWebhookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConversationScopedWebhookListConversationScopedWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConversationScopedWebhookListConversationScopedWebhookResponse.class);
                res.listConversationScopedWebhookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCredential - Retrieve a list of all push notification credentials on your account
    **/
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
	
	
    /**
     * listParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
    **/
    public openapisdk.models.operations.ListParticipantConversationResponse listParticipantConversation(openapisdk.models.operations.ListParticipantConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListParticipantConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ParticipantConversations");
        
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

        openapisdk.models.operations.ListParticipantConversationResponse res = new openapisdk.models.operations.ListParticipantConversationResponse() {{
            listParticipantConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListParticipantConversationListParticipantConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListParticipantConversationListParticipantConversationResponse.class);
                res.listParticipantConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRole - Retrieve a list of all user roles in your account's default service
    **/
    public openapisdk.models.operations.ListRoleResponse listRole(openapisdk.models.operations.ListRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Roles");
        
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
	
	
    /**
     * listService - Retrieve a list of all conversation services on your account
    **/
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
	
	
    /**
     * listServiceBinding - Retrieve a list of all push notification bindings in the conversation service
    **/
    public openapisdk.models.operations.ListServiceBindingResponse listServiceBinding(openapisdk.models.operations.ListServiceBindingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceBindingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Bindings", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceBindingResponse res = new openapisdk.models.operations.ListServiceBindingResponse() {{
            listServiceBindingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceBindingListServiceBindingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceBindingListServiceBindingResponse.class);
                res.listServiceBindingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceConversation - Retrieve a list of conversations in your service
    **/
    public openapisdk.models.operations.ListServiceConversationResponse listServiceConversation(openapisdk.models.operations.ListServiceConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceConversationResponse res = new openapisdk.models.operations.ListServiceConversationResponse() {{
            listServiceConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceConversationListServiceConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceConversationListServiceConversationResponse.class);
                res.listServiceConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceConversationMessage - Retrieve a list of all messages in the conversation
    **/
    public openapisdk.models.operations.ListServiceConversationMessageResponse listServiceConversationMessage(openapisdk.models.operations.ListServiceConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceConversationMessageResponse res = new openapisdk.models.operations.ListServiceConversationMessageResponse() {{
            listServiceConversationMessageResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceConversationMessageListServiceConversationMessageResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceConversationMessageListServiceConversationMessageResponse.class);
                res.listServiceConversationMessageResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
    **/
    public openapisdk.models.operations.ListServiceConversationMessageReceiptResponse listServiceConversationMessageReceipt(openapisdk.models.operations.ListServiceConversationMessageReceiptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceConversationMessageReceiptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceConversationMessageReceiptResponse res = new openapisdk.models.operations.ListServiceConversationMessageReceiptResponse() {{
            listServiceConversationMessageReceiptResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse.class);
                res.listServiceConversationMessageReceiptResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceConversationParticipant - Retrieve a list of all participants of the conversation
    **/
    public openapisdk.models.operations.ListServiceConversationParticipantResponse listServiceConversationParticipant(openapisdk.models.operations.ListServiceConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceConversationParticipantResponse res = new openapisdk.models.operations.ListServiceConversationParticipantResponse() {{
            listServiceConversationParticipantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceConversationParticipantListServiceConversationParticipantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceConversationParticipantListServiceConversationParticipantResponse.class);
                res.listServiceConversationParticipantResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
    **/
    public openapisdk.models.operations.ListServiceConversationScopedWebhookResponse listServiceConversationScopedWebhook(openapisdk.models.operations.ListServiceConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceConversationScopedWebhookResponse res = new openapisdk.models.operations.ListServiceConversationScopedWebhookResponse() {{
            listServiceConversationScopedWebhookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceConversationScopedWebhookListServiceConversationScopedWebhookResponse.class);
                res.listServiceConversationScopedWebhookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
    **/
    public openapisdk.models.operations.ListServiceParticipantConversationResponse listServiceParticipantConversation(openapisdk.models.operations.ListServiceParticipantConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceParticipantConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/ParticipantConversations", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceParticipantConversationResponse res = new openapisdk.models.operations.ListServiceParticipantConversationResponse() {{
            listServiceParticipantConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceParticipantConversationListServiceParticipantConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceParticipantConversationListServiceParticipantConversationResponse.class);
                res.listServiceParticipantConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceRole - Retrieve a list of all user roles in your service
    **/
    public openapisdk.models.operations.ListServiceRoleResponse listServiceRole(openapisdk.models.operations.ListServiceRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Roles", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceRoleResponse res = new openapisdk.models.operations.ListServiceRoleResponse() {{
            listServiceRoleResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceRoleListServiceRoleResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceRoleListServiceRoleResponse.class);
                res.listServiceRoleResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceUser - Retrieve a list of all conversation users in your service
    **/
    public openapisdk.models.operations.ListServiceUserResponse listServiceUser(openapisdk.models.operations.ListServiceUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceUserResponse res = new openapisdk.models.operations.ListServiceUserResponse() {{
            listServiceUserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceUserListServiceUserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceUserListServiceUserResponse.class);
                res.listServiceUserResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listServiceUserConversation - Retrieve a list of all User Conversations for the User.
    **/
    public openapisdk.models.operations.ListServiceUserConversationResponse listServiceUserConversation(openapisdk.models.operations.ListServiceUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations", request.pathParams);
        
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

        openapisdk.models.operations.ListServiceUserConversationResponse res = new openapisdk.models.operations.ListServiceUserConversationResponse() {{
            listServiceUserConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListServiceUserConversationListServiceUserConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListServiceUserConversationListServiceUserConversationResponse.class);
                res.listServiceUserConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listUser - Retrieve a list of all conversation users in your account's default service
    **/
    public openapisdk.models.operations.ListUserResponse listUser(openapisdk.models.operations.ListUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users");
        
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
	
	
    /**
     * listUserConversation - Retrieve a list of all User Conversations for the User.
    **/
    public openapisdk.models.operations.ListUserConversationResponse listUserConversation(openapisdk.models.operations.ListUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{UserSid}/Conversations", request.pathParams);
        
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

        openapisdk.models.operations.ListUserConversationResponse res = new openapisdk.models.operations.ListUserConversationResponse() {{
            listUserConversationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUserConversationListUserConversationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUserConversationListUserConversationResponse.class);
                res.listUserConversationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConfiguration - Update the global configuration of conversations on your account
    **/
    public openapisdk.models.operations.UpdateConfigurationResponse updateConfiguration(openapisdk.models.operations.UpdateConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConfigurationResponse res = new openapisdk.models.operations.UpdateConfigurationResponse() {{
            conversationsV1Configuration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Configuration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Configuration.class);
                res.conversationsV1Configuration = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConfigurationAddress - Update an existing address configuration
    **/
    public openapisdk.models.operations.UpdateConfigurationAddressResponse updateConfigurationAddress(openapisdk.models.operations.UpdateConfigurationAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConfigurationAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Addresses/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConfigurationAddressResponse res = new openapisdk.models.operations.UpdateConfigurationAddressResponse() {{
            conversationsV1ConfigurationAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConfigurationAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConfigurationAddress.class);
                res.conversationsV1ConfigurationAddress = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateConfigurationWebhookResponse updateConfigurationWebhook(openapisdk.models.operations.UpdateConfigurationWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConfigurationWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Configuration/Webhooks");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConfigurationWebhookResponse res = new openapisdk.models.operations.UpdateConfigurationWebhookResponse() {{
            conversationsV1ConfigurationConfigurationWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConfigurationConfigurationWebhook.class);
                res.conversationsV1ConfigurationConfigurationWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConversation - Update an existing conversation in your account's default service
    **/
    public openapisdk.models.operations.UpdateConversationResponse updateConversation(openapisdk.models.operations.UpdateConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateConversationResponse res = new openapisdk.models.operations.UpdateConversationResponse() {{
            conversationsV1Conversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Conversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Conversation.class);
                res.conversationsV1Conversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConversationMessage - Update an existing message in the conversation
    **/
    public openapisdk.models.operations.UpdateConversationMessageResponse updateConversationMessage(openapisdk.models.operations.UpdateConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateConversationMessageResponse res = new openapisdk.models.operations.UpdateConversationMessageResponse() {{
            conversationsV1ConversationConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationMessage.class);
                res.conversationsV1ConversationConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConversationParticipant - Update an existing participant in the conversation
    **/
    public openapisdk.models.operations.UpdateConversationParticipantResponse updateConversationParticipant(openapisdk.models.operations.UpdateConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateConversationParticipantResponse res = new openapisdk.models.operations.UpdateConversationParticipantResponse() {{
            conversationsV1ConversationConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationParticipant.class);
                res.conversationsV1ConversationConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConversationScopedWebhook - Update an existing conversation-scoped webhook
    **/
    public openapisdk.models.operations.UpdateConversationScopedWebhookResponse updateConversationScopedWebhook(openapisdk.models.operations.UpdateConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConversationScopedWebhookResponse res = new openapisdk.models.operations.UpdateConversationScopedWebhookResponse() {{
            conversationsV1ConversationConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ConversationConversationScopedWebhook.class);
                res.conversationsV1ConversationConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCredential - Update an existing push notification credential on your account
    **/
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
            conversationsV1Credential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Credential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Credential.class);
                res.conversationsV1Credential = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRole - Update an existing user role in your account's default service
    **/
    public openapisdk.models.operations.UpdateRoleResponse updateRole(openapisdk.models.operations.UpdateRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoleResponse res = new openapisdk.models.operations.UpdateRoleResponse() {{
            conversationsV1Role = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1Role out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1Role.class);
                res.conversationsV1Role = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceConfiguration - Update configuration settings of a conversation service
    **/
    public openapisdk.models.operations.UpdateServiceConfigurationResponse updateServiceConfiguration(openapisdk.models.operations.UpdateServiceConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceConfigurationResponse res = new openapisdk.models.operations.UpdateServiceConfigurationResponse() {{
            conversationsV1ServiceServiceConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfiguration.class);
                res.conversationsV1ServiceServiceConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceConversation - Update an existing conversation in your service
    **/
    public openapisdk.models.operations.UpdateServiceConversationResponse updateServiceConversation(openapisdk.models.operations.UpdateServiceConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateServiceConversationResponse res = new openapisdk.models.operations.UpdateServiceConversationResponse() {{
            conversationsV1ServiceServiceConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversation.class);
                res.conversationsV1ServiceServiceConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceConversationMessage - Update an existing message in the conversation
    **/
    public openapisdk.models.operations.UpdateServiceConversationMessageResponse updateServiceConversationMessage(openapisdk.models.operations.UpdateServiceConversationMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceConversationMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateServiceConversationMessageResponse res = new openapisdk.models.operations.UpdateServiceConversationMessageResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationMessage.class);
                res.conversationsV1ServiceServiceConversationServiceConversationMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceConversationParticipant - Update an existing participant in the conversation
    **/
    public openapisdk.models.operations.UpdateServiceConversationParticipantResponse updateServiceConversationParticipant(openapisdk.models.operations.UpdateServiceConversationParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceConversationParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateServiceConversationParticipantResponse res = new openapisdk.models.operations.UpdateServiceConversationParticipantResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationParticipant.class);
                res.conversationsV1ServiceServiceConversationServiceConversationParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceConversationScopedWebhook - Update an existing conversation-scoped webhook
    **/
    public openapisdk.models.operations.UpdateServiceConversationScopedWebhookResponse updateServiceConversationScopedWebhook(openapisdk.models.operations.UpdateServiceConversationScopedWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceConversationScopedWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceConversationScopedWebhookResponse res = new openapisdk.models.operations.UpdateServiceConversationScopedWebhookResponse() {{
            conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook.class);
                res.conversationsV1ServiceServiceConversationServiceConversationScopedWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceNotification - Update push notification service settings
    **/
    public openapisdk.models.operations.UpdateServiceNotificationResponse updateServiceNotification(openapisdk.models.operations.UpdateServiceNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration/Notifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceNotificationResponse res = new openapisdk.models.operations.UpdateServiceNotificationResponse() {{
            conversationsV1ServiceServiceConfigurationServiceNotification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceNotification.class);
                res.conversationsV1ServiceServiceConfigurationServiceNotification = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceRole - Update an existing user role in your service
    **/
    public openapisdk.models.operations.UpdateServiceRoleResponse updateServiceRole(openapisdk.models.operations.UpdateServiceRoleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceRoleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Roles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceRoleResponse res = new openapisdk.models.operations.UpdateServiceRoleResponse() {{
            conversationsV1ServiceServiceRole = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceRole out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceRole.class);
                res.conversationsV1ServiceServiceRole = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceUser - Update an existing conversation user in your service
    **/
    public openapisdk.models.operations.UpdateServiceUserResponse updateServiceUser(openapisdk.models.operations.UpdateServiceUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateServiceUserResponse res = new openapisdk.models.operations.UpdateServiceUserResponse() {{
            conversationsV1ServiceServiceUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceUser.class);
                res.conversationsV1ServiceServiceUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceUserConversation - Update a specific User Conversation.
    **/
    public openapisdk.models.operations.UpdateServiceUserConversationResponse updateServiceUserConversation(openapisdk.models.operations.UpdateServiceUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceUserConversationResponse res = new openapisdk.models.operations.UpdateServiceUserConversationResponse() {{
            conversationsV1ServiceServiceUserServiceUserConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceUserServiceUserConversation.class);
                res.conversationsV1ServiceServiceUserServiceUserConversation = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateServiceWebhookConfiguration - Update a specific Webhook.
    **/
    public openapisdk.models.operations.UpdateServiceWebhookConfigurationResponse updateServiceWebhookConfiguration(openapisdk.models.operations.UpdateServiceWebhookConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceWebhookConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Services/{ChatServiceSid}/Configuration/Webhooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceWebhookConfigurationResponse res = new openapisdk.models.operations.UpdateServiceWebhookConfigurationResponse() {{
            conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration.class);
                res.conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateUser - Update an existing conversation user in your account's default service
    **/
    public openapisdk.models.operations.UpdateUserResponse updateUser(openapisdk.models.operations.UpdateUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{Sid}", request.pathParams);
        
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

        openapisdk.models.operations.UpdateUserResponse res = new openapisdk.models.operations.UpdateUserResponse() {{
            conversationsV1User = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1User out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1User.class);
                res.conversationsV1User = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateUserConversation - Update a specific User Conversation.
    **/
    public openapisdk.models.operations.UpdateUserConversationResponse updateUserConversation(openapisdk.models.operations.UpdateUserConversationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUserConversationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Users/{UserSid}/Conversations/{ConversationSid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUserConversationResponse res = new openapisdk.models.operations.UpdateUserConversationResponse() {{
            conversationsV1UserUserConversation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ConversationsV1UserUserConversation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ConversationsV1UserUserConversation.class);
                res.conversationsV1UserUserConversation = out;
            }
        }

        return res;
    }
	
}