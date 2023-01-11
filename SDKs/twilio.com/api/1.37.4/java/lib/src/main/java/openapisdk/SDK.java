

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
		"https://api.twilio.com",
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
     * createAccount - Create a new Twilio Subaccount from the account making the request
    **/
    public openapisdk.models.operations.CreateAccountResponse createAccount(openapisdk.models.operations.CreateAccountRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateAccountRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts.json");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateAccountResponse res = new openapisdk.models.operations.CreateAccountResponse() {{
            apiV2010Account = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010Account out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010Account.class);
                res.apiV2010Account = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateAddressResponse createAddress(openapisdk.models.operations.CreateAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateAddressResponse res = new openapisdk.models.operations.CreateAddressResponse() {{
            apiV2010AccountAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountAddress.class);
                res.apiV2010AccountAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * createApplication - Create a new application within your account
    **/
    public openapisdk.models.operations.CreateApplicationResponse createApplication(openapisdk.models.operations.CreateApplicationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateApplicationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Applications.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateApplicationResponse res = new openapisdk.models.operations.CreateApplicationResponse() {{
            apiV2010AccountApplication = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountApplication out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountApplication.class);
                res.apiV2010AccountApplication = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCall - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
    **/
    public openapisdk.models.operations.CreateCallResponse createCall(openapisdk.models.operations.CreateCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCallResponse res = new openapisdk.models.operations.CreateCallResponse() {{
            apiV2010AccountCall = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCall out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCall.class);
                res.apiV2010AccountCall = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCallFeedbackSummary - Create a FeedbackSummary resource for a call
    **/
    public openapisdk.models.operations.CreateCallFeedbackSummaryResponse createCallFeedbackSummary(openapisdk.models.operations.CreateCallFeedbackSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCallFeedbackSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCallFeedbackSummaryResponse res = new openapisdk.models.operations.CreateCallFeedbackSummaryResponse() {{
            apiV2010AccountCallCallFeedbackSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary.class);
                res.apiV2010AccountCallCallFeedbackSummary = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCallRecording - Create a recording for the call
    **/
    public openapisdk.models.operations.CreateCallRecordingResponse createCallRecording(openapisdk.models.operations.CreateCallRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCallRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCallRecordingResponse res = new openapisdk.models.operations.CreateCallRecordingResponse() {{
            apiV2010AccountCallCallRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallRecording.class);
                res.apiV2010AccountCallCallRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * createIncomingPhoneNumber - Purchase a phone-number for the account.
    **/
    public openapisdk.models.operations.CreateIncomingPhoneNumberResponse createIncomingPhoneNumber(openapisdk.models.operations.CreateIncomingPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIncomingPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIncomingPhoneNumberResponse res = new openapisdk.models.operations.CreateIncomingPhoneNumberResponse() {{
            apiV2010AccountIncomingPhoneNumber = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber.class);
                res.apiV2010AccountIncomingPhoneNumber = out;
            }
        }

        return res;
    }
	
	
    /**
     * createIncomingPhoneNumberAssignedAddOn - Assign an Add-on installation to the Number specified.
    **/
    public openapisdk.models.operations.CreateIncomingPhoneNumberAssignedAddOnResponse createIncomingPhoneNumberAssignedAddOn(openapisdk.models.operations.CreateIncomingPhoneNumberAssignedAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIncomingPhoneNumberAssignedAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIncomingPhoneNumberAssignedAddOnResponse res = new openapisdk.models.operations.CreateIncomingPhoneNumberAssignedAddOnResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateIncomingPhoneNumberLocalResponse createIncomingPhoneNumberLocal(openapisdk.models.operations.CreateIncomingPhoneNumberLocalRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIncomingPhoneNumberLocalRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIncomingPhoneNumberLocalResponse res = new openapisdk.models.operations.CreateIncomingPhoneNumberLocalResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateIncomingPhoneNumberMobileResponse createIncomingPhoneNumberMobile(openapisdk.models.operations.CreateIncomingPhoneNumberMobileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIncomingPhoneNumberMobileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIncomingPhoneNumberMobileResponse res = new openapisdk.models.operations.CreateIncomingPhoneNumberMobileResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateIncomingPhoneNumberTollFreeResponse createIncomingPhoneNumberTollFree(openapisdk.models.operations.CreateIncomingPhoneNumberTollFreeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateIncomingPhoneNumberTollFreeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateIncomingPhoneNumberTollFreeResponse res = new openapisdk.models.operations.CreateIncomingPhoneNumberTollFreeResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree = out;
            }
        }

        return res;
    }
	
	
    /**
     * createMessage - Send a message from the account used to make the request
    **/
    public openapisdk.models.operations.CreateMessageResponse createMessage(openapisdk.models.operations.CreateMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMessageResponse res = new openapisdk.models.operations.CreateMessageResponse() {{
            apiV2010AccountMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountMessage.class);
                res.apiV2010AccountMessage = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateMessageFeedbackResponse createMessageFeedback(openapisdk.models.operations.CreateMessageFeedbackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateMessageFeedbackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Feedback.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateMessageFeedbackResponse res = new openapisdk.models.operations.CreateMessageFeedbackResponse() {{
            apiV2010AccountMessageMessageFeedback = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountMessageMessageFeedback out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountMessageMessageFeedback.class);
                res.apiV2010AccountMessageMessageFeedback = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateNewKeyResponse createNewKey(openapisdk.models.operations.CreateNewKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNewKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Keys.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNewKeyResponse res = new openapisdk.models.operations.CreateNewKeyResponse() {{
            apiV2010AccountNewKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountNewKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountNewKey.class);
                res.apiV2010AccountNewKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * createNewSigningKey - Create a new Signing Key for the account making the request.
    **/
    public openapisdk.models.operations.CreateNewSigningKeyResponse createNewSigningKey(openapisdk.models.operations.CreateNewSigningKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateNewSigningKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateNewSigningKeyResponse res = new openapisdk.models.operations.CreateNewSigningKeyResponse() {{
            apiV2010AccountNewSigningKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountNewSigningKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountNewSigningKey.class);
                res.apiV2010AccountNewSigningKey = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateParticipantResponse createParticipant(openapisdk.models.operations.CreateParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateParticipantResponse res = new openapisdk.models.operations.CreateParticipantResponse() {{
            apiV2010AccountConferenceParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConferenceParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConferenceParticipant.class);
                res.apiV2010AccountConferenceParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * createPayments - create an instance of payments. This will start a new payments session
    **/
    public openapisdk.models.operations.CreatePaymentsResponse createPayments(openapisdk.models.operations.CreatePaymentsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreatePaymentsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreatePaymentsResponse res = new openapisdk.models.operations.CreatePaymentsResponse() {{
            apiV2010AccountCallPayments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallPayments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallPayments.class);
                res.apiV2010AccountCallPayments = out;
            }
        }

        return res;
    }
	
	
    /**
     * createQueue - Create a queue
    **/
    public openapisdk.models.operations.CreateQueueResponse createQueue(openapisdk.models.operations.CreateQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateQueueResponse res = new openapisdk.models.operations.CreateQueueResponse() {{
            apiV2010AccountQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountQueue.class);
                res.apiV2010AccountQueue = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipAuthCallsCredentialListMapping - Create a new credential list mapping resource
    **/
    public openapisdk.models.operations.CreateSipAuthCallsCredentialListMappingResponse createSipAuthCallsCredentialListMapping(openapisdk.models.operations.CreateSipAuthCallsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipAuthCallsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipAuthCallsCredentialListMappingResponse res = new openapisdk.models.operations.CreateSipAuthCallsCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipAuthCallsIpAccessControlListMapping - Create a new IP Access Control List mapping
    **/
    public openapisdk.models.operations.CreateSipAuthCallsIpAccessControlListMappingResponse createSipAuthCallsIpAccessControlListMapping(openapisdk.models.operations.CreateSipAuthCallsIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipAuthCallsIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipAuthCallsIpAccessControlListMappingResponse res = new openapisdk.models.operations.CreateSipAuthCallsIpAccessControlListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipAuthRegistrationsCredentialListMapping - Create a new credential list mapping resource
    **/
    public openapisdk.models.operations.CreateSipAuthRegistrationsCredentialListMappingResponse createSipAuthRegistrationsCredentialListMapping(openapisdk.models.operations.CreateSipAuthRegistrationsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipAuthRegistrationsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipAuthRegistrationsCredentialListMappingResponse res = new openapisdk.models.operations.CreateSipAuthRegistrationsCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipCredential - Create a new credential resource.
    **/
    public openapisdk.models.operations.CreateSipCredentialResponse createSipCredential(openapisdk.models.operations.CreateSipCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipCredentialResponse res = new openapisdk.models.operations.CreateSipCredentialResponse() {{
            apiV2010AccountSipSipCredentialListSipCredential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential.class);
                res.apiV2010AccountSipSipCredentialListSipCredential = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipCredentialList - Create a Credential List
    **/
    public openapisdk.models.operations.CreateSipCredentialListResponse createSipCredentialList(openapisdk.models.operations.CreateSipCredentialListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipCredentialListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipCredentialListResponse res = new openapisdk.models.operations.CreateSipCredentialListResponse() {{
            apiV2010AccountSipSipCredentialList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialList.class);
                res.apiV2010AccountSipSipCredentialList = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipCredentialListMapping - Create a CredentialListMapping resource for an account.
    **/
    public openapisdk.models.operations.CreateSipCredentialListMappingResponse createSipCredentialListMapping(openapisdk.models.operations.CreateSipCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipCredentialListMappingResponse res = new openapisdk.models.operations.CreateSipCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipDomain - Create a new Domain
    **/
    public openapisdk.models.operations.CreateSipDomainResponse createSipDomain(openapisdk.models.operations.CreateSipDomainRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipDomainRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipDomainResponse res = new openapisdk.models.operations.CreateSipDomainResponse() {{
            apiV2010AccountSipSipDomain = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomain out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomain.class);
                res.apiV2010AccountSipSipDomain = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipIpAccessControlList - Create a new IpAccessControlList resource
    **/
    public openapisdk.models.operations.CreateSipIpAccessControlListResponse createSipIpAccessControlList(openapisdk.models.operations.CreateSipIpAccessControlListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipIpAccessControlListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipIpAccessControlListResponse res = new openapisdk.models.operations.CreateSipIpAccessControlListResponse() {{
            apiV2010AccountSipSipIpAccessControlList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList.class);
                res.apiV2010AccountSipSipIpAccessControlList = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipIpAccessControlListMapping - Create a new IpAccessControlListMapping resource.
    **/
    public openapisdk.models.operations.CreateSipIpAccessControlListMappingResponse createSipIpAccessControlListMapping(openapisdk.models.operations.CreateSipIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipIpAccessControlListMappingResponse res = new openapisdk.models.operations.CreateSipIpAccessControlListMappingResponse() {{
            apiV2010AccountSipSipDomainSipIpAccessControlListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping.class);
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSipIpAddress - Create a new IpAddress resource.
    **/
    public openapisdk.models.operations.CreateSipIpAddressResponse createSipIpAddress(openapisdk.models.operations.CreateSipIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSipIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSipIpAddressResponse res = new openapisdk.models.operations.CreateSipIpAddressResponse() {{
            apiV2010AccountSipSipIpAccessControlListSipIpAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress.class);
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSiprec - Create a Siprec
    **/
    public openapisdk.models.operations.CreateSiprecResponse createSiprec(openapisdk.models.operations.CreateSiprecRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSiprecRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSiprecResponse res = new openapisdk.models.operations.CreateSiprecResponse() {{
            apiV2010AccountCallSiprec = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallSiprec out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallSiprec.class);
                res.apiV2010AccountCallSiprec = out;
            }
        }

        return res;
    }
	
	
    /**
     * createStream - Create a Stream
    **/
    public openapisdk.models.operations.CreateStreamResponse createStream(openapisdk.models.operations.CreateStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateStreamResponse res = new openapisdk.models.operations.CreateStreamResponse() {{
            apiV2010AccountCallStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallStream.class);
                res.apiV2010AccountCallStream = out;
            }
        }

        return res;
    }
	
	
    /**
     * createToken - Create a new token for ICE servers
    **/
    public openapisdk.models.operations.CreateTokenResponse createToken(openapisdk.models.operations.CreateTokenRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTokenRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Tokens.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTokenResponse res = new openapisdk.models.operations.CreateTokenResponse() {{
            apiV2010AccountToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountToken.class);
                res.apiV2010AccountToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * createUsageTrigger - Create a new UsageTrigger
    **/
    public openapisdk.models.operations.CreateUsageTriggerResponse createUsageTrigger(openapisdk.models.operations.CreateUsageTriggerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUsageTriggerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUsageTriggerResponse res = new openapisdk.models.operations.CreateUsageTriggerResponse() {{
            apiV2010AccountUsageUsageTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger.class);
                res.apiV2010AccountUsageUsageTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * createUserDefinedMessage - Create a new User Defined Message for the given Call SID.
    **/
    public openapisdk.models.operations.CreateUserDefinedMessageResponse createUserDefinedMessage(openapisdk.models.operations.CreateUserDefinedMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUserDefinedMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUserDefinedMessageResponse res = new openapisdk.models.operations.CreateUserDefinedMessageResponse() {{
            apiV2010AccountCallUserDefinedMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessage.class);
                res.apiV2010AccountCallUserDefinedMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * createUserDefinedMessageSubscription - Subscribe to User Defined Messages for a given Call SID.
    **/
    public openapisdk.models.operations.CreateUserDefinedMessageSubscriptionResponse createUserDefinedMessageSubscription(openapisdk.models.operations.CreateUserDefinedMessageSubscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateUserDefinedMessageSubscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateUserDefinedMessageSubscriptionResponse res = new openapisdk.models.operations.CreateUserDefinedMessageSubscriptionResponse() {{
            apiV2010AccountCallUserDefinedMessageSubscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessageSubscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallUserDefinedMessageSubscription.class);
                res.apiV2010AccountCallUserDefinedMessageSubscription = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.CreateValidationRequestResponse createValidationRequest(openapisdk.models.operations.CreateValidationRequestRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateValidationRequestRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateValidationRequestResponse res = new openapisdk.models.operations.CreateValidationRequestResponse() {{
            apiV2010AccountValidationRequest = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountValidationRequest out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountValidationRequest.class);
                res.apiV2010AccountValidationRequest = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteAddressResponse deleteAddress(openapisdk.models.operations.DeleteAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAddressResponse res = new openapisdk.models.operations.DeleteAddressResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteApplication - Delete the application by the specified application sid
    **/
    public openapisdk.models.operations.DeleteApplicationResponse deleteApplication(openapisdk.models.operations.DeleteApplicationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteApplicationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteApplicationResponse res = new openapisdk.models.operations.DeleteApplicationResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCall - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
    **/
    public openapisdk.models.operations.DeleteCallResponse deleteCall(openapisdk.models.operations.DeleteCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCallResponse res = new openapisdk.models.operations.DeleteCallResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCallFeedbackSummary - Delete a FeedbackSummary resource from a call
    **/
    public openapisdk.models.operations.DeleteCallFeedbackSummaryResponse deleteCallFeedbackSummary(openapisdk.models.operations.DeleteCallFeedbackSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCallFeedbackSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCallFeedbackSummaryResponse res = new openapisdk.models.operations.DeleteCallFeedbackSummaryResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCallRecording - Delete a recording from your account
    **/
    public openapisdk.models.operations.DeleteCallRecordingResponse deleteCallRecording(openapisdk.models.operations.DeleteCallRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCallRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCallRecordingResponse res = new openapisdk.models.operations.DeleteCallRecordingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConferenceRecording - Delete a recording from your account
    **/
    public openapisdk.models.operations.DeleteConferenceRecordingResponse deleteConferenceRecording(openapisdk.models.operations.DeleteConferenceRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConferenceRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConferenceRecordingResponse res = new openapisdk.models.operations.DeleteConferenceRecordingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteConnectApp - Delete an instance of a connect-app
    **/
    public openapisdk.models.operations.DeleteConnectAppResponse deleteConnectApp(openapisdk.models.operations.DeleteConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteConnectAppResponse res = new openapisdk.models.operations.DeleteConnectAppResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteIncomingPhoneNumber - Delete a phone-numbers belonging to the account used to make the request.
    **/
    public openapisdk.models.operations.DeleteIncomingPhoneNumberResponse deleteIncomingPhoneNumber(openapisdk.models.operations.DeleteIncomingPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteIncomingPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteIncomingPhoneNumberResponse res = new openapisdk.models.operations.DeleteIncomingPhoneNumberResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteIncomingPhoneNumberAssignedAddOn - Remove the assignment of an Add-on installation from the Number specified.
    **/
    public openapisdk.models.operations.DeleteIncomingPhoneNumberAssignedAddOnResponse deleteIncomingPhoneNumberAssignedAddOn(openapisdk.models.operations.DeleteIncomingPhoneNumberAssignedAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteIncomingPhoneNumberAssignedAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteIncomingPhoneNumberAssignedAddOnResponse res = new openapisdk.models.operations.DeleteIncomingPhoneNumberAssignedAddOnResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteKeyResponse deleteKey(openapisdk.models.operations.DeleteKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteKeyResponse res = new openapisdk.models.operations.DeleteKeyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteMedia - Delete media from your account. Once delete, you will no longer be billed
    **/
    public openapisdk.models.operations.DeleteMediaResponse deleteMedia(openapisdk.models.operations.DeleteMediaRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMediaRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMediaResponse res = new openapisdk.models.operations.DeleteMediaResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteMessage - Deletes a message record from your account
    **/
    public openapisdk.models.operations.DeleteMessageResponse deleteMessage(openapisdk.models.operations.DeleteMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.pathParams);
        
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
	
	
    /**
     * deleteOutgoingCallerId - Delete the caller-id specified from the account
    **/
    public openapisdk.models.operations.DeleteOutgoingCallerIdResponse deleteOutgoingCallerId(openapisdk.models.operations.DeleteOutgoingCallerIdRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteOutgoingCallerIdRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOutgoingCallerIdResponse res = new openapisdk.models.operations.DeleteOutgoingCallerIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteParticipant - Kick a participant from a given conference
    **/
    public openapisdk.models.operations.DeleteParticipantResponse deleteParticipant(openapisdk.models.operations.DeleteParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteParticipantResponse res = new openapisdk.models.operations.DeleteParticipantResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteQueue - Remove an empty queue
    **/
    public openapisdk.models.operations.DeleteQueueResponse deleteQueue(openapisdk.models.operations.DeleteQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteQueueResponse res = new openapisdk.models.operations.DeleteQueueResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRecording - Delete a recording from your account
    **/
    public openapisdk.models.operations.DeleteRecordingResponse deleteRecording(openapisdk.models.operations.DeleteRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", request.pathParams);
        
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
	
	
    /**
     * deleteRecordingAddOnResult - Delete a result and purge all associated Payloads
    **/
    public openapisdk.models.operations.DeleteRecordingAddOnResultResponse deleteRecordingAddOnResult(openapisdk.models.operations.DeleteRecordingAddOnResultRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRecordingAddOnResultRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRecordingAddOnResultResponse res = new openapisdk.models.operations.DeleteRecordingAddOnResultResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteRecordingAddOnResultPayload - Delete a payload from the result along with all associated Data
    **/
    public openapisdk.models.operations.DeleteRecordingAddOnResultPayloadResponse deleteRecordingAddOnResultPayload(openapisdk.models.operations.DeleteRecordingAddOnResultPayloadRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRecordingAddOnResultPayloadRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRecordingAddOnResultPayloadResponse res = new openapisdk.models.operations.DeleteRecordingAddOnResultPayloadResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteRecordingTranscriptionResponse deleteRecordingTranscription(openapisdk.models.operations.DeleteRecordingTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteRecordingTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteRecordingTranscriptionResponse res = new openapisdk.models.operations.DeleteRecordingTranscriptionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteSigningKeyResponse deleteSigningKey(openapisdk.models.operations.DeleteSigningKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSigningKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSigningKeyResponse res = new openapisdk.models.operations.DeleteSigningKeyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipAuthCallsCredentialListMapping - Delete a credential list mapping from the requested domain
    **/
    public openapisdk.models.operations.DeleteSipAuthCallsCredentialListMappingResponse deleteSipAuthCallsCredentialListMapping(openapisdk.models.operations.DeleteSipAuthCallsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipAuthCallsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipAuthCallsCredentialListMappingResponse res = new openapisdk.models.operations.DeleteSipAuthCallsCredentialListMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipAuthCallsIpAccessControlListMapping - Delete an IP Access Control List mapping from the requested domain
    **/
    public openapisdk.models.operations.DeleteSipAuthCallsIpAccessControlListMappingResponse deleteSipAuthCallsIpAccessControlListMapping(openapisdk.models.operations.DeleteSipAuthCallsIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipAuthCallsIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipAuthCallsIpAccessControlListMappingResponse res = new openapisdk.models.operations.DeleteSipAuthCallsIpAccessControlListMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipAuthRegistrationsCredentialListMapping - Delete a credential list mapping from the requested domain
    **/
    public openapisdk.models.operations.DeleteSipAuthRegistrationsCredentialListMappingResponse deleteSipAuthRegistrationsCredentialListMapping(openapisdk.models.operations.DeleteSipAuthRegistrationsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipAuthRegistrationsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipAuthRegistrationsCredentialListMappingResponse res = new openapisdk.models.operations.DeleteSipAuthRegistrationsCredentialListMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipCredential - Delete a credential resource.
    **/
    public openapisdk.models.operations.DeleteSipCredentialResponse deleteSipCredential(openapisdk.models.operations.DeleteSipCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipCredentialResponse res = new openapisdk.models.operations.DeleteSipCredentialResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipCredentialList - Delete a Credential List
    **/
    public openapisdk.models.operations.DeleteSipCredentialListResponse deleteSipCredentialList(openapisdk.models.operations.DeleteSipCredentialListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipCredentialListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipCredentialListResponse res = new openapisdk.models.operations.DeleteSipCredentialListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipCredentialListMapping - Delete a CredentialListMapping resource from an account.
    **/
    public openapisdk.models.operations.DeleteSipCredentialListMappingResponse deleteSipCredentialListMapping(openapisdk.models.operations.DeleteSipCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipCredentialListMappingResponse res = new openapisdk.models.operations.DeleteSipCredentialListMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipDomain - Delete an instance of a Domain
    **/
    public openapisdk.models.operations.DeleteSipDomainResponse deleteSipDomain(openapisdk.models.operations.DeleteSipDomainRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipDomainRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipDomainResponse res = new openapisdk.models.operations.DeleteSipDomainResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipIpAccessControlList - Delete an IpAccessControlList from the requested account
    **/
    public openapisdk.models.operations.DeleteSipIpAccessControlListResponse deleteSipIpAccessControlList(openapisdk.models.operations.DeleteSipIpAccessControlListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipIpAccessControlListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipIpAccessControlListResponse res = new openapisdk.models.operations.DeleteSipIpAccessControlListResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipIpAccessControlListMapping - Delete an IpAccessControlListMapping resource.
    **/
    public openapisdk.models.operations.DeleteSipIpAccessControlListMappingResponse deleteSipIpAccessControlListMapping(openapisdk.models.operations.DeleteSipIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipIpAccessControlListMappingResponse res = new openapisdk.models.operations.DeleteSipIpAccessControlListMappingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSipIpAddress - Delete an IpAddress resource.
    **/
    public openapisdk.models.operations.DeleteSipIpAddressResponse deleteSipIpAddress(openapisdk.models.operations.DeleteSipIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSipIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipIpAddressResponse res = new openapisdk.models.operations.DeleteSipIpAddressResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteTranscription - Delete a transcription from the account used to make the request
    **/
    public openapisdk.models.operations.DeleteTranscriptionResponse deleteTranscription(openapisdk.models.operations.DeleteTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTranscriptionResponse res = new openapisdk.models.operations.DeleteTranscriptionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.DeleteUsageTriggerResponse deleteUsageTrigger(openapisdk.models.operations.DeleteUsageTriggerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUsageTriggerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUsageTriggerResponse res = new openapisdk.models.operations.DeleteUsageTriggerResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteUserDefinedMessageSubscription - Delete a specific User Defined Message Subscription.
    **/
    public openapisdk.models.operations.DeleteUserDefinedMessageSubscriptionResponse deleteUserDefinedMessageSubscription(openapisdk.models.operations.DeleteUserDefinedMessageSubscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteUserDefinedMessageSubscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserDefinedMessageSubscriptionResponse res = new openapisdk.models.operations.DeleteUserDefinedMessageSubscriptionResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchAccount - Fetch the account specified by the provided Account Sid
    **/
    public openapisdk.models.operations.FetchAccountResponse fetchAccount(openapisdk.models.operations.FetchAccountRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAccountRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAccountResponse res = new openapisdk.models.operations.FetchAccountResponse() {{
            apiV2010Account = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010Account out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010Account.class);
                res.apiV2010Account = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchAddressResponse fetchAddress(openapisdk.models.operations.FetchAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAddressResponse res = new openapisdk.models.operations.FetchAddressResponse() {{
            apiV2010AccountAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountAddress.class);
                res.apiV2010AccountAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchApplication - Fetch the application specified by the provided sid
    **/
    public openapisdk.models.operations.FetchApplicationResponse fetchApplication(openapisdk.models.operations.FetchApplicationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchApplicationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchApplicationResponse res = new openapisdk.models.operations.FetchApplicationResponse() {{
            apiV2010AccountApplication = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountApplication out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountApplication.class);
                res.apiV2010AccountApplication = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchAuthorizedConnectApp - Fetch an instance of an authorized-connect-app
    **/
    public openapisdk.models.operations.FetchAuthorizedConnectAppResponse fetchAuthorizedConnectApp(openapisdk.models.operations.FetchAuthorizedConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAuthorizedConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps/{ConnectAppSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAuthorizedConnectAppResponse res = new openapisdk.models.operations.FetchAuthorizedConnectAppResponse() {{
            apiV2010AccountAuthorizedConnectApp = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountAuthorizedConnectApp.class);
                res.apiV2010AccountAuthorizedConnectApp = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchAvailablePhoneNumberCountryResponse fetchAvailablePhoneNumberCountry(openapisdk.models.operations.FetchAvailablePhoneNumberCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchAvailablePhoneNumberCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchAvailablePhoneNumberCountryResponse res = new openapisdk.models.operations.FetchAvailablePhoneNumberCountryResponse() {{
            apiV2010AccountAvailablePhoneNumberCountry = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountry out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountAvailablePhoneNumberCountry.class);
                res.apiV2010AccountAvailablePhoneNumberCountry = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchBalance - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
    **/
    public openapisdk.models.operations.FetchBalanceResponse fetchBalance(openapisdk.models.operations.FetchBalanceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchBalanceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Balance.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchBalanceResponse res = new openapisdk.models.operations.FetchBalanceResponse() {{
            apiV2010AccountBalance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountBalance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountBalance.class);
                res.apiV2010AccountBalance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCall - Fetch the call specified by the provided Call SID
    **/
    public openapisdk.models.operations.FetchCallResponse fetchCall(openapisdk.models.operations.FetchCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallResponse res = new openapisdk.models.operations.FetchCallResponse() {{
            apiV2010AccountCall = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCall out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCall.class);
                res.apiV2010AccountCall = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCallFeedback - Fetch a Feedback resource from a call
    **/
    public openapisdk.models.operations.FetchCallFeedbackResponse fetchCallFeedback(openapisdk.models.operations.FetchCallFeedbackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallFeedbackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallFeedbackResponse res = new openapisdk.models.operations.FetchCallFeedbackResponse() {{
            apiV2010AccountCallCallFeedback = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallFeedback out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallFeedback.class);
                res.apiV2010AccountCallCallFeedback = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCallFeedbackSummary - Fetch a FeedbackSummary resource from a call
    **/
    public openapisdk.models.operations.FetchCallFeedbackSummaryResponse fetchCallFeedbackSummary(openapisdk.models.operations.FetchCallFeedbackSummaryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallFeedbackSummaryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/FeedbackSummary/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallFeedbackSummaryResponse res = new openapisdk.models.operations.FetchCallFeedbackSummaryResponse() {{
            apiV2010AccountCallCallFeedbackSummary = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallFeedbackSummary.class);
                res.apiV2010AccountCallCallFeedbackSummary = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchCallNotificationResponse fetchCallNotification(openapisdk.models.operations.FetchCallNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallNotificationResponse res = new openapisdk.models.operations.FetchCallNotificationResponse() {{
            apiV2010AccountCallCallNotificationInstance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallNotificationInstance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallNotificationInstance.class);
                res.apiV2010AccountCallCallNotificationInstance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCallRecording - Fetch an instance of a recording for a call
    **/
    public openapisdk.models.operations.FetchCallRecordingResponse fetchCallRecording(openapisdk.models.operations.FetchCallRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCallRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCallRecordingResponse res = new openapisdk.models.operations.FetchCallRecordingResponse() {{
            apiV2010AccountCallCallRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallRecording.class);
                res.apiV2010AccountCallCallRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConference - Fetch an instance of a conference
    **/
    public openapisdk.models.operations.FetchConferenceResponse fetchConference(openapisdk.models.operations.FetchConferenceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConferenceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConferenceResponse res = new openapisdk.models.operations.FetchConferenceResponse() {{
            apiV2010AccountConference = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConference out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConference.class);
                res.apiV2010AccountConference = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConferenceRecording - Fetch an instance of a recording for a call
    **/
    public openapisdk.models.operations.FetchConferenceRecordingResponse fetchConferenceRecording(openapisdk.models.operations.FetchConferenceRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConferenceRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConferenceRecordingResponse res = new openapisdk.models.operations.FetchConferenceRecordingResponse() {{
            apiV2010AccountConferenceConferenceRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording.class);
                res.apiV2010AccountConferenceConferenceRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchConnectApp - Fetch an instance of a connect-app
    **/
    public openapisdk.models.operations.FetchConnectAppResponse fetchConnectApp(openapisdk.models.operations.FetchConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchConnectAppResponse res = new openapisdk.models.operations.FetchConnectAppResponse() {{
            apiV2010AccountConnectApp = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConnectApp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConnectApp.class);
                res.apiV2010AccountConnectApp = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchIncomingPhoneNumber - Fetch an incoming-phone-number belonging to the account used to make the request.
    **/
    public openapisdk.models.operations.FetchIncomingPhoneNumberResponse fetchIncomingPhoneNumber(openapisdk.models.operations.FetchIncomingPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchIncomingPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchIncomingPhoneNumberResponse res = new openapisdk.models.operations.FetchIncomingPhoneNumberResponse() {{
            apiV2010AccountIncomingPhoneNumber = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber.class);
                res.apiV2010AccountIncomingPhoneNumber = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchIncomingPhoneNumberAssignedAddOn - Fetch an instance of an Add-on installation currently assigned to this Number.
    **/
    public openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnResponse fetchIncomingPhoneNumberAssignedAddOn(openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnResponse res = new openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchIncomingPhoneNumberAssignedAddOnExtension - Fetch an instance of an Extension for the Assigned Add-on.
    **/
    public openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse fetchIncomingPhoneNumberAssignedAddOnExtension(openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse res = new openapisdk.models.operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse() {{
            apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension.class);
                res.apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchKeyResponse fetchKey(openapisdk.models.operations.FetchKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchKeyResponse res = new openapisdk.models.operations.FetchKeyResponse() {{
            apiV2010AccountKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountKey.class);
                res.apiV2010AccountKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMedia - Fetch a single media instance belonging to the account used to make the request
    **/
    public openapisdk.models.operations.FetchMediaResponse fetchMedia(openapisdk.models.operations.FetchMediaRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMediaRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMediaResponse res = new openapisdk.models.operations.FetchMediaResponse() {{
            apiV2010AccountMessageMedia = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountMessageMedia out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountMessageMedia.class);
                res.apiV2010AccountMessageMedia = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMember - Fetch a specific member from the queue
    **/
    public openapisdk.models.operations.FetchMemberResponse fetchMember(openapisdk.models.operations.FetchMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMemberResponse res = new openapisdk.models.operations.FetchMemberResponse() {{
            apiV2010AccountQueueMember = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountQueueMember out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountQueueMember.class);
                res.apiV2010AccountQueueMember = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchMessage - Fetch a message belonging to the account used to make the request
    **/
    public openapisdk.models.operations.FetchMessageResponse fetchMessage(openapisdk.models.operations.FetchMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchMessageResponse res = new openapisdk.models.operations.FetchMessageResponse() {{
            apiV2010AccountMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountMessage.class);
                res.apiV2010AccountMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchNotification - Fetch a notification belonging to the account used to make the request
    **/
    public openapisdk.models.operations.FetchNotificationResponse fetchNotification(openapisdk.models.operations.FetchNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Notifications/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchNotificationResponse res = new openapisdk.models.operations.FetchNotificationResponse() {{
            apiV2010AccountNotificationInstance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountNotificationInstance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountNotificationInstance.class);
                res.apiV2010AccountNotificationInstance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchOutgoingCallerId - Fetch an outgoing-caller-id belonging to the account used to make the request
    **/
    public openapisdk.models.operations.FetchOutgoingCallerIdResponse fetchOutgoingCallerId(openapisdk.models.operations.FetchOutgoingCallerIdRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchOutgoingCallerIdRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchOutgoingCallerIdResponse res = new openapisdk.models.operations.FetchOutgoingCallerIdResponse() {{
            apiV2010AccountOutgoingCallerId = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountOutgoingCallerId out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountOutgoingCallerId.class);
                res.apiV2010AccountOutgoingCallerId = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchParticipant - Fetch an instance of a participant
    **/
    public openapisdk.models.operations.FetchParticipantResponse fetchParticipant(openapisdk.models.operations.FetchParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchParticipantResponse res = new openapisdk.models.operations.FetchParticipantResponse() {{
            apiV2010AccountConferenceParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConferenceParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConferenceParticipant.class);
                res.apiV2010AccountConferenceParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchQueue - Fetch an instance of a queue identified by the QueueSid
    **/
    public openapisdk.models.operations.FetchQueueResponse fetchQueue(openapisdk.models.operations.FetchQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchQueueResponse res = new openapisdk.models.operations.FetchQueueResponse() {{
            apiV2010AccountQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountQueue.class);
                res.apiV2010AccountQueue = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRecording - Fetch an instance of a recording
    **/
    public openapisdk.models.operations.FetchRecordingResponse fetchRecording(openapisdk.models.operations.FetchRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{Sid}.json", request.pathParams);
        
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

        openapisdk.models.operations.FetchRecordingResponse res = new openapisdk.models.operations.FetchRecordingResponse() {{
            apiV2010AccountRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountRecording.class);
                res.apiV2010AccountRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRecordingAddOnResult - Fetch an instance of an AddOnResult
    **/
    public openapisdk.models.operations.FetchRecordingAddOnResultResponse fetchRecordingAddOnResult(openapisdk.models.operations.FetchRecordingAddOnResultRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingAddOnResultRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRecordingAddOnResultResponse res = new openapisdk.models.operations.FetchRecordingAddOnResultResponse() {{
            apiV2010AccountRecordingRecordingAddOnResult = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResult.class);
                res.apiV2010AccountRecordingRecordingAddOnResult = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRecordingAddOnResultPayload - Fetch an instance of a result payload
    **/
    public openapisdk.models.operations.FetchRecordingAddOnResultPayloadResponse fetchRecordingAddOnResultPayload(openapisdk.models.operations.FetchRecordingAddOnResultPayloadRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingAddOnResultPayloadRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRecordingAddOnResultPayloadResponse res = new openapisdk.models.operations.FetchRecordingAddOnResultPayloadResponse() {{
            apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload.class);
                res.apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchRecordingTranscriptionResponse fetchRecordingTranscription(openapisdk.models.operations.FetchRecordingTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRecordingTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRecordingTranscriptionResponse res = new openapisdk.models.operations.FetchRecordingTranscriptionResponse() {{
            apiV2010AccountRecordingRecordingTranscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountRecordingRecordingTranscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountRecordingRecordingTranscription.class);
                res.apiV2010AccountRecordingRecordingTranscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchShortCode - Fetch an instance of a short code
    **/
    public openapisdk.models.operations.FetchShortCodeResponse fetchShortCode(openapisdk.models.operations.FetchShortCodeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchShortCodeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchShortCodeResponse res = new openapisdk.models.operations.FetchShortCodeResponse() {{
            apiV2010AccountShortCode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountShortCode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountShortCode.class);
                res.apiV2010AccountShortCode = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.FetchSigningKeyResponse fetchSigningKey(openapisdk.models.operations.FetchSigningKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSigningKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSigningKeyResponse res = new openapisdk.models.operations.FetchSigningKeyResponse() {{
            apiV2010AccountSigningKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSigningKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSigningKey.class);
                res.apiV2010AccountSigningKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipAuthCallsCredentialListMapping - Fetch a specific instance of a credential list mapping
    **/
    public openapisdk.models.operations.FetchSipAuthCallsCredentialListMappingResponse fetchSipAuthCallsCredentialListMapping(openapisdk.models.operations.FetchSipAuthCallsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipAuthCallsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipAuthCallsCredentialListMappingResponse res = new openapisdk.models.operations.FetchSipAuthCallsCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipAuthCallsIpAccessControlListMapping - Fetch a specific instance of an IP Access Control List mapping
    **/
    public openapisdk.models.operations.FetchSipAuthCallsIpAccessControlListMappingResponse fetchSipAuthCallsIpAccessControlListMapping(openapisdk.models.operations.FetchSipAuthCallsIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipAuthCallsIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipAuthCallsIpAccessControlListMappingResponse res = new openapisdk.models.operations.FetchSipAuthCallsIpAccessControlListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIpAccessControlListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipAuthRegistrationsCredentialListMapping - Fetch a specific instance of a credential list mapping
    **/
    public openapisdk.models.operations.FetchSipAuthRegistrationsCredentialListMappingResponse fetchSipAuthRegistrationsCredentialListMapping(openapisdk.models.operations.FetchSipAuthRegistrationsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipAuthRegistrationsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipAuthRegistrationsCredentialListMappingResponse res = new openapisdk.models.operations.FetchSipAuthRegistrationsCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipCredential - Fetch a single credential.
    **/
    public openapisdk.models.operations.FetchSipCredentialResponse fetchSipCredential(openapisdk.models.operations.FetchSipCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipCredentialResponse res = new openapisdk.models.operations.FetchSipCredentialResponse() {{
            apiV2010AccountSipSipCredentialListSipCredential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential.class);
                res.apiV2010AccountSipSipCredentialListSipCredential = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipCredentialList - Get a Credential List
    **/
    public openapisdk.models.operations.FetchSipCredentialListResponse fetchSipCredentialList(openapisdk.models.operations.FetchSipCredentialListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipCredentialListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipCredentialListResponse res = new openapisdk.models.operations.FetchSipCredentialListResponse() {{
            apiV2010AccountSipSipCredentialList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialList.class);
                res.apiV2010AccountSipSipCredentialList = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipCredentialListMapping - Fetch a single CredentialListMapping resource from an account.
    **/
    public openapisdk.models.operations.FetchSipCredentialListMappingResponse fetchSipCredentialListMapping(openapisdk.models.operations.FetchSipCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipCredentialListMappingResponse res = new openapisdk.models.operations.FetchSipCredentialListMappingResponse() {{
            apiV2010AccountSipSipDomainSipCredentialListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipCredentialListMapping.class);
                res.apiV2010AccountSipSipDomainSipCredentialListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipDomain - Fetch an instance of a Domain
    **/
    public openapisdk.models.operations.FetchSipDomainResponse fetchSipDomain(openapisdk.models.operations.FetchSipDomainRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipDomainRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipDomainResponse res = new openapisdk.models.operations.FetchSipDomainResponse() {{
            apiV2010AccountSipSipDomain = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomain out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomain.class);
                res.apiV2010AccountSipSipDomain = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipIpAccessControlList - Fetch a specific instance of an IpAccessControlList
    **/
    public openapisdk.models.operations.FetchSipIpAccessControlListResponse fetchSipIpAccessControlList(openapisdk.models.operations.FetchSipIpAccessControlListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipIpAccessControlListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipIpAccessControlListResponse res = new openapisdk.models.operations.FetchSipIpAccessControlListResponse() {{
            apiV2010AccountSipSipIpAccessControlList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList.class);
                res.apiV2010AccountSipSipIpAccessControlList = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipIpAccessControlListMapping - Fetch an IpAccessControlListMapping resource.
    **/
    public openapisdk.models.operations.FetchSipIpAccessControlListMappingResponse fetchSipIpAccessControlListMapping(openapisdk.models.operations.FetchSipIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipIpAccessControlListMappingResponse res = new openapisdk.models.operations.FetchSipIpAccessControlListMappingResponse() {{
            apiV2010AccountSipSipDomainSipIpAccessControlListMapping = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomainSipIpAccessControlListMapping.class);
                res.apiV2010AccountSipSipDomainSipIpAccessControlListMapping = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSipIpAddress - Read one IpAddress resource.
    **/
    public openapisdk.models.operations.FetchSipIpAddressResponse fetchSipIpAddress(openapisdk.models.operations.FetchSipIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSipIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSipIpAddressResponse res = new openapisdk.models.operations.FetchSipIpAddressResponse() {{
            apiV2010AccountSipSipIpAccessControlListSipIpAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress.class);
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTranscription - Fetch an instance of a Transcription
    **/
    public openapisdk.models.operations.FetchTranscriptionResponse fetchTranscription(openapisdk.models.operations.FetchTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Transcriptions/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTranscriptionResponse res = new openapisdk.models.operations.FetchTranscriptionResponse() {{
            apiV2010AccountTranscription = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountTranscription out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountTranscription.class);
                res.apiV2010AccountTranscription = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchUsageTrigger - Fetch and instance of a usage-trigger
    **/
    public openapisdk.models.operations.FetchUsageTriggerResponse fetchUsageTrigger(openapisdk.models.operations.FetchUsageTriggerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchUsageTriggerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchUsageTriggerResponse res = new openapisdk.models.operations.FetchUsageTriggerResponse() {{
            apiV2010AccountUsageUsageTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger.class);
                res.apiV2010AccountUsageUsageTrigger = out;
            }
        }

        return res;
    }
	
	
    /**
     * listAccount - Retrieves a collection of Accounts belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListAccountResponse listAccount(openapisdk.models.operations.ListAccountRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAccountRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts.json");
        
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

        openapisdk.models.operations.ListAccountResponse res = new openapisdk.models.operations.ListAccountResponse() {{
            listAccountResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAccountListAccountResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAccountListAccountResponse.class);
                res.listAccountResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAddressResponse listAddress(openapisdk.models.operations.ListAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAddressResponse res = new openapisdk.models.operations.ListAddressResponse() {{
            listAddressResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAddressListAddressResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAddressListAddressResponse.class);
                res.listAddressResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listApplication - Retrieve a list of applications representing an application within the requesting account
    **/
    public openapisdk.models.operations.ListApplicationResponse listApplication(openapisdk.models.operations.ListApplicationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListApplicationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Applications.json", request.pathParams);
        
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

        openapisdk.models.operations.ListApplicationResponse res = new openapisdk.models.operations.ListApplicationResponse() {{
            listApplicationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListApplicationListApplicationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListApplicationListApplicationResponse.class);
                res.listApplicationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listAuthorizedConnectApp - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListAuthorizedConnectAppResponse listAuthorizedConnectApp(openapisdk.models.operations.ListAuthorizedConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAuthorizedConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AuthorizedConnectApps.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAuthorizedConnectAppResponse res = new openapisdk.models.operations.ListAuthorizedConnectAppResponse() {{
            listAuthorizedConnectAppResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAuthorizedConnectAppListAuthorizedConnectAppResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAuthorizedConnectAppListAuthorizedConnectAppResponse.class);
                res.listAuthorizedConnectAppResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberCountryResponse listAvailablePhoneNumberCountry(openapisdk.models.operations.ListAvailablePhoneNumberCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberCountryResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberCountryResponse() {{
            listAvailablePhoneNumberCountryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberCountryListAvailablePhoneNumberCountryResponse.class);
                res.listAvailablePhoneNumberCountryResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberLocalResponse listAvailablePhoneNumberLocal(openapisdk.models.operations.ListAvailablePhoneNumberLocalRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberLocalRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Local.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberLocalResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberLocalResponse() {{
            listAvailablePhoneNumberLocalResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberLocalListAvailablePhoneNumberLocalResponse.class);
                res.listAvailablePhoneNumberLocalResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineResponse listAvailablePhoneNumberMachineToMachine(openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/MachineToMachine.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineResponse() {{
            listAvailablePhoneNumberMachineToMachineResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.class);
                res.listAvailablePhoneNumberMachineToMachineResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberMobileResponse listAvailablePhoneNumberMobile(openapisdk.models.operations.ListAvailablePhoneNumberMobileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberMobileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Mobile.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberMobileResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberMobileResponse() {{
            listAvailablePhoneNumberMobileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberMobileListAvailablePhoneNumberMobileResponse.class);
                res.listAvailablePhoneNumberMobileResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberNationalResponse listAvailablePhoneNumberNational(openapisdk.models.operations.ListAvailablePhoneNumberNationalRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberNationalRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberNationalResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberNationalResponse() {{
            listAvailablePhoneNumberNationalResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberNationalListAvailablePhoneNumberNationalResponse.class);
                res.listAvailablePhoneNumberNationalResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberSharedCostResponse listAvailablePhoneNumberSharedCost(openapisdk.models.operations.ListAvailablePhoneNumberSharedCostRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberSharedCostRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberSharedCostResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberSharedCostResponse() {{
            listAvailablePhoneNumberSharedCostResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse.class);
                res.listAvailablePhoneNumberSharedCostResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberTollFreeResponse listAvailablePhoneNumberTollFree(openapisdk.models.operations.ListAvailablePhoneNumberTollFreeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberTollFreeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/TollFree.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberTollFreeResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberTollFreeResponse() {{
            listAvailablePhoneNumberTollFreeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberTollFreeListAvailablePhoneNumberTollFreeResponse.class);
                res.listAvailablePhoneNumberTollFreeResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListAvailablePhoneNumberVoipResponse listAvailablePhoneNumberVoip(openapisdk.models.operations.ListAvailablePhoneNumberVoipRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListAvailablePhoneNumberVoipRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/Voip.json", request.pathParams);
        
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

        openapisdk.models.operations.ListAvailablePhoneNumberVoipResponse res = new openapisdk.models.operations.ListAvailablePhoneNumberVoipResponse() {{
            listAvailablePhoneNumberVoipResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListAvailablePhoneNumberVoipListAvailablePhoneNumberVoipResponse.class);
                res.listAvailablePhoneNumberVoipResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCall - Retrieves a collection of calls made to and from your account
    **/
    public openapisdk.models.operations.ListCallResponse listCall(openapisdk.models.operations.ListCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls.json", request.pathParams);
        
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

        openapisdk.models.operations.ListCallResponse res = new openapisdk.models.operations.ListCallResponse() {{
            listCallResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCallListCallResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCallListCallResponse.class);
                res.listCallResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCallEvent - Retrieve a list of all events for a call.
    **/
    public openapisdk.models.operations.ListCallEventResponse listCallEvent(openapisdk.models.operations.ListCallEventRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCallEventRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json", request.pathParams);
        
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

        openapisdk.models.operations.ListCallEventResponse res = new openapisdk.models.operations.ListCallEventResponse() {{
            listCallEventResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCallEventListCallEventResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCallEventListCallEventResponse.class);
                res.listCallEventResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListCallNotificationResponse listCallNotification(openapisdk.models.operations.ListCallNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCallNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Notifications.json", request.pathParams);
        
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

        openapisdk.models.operations.ListCallNotificationResponse res = new openapisdk.models.operations.ListCallNotificationResponse() {{
            listCallNotificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCallNotificationListCallNotificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCallNotificationListCallNotificationResponse.class);
                res.listCallNotificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCallRecording - Retrieve a list of recordings belonging to the call used to make the request
    **/
    public openapisdk.models.operations.ListCallRecordingResponse listCallRecording(openapisdk.models.operations.ListCallRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCallRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListCallRecordingResponse res = new openapisdk.models.operations.ListCallRecordingResponse() {{
            listCallRecordingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCallRecordingListCallRecordingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCallRecordingListCallRecordingResponse.class);
                res.listCallRecordingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConference - Retrieve a list of conferences belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListConferenceResponse listConference(openapisdk.models.operations.ListConferenceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConferenceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences.json", request.pathParams);
        
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
     * listConferenceRecording - Retrieve a list of recordings belonging to the call used to make the request
    **/
    public openapisdk.models.operations.ListConferenceRecordingResponse listConferenceRecording(openapisdk.models.operations.ListConferenceRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConferenceRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListConferenceRecordingResponse res = new openapisdk.models.operations.ListConferenceRecordingResponse() {{
            listConferenceRecordingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConferenceRecordingListConferenceRecordingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConferenceRecordingListConferenceRecordingResponse.class);
                res.listConferenceRecordingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listConnectApp - Retrieve a list of connect-apps belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListConnectAppResponse listConnectApp(openapisdk.models.operations.ListConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/ConnectApps.json", request.pathParams);
        
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

        openapisdk.models.operations.ListConnectAppResponse res = new openapisdk.models.operations.ListConnectAppResponse() {{
            listConnectAppResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListConnectAppListConnectAppResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListConnectAppListConnectAppResponse.class);
                res.listConnectAppResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListDependentPhoneNumberResponse listDependentPhoneNumber(openapisdk.models.operations.ListDependentPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListDependentPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json", request.pathParams);
        
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

        openapisdk.models.operations.ListDependentPhoneNumberResponse res = new openapisdk.models.operations.ListDependentPhoneNumberResponse() {{
            listDependentPhoneNumberResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDependentPhoneNumberListDependentPhoneNumberResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDependentPhoneNumberListDependentPhoneNumberResponse.class);
                res.listDependentPhoneNumberResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listIncomingPhoneNumber - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
    **/
    public openapisdk.models.operations.ListIncomingPhoneNumberResponse listIncomingPhoneNumber(openapisdk.models.operations.ListIncomingPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberResponse() {{
            listIncomingPhoneNumberResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberListIncomingPhoneNumberResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberListIncomingPhoneNumberResponse.class);
                res.listIncomingPhoneNumberResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listIncomingPhoneNumberAssignedAddOn - Retrieve a list of Add-on installations currently assigned to this Number.
    **/
    public openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnResponse listIncomingPhoneNumberAssignedAddOn(openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnResponse() {{
            listIncomingPhoneNumberAssignedAddOnResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.class);
                res.listIncomingPhoneNumberAssignedAddOnResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listIncomingPhoneNumberAssignedAddOnExtension - Retrieve a list of Extensions for the Assigned Add-on.
    **/
    public openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse listIncomingPhoneNumberAssignedAddOnExtension(openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse() {{
            listIncomingPhoneNumberAssignedAddOnExtensionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.class);
                res.listIncomingPhoneNumberAssignedAddOnExtensionResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListIncomingPhoneNumberLocalResponse listIncomingPhoneNumberLocal(openapisdk.models.operations.ListIncomingPhoneNumberLocalRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberLocalRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Local.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberLocalResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberLocalResponse() {{
            listIncomingPhoneNumberLocalResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse.class);
                res.listIncomingPhoneNumberLocalResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListIncomingPhoneNumberMobileResponse listIncomingPhoneNumberMobile(openapisdk.models.operations.ListIncomingPhoneNumberMobileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberMobileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberMobileResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberMobileResponse() {{
            listIncomingPhoneNumberMobileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberMobileListIncomingPhoneNumberMobileResponse.class);
                res.listIncomingPhoneNumberMobileResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListIncomingPhoneNumberTollFreeResponse listIncomingPhoneNumberTollFree(openapisdk.models.operations.ListIncomingPhoneNumberTollFreeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListIncomingPhoneNumberTollFreeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json", request.pathParams);
        
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

        openapisdk.models.operations.ListIncomingPhoneNumberTollFreeResponse res = new openapisdk.models.operations.ListIncomingPhoneNumberTollFreeResponse() {{
            listIncomingPhoneNumberTollFreeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListIncomingPhoneNumberTollFreeListIncomingPhoneNumberTollFreeResponse.class);
                res.listIncomingPhoneNumberTollFreeResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListKeyResponse listKey(openapisdk.models.operations.ListKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Keys.json", request.pathParams);
        
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

        openapisdk.models.operations.ListKeyResponse res = new openapisdk.models.operations.ListKeyResponse() {{
            listKeyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListKeyListKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListKeyListKeyResponse.class);
                res.listKeyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMedia - Retrieve a list of Media resources belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListMediaResponse listMedia(openapisdk.models.operations.ListMediaRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMediaRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media.json", request.pathParams);
        
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

        openapisdk.models.operations.ListMediaResponse res = new openapisdk.models.operations.ListMediaResponse() {{
            listMediaResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListMediaListMediaResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListMediaListMediaResponse.class);
                res.listMediaResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listMember - Retrieve the members of the queue
    **/
    public openapisdk.models.operations.ListMemberResponse listMember(openapisdk.models.operations.ListMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json", request.pathParams);
        
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
	
	
    /**
     * listMessage - Retrieve a list of messages belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListMessageResponse listMessage(openapisdk.models.operations.ListMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages.json", request.pathParams);
        
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
	
	
    /**
     * listNotification - Retrieve a list of notifications belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListNotificationResponse listNotification(openapisdk.models.operations.ListNotificationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListNotificationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Notifications.json", request.pathParams);
        
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

        openapisdk.models.operations.ListNotificationResponse res = new openapisdk.models.operations.ListNotificationResponse() {{
            listNotificationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListNotificationListNotificationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListNotificationListNotificationResponse.class);
                res.listNotificationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listOutgoingCallerId - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListOutgoingCallerIdResponse listOutgoingCallerId(openapisdk.models.operations.ListOutgoingCallerIdRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListOutgoingCallerIdRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json", request.pathParams);
        
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

        openapisdk.models.operations.ListOutgoingCallerIdResponse res = new openapisdk.models.operations.ListOutgoingCallerIdResponse() {{
            listOutgoingCallerIdResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListOutgoingCallerIdListOutgoingCallerIdResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListOutgoingCallerIdListOutgoingCallerIdResponse.class);
                res.listOutgoingCallerIdResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listParticipant - Retrieve a list of participants belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListParticipantResponse listParticipant(openapisdk.models.operations.ListParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json", request.pathParams);
        
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

        openapisdk.models.operations.ListParticipantResponse res = new openapisdk.models.operations.ListParticipantResponse() {{
            listParticipantResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListParticipantListParticipantResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListParticipantListParticipantResponse.class);
                res.listParticipantResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listQueue - Retrieve a list of queues belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListQueueResponse listQueue(openapisdk.models.operations.ListQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues.json", request.pathParams);
        
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

        openapisdk.models.operations.ListQueueResponse res = new openapisdk.models.operations.ListQueueResponse() {{
            listQueueResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListQueueListQueueResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListQueueListQueueResponse.class);
                res.listQueueResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRecording - Retrieve a list of recordings belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListRecordingResponse listRecording(openapisdk.models.operations.ListRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings.json", request.pathParams);
        
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
	
	
    /**
     * listRecordingAddOnResult - Retrieve a list of results belonging to the recording
    **/
    public openapisdk.models.operations.ListRecordingAddOnResultResponse listRecordingAddOnResult(openapisdk.models.operations.ListRecordingAddOnResultRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRecordingAddOnResultRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults.json", request.pathParams);
        
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

        openapisdk.models.operations.ListRecordingAddOnResultResponse res = new openapisdk.models.operations.ListRecordingAddOnResultResponse() {{
            listRecordingAddOnResultResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRecordingAddOnResultListRecordingAddOnResultResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRecordingAddOnResultListRecordingAddOnResultResponse.class);
                res.listRecordingAddOnResultResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRecordingAddOnResultPayload - Retrieve a list of payloads belonging to the AddOnResult
    **/
    public openapisdk.models.operations.ListRecordingAddOnResultPayloadResponse listRecordingAddOnResultPayload(openapisdk.models.operations.ListRecordingAddOnResultPayloadRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRecordingAddOnResultPayloadRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads.json", request.pathParams);
        
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

        openapisdk.models.operations.ListRecordingAddOnResultPayloadResponse res = new openapisdk.models.operations.ListRecordingAddOnResultPayloadResponse() {{
            listRecordingAddOnResultPayloadResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse.class);
                res.listRecordingAddOnResultPayloadResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListRecordingTranscriptionResponse listRecordingTranscription(openapisdk.models.operations.ListRecordingTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRecordingTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Recordings/{RecordingSid}/Transcriptions.json", request.pathParams);
        
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

        openapisdk.models.operations.ListRecordingTranscriptionResponse res = new openapisdk.models.operations.ListRecordingTranscriptionResponse() {{
            listRecordingTranscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRecordingTranscriptionListRecordingTranscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRecordingTranscriptionListRecordingTranscriptionResponse.class);
                res.listRecordingTranscriptionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listShortCode - Retrieve a list of short-codes belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListShortCodeResponse listShortCode(openapisdk.models.operations.ListShortCodeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListShortCodeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json", request.pathParams);
        
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

        openapisdk.models.operations.ListShortCodeResponse res = new openapisdk.models.operations.ListShortCodeResponse() {{
            listShortCodeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListShortCodeListShortCodeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListShortCodeListShortCodeResponse.class);
                res.listShortCodeResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListSigningKeyResponse listSigningKey(openapisdk.models.operations.ListSigningKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSigningKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SigningKeys.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSigningKeyResponse res = new openapisdk.models.operations.ListSigningKeyResponse() {{
            listSigningKeyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSigningKeyListSigningKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSigningKeyListSigningKeyResponse.class);
                res.listSigningKeyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipAuthCallsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
    **/
    public openapisdk.models.operations.ListSipAuthCallsCredentialListMappingResponse listSipAuthCallsCredentialListMapping(openapisdk.models.operations.ListSipAuthCallsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipAuthCallsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipAuthCallsCredentialListMappingResponse res = new openapisdk.models.operations.ListSipAuthCallsCredentialListMappingResponse() {{
            listSipAuthCallsCredentialListMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipAuthCallsCredentialListMappingListSipAuthCallsCredentialListMappingResponse.class);
                res.listSipAuthCallsCredentialListMappingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipAuthCallsIpAccessControlListMapping - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
    **/
    public openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingResponse listSipAuthCallsIpAccessControlListMapping(openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingResponse res = new openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingResponse() {{
            listSipAuthCallsIpAccessControlListMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipAuthCallsIpAccessControlListMappingListSipAuthCallsIpAccessControlListMappingResponse.class);
                res.listSipAuthCallsIpAccessControlListMappingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipAuthRegistrationsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
    **/
    public openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingResponse listSipAuthRegistrationsCredentialListMapping(openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingResponse res = new openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingResponse() {{
            listSipAuthRegistrationsCredentialListMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipAuthRegistrationsCredentialListMappingListSipAuthRegistrationsCredentialListMappingResponse.class);
                res.listSipAuthRegistrationsCredentialListMappingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipCredential - Retrieve a list of credentials.
    **/
    public openapisdk.models.operations.ListSipCredentialResponse listSipCredential(openapisdk.models.operations.ListSipCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipCredentialResponse res = new openapisdk.models.operations.ListSipCredentialResponse() {{
            listSipCredentialResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipCredentialListSipCredentialResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipCredentialListSipCredentialResponse.class);
                res.listSipCredentialResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipCredentialList - Get All Credential Lists
    **/
    public openapisdk.models.operations.ListSipCredentialListResponse listSipCredentialList(openapisdk.models.operations.ListSipCredentialListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipCredentialListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipCredentialListResponse res = new openapisdk.models.operations.ListSipCredentialListResponse() {{
            listSipCredentialListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipCredentialListListSipCredentialListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipCredentialListListSipCredentialListResponse.class);
                res.listSipCredentialListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipCredentialListMapping - Read multiple CredentialListMapping resources from an account.
    **/
    public openapisdk.models.operations.ListSipCredentialListMappingResponse listSipCredentialListMapping(openapisdk.models.operations.ListSipCredentialListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipCredentialListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipCredentialListMappingResponse res = new openapisdk.models.operations.ListSipCredentialListMappingResponse() {{
            listSipCredentialListMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipCredentialListMappingListSipCredentialListMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipCredentialListMappingListSipCredentialListMappingResponse.class);
                res.listSipCredentialListMappingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipDomain - Retrieve a list of domains belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListSipDomainResponse listSipDomain(openapisdk.models.operations.ListSipDomainRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipDomainRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipDomainResponse res = new openapisdk.models.operations.ListSipDomainResponse() {{
            listSipDomainResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipDomainListSipDomainResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipDomainListSipDomainResponse.class);
                res.listSipDomainResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipIpAccessControlList - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
    **/
    public openapisdk.models.operations.ListSipIpAccessControlListResponse listSipIpAccessControlList(openapisdk.models.operations.ListSipIpAccessControlListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipIpAccessControlListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipIpAccessControlListResponse res = new openapisdk.models.operations.ListSipIpAccessControlListResponse() {{
            listSipIpAccessControlListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipIpAccessControlListListSipIpAccessControlListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipIpAccessControlListListSipIpAccessControlListResponse.class);
                res.listSipIpAccessControlListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipIpAccessControlListMapping - Retrieve a list of IpAccessControlListMapping resources.
    **/
    public openapisdk.models.operations.ListSipIpAccessControlListMappingResponse listSipIpAccessControlListMapping(openapisdk.models.operations.ListSipIpAccessControlListMappingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipIpAccessControlListMappingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipIpAccessControlListMappingResponse res = new openapisdk.models.operations.ListSipIpAccessControlListMappingResponse() {{
            listSipIpAccessControlListMappingResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipIpAccessControlListMappingListSipIpAccessControlListMappingResponse.class);
                res.listSipIpAccessControlListMappingResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSipIpAddress - Read multiple IpAddress resources.
    **/
    public openapisdk.models.operations.ListSipIpAddressResponse listSipIpAddress(openapisdk.models.operations.ListSipIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSipIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json", request.pathParams);
        
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

        openapisdk.models.operations.ListSipIpAddressResponse res = new openapisdk.models.operations.ListSipIpAddressResponse() {{
            listSipIpAddressResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipIpAddressListSipIpAddressResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipIpAddressListSipIpAddressResponse.class);
                res.listSipIpAddressResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTranscription - Retrieve a list of transcriptions belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListTranscriptionResponse listTranscription(openapisdk.models.operations.ListTranscriptionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTranscriptionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Transcriptions.json", request.pathParams);
        
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

        openapisdk.models.operations.ListTranscriptionResponse res = new openapisdk.models.operations.ListTranscriptionResponse() {{
            listTranscriptionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTranscriptionListTranscriptionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTranscriptionListTranscriptionResponse.class);
                res.listTranscriptionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listUsageRecord - Retrieve a list of usage-records belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListUsageRecordResponse listUsageRecord(openapisdk.models.operations.ListUsageRecordRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordResponse res = new openapisdk.models.operations.ListUsageRecordResponse() {{
            listUsageRecordResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordListUsageRecordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordListUsageRecordResponse.class);
                res.listUsageRecordResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordAllTimeResponse listUsageRecordAllTime(openapisdk.models.operations.ListUsageRecordAllTimeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordAllTimeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordAllTimeResponse res = new openapisdk.models.operations.ListUsageRecordAllTimeResponse() {{
            listUsageRecordAllTimeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordAllTimeListUsageRecordAllTimeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordAllTimeListUsageRecordAllTimeResponse.class);
                res.listUsageRecordAllTimeResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordDailyResponse listUsageRecordDaily(openapisdk.models.operations.ListUsageRecordDailyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordDailyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Daily.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordDailyResponse res = new openapisdk.models.operations.ListUsageRecordDailyResponse() {{
            listUsageRecordDailyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordDailyListUsageRecordDailyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordDailyListUsageRecordDailyResponse.class);
                res.listUsageRecordDailyResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordLastMonthResponse listUsageRecordLastMonth(openapisdk.models.operations.ListUsageRecordLastMonthRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordLastMonthRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/LastMonth.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordLastMonthResponse res = new openapisdk.models.operations.ListUsageRecordLastMonthResponse() {{
            listUsageRecordLastMonthResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordLastMonthListUsageRecordLastMonthResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordLastMonthListUsageRecordLastMonthResponse.class);
                res.listUsageRecordLastMonthResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordMonthlyResponse listUsageRecordMonthly(openapisdk.models.operations.ListUsageRecordMonthlyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordMonthlyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordMonthlyResponse res = new openapisdk.models.operations.ListUsageRecordMonthlyResponse() {{
            listUsageRecordMonthlyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordMonthlyListUsageRecordMonthlyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordMonthlyListUsageRecordMonthlyResponse.class);
                res.listUsageRecordMonthlyResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordThisMonthResponse listUsageRecordThisMonth(openapisdk.models.operations.ListUsageRecordThisMonthRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordThisMonthRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/ThisMonth.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordThisMonthResponse res = new openapisdk.models.operations.ListUsageRecordThisMonthResponse() {{
            listUsageRecordThisMonthResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordThisMonthListUsageRecordThisMonthResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordThisMonthListUsageRecordThisMonthResponse.class);
                res.listUsageRecordThisMonthResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordTodayResponse listUsageRecordToday(openapisdk.models.operations.ListUsageRecordTodayRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordTodayRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Today.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordTodayResponse res = new openapisdk.models.operations.ListUsageRecordTodayResponse() {{
            listUsageRecordTodayResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordTodayListUsageRecordTodayResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordTodayListUsageRecordTodayResponse.class);
                res.listUsageRecordTodayResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordYearlyResponse listUsageRecordYearly(openapisdk.models.operations.ListUsageRecordYearlyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordYearlyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yearly.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordYearlyResponse res = new openapisdk.models.operations.ListUsageRecordYearlyResponse() {{
            listUsageRecordYearlyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordYearlyListUsageRecordYearlyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordYearlyListUsageRecordYearlyResponse.class);
                res.listUsageRecordYearlyResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListUsageRecordYesterdayResponse listUsageRecordYesterday(openapisdk.models.operations.ListUsageRecordYesterdayRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageRecordYesterdayRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageRecordYesterdayResponse res = new openapisdk.models.operations.ListUsageRecordYesterdayResponse() {{
            listUsageRecordYesterdayResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageRecordYesterdayListUsageRecordYesterdayResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageRecordYesterdayListUsageRecordYesterdayResponse.class);
                res.listUsageRecordYesterdayResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listUsageTrigger - Retrieve a list of usage-triggers belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListUsageTriggerResponse listUsageTrigger(openapisdk.models.operations.ListUsageTriggerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListUsageTriggerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json", request.pathParams);
        
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

        openapisdk.models.operations.ListUsageTriggerResponse res = new openapisdk.models.operations.ListUsageTriggerResponse() {{
            listUsageTriggerResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListUsageTriggerListUsageTriggerResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListUsageTriggerListUsageTriggerResponse.class);
                res.listUsageTriggerResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateAccount - Modify the properties of a given Account
    **/
    public openapisdk.models.operations.UpdateAccountResponse updateAccount(openapisdk.models.operations.UpdateAccountRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAccountRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAccountResponse res = new openapisdk.models.operations.UpdateAccountResponse() {{
            apiV2010Account = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010Account out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010Account.class);
                res.apiV2010Account = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateAddressResponse updateAddress(openapisdk.models.operations.UpdateAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAddressResponse res = new openapisdk.models.operations.UpdateAddressResponse() {{
            apiV2010AccountAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountAddress.class);
                res.apiV2010AccountAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateApplication - Updates the application's properties
    **/
    public openapisdk.models.operations.UpdateApplicationResponse updateApplication(openapisdk.models.operations.UpdateApplicationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateApplicationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateApplicationResponse res = new openapisdk.models.operations.UpdateApplicationResponse() {{
            apiV2010AccountApplication = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountApplication out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountApplication.class);
                res.apiV2010AccountApplication = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCall - Initiates a call redirect or terminates a call
    **/
    public openapisdk.models.operations.UpdateCallResponse updateCall(openapisdk.models.operations.UpdateCallRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCallRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCallResponse res = new openapisdk.models.operations.UpdateCallResponse() {{
            apiV2010AccountCall = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCall out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCall.class);
                res.apiV2010AccountCall = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCallFeedback - Update a Feedback resource for a call
    **/
    public openapisdk.models.operations.UpdateCallFeedbackResponse updateCallFeedback(openapisdk.models.operations.UpdateCallFeedbackRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCallFeedbackRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Feedback.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCallFeedbackResponse res = new openapisdk.models.operations.UpdateCallFeedbackResponse() {{
            apiV2010AccountCallCallFeedback = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallFeedback out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallFeedback.class);
                res.apiV2010AccountCallCallFeedback = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCallRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
    **/
    public openapisdk.models.operations.UpdateCallRecordingResponse updateCallRecording(openapisdk.models.operations.UpdateCallRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCallRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCallRecordingResponse res = new openapisdk.models.operations.UpdateCallRecordingResponse() {{
            apiV2010AccountCallCallRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallCallRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallCallRecording.class);
                res.apiV2010AccountCallCallRecording = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateConferenceResponse updateConference(openapisdk.models.operations.UpdateConferenceRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConferenceRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConferenceResponse res = new openapisdk.models.operations.UpdateConferenceResponse() {{
            apiV2010AccountConference = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConference out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConference.class);
                res.apiV2010AccountConference = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConferenceRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
    **/
    public openapisdk.models.operations.UpdateConferenceRecordingResponse updateConferenceRecording(openapisdk.models.operations.UpdateConferenceRecordingRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConferenceRecordingRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Recordings/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConferenceRecordingResponse res = new openapisdk.models.operations.UpdateConferenceRecordingResponse() {{
            apiV2010AccountConferenceConferenceRecording = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConferenceConferenceRecording.class);
                res.apiV2010AccountConferenceConferenceRecording = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateConnectApp - Update a connect-app with the specified parameters
    **/
    public openapisdk.models.operations.UpdateConnectAppResponse updateConnectApp(openapisdk.models.operations.UpdateConnectAppRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateConnectAppRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateConnectAppResponse res = new openapisdk.models.operations.UpdateConnectAppResponse() {{
            apiV2010AccountConnectApp = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConnectApp out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConnectApp.class);
                res.apiV2010AccountConnectApp = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateIncomingPhoneNumber - Update an incoming-phone-number instance.
    **/
    public openapisdk.models.operations.UpdateIncomingPhoneNumberResponse updateIncomingPhoneNumber(openapisdk.models.operations.UpdateIncomingPhoneNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateIncomingPhoneNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateIncomingPhoneNumberResponse res = new openapisdk.models.operations.UpdateIncomingPhoneNumberResponse() {{
            apiV2010AccountIncomingPhoneNumber = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountIncomingPhoneNumber.class);
                res.apiV2010AccountIncomingPhoneNumber = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateKeyResponse updateKey(openapisdk.models.operations.UpdateKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Keys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateKeyResponse res = new openapisdk.models.operations.UpdateKeyResponse() {{
            apiV2010AccountKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountKey.class);
                res.apiV2010AccountKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMember - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
    **/
    public openapisdk.models.operations.UpdateMemberResponse updateMember(openapisdk.models.operations.UpdateMemberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMemberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMemberResponse res = new openapisdk.models.operations.UpdateMemberResponse() {{
            apiV2010AccountQueueMember = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountQueueMember out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountQueueMember.class);
                res.apiV2010AccountQueueMember = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateMessage - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
    **/
    public openapisdk.models.operations.UpdateMessageResponse updateMessage(openapisdk.models.operations.UpdateMessageRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateMessageRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateMessageResponse res = new openapisdk.models.operations.UpdateMessageResponse() {{
            apiV2010AccountMessage = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountMessage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountMessage.class);
                res.apiV2010AccountMessage = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOutgoingCallerId - Updates the caller-id
    **/
    public openapisdk.models.operations.UpdateOutgoingCallerIdResponse updateOutgoingCallerId(openapisdk.models.operations.UpdateOutgoingCallerIdRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateOutgoingCallerIdRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOutgoingCallerIdResponse res = new openapisdk.models.operations.UpdateOutgoingCallerIdResponse() {{
            apiV2010AccountOutgoingCallerId = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountOutgoingCallerId out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountOutgoingCallerId.class);
                res.apiV2010AccountOutgoingCallerId = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateParticipant - Update the properties of the participant
    **/
    public openapisdk.models.operations.UpdateParticipantResponse updateParticipant(openapisdk.models.operations.UpdateParticipantRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateParticipantRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateParticipantResponse res = new openapisdk.models.operations.UpdateParticipantResponse() {{
            apiV2010AccountConferenceParticipant = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountConferenceParticipant out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountConferenceParticipant.class);
                res.apiV2010AccountConferenceParticipant = out;
            }
        }

        return res;
    }
	
	
    /**
     * updatePayments - update an instance of payments with different phases of payment flows.
    **/
    public openapisdk.models.operations.UpdatePaymentsResponse updatePayments(openapisdk.models.operations.UpdatePaymentsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdatePaymentsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdatePaymentsResponse res = new openapisdk.models.operations.UpdatePaymentsResponse() {{
            apiV2010AccountCallPayments = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallPayments out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallPayments.class);
                res.apiV2010AccountCallPayments = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateQueue - Update the queue with the new parameters
    **/
    public openapisdk.models.operations.UpdateQueueResponse updateQueue(openapisdk.models.operations.UpdateQueueRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateQueueRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Queues/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateQueueResponse res = new openapisdk.models.operations.UpdateQueueResponse() {{
            apiV2010AccountQueue = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountQueue out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountQueue.class);
                res.apiV2010AccountQueue = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateShortCode - Update a short code with the following parameters
    **/
    public openapisdk.models.operations.UpdateShortCodeResponse updateShortCode(openapisdk.models.operations.UpdateShortCodeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateShortCodeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateShortCodeResponse res = new openapisdk.models.operations.UpdateShortCodeResponse() {{
            apiV2010AccountShortCode = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountShortCode out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountShortCode.class);
                res.apiV2010AccountShortCode = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UpdateSigningKeyResponse updateSigningKey(openapisdk.models.operations.UpdateSigningKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSigningKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSigningKeyResponse res = new openapisdk.models.operations.UpdateSigningKeyResponse() {{
            apiV2010AccountSigningKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSigningKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSigningKey.class);
                res.apiV2010AccountSigningKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSipCredential - Update a credential resource.
    **/
    public openapisdk.models.operations.UpdateSipCredentialResponse updateSipCredential(openapisdk.models.operations.UpdateSipCredentialRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSipCredentialRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSipCredentialResponse res = new openapisdk.models.operations.UpdateSipCredentialResponse() {{
            apiV2010AccountSipSipCredentialListSipCredential = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialListSipCredential.class);
                res.apiV2010AccountSipSipCredentialListSipCredential = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSipCredentialList - Update a Credential List
    **/
    public openapisdk.models.operations.UpdateSipCredentialListResponse updateSipCredentialList(openapisdk.models.operations.UpdateSipCredentialListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSipCredentialListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSipCredentialListResponse res = new openapisdk.models.operations.UpdateSipCredentialListResponse() {{
            apiV2010AccountSipSipCredentialList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipCredentialList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipCredentialList.class);
                res.apiV2010AccountSipSipCredentialList = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSipDomain - Update the attributes of a domain
    **/
    public openapisdk.models.operations.UpdateSipDomainResponse updateSipDomain(openapisdk.models.operations.UpdateSipDomainRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSipDomainRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSipDomainResponse res = new openapisdk.models.operations.UpdateSipDomainResponse() {{
            apiV2010AccountSipSipDomain = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipDomain out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipDomain.class);
                res.apiV2010AccountSipSipDomain = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSipIpAccessControlList - Rename an IpAccessControlList
    **/
    public openapisdk.models.operations.UpdateSipIpAccessControlListResponse updateSipIpAccessControlList(openapisdk.models.operations.UpdateSipIpAccessControlListRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSipIpAccessControlListRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSipIpAccessControlListResponse res = new openapisdk.models.operations.UpdateSipIpAccessControlListResponse() {{
            apiV2010AccountSipSipIpAccessControlList = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlList.class);
                res.apiV2010AccountSipSipIpAccessControlList = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSipIpAddress - Update an IpAddress resource.
    **/
    public openapisdk.models.operations.UpdateSipIpAddressResponse updateSipIpAddress(openapisdk.models.operations.UpdateSipIpAddressRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSipIpAddressRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSipIpAddressResponse res = new openapisdk.models.operations.UpdateSipIpAddressResponse() {{
            apiV2010AccountSipSipIpAccessControlListSipIpAddress = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountSipSipIpAccessControlListSipIpAddress.class);
                res.apiV2010AccountSipSipIpAccessControlListSipIpAddress = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSiprec - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
    **/
    public openapisdk.models.operations.UpdateSiprecResponse updateSiprec(openapisdk.models.operations.UpdateSiprecRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSiprecRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSiprecResponse res = new openapisdk.models.operations.UpdateSiprecResponse() {{
            apiV2010AccountCallSiprec = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallSiprec out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallSiprec.class);
                res.apiV2010AccountCallSiprec = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateStream - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
    **/
    public openapisdk.models.operations.UpdateStreamResponse updateStream(openapisdk.models.operations.UpdateStreamRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateStreamRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateStreamResponse res = new openapisdk.models.operations.UpdateStreamResponse() {{
            apiV2010AccountCallStream = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountCallStream out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountCallStream.class);
                res.apiV2010AccountCallStream = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateUsageTrigger - Update an instance of a usage trigger
    **/
    public openapisdk.models.operations.UpdateUsageTriggerResponse updateUsageTrigger(openapisdk.models.operations.UpdateUsageTriggerRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateUsageTriggerRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUsageTriggerResponse res = new openapisdk.models.operations.UpdateUsageTriggerResponse() {{
            apiV2010AccountUsageUsageTrigger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiV2010AccountUsageUsageTrigger.class);
                res.apiV2010AccountUsageUsageTrigger = out;
            }
        }

        return res;
    }
	
}