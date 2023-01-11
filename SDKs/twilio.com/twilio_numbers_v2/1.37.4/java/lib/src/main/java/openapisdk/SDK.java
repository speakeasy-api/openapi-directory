

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
		"https://numbers.twilio.com",
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
     * createBundle - Create a new Bundle.
    **/
    public openapisdk.models.operations.CreateBundleResponse createBundle(openapisdk.models.operations.CreateBundleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateBundleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateBundleResponse res = new openapisdk.models.operations.CreateBundleResponse() {{
            numbersV2RegulatoryComplianceBundle = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle.class);
                res.numbersV2RegulatoryComplianceBundle = out;
            }
        }

        return res;
    }
	
	
    /**
     * createBundleCopy - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
    **/
    public openapisdk.models.operations.CreateBundleCopyResponse createBundleCopy(openapisdk.models.operations.CreateBundleCopyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateBundleCopyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateBundleCopyResponse res = new openapisdk.models.operations.CreateBundleCopyResponse() {{
            numbersV2RegulatoryComplianceBundleBundleCopy = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleBundleCopy.class);
                res.numbersV2RegulatoryComplianceBundleBundleCopy = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUsers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEndUserResponse res = new openapisdk.models.operations.CreateEndUserResponse() {{
            numbersV2RegulatoryComplianceEndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser.class);
                res.numbersV2RegulatoryComplianceEndUser = out;
            }
        }

        return res;
    }
	
	
    /**
     * createEvaluation - Creates an evaluation for a bundle
    **/
    public openapisdk.models.operations.CreateEvaluationResponse createEvaluation(openapisdk.models.operations.CreateEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateEvaluationResponse res = new openapisdk.models.operations.CreateEvaluationResponse() {{
            numbersV2RegulatoryComplianceBundleEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation.class);
                res.numbersV2RegulatoryComplianceBundleEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * createItemAssignment - Create a new Assigned Item.
    **/
    public openapisdk.models.operations.CreateItemAssignmentResponse createItemAssignment(openapisdk.models.operations.CreateItemAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateItemAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateItemAssignmentResponse res = new openapisdk.models.operations.CreateItemAssignmentResponse() {{
            numbersV2RegulatoryComplianceBundleItemAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment.class);
                res.numbersV2RegulatoryComplianceBundleItemAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * createReplaceItems - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
    **/
    public openapisdk.models.operations.CreateReplaceItemsResponse createReplaceItems(openapisdk.models.operations.CreateReplaceItemsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateReplaceItemsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ReplaceItems", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateReplaceItemsResponse res = new openapisdk.models.operations.CreateReplaceItemsResponse() {{
            numbersV2RegulatoryComplianceBundleReplaceItems = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleReplaceItems out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleReplaceItems.class);
                res.numbersV2RegulatoryComplianceBundleReplaceItems = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocuments");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSupportingDocumentResponse res = new openapisdk.models.operations.CreateSupportingDocumentResponse() {{
            numbersV2RegulatoryComplianceSupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument.class);
                res.numbersV2RegulatoryComplianceSupportingDocument = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteBundle - Delete a specific Bundle.
    **/
    public openapisdk.models.operations.DeleteBundleResponse deleteBundle(openapisdk.models.operations.DeleteBundleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteBundleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteBundleResponse res = new openapisdk.models.operations.DeleteBundleResponse() {{
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.pathParams);
        
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
     * deleteItemAssignment - Remove an Assignment Item Instance.
    **/
    public openapisdk.models.operations.DeleteItemAssignmentResponse deleteItemAssignment(openapisdk.models.operations.DeleteItemAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteItemAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteItemAssignmentResponse res = new openapisdk.models.operations.DeleteItemAssignmentResponse() {{
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.pathParams);
        
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
     * fetchBundle - Fetch a specific Bundle instance.
    **/
    public openapisdk.models.operations.FetchBundleResponse fetchBundle(openapisdk.models.operations.FetchBundleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchBundleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchBundleResponse res = new openapisdk.models.operations.FetchBundleResponse() {{
            numbersV2RegulatoryComplianceBundle = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle.class);
                res.numbersV2RegulatoryComplianceBundle = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEndUserResponse res = new openapisdk.models.operations.FetchEndUserResponse() {{
            numbersV2RegulatoryComplianceEndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser.class);
                res.numbersV2RegulatoryComplianceEndUser = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUserTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEndUserTypeResponse res = new openapisdk.models.operations.FetchEndUserTypeResponse() {{
            numbersV2RegulatoryComplianceEndUserType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUserType.class);
                res.numbersV2RegulatoryComplianceEndUserType = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchEvaluation - Fetch specific Evaluation Instance.
    **/
    public openapisdk.models.operations.FetchEvaluationResponse fetchEvaluation(openapisdk.models.operations.FetchEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchEvaluationResponse res = new openapisdk.models.operations.FetchEvaluationResponse() {{
            numbersV2RegulatoryComplianceBundleEvaluation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleEvaluation.class);
                res.numbersV2RegulatoryComplianceBundleEvaluation = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchItemAssignment - Fetch specific Assigned Item Instance.
    **/
    public openapisdk.models.operations.FetchItemAssignmentResponse fetchItemAssignment(openapisdk.models.operations.FetchItemAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchItemAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchItemAssignmentResponse res = new openapisdk.models.operations.FetchItemAssignmentResponse() {{
            numbersV2RegulatoryComplianceBundleItemAssignment = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleItemAssignment.class);
                res.numbersV2RegulatoryComplianceBundleItemAssignment = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchRegulation - Fetch specific Regulation Instance.
    **/
    public openapisdk.models.operations.FetchRegulationResponse fetchRegulation(openapisdk.models.operations.FetchRegulationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchRegulationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Regulations/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchRegulationResponse res = new openapisdk.models.operations.FetchRegulationResponse() {{
            numbersV2RegulatoryComplianceRegulation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceRegulation.class);
                res.numbersV2RegulatoryComplianceRegulation = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSupportingDocumentResponse res = new openapisdk.models.operations.FetchSupportingDocumentResponse() {{
            numbersV2RegulatoryComplianceSupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument.class);
                res.numbersV2RegulatoryComplianceSupportingDocument = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchSupportingDocumentTypeResponse res = new openapisdk.models.operations.FetchSupportingDocumentTypeResponse() {{
            numbersV2RegulatoryComplianceSupportingDocumentType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocumentType.class);
                res.numbersV2RegulatoryComplianceSupportingDocumentType = out;
            }
        }

        return res;
    }
	
	
    /**
     * listBundle - Retrieve a list of all Bundles for an account.
    **/
    public openapisdk.models.operations.ListBundleResponse listBundle(openapisdk.models.operations.ListBundleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListBundleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles");
        
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

        openapisdk.models.operations.ListBundleResponse res = new openapisdk.models.operations.ListBundleResponse() {{
            listBundleResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListBundleListBundleResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListBundleListBundleResponse.class);
                res.listBundleResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listBundleCopy - Retrieve a list of all Bundles Copies for a Bundle.
    **/
    public openapisdk.models.operations.ListBundleCopyResponse listBundleCopy(openapisdk.models.operations.ListBundleCopyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListBundleCopyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies", request.pathParams);
        
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

        openapisdk.models.operations.ListBundleCopyResponse res = new openapisdk.models.operations.ListBundleCopyResponse() {{
            listBundleCopyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListBundleCopyListBundleCopyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListBundleCopyListBundleCopyResponse.class);
                res.listBundleCopyResponse = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUsers");
        
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUserTypes");
        
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
     * listEvaluation - Retrieve a list of Evaluations associated to the Bundle resource.
    **/
    public openapisdk.models.operations.ListEvaluationResponse listEvaluation(openapisdk.models.operations.ListEvaluationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListEvaluationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations", request.pathParams);
        
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

        openapisdk.models.operations.ListEvaluationResponse res = new openapisdk.models.operations.ListEvaluationResponse() {{
            listEvaluationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListEvaluationListEvaluationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListEvaluationListEvaluationResponse.class);
                res.listEvaluationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listItemAssignment - Retrieve a list of all Assigned Items for an account.
    **/
    public openapisdk.models.operations.ListItemAssignmentResponse listItemAssignment(openapisdk.models.operations.ListItemAssignmentRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListItemAssignmentRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments", request.pathParams);
        
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

        openapisdk.models.operations.ListItemAssignmentResponse res = new openapisdk.models.operations.ListItemAssignmentResponse() {{
            listItemAssignmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListItemAssignmentListItemAssignmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListItemAssignmentListItemAssignmentResponse.class);
                res.listItemAssignmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listRegulation - Retrieve a list of all Regulations.
    **/
    public openapisdk.models.operations.ListRegulationResponse listRegulation(openapisdk.models.operations.ListRegulationRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListRegulationRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Regulations");
        
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

        openapisdk.models.operations.ListRegulationResponse res = new openapisdk.models.operations.ListRegulationResponse() {{
            listRegulationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListRegulationListRegulationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListRegulationListRegulationResponse.class);
                res.listRegulationResponse = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocuments");
        
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocumentTypes");
        
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
     * updateBundle - Updates a Bundle in an account.
    **/
    public openapisdk.models.operations.UpdateBundleResponse updateBundle(openapisdk.models.operations.UpdateBundleRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateBundleRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/Bundles/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateBundleResponse res = new openapisdk.models.operations.UpdateBundleResponse() {{
            numbersV2RegulatoryComplianceBundle = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceBundle.class);
                res.numbersV2RegulatoryComplianceBundle = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/EndUsers/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateEndUserResponse res = new openapisdk.models.operations.UpdateEndUserResponse() {{
            numbersV2RegulatoryComplianceEndUser = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceEndUser.class);
                res.numbersV2RegulatoryComplianceEndUser = out;
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
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/RegulatoryCompliance/SupportingDocuments/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateSupportingDocumentResponse res = new openapisdk.models.operations.UpdateSupportingDocumentResponse() {{
            numbersV2RegulatoryComplianceSupportingDocument = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.NumbersV2RegulatoryComplianceSupportingDocument.class);
                res.numbersV2RegulatoryComplianceSupportingDocument = out;
            }
        }

        return res;
    }
	
}