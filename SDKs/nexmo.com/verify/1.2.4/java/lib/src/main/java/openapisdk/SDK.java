

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

/** SDK Documentation: https://developer.nexmo.com/verify - More information on the Verify product on our Developer Portal**/
public class SDK {
	public static final String[] SERVERS = {
		"https://api.nexmo.com/verify",
	};
  	
  	public FraudManagement fraudManagement;
  	public Requests requests;	

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
		
		
		this.fraudManagement = new FraudManagement(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
		
		this.requests = new Requests(
			this._defaultClient,
			this._securityClient,
			this._serverUrl,
			this._language,
			this._sdkVersion,
			this._genVersion
		);
	}
	
	
    /**
     * verifyCheck - Verify Check
     *
     * Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
     * 
     * 1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
     * 2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
     * 
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
    **/
    public openapisdk.models.operations.VerifyCheckResponse verifyCheck(openapisdk.models.operations.VerifyCheckRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/check/{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.VerifyCheckResponse res = new openapisdk.models.operations.VerifyCheckResponse() {{
            verifyCheck200ApplicationJSONOneOf = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.verifyCheck200ApplicationJSONOneOf = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * verifyControl - Verify Control
     *
     * Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
     * 
     * 
     * 1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
     * 
     * 2. Check the `status` in the response.
     * 
     * 
     * *Note that this endpoint is available by `GET` request as well as `POST`.*
    **/
    public openapisdk.models.operations.VerifyControlResponse verifyControl(openapisdk.models.operations.VerifyControlRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/control/{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.VerifyControlResponse res = new openapisdk.models.operations.VerifyControlResponse() {{
            verifyControl200ApplicationJSONOneOf = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.verifyControl200ApplicationJSONOneOf = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * verifyRequestWithPsd2 - PSD2 (Payment Services Directive 2) Request
     *
     * Use Verify request to generate and send a PIN to your user to authorize a payment:
     * 1. Create a request to send a verification code to your user.
     * 2. Check the `status` field in the response to ensure that your request was successful (zero is success).
     * 3. Use the `request_id` field in the response for the Verify check.
     * (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
    **/
    public openapisdk.models.operations.VerifyRequestWithPsd2Response verifyRequestWithPsd2(openapisdk.models.operations.VerifyRequestWithPsd2Request request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/psd2/{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.VerifyRequestWithPsd2Response res = new openapisdk.models.operations.VerifyRequestWithPsd2Response() {{
            verifyRequestWithPsd2200ApplicationJSONOneOf = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.verifyRequestWithPsd2200ApplicationJSONOneOf = out;
            }
        }

        return res;
    }
	
	
    /**
     * verifySearch - Verify Search
     *
     * Use Verify search to check the status of past or current verification requests:
     * 
     * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
     * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
     * 
     * *Note that this endpoint is available by `POST` request as well as `GET`.*
    **/
    public openapisdk.models.operations.VerifySearchResponse verifySearch(openapisdk.models.operations.VerifySearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/search/{format}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.VerifySearchResponse res = new openapisdk.models.operations.VerifySearchResponse() {{
            verifySearch200ApplicationJSONOneOf = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.verifySearch200ApplicationJSONOneOf = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}