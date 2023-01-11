

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
		"https://trusthub.twilio.com",
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
     * createCustomerProfile - Create a new Customer-Profile.
    **/
    public openapisdk.models.operations.CreateCustomerProfileResponse createCustomerProfile(openapisdk.models.operations.CreateCustomerProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCustomerProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCustomerProfileResponse res = new openapisdk.models.operations.CreateCustomerProfileResponse() {{
            trusthubV1CustomerProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfile.class);
                res.trusthubV1CustomerProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCustomerProfileChannelEndpointAssignment - Create a new Assigned Item.
    **/
    public openapisdk.models.operations.CreateCustomerProfileChannelEndpointAssignmentResponse createCustomerProfileChannelEndpointAssignment(openapisdk.models.operations.CreateCustomerProfileChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCustomerProfileChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCustomerProfileChannelEndpointAssignmentResponse res = new openapisdk.models.operations.CreateCustomerProfileChannelEndpointAssignmentResponse() {{
            trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment.class);
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCustomerProfileEntityAssignment - Create a new Assigned Item.
    **/
    public openapisdk.models.operations.CreateCustomerProfileEntityAssignmentResponse createCustomerProfileEntityAssignment(openapisdk.models.operations.CreateCustomerProfileEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCustomerProfileEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCustomerProfileEntityAssignmentResponse res = new openapisdk.models.operations.CreateCustomerProfileEntityAssignmentResponse() {{
            trusthubV1CustomerProfileCustomerProfileEntityAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment.class);
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCustomerProfileEvaluation - Create a new Evaluation
    **/
    public openapisdk.models.operations.CreateCustomerProfileEvaluationResponse createCustomerProfileEvaluation(openapisdk.models.operations.CreateCustomerProfileEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCustomerProfileEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCustomerProfileEvaluationResponse res = new openapisdk.models.operations.CreateCustomerProfileEvaluationResponse() {{
            trusthubV1CustomerProfileCustomerProfileEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation.class);
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * createEndUser - Create a new End User.
    **/
    public openapisdk.models.operations.CreateEndUserResponse createEndUser(openapisdk.models.operations.CreateEndUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEndUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUsers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEndUserResponse res = new openapisdk.models.operations.CreateEndUserResponse() {{
            trusthubV1EndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1EndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1EndUser.class);
                res.trusthubV1EndUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSupportingDocument - Create a new Supporting Document.
    **/
    public openapisdk.models.operations.CreateSupportingDocumentResponse createSupportingDocument(openapisdk.models.operations.CreateSupportingDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSupportingDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocuments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSupportingDocumentResponse res = new openapisdk.models.operations.CreateSupportingDocumentResponse() {{
            trusthubV1SupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1SupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1SupportingDocument.class);
                res.trusthubV1SupportingDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * createTrustProduct - Create a new Customer-Profile.
    **/
    public openapisdk.models.operations.CreateTrustProductResponse createTrustProduct(openapisdk.models.operations.CreateTrustProductRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTrustProductRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTrustProductResponse res = new openapisdk.models.operations.CreateTrustProductResponse() {{
            trusthubV1TrustProduct = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProduct out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProduct.class);
                res.trusthubV1TrustProduct = out;
            }
        }

        return res;
    }
	
	
    /**
     * createTrustProductChannelEndpointAssignment - Create a new Assigned Item.
    **/
    public openapisdk.models.operations.CreateTrustProductChannelEndpointAssignmentResponse createTrustProductChannelEndpointAssignment(openapisdk.models.operations.CreateTrustProductChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTrustProductChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTrustProductChannelEndpointAssignmentResponse res = new openapisdk.models.operations.CreateTrustProductChannelEndpointAssignmentResponse() {{
            trusthubV1TrustProductTrustProductChannelEndpointAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment.class);
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createTrustProductEntityAssignment - Create a new Assigned Item.
    **/
    public openapisdk.models.operations.CreateTrustProductEntityAssignmentResponse createTrustProductEntityAssignment(openapisdk.models.operations.CreateTrustProductEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTrustProductEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTrustProductEntityAssignmentResponse res = new openapisdk.models.operations.CreateTrustProductEntityAssignmentResponse() {{
            trusthubV1TrustProductTrustProductEntityAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment.class);
                res.trusthubV1TrustProductTrustProductEntityAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createTrustProductEvaluation - Create a new Evaluation
    **/
    public openapisdk.models.operations.CreateTrustProductEvaluationResponse createTrustProductEvaluation(openapisdk.models.operations.CreateTrustProductEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateTrustProductEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateTrustProductEvaluationResponse res = new openapisdk.models.operations.CreateTrustProductEvaluationResponse() {{
            trusthubV1TrustProductTrustProductEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation.class);
                res.trusthubV1TrustProductTrustProductEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteCustomerProfile - Delete a specific Customer-Profile.
    **/
    public openapisdk.models.operations.DeleteCustomerProfileResponse deleteCustomerProfile(openapisdk.models.operations.DeleteCustomerProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCustomerProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCustomerProfileResponse res = new openapisdk.models.operations.DeleteCustomerProfileResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCustomerProfileChannelEndpointAssignment - Remove an Assignment Item Instance.
    **/
    public openapisdk.models.operations.DeleteCustomerProfileChannelEndpointAssignmentResponse deleteCustomerProfileChannelEndpointAssignment(openapisdk.models.operations.DeleteCustomerProfileChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCustomerProfileChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCustomerProfileChannelEndpointAssignmentResponse res = new openapisdk.models.operations.DeleteCustomerProfileChannelEndpointAssignmentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCustomerProfileEntityAssignment - Remove an Assignment Item Instance.
    **/
    public openapisdk.models.operations.DeleteCustomerProfileEntityAssignmentResponse deleteCustomerProfileEntityAssignment(openapisdk.models.operations.DeleteCustomerProfileEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCustomerProfileEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCustomerProfileEntityAssignmentResponse res = new openapisdk.models.operations.DeleteCustomerProfileEntityAssignmentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteEndUser - Delete a specific End User.
    **/
    public openapisdk.models.operations.DeleteEndUserResponse deleteEndUser(openapisdk.models.operations.DeleteEndUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteEndUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUsers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteEndUserResponse res = new openapisdk.models.operations.DeleteEndUserResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSupportingDocument - Delete a specific Supporting Document.
    **/
    public openapisdk.models.operations.DeleteSupportingDocumentResponse deleteSupportingDocument(openapisdk.models.operations.DeleteSupportingDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSupportingDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSupportingDocumentResponse res = new openapisdk.models.operations.DeleteSupportingDocumentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteTrustProduct - Delete a specific Customer-Profile.
    **/
    public openapisdk.models.operations.DeleteTrustProductResponse deleteTrustProduct(openapisdk.models.operations.DeleteTrustProductRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTrustProductRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTrustProductResponse res = new openapisdk.models.operations.DeleteTrustProductResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteTrustProductChannelEndpointAssignment - Remove an Assignment Item Instance.
    **/
    public openapisdk.models.operations.DeleteTrustProductChannelEndpointAssignmentResponse deleteTrustProductChannelEndpointAssignment(openapisdk.models.operations.DeleteTrustProductChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTrustProductChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTrustProductChannelEndpointAssignmentResponse res = new openapisdk.models.operations.DeleteTrustProductChannelEndpointAssignmentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteTrustProductEntityAssignment - Remove an Assignment Item Instance.
    **/
    public openapisdk.models.operations.DeleteTrustProductEntityAssignmentResponse deleteTrustProductEntityAssignment(openapisdk.models.operations.DeleteTrustProductEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteTrustProductEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteTrustProductEntityAssignmentResponse res = new openapisdk.models.operations.DeleteTrustProductEntityAssignmentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchCustomerProfile - Fetch a specific Customer-Profile instance.
    **/
    public openapisdk.models.operations.FetchCustomerProfileResponse fetchCustomerProfile(openapisdk.models.operations.FetchCustomerProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCustomerProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCustomerProfileResponse res = new openapisdk.models.operations.FetchCustomerProfileResponse() {{
            trusthubV1CustomerProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfile.class);
                res.trusthubV1CustomerProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCustomerProfileChannelEndpointAssignment - Fetch specific Assigned Item Instance.
    **/
    public openapisdk.models.operations.FetchCustomerProfileChannelEndpointAssignmentResponse fetchCustomerProfileChannelEndpointAssignment(openapisdk.models.operations.FetchCustomerProfileChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCustomerProfileChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCustomerProfileChannelEndpointAssignmentResponse res = new openapisdk.models.operations.FetchCustomerProfileChannelEndpointAssignmentResponse() {{
            trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment.class);
                res.trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCustomerProfileEntityAssignment - Fetch specific Assigned Item Instance.
    **/
    public openapisdk.models.operations.FetchCustomerProfileEntityAssignmentResponse fetchCustomerProfileEntityAssignment(openapisdk.models.operations.FetchCustomerProfileEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCustomerProfileEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCustomerProfileEntityAssignmentResponse res = new openapisdk.models.operations.FetchCustomerProfileEntityAssignmentResponse() {{
            trusthubV1CustomerProfileCustomerProfileEntityAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEntityAssignment.class);
                res.trusthubV1CustomerProfileCustomerProfileEntityAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCustomerProfileEvaluation - Fetch specific Evaluation Instance.
    **/
    public openapisdk.models.operations.FetchCustomerProfileEvaluationResponse fetchCustomerProfileEvaluation(openapisdk.models.operations.FetchCustomerProfileEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCustomerProfileEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCustomerProfileEvaluationResponse res = new openapisdk.models.operations.FetchCustomerProfileEvaluationResponse() {{
            trusthubV1CustomerProfileCustomerProfileEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfileCustomerProfileEvaluation.class);
                res.trusthubV1CustomerProfileCustomerProfileEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEndUser - Fetch specific End User Instance.
    **/
    public openapisdk.models.operations.FetchEndUserResponse fetchEndUser(openapisdk.models.operations.FetchEndUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEndUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUsers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEndUserResponse res = new openapisdk.models.operations.FetchEndUserResponse() {{
            trusthubV1EndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1EndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1EndUser.class);
                res.trusthubV1EndUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEndUserType - Fetch a specific End-User Type Instance.
    **/
    public openapisdk.models.operations.FetchEndUserTypeResponse fetchEndUserType(openapisdk.models.operations.FetchEndUserTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEndUserTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUserTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEndUserTypeResponse res = new openapisdk.models.operations.FetchEndUserTypeResponse() {{
            trusthubV1EndUserType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1EndUserType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1EndUserType.class);
                res.trusthubV1EndUserType = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchPolicies - Fetch specific Policy Instance.
    **/
    public openapisdk.models.operations.FetchPoliciesResponse fetchPolicies(openapisdk.models.operations.FetchPoliciesRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchPoliciesRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Policies/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchPoliciesResponse res = new openapisdk.models.operations.FetchPoliciesResponse() {{
            trusthubV1Policies = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1Policies out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1Policies.class);
                res.trusthubV1Policies = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSupportingDocument - Fetch specific Supporting Document Instance.
    **/
    public openapisdk.models.operations.FetchSupportingDocumentResponse fetchSupportingDocument(openapisdk.models.operations.FetchSupportingDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSupportingDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSupportingDocumentResponse res = new openapisdk.models.operations.FetchSupportingDocumentResponse() {{
            trusthubV1SupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1SupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1SupportingDocument.class);
                res.trusthubV1SupportingDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchSupportingDocumentType - Fetch a specific Supporting Document Type Instance.
    **/
    public openapisdk.models.operations.FetchSupportingDocumentTypeResponse fetchSupportingDocumentType(openapisdk.models.operations.FetchSupportingDocumentTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchSupportingDocumentTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocumentTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSupportingDocumentTypeResponse res = new openapisdk.models.operations.FetchSupportingDocumentTypeResponse() {{
            trusthubV1SupportingDocumentType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1SupportingDocumentType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1SupportingDocumentType.class);
                res.trusthubV1SupportingDocumentType = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTrustProduct - Fetch a specific Customer-Profile instance.
    **/
    public openapisdk.models.operations.FetchTrustProductResponse fetchTrustProduct(openapisdk.models.operations.FetchTrustProductRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrustProductRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTrustProductResponse res = new openapisdk.models.operations.FetchTrustProductResponse() {{
            trusthubV1TrustProduct = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProduct out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProduct.class);
                res.trusthubV1TrustProduct = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTrustProductChannelEndpointAssignment - Fetch specific Assigned Item Instance.
    **/
    public openapisdk.models.operations.FetchTrustProductChannelEndpointAssignmentResponse fetchTrustProductChannelEndpointAssignment(openapisdk.models.operations.FetchTrustProductChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrustProductChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTrustProductChannelEndpointAssignmentResponse res = new openapisdk.models.operations.FetchTrustProductChannelEndpointAssignmentResponse() {{
            trusthubV1TrustProductTrustProductChannelEndpointAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment.class);
                res.trusthubV1TrustProductTrustProductChannelEndpointAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTrustProductEntityAssignment - Fetch specific Assigned Item Instance.
    **/
    public openapisdk.models.operations.FetchTrustProductEntityAssignmentResponse fetchTrustProductEntityAssignment(openapisdk.models.operations.FetchTrustProductEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrustProductEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTrustProductEntityAssignmentResponse res = new openapisdk.models.operations.FetchTrustProductEntityAssignmentResponse() {{
            trusthubV1TrustProductTrustProductEntityAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductEntityAssignment.class);
                res.trusthubV1TrustProductTrustProductEntityAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTrustProductEvaluation - Fetch specific Evaluation Instance.
    **/
    public openapisdk.models.operations.FetchTrustProductEvaluationResponse fetchTrustProductEvaluation(openapisdk.models.operations.FetchTrustProductEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrustProductEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTrustProductEvaluationResponse res = new openapisdk.models.operations.FetchTrustProductEvaluationResponse() {{
            trusthubV1TrustProductTrustProductEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProductTrustProductEvaluation.class);
                res.trusthubV1TrustProductTrustProductEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCustomerProfile - Retrieve a list of all Customer-Profiles for an account.
    **/
    public openapisdk.models.operations.ListCustomerProfileResponse listCustomerProfile(openapisdk.models.operations.ListCustomerProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCustomerProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles");
        
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

        openapisdk.models.operations.ListCustomerProfileResponse res = new openapisdk.models.operations.ListCustomerProfileResponse() {{
            listCustomerProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCustomerProfileListCustomerProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCustomerProfileListCustomerProfileResponse.class);
                res.listCustomerProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCustomerProfileChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    public openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentResponse listCustomerProfileChannelEndpointAssignment(openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments", request.pathParams);
        
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

        openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentResponse res = new openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentResponse() {{
            listCustomerProfileChannelEndpointAssignmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCustomerProfileChannelEndpointAssignmentListCustomerProfileChannelEndpointAssignmentResponse.class);
                res.listCustomerProfileChannelEndpointAssignmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCustomerProfileEntityAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    public openapisdk.models.operations.ListCustomerProfileEntityAssignmentResponse listCustomerProfileEntityAssignment(openapisdk.models.operations.ListCustomerProfileEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCustomerProfileEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments", request.pathParams);
        
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

        openapisdk.models.operations.ListCustomerProfileEntityAssignmentResponse res = new openapisdk.models.operations.ListCustomerProfileEntityAssignmentResponse() {{
            listCustomerProfileEntityAssignmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCustomerProfileEntityAssignmentListCustomerProfileEntityAssignmentResponse.class);
                res.listCustomerProfileEntityAssignmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCustomerProfileEvaluation - Retrieve a list of Evaluations associated to the customer_profile resource.
    **/
    public openapisdk.models.operations.ListCustomerProfileEvaluationResponse listCustomerProfileEvaluation(openapisdk.models.operations.ListCustomerProfileEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCustomerProfileEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations", request.pathParams);
        
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

        openapisdk.models.operations.ListCustomerProfileEvaluationResponse res = new openapisdk.models.operations.ListCustomerProfileEvaluationResponse() {{
            listCustomerProfileEvaluationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse.class);
                res.listCustomerProfileEvaluationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEndUser - Retrieve a list of all End User for an account.
    **/
    public openapisdk.models.operations.ListEndUserResponse listEndUser(openapisdk.models.operations.ListEndUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEndUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUsers");
        
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

        openapisdk.models.operations.ListEndUserResponse res = new openapisdk.models.operations.ListEndUserResponse() {{
            listEndUserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEndUserListEndUserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEndUserListEndUserResponse.class);
                res.listEndUserResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listEndUserType - Retrieve a list of all End-User Types.
    **/
    public openapisdk.models.operations.ListEndUserTypeResponse listEndUserType(openapisdk.models.operations.ListEndUserTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEndUserTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUserTypes");
        
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

        openapisdk.models.operations.ListEndUserTypeResponse res = new openapisdk.models.operations.ListEndUserTypeResponse() {{
            listEndUserTypeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEndUserTypeListEndUserTypeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEndUserTypeListEndUserTypeResponse.class);
                res.listEndUserTypeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listPolicies - Retrieve a list of all Policys.
    **/
    public openapisdk.models.operations.ListPoliciesResponse listPolicies(openapisdk.models.operations.ListPoliciesRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListPoliciesRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Policies");
        
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

        openapisdk.models.operations.ListPoliciesResponse res = new openapisdk.models.operations.ListPoliciesResponse() {{
            listPoliciesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListPoliciesListPoliciesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListPoliciesListPoliciesResponse.class);
                res.listPoliciesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSupportingDocument - Retrieve a list of all Supporting Document for an account.
    **/
    public openapisdk.models.operations.ListSupportingDocumentResponse listSupportingDocument(openapisdk.models.operations.ListSupportingDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSupportingDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocuments");
        
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

        openapisdk.models.operations.ListSupportingDocumentResponse res = new openapisdk.models.operations.ListSupportingDocumentResponse() {{
            listSupportingDocumentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSupportingDocumentListSupportingDocumentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSupportingDocumentListSupportingDocumentResponse.class);
                res.listSupportingDocumentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSupportingDocumentType - Retrieve a list of all Supporting Document Types.
    **/
    public openapisdk.models.operations.ListSupportingDocumentTypeResponse listSupportingDocumentType(openapisdk.models.operations.ListSupportingDocumentTypeRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListSupportingDocumentTypeRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocumentTypes");
        
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

        openapisdk.models.operations.ListSupportingDocumentTypeResponse res = new openapisdk.models.operations.ListSupportingDocumentTypeResponse() {{
            listSupportingDocumentTypeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSupportingDocumentTypeListSupportingDocumentTypeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSupportingDocumentTypeListSupportingDocumentTypeResponse.class);
                res.listSupportingDocumentTypeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTrustProduct - Retrieve a list of all Customer-Profiles for an account.
    **/
    public openapisdk.models.operations.ListTrustProductResponse listTrustProduct(openapisdk.models.operations.ListTrustProductRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTrustProductRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts");
        
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

        openapisdk.models.operations.ListTrustProductResponse res = new openapisdk.models.operations.ListTrustProductResponse() {{
            listTrustProductResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTrustProductListTrustProductResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTrustProductListTrustProductResponse.class);
                res.listTrustProductResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTrustProductChannelEndpointAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    public openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentResponse listTrustProductChannelEndpointAssignment(openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments", request.pathParams);
        
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

        openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentResponse res = new openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentResponse() {{
            listTrustProductChannelEndpointAssignmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTrustProductChannelEndpointAssignmentListTrustProductChannelEndpointAssignmentResponse.class);
                res.listTrustProductChannelEndpointAssignmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTrustProductEntityAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    public openapisdk.models.operations.ListTrustProductEntityAssignmentResponse listTrustProductEntityAssignment(openapisdk.models.operations.ListTrustProductEntityAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTrustProductEntityAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/EntityAssignments", request.pathParams);
        
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

        openapisdk.models.operations.ListTrustProductEntityAssignmentResponse res = new openapisdk.models.operations.ListTrustProductEntityAssignmentResponse() {{
            listTrustProductEntityAssignmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTrustProductEntityAssignmentListTrustProductEntityAssignmentResponse.class);
                res.listTrustProductEntityAssignmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTrustProductEvaluation - Retrieve a list of Evaluations associated to the trust_product resource.
    **/
    public openapisdk.models.operations.ListTrustProductEvaluationResponse listTrustProductEvaluation(openapisdk.models.operations.ListTrustProductEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTrustProductEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{TrustProductSid}/Evaluations", request.pathParams);
        
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

        openapisdk.models.operations.ListTrustProductEvaluationResponse res = new openapisdk.models.operations.ListTrustProductEvaluationResponse() {{
            listTrustProductEvaluationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTrustProductEvaluationListTrustProductEvaluationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTrustProductEvaluationListTrustProductEvaluationResponse.class);
                res.listTrustProductEvaluationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCustomerProfile - Updates a Customer-Profile in an account.
    **/
    public openapisdk.models.operations.UpdateCustomerProfileResponse updateCustomerProfile(openapisdk.models.operations.UpdateCustomerProfileRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCustomerProfileRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/CustomerProfiles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCustomerProfileResponse res = new openapisdk.models.operations.UpdateCustomerProfileResponse() {{
            trusthubV1CustomerProfile = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1CustomerProfile out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1CustomerProfile.class);
                res.trusthubV1CustomerProfile = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateEndUser - Update an existing End User.
    **/
    public openapisdk.models.operations.UpdateEndUserResponse updateEndUser(openapisdk.models.operations.UpdateEndUserRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateEndUserRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/EndUsers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateEndUserResponse res = new openapisdk.models.operations.UpdateEndUserResponse() {{
            trusthubV1EndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1EndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1EndUser.class);
                res.trusthubV1EndUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateSupportingDocument - Update an existing Supporting Document.
    **/
    public openapisdk.models.operations.UpdateSupportingDocumentResponse updateSupportingDocument(openapisdk.models.operations.UpdateSupportingDocumentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateSupportingDocumentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/SupportingDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSupportingDocumentResponse res = new openapisdk.models.operations.UpdateSupportingDocumentResponse() {{
            trusthubV1SupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1SupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1SupportingDocument.class);
                res.trusthubV1SupportingDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateTrustProduct - Updates a Customer-Profile in an account.
    **/
    public openapisdk.models.operations.UpdateTrustProductResponse updateTrustProduct(openapisdk.models.operations.UpdateTrustProductRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateTrustProductRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/TrustProducts/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateTrustProductResponse res = new openapisdk.models.operations.UpdateTrustProductResponse() {{
            trusthubV1TrustProduct = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.TrusthubV1TrustProduct out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.TrusthubV1TrustProduct.class);
                res.trusthubV1TrustProduct = out;
            }
        }

        return res;
    }
	
}