

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
		"https://verify.twilio.com",
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
     * createAccessToken - Create a new enrollment Access Token for the Entity
    **/
    public openapisdk.models.operations.CreateAccessTokenResponse createAccessToken(openapisdk.models.operations.CreateAccessTokenRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateAccessTokenRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/AccessTokens", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateAccessTokenResponse res = new openapisdk.models.operations.CreateAccessTokenResponse() {{
            verifyV2ServiceAccessToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceAccessToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceAccessToken.class);
                res.verifyV2ServiceAccessToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * createBucket - Create a new Bucket for a Rate Limit
    **/
    public openapisdk.models.operations.CreateBucketResponse createBucket(openapisdk.models.operations.CreateBucketRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateBucketRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateBucketResponse res = new openapisdk.models.operations.CreateBucketResponse() {{
            verifyV2ServiceRateLimitBucket = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimitBucket out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimitBucket.class);
                res.verifyV2ServiceRateLimitBucket = out;
            }
        }

        return res;
    }
	
	
    /**
     * createChallenge - Create a new Challenge for the Factor
    **/
    public openapisdk.models.operations.CreateChallengeResponse createChallenge(openapisdk.models.operations.CreateChallengeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateChallengeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateChallengeResponse res = new openapisdk.models.operations.CreateChallengeResponse() {{
            verifyV2ServiceEntityChallenge = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityChallenge out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityChallenge.class);
                res.verifyV2ServiceEntityChallenge = out;
            }
        }

        return res;
    }
	
	
    /**
     * createEntity - Create a new Entity for the Service
    **/
    public openapisdk.models.operations.CreateEntityResponse createEntity(openapisdk.models.operations.CreateEntityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEntityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEntityResponse res = new openapisdk.models.operations.CreateEntityResponse() {{
            verifyV2ServiceEntity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntity.class);
                res.verifyV2ServiceEntity = out;
            }
        }

        return res;
    }
	
	
    /**
     * createMessagingConfiguration - Create a new MessagingConfiguration for a service.
    **/
    public openapisdk.models.operations.CreateMessagingConfigurationResponse createMessagingConfiguration(openapisdk.models.operations.CreateMessagingConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMessagingConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMessagingConfigurationResponse res = new openapisdk.models.operations.CreateMessagingConfigurationResponse() {{
            verifyV2ServiceMessagingConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration.class);
                res.verifyV2ServiceMessagingConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNewFactor - Create a new Factor for the Entity
    **/
    public openapisdk.models.operations.CreateNewFactorResponse createNewFactor(openapisdk.models.operations.CreateNewFactorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNewFactorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNewFactorResponse res = new openapisdk.models.operations.CreateNewFactorResponse() {{
            verifyV2ServiceEntityNewFactor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityNewFactor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityNewFactor.class);
                res.verifyV2ServiceEntityNewFactor = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNotification - Create a new Notification for the corresponding Challenge
    **/
    public openapisdk.models.operations.CreateNotificationResponse createNotification(openapisdk.models.operations.CreateNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{ChallengeSid}/Notifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNotificationResponse res = new openapisdk.models.operations.CreateNotificationResponse() {{
            verifyV2ServiceEntityChallengeNotification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityChallengeNotification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityChallengeNotification.class);
                res.verifyV2ServiceEntityChallengeNotification = out;
            }
        }

        return res;
    }
	
	
    /**
     * createRateLimit - Create a new Rate Limit for a Service
    **/
    public openapisdk.models.operations.CreateRateLimitResponse createRateLimit(openapisdk.models.operations.CreateRateLimitRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateRateLimitRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateRateLimitResponse res = new openapisdk.models.operations.CreateRateLimitResponse() {{
            verifyV2ServiceRateLimit = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimit out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimit.class);
                res.verifyV2ServiceRateLimit = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSafelist - Add a new phone number to SafeList.
    **/
    public openapisdk.models.operations.CreateSafelistResponse createSafelist(openapisdk.models.operations.CreateSafelistRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSafelistRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/SafeList/Numbers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSafelistResponse res = new openapisdk.models.operations.CreateSafelistResponse() {{
            verifyV2Safelist = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Safelist out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Safelist.class);
                res.verifyV2Safelist = out;
            }
        }

        return res;
    }
	
	
    /**
     * createService - Create a new Verification Service.
    **/
    public openapisdk.models.operations.CreateServiceResponse createService(openapisdk.models.operations.CreateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateServiceResponse res = new openapisdk.models.operations.CreateServiceResponse() {{
            verifyV2Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Service.class);
                res.verifyV2Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * createVerification - Create a new Verification using a Service
    **/
    public openapisdk.models.operations.CreateVerificationResponse createVerification(openapisdk.models.operations.CreateVerificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateVerificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Verifications", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateVerificationResponse res = new openapisdk.models.operations.CreateVerificationResponse() {{
            verifyV2ServiceVerification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceVerification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceVerification.class);
                res.verifyV2ServiceVerification = out;
            }
        }

        return res;
    }
	
	
    /**
     * createVerificationCheck - challenge a specific Verification Check.
    **/
    public openapisdk.models.operations.CreateVerificationCheckResponse createVerificationCheck(openapisdk.models.operations.CreateVerificationCheckRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateVerificationCheckRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/VerificationCheck", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateVerificationCheckResponse res = new openapisdk.models.operations.CreateVerificationCheckResponse() {{
            verifyV2ServiceVerificationCheck = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceVerificationCheck out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceVerificationCheck.class);
                res.verifyV2ServiceVerificationCheck = out;
            }
        }

        return res;
    }
	
	
    /**
     * createWebhook - Create a new Webhook for the Service
    **/
    public openapisdk.models.operations.CreateWebhookResponse createWebhook(openapisdk.models.operations.CreateWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Webhooks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateWebhookResponse res = new openapisdk.models.operations.CreateWebhookResponse() {{
            verifyV2ServiceWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceWebhook.class);
                res.verifyV2ServiceWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteBucket - Delete a specific Bucket.
    **/
    public openapisdk.models.operations.DeleteBucketResponse deleteBucket(openapisdk.models.operations.DeleteBucketRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteBucketRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteBucketResponse res = new openapisdk.models.operations.DeleteBucketResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteEntity - Delete a specific Entity.
    **/
    public openapisdk.models.operations.DeleteEntityResponse deleteEntity(openapisdk.models.operations.DeleteEntityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteEntityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEntityResponse res = new openapisdk.models.operations.DeleteEntityResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteFactor - Delete a specific Factor.
    **/
    public openapisdk.models.operations.DeleteFactorResponse deleteFactor(openapisdk.models.operations.DeleteFactorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteFactorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteFactorResponse res = new openapisdk.models.operations.DeleteFactorResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteMessagingConfiguration - Delete a specific MessagingConfiguration.
    **/
    public openapisdk.models.operations.DeleteMessagingConfigurationResponse deleteMessagingConfiguration(openapisdk.models.operations.DeleteMessagingConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMessagingConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMessagingConfigurationResponse res = new openapisdk.models.operations.DeleteMessagingConfigurationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRateLimit - Delete a specific Rate Limit.
    **/
    public openapisdk.models.operations.DeleteRateLimitResponse deleteRateLimit(openapisdk.models.operations.DeleteRateLimitRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRateLimitRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRateLimitResponse res = new openapisdk.models.operations.DeleteRateLimitResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSafelist - Remove a phone number from SafeList.
    **/
    public openapisdk.models.operations.DeleteSafelistResponse deleteSafelist(openapisdk.models.operations.DeleteSafelistRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSafelistRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/SafeList/Numbers/{PhoneNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSafelistResponse res = new openapisdk.models.operations.DeleteSafelistResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteService - Delete a specific Verification Service Instance.
    **/
    public openapisdk.models.operations.DeleteServiceResponse deleteService(openapisdk.models.operations.DeleteServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{Sid}", request.pathParams);
        
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
     * deleteWebhook - Delete a specific Webhook.
    **/
    public openapisdk.models.operations.DeleteWebhookResponse deleteWebhook(openapisdk.models.operations.DeleteWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteWebhookResponse res = new openapisdk.models.operations.DeleteWebhookResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchAccessToken - Fetch an Access Token for the Entity
    **/
    public openapisdk.models.operations.FetchAccessTokenResponse fetchAccessToken(openapisdk.models.operations.FetchAccessTokenRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAccessTokenRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/AccessTokens/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAccessTokenResponse res = new openapisdk.models.operations.FetchAccessTokenResponse() {{
            verifyV2ServiceAccessToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceAccessToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceAccessToken.class);
                res.verifyV2ServiceAccessToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchBucket - Fetch a specific Bucket.
    **/
    public openapisdk.models.operations.FetchBucketResponse fetchBucket(openapisdk.models.operations.FetchBucketRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchBucketRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchBucketResponse res = new openapisdk.models.operations.FetchBucketResponse() {{
            verifyV2ServiceRateLimitBucket = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimitBucket out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimitBucket.class);
                res.verifyV2ServiceRateLimitBucket = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchChallenge - Fetch a specific Challenge.
    **/
    public openapisdk.models.operations.FetchChallengeResponse fetchChallenge(openapisdk.models.operations.FetchChallengeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchChallengeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchChallengeResponse res = new openapisdk.models.operations.FetchChallengeResponse() {{
            verifyV2ServiceEntityChallenge = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityChallenge out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityChallenge.class);
                res.verifyV2ServiceEntityChallenge = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEntity - Fetch a specific Entity.
    **/
    public openapisdk.models.operations.FetchEntityResponse fetchEntity(openapisdk.models.operations.FetchEntityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEntityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEntityResponse res = new openapisdk.models.operations.FetchEntityResponse() {{
            verifyV2ServiceEntity = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntity out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntity.class);
                res.verifyV2ServiceEntity = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchFactor - Fetch a specific Factor.
    **/
    public openapisdk.models.operations.FetchFactorResponse fetchFactor(openapisdk.models.operations.FetchFactorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFactorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFactorResponse res = new openapisdk.models.operations.FetchFactorResponse() {{
            verifyV2ServiceEntityFactor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityFactor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityFactor.class);
                res.verifyV2ServiceEntityFactor = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchForm - Fetch the forms for a specific Form Type.
    **/
    public openapisdk.models.operations.FetchFormResponse fetchForm(openapisdk.models.operations.FetchFormRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchFormRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Forms/{FormType}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchFormResponse res = new openapisdk.models.operations.FetchFormResponse() {{
            verifyV2Form = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Form out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Form.class);
                res.verifyV2Form = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMessagingConfiguration - Fetch a specific MessagingConfiguration.
    **/
    public openapisdk.models.operations.FetchMessagingConfigurationResponse fetchMessagingConfiguration(openapisdk.models.operations.FetchMessagingConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMessagingConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMessagingConfigurationResponse res = new openapisdk.models.operations.FetchMessagingConfigurationResponse() {{
            verifyV2ServiceMessagingConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration.class);
                res.verifyV2ServiceMessagingConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRateLimit - Fetch a specific Rate Limit.
    **/
    public openapisdk.models.operations.FetchRateLimitResponse fetchRateLimit(openapisdk.models.operations.FetchRateLimitRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRateLimitRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRateLimitResponse res = new openapisdk.models.operations.FetchRateLimitResponse() {{
            verifyV2ServiceRateLimit = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimit out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimit.class);
                res.verifyV2ServiceRateLimit = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSafelist - Check if a phone number exists in SafeList.
    **/
    public openapisdk.models.operations.FetchSafelistResponse fetchSafelist(openapisdk.models.operations.FetchSafelistRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSafelistRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/SafeList/Numbers/{PhoneNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSafelistResponse res = new openapisdk.models.operations.FetchSafelistResponse() {{
            verifyV2Safelist = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Safelist out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Safelist.class);
                res.verifyV2Safelist = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchService - Fetch specific Verification Service Instance.
    **/
    public openapisdk.models.operations.FetchServiceResponse fetchService(openapisdk.models.operations.FetchServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchServiceResponse res = new openapisdk.models.operations.FetchServiceResponse() {{
            verifyV2Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Service.class);
                res.verifyV2Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVerification - Fetch a specific Verification
    **/
    public openapisdk.models.operations.FetchVerificationResponse fetchVerification(openapisdk.models.operations.FetchVerificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVerificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVerificationResponse res = new openapisdk.models.operations.FetchVerificationResponse() {{
            verifyV2ServiceVerification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceVerification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceVerification.class);
                res.verifyV2ServiceVerification = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVerificationAttempt - Fetch a specific verification attempt.
    **/
    public openapisdk.models.operations.FetchVerificationAttemptResponse fetchVerificationAttempt(openapisdk.models.operations.FetchVerificationAttemptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVerificationAttemptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Attempts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVerificationAttemptResponse res = new openapisdk.models.operations.FetchVerificationAttemptResponse() {{
            verifyV2VerificationAttempt = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2VerificationAttempt out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2VerificationAttempt.class);
                res.verifyV2VerificationAttempt = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVerificationAttemptsSummary - Get a summary of how many attempts were made and how many were converted.
    **/
    public openapisdk.models.operations.FetchVerificationAttemptsSummaryResponse fetchVerificationAttemptsSummary(openapisdk.models.operations.FetchVerificationAttemptsSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVerificationAttemptsSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Attempts/Summary");
        
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

        openapisdk.models.operations.FetchVerificationAttemptsSummaryResponse res = new openapisdk.models.operations.FetchVerificationAttemptsSummaryResponse() {{
            verifyV2VerificationAttemptsSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2VerificationAttemptsSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2VerificationAttemptsSummary.class);
                res.verifyV2VerificationAttemptsSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchWebhook - Fetch a specific Webhook.
    **/
    public openapisdk.models.operations.FetchWebhookResponse fetchWebhook(openapisdk.models.operations.FetchWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchWebhookResponse res = new openapisdk.models.operations.FetchWebhookResponse() {{
            verifyV2ServiceWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceWebhook.class);
                res.verifyV2ServiceWebhook = out;
            }
        }

        return res;
    }
	
	
    /**
     * listBucket - Retrieve a list of all Buckets for a Rate Limit.
    **/
    public openapisdk.models.operations.ListBucketResponse listBucket(openapisdk.models.operations.ListBucketRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListBucketRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets", request.pathParams);
        
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

        openapisdk.models.operations.ListBucketResponse res = new openapisdk.models.operations.ListBucketResponse() {{
            listBucketResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListBucketListBucketResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListBucketListBucketResponse.class);
                res.listBucketResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listChallenge - Retrieve a list of all Challenges for a Factor.
    **/
    public openapisdk.models.operations.ListChallengeResponse listChallenge(openapisdk.models.operations.ListChallengeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListChallengeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges", request.pathParams);
        
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

        openapisdk.models.operations.ListChallengeResponse res = new openapisdk.models.operations.ListChallengeResponse() {{
            listChallengeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListChallengeListChallengeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListChallengeListChallengeResponse.class);
                res.listChallengeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEntity - Retrieve a list of all Entities for a Service.
    **/
    public openapisdk.models.operations.ListEntityResponse listEntity(openapisdk.models.operations.ListEntityRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEntityRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities", request.pathParams);
        
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

        openapisdk.models.operations.ListEntityResponse res = new openapisdk.models.operations.ListEntityResponse() {{
            listEntityResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEntityListEntityResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEntityListEntityResponse.class);
                res.listEntityResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listFactor - Retrieve a list of all Factors for an Entity.
    **/
    public openapisdk.models.operations.ListFactorResponse listFactor(openapisdk.models.operations.ListFactorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListFactorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors", request.pathParams);
        
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

        openapisdk.models.operations.ListFactorResponse res = new openapisdk.models.operations.ListFactorResponse() {{
            listFactorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListFactorListFactorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListFactorListFactorResponse.class);
                res.listFactorResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMessagingConfiguration - Retrieve a list of all Messaging Configurations for a Service.
    **/
    public openapisdk.models.operations.ListMessagingConfigurationResponse listMessagingConfiguration(openapisdk.models.operations.ListMessagingConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMessagingConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/MessagingConfigurations", request.pathParams);
        
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

        openapisdk.models.operations.ListMessagingConfigurationResponse res = new openapisdk.models.operations.ListMessagingConfigurationResponse() {{
            listMessagingConfigurationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMessagingConfigurationListMessagingConfigurationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMessagingConfigurationListMessagingConfigurationResponse.class);
                res.listMessagingConfigurationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRateLimit - Retrieve a list of all Rate Limits for a service.
    **/
    public openapisdk.models.operations.ListRateLimitResponse listRateLimit(openapisdk.models.operations.ListRateLimitRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRateLimitRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits", request.pathParams);
        
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

        openapisdk.models.operations.ListRateLimitResponse res = new openapisdk.models.operations.ListRateLimitResponse() {{
            listRateLimitResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRateLimitListRateLimitResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRateLimitListRateLimitResponse.class);
                res.listRateLimitResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listService - Retrieve a list of all Verification Services for an account.
    **/
    public openapisdk.models.operations.ListServiceResponse listService(openapisdk.models.operations.ListServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services");
        
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
     * listVerificationAttempt - List all the verification attempts for a given Account.
    **/
    public openapisdk.models.operations.ListVerificationAttemptResponse listVerificationAttempt(openapisdk.models.operations.ListVerificationAttemptRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVerificationAttemptRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Attempts");
        
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

        openapisdk.models.operations.ListVerificationAttemptResponse res = new openapisdk.models.operations.ListVerificationAttemptResponse() {{
            listVerificationAttemptResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVerificationAttemptListVerificationAttemptResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVerificationAttemptListVerificationAttemptResponse.class);
                res.listVerificationAttemptResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listVerificationTemplate - List all the available templates for a given Account.
    **/
    public openapisdk.models.operations.ListVerificationTemplateResponse listVerificationTemplate(openapisdk.models.operations.ListVerificationTemplateRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVerificationTemplateRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Templates");
        
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

        openapisdk.models.operations.ListVerificationTemplateResponse res = new openapisdk.models.operations.ListVerificationTemplateResponse() {{
            listVerificationTemplateResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVerificationTemplateListVerificationTemplateResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVerificationTemplateListVerificationTemplateResponse.class);
                res.listVerificationTemplateResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listWebhook - Retrieve a list of all Webhooks for a Service.
    **/
    public openapisdk.models.operations.ListWebhookResponse listWebhook(openapisdk.models.operations.ListWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Webhooks", request.pathParams);
        
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

        openapisdk.models.operations.ListWebhookResponse res = new openapisdk.models.operations.ListWebhookResponse() {{
            listWebhookResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListWebhookListWebhookResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListWebhookListWebhookResponse.class);
                res.listWebhookResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateBucket - Update a specific Bucket.
    **/
    public openapisdk.models.operations.UpdateBucketResponse updateBucket(openapisdk.models.operations.UpdateBucketRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateBucketRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateBucketResponse res = new openapisdk.models.operations.UpdateBucketResponse() {{
            verifyV2ServiceRateLimitBucket = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimitBucket out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimitBucket.class);
                res.verifyV2ServiceRateLimitBucket = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateChallenge - Verify a specific Challenge.
    **/
    public openapisdk.models.operations.UpdateChallengeResponse updateChallenge(openapisdk.models.operations.UpdateChallengeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateChallengeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateChallengeResponse res = new openapisdk.models.operations.UpdateChallengeResponse() {{
            verifyV2ServiceEntityChallenge = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityChallenge out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityChallenge.class);
                res.verifyV2ServiceEntityChallenge = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateFactor - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
    **/
    public openapisdk.models.operations.UpdateFactorResponse updateFactor(openapisdk.models.operations.UpdateFactorRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateFactorRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateFactorResponse res = new openapisdk.models.operations.UpdateFactorResponse() {{
            verifyV2ServiceEntityFactor = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceEntityFactor out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceEntityFactor.class);
                res.verifyV2ServiceEntityFactor = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMessagingConfiguration - Update a specific MessagingConfiguration
    **/
    public openapisdk.models.operations.UpdateMessagingConfigurationResponse updateMessagingConfiguration(openapisdk.models.operations.UpdateMessagingConfigurationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMessagingConfigurationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMessagingConfigurationResponse res = new openapisdk.models.operations.UpdateMessagingConfigurationResponse() {{
            verifyV2ServiceMessagingConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceMessagingConfiguration.class);
                res.verifyV2ServiceMessagingConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateRateLimit - Update a specific Rate Limit.
    **/
    public openapisdk.models.operations.UpdateRateLimitResponse updateRateLimit(openapisdk.models.operations.UpdateRateLimitRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateRateLimitRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/RateLimits/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRateLimitResponse res = new openapisdk.models.operations.UpdateRateLimitResponse() {{
            verifyV2ServiceRateLimit = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceRateLimit out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceRateLimit.class);
                res.verifyV2ServiceRateLimit = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateService - Update a specific Verification Service.
    **/
    public openapisdk.models.operations.UpdateServiceResponse updateService(openapisdk.models.operations.UpdateServiceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateServiceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateServiceResponse res = new openapisdk.models.operations.UpdateServiceResponse() {{
            verifyV2Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2Service.class);
                res.verifyV2Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateVerification - Update a Verification status
    **/
    public openapisdk.models.operations.UpdateVerificationResponse updateVerification(openapisdk.models.operations.UpdateVerificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateVerificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Verifications/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateVerificationResponse res = new openapisdk.models.operations.UpdateVerificationResponse() {{
            verifyV2ServiceVerification = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceVerification out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceVerification.class);
                res.verifyV2ServiceVerification = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateWebhookResponse updateWebhook(openapisdk.models.operations.UpdateWebhookRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateWebhookRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Services/{ServiceSid}/Webhooks/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateWebhookResponse res = new openapisdk.models.operations.UpdateWebhookResponse() {{
            verifyV2ServiceWebhook = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyV2ServiceWebhook out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyV2ServiceWebhook.class);
                res.verifyV2ServiceWebhook = out;
            }
        }

        return res;
    }
	
}