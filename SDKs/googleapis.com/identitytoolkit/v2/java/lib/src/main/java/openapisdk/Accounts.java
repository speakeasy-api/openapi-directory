package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Accounts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Accounts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * identitytoolkitAccountsMfaEnrollmentFinalize - Finishes enrolling a second factor for the user.
    **/
    public openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse identitytoolkitAccountsMfaEnrollmentFinalize(openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/accounts/mfaEnrollment:finalize");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse res = new openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse() {{
            googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse.class);
                res.googleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitAccountsMfaEnrollmentStart - Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
    **/
    public openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse identitytoolkitAccountsMfaEnrollmentStart(openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/accounts/mfaEnrollment:start");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse res = new openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse() {{
            googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse.class);
                res.googleCloudIdentitytoolkitV2StartMfaEnrollmentResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitAccountsMfaEnrollmentWithdraw - Revokes one second factor from the enrolled second factors for an account.
    **/
    public openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse identitytoolkitAccountsMfaEnrollmentWithdraw(openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/accounts/mfaEnrollment:withdraw");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse res = new openapisdk.models.operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse() {{
            googleCloudIdentitytoolkitV2WithdrawMfaResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse.class);
                res.googleCloudIdentitytoolkitV2WithdrawMfaResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitAccountsMfaSignInFinalize - Verifies the MFA challenge and performs sign-in
    **/
    public openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse identitytoolkitAccountsMfaSignInFinalize(openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/accounts/mfaSignIn:finalize");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse res = new openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse() {{
            googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse.class);
                res.googleCloudIdentitytoolkitV2FinalizeMfaSignInResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitAccountsMfaSignInStart - Sends the MFA challenge
    **/
    public openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInStartResponse identitytoolkitAccountsMfaSignInStart(openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInStartRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/accounts/mfaSignIn:start");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInStartResponse res = new openapisdk.models.operations.IdentitytoolkitAccountsMfaSignInStartResponse() {{
            googleCloudIdentitytoolkitV2StartMfaSignInResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse.class);
                res.googleCloudIdentitytoolkitV2StartMfaSignInResponse = out;
            }
        }

        return res;
    }
	
}