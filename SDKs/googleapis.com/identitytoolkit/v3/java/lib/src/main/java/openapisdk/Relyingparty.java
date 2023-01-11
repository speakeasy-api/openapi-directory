package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Relyingparty {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Relyingparty(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * identitytoolkitRelyingpartyCreateAuthUri - Creates the URI used by the IdP to authenticate the user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse identitytoolkitRelyingpartyCreateAuthUri(openapisdk.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/createAuthUri");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyCreateAuthUriResponse() {{
            createAuthUriResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CreateAuthUriResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CreateAuthUriResponse.class);
                res.createAuthUriResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyDeleteAccount - Delete user account.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyDeleteAccountResponse identitytoolkitRelyingpartyDeleteAccount(openapisdk.models.operations.IdentitytoolkitRelyingpartyDeleteAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/deleteAccount");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyDeleteAccountResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyDeleteAccountResponse() {{
            deleteAccountResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DeleteAccountResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DeleteAccountResponse.class);
                res.deleteAccountResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyDownloadAccount - Batch download user accounts.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyDownloadAccountResponse identitytoolkitRelyingpartyDownloadAccount(openapisdk.models.operations.IdentitytoolkitRelyingpartyDownloadAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/downloadAccount");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyDownloadAccountResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyDownloadAccountResponse() {{
            downloadAccountResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DownloadAccountResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DownloadAccountResponse.class);
                res.downloadAccountResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyEmailLinkSignin - Reset password for a user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse identitytoolkitRelyingpartyEmailLinkSignin(openapisdk.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/emailLinkSignin");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse() {{
            emailLinkSigninResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EmailLinkSigninResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EmailLinkSigninResponse.class);
                res.emailLinkSigninResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyGetAccountInfo - Returns the account info.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse identitytoolkitRelyingpartyGetAccountInfo(openapisdk.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getAccountInfo");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse() {{
            getAccountInfoResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAccountInfoResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAccountInfoResponse.class);
                res.getAccountInfoResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyGetOobConfirmationCode - Get a code for user action confirmation.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse identitytoolkitRelyingpartyGetOobConfirmationCode(openapisdk.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getOobConfirmationCode");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse() {{
            getOobConfirmationCodeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOobConfirmationCodeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOobConfirmationCodeResponse.class);
                res.getOobConfirmationCodeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyGetProjectConfig - Get project configuration.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse identitytoolkitRelyingpartyGetProjectConfig(openapisdk.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getProjectConfig");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse() {{
            identitytoolkitRelyingpartyGetProjectConfigResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse.class);
                res.identitytoolkitRelyingpartyGetProjectConfigResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyGetPublicKeys - Get token signing public key.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse identitytoolkitRelyingpartyGetPublicKeys(openapisdk.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/publicKeys");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse() {{
            identitytoolkitRelyingpartyGetPublicKeysResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, String> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.identitytoolkitRelyingpartyGetPublicKeysResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyGetRecaptchaParam - Get recaptcha secure param.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse identitytoolkitRelyingpartyGetRecaptchaParam(openapisdk.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/getRecaptchaParam");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse() {{
            getRecaptchaParamResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRecaptchaParamResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRecaptchaParamResponse.class);
                res.getRecaptchaParamResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyResetPassword - Reset password for a user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyResetPasswordResponse identitytoolkitRelyingpartyResetPassword(openapisdk.models.operations.IdentitytoolkitRelyingpartyResetPasswordRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/resetPassword");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyResetPasswordResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyResetPasswordResponse() {{
            resetPasswordResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ResetPasswordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ResetPasswordResponse.class);
                res.resetPasswordResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartySendVerificationCode - Send SMS verification code.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse identitytoolkitRelyingpartySendVerificationCode(openapisdk.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/sendVerificationCode");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse() {{
            identitytoolkitRelyingpartySendVerificationCodeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IdentitytoolkitRelyingpartySendVerificationCodeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IdentitytoolkitRelyingpartySendVerificationCodeResponse.class);
                res.identitytoolkitRelyingpartySendVerificationCodeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartySetAccountInfo - Set account info for a user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartySetAccountInfoResponse identitytoolkitRelyingpartySetAccountInfo(openapisdk.models.operations.IdentitytoolkitRelyingpartySetAccountInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setAccountInfo");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartySetAccountInfoResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartySetAccountInfoResponse() {{
            setAccountInfoResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SetAccountInfoResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SetAccountInfoResponse.class);
                res.setAccountInfoResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartySetProjectConfig - Set project configuration.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartySetProjectConfigResponse identitytoolkitRelyingpartySetProjectConfig(openapisdk.models.operations.IdentitytoolkitRelyingpartySetProjectConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/setProjectConfig");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartySetProjectConfigResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartySetProjectConfigResponse() {{
            identitytoolkitRelyingpartySetProjectConfigResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IdentitytoolkitRelyingpartySetProjectConfigResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IdentitytoolkitRelyingpartySetProjectConfigResponse.class);
                res.identitytoolkitRelyingpartySetProjectConfigResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartySignOutUser - Sign out user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartySignOutUserResponse identitytoolkitRelyingpartySignOutUser(openapisdk.models.operations.IdentitytoolkitRelyingpartySignOutUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/signOutUser");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartySignOutUserResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartySignOutUserResponse() {{
            identitytoolkitRelyingpartySignOutUserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IdentitytoolkitRelyingpartySignOutUserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IdentitytoolkitRelyingpartySignOutUserResponse.class);
                res.identitytoolkitRelyingpartySignOutUserResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartySignupNewUser - Signup new user.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartySignupNewUserResponse identitytoolkitRelyingpartySignupNewUser(openapisdk.models.operations.IdentitytoolkitRelyingpartySignupNewUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/signupNewUser");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartySignupNewUserResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartySignupNewUserResponse() {{
            signupNewUserResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SignupNewUserResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SignupNewUserResponse.class);
                res.signupNewUserResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyUploadAccount - Batch upload existing user accounts.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyUploadAccountResponse identitytoolkitRelyingpartyUploadAccount(openapisdk.models.operations.IdentitytoolkitRelyingpartyUploadAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/uploadAccount");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyUploadAccountResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyUploadAccountResponse() {{
            uploadAccountResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UploadAccountResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UploadAccountResponse.class);
                res.uploadAccountResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyVerifyAssertion - Verifies the assertion returned by the IdP.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse identitytoolkitRelyingpartyVerifyAssertion(openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/verifyAssertion");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse() {{
            verifyAssertionResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyAssertionResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyAssertionResponse.class);
                res.verifyAssertionResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyVerifyCustomToken - Verifies the developer asserted ID token.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse identitytoolkitRelyingpartyVerifyCustomToken(openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/verifyCustomToken");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse() {{
            verifyCustomTokenResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyCustomTokenResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyCustomTokenResponse.class);
                res.verifyCustomTokenResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyVerifyPassword - Verifies the user entered password.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse identitytoolkitRelyingpartyVerifyPassword(openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/verifyPassword");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse() {{
            verifyPasswordResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VerifyPasswordResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VerifyPasswordResponse.class);
                res.verifyPasswordResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * identitytoolkitRelyingpartyVerifyPhoneNumber - Verifies ownership of a phone number and creates/updates the user account accordingly.
    **/
    public openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse identitytoolkitRelyingpartyVerifyPhoneNumber(openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/verifyPhoneNumber");
        
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

        openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse res = new openapisdk.models.operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse() {{
            identitytoolkitRelyingpartyVerifyPhoneNumberResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse.class);
                res.identitytoolkitRelyingpartyVerifyPhoneNumberResponse = out;
            }
        }

        return res;
    }
	
}