package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * firebaseappcheckProjectsAppsAppAttestConfigBatchGet - Atomically gets the AppAttestConfigs for the specified list of apps.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse firebaseappcheckProjectsAppsAppAttestConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/appAttestConfig:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsDebugTokensCreate - Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse firebaseappcheckProjectsAppsDebugTokensCreate(openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/debugTokens", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse() {{
            googleFirebaseAppcheckV1DebugToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1DebugToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1DebugToken.class);
                res.googleFirebaseAppcheckV1DebugToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsDebugTokensDelete - Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse firebaseappcheckProjectsAppsDebugTokensDelete(openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse() {{
            googleProtobufEmpty = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.googleProtobufEmpty = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsDebugTokensList - Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensListResponse firebaseappcheckProjectsAppsDebugTokensList(openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/debugTokens", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensListResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsDebugTokensListResponse() {{
            googleFirebaseAppcheckV1ListDebugTokensResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1ListDebugTokensResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1ListDebugTokensResponse.class);
                res.googleFirebaseAppcheckV1ListDebugTokensResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet - Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse firebaseappcheckProjectsAppsDeviceCheckConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/deviceCheckConfig:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeAppAttestAssertion - Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse firebaseappcheckProjectsAppsExchangeAppAttestAssertion(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeAppAttestAssertion", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeAppAttestAttestation - Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse firebaseappcheckProjectsAppsExchangeAppAttestAttestation(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeAppAttestAttestation", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse() {{
            googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse.class);
                res.googleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeCustomToken - Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse firebaseappcheckProjectsAppsExchangeCustomToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeCustomToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeDebugToken - Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse firebaseappcheckProjectsAppsExchangeDebugToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeDebugToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeDeviceCheckToken - Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse firebaseappcheckProjectsAppsExchangeDeviceCheckToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeDeviceCheckToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangePlayIntegrityToken - Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse firebaseappcheckProjectsAppsExchangePlayIntegrityToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangePlayIntegrityToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken - Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse firebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeRecaptchaEnterpriseToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeRecaptchaV3Token - Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse firebaseappcheckProjectsAppsExchangeRecaptchaV3Token(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeRecaptchaV3Token", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsExchangeSafetyNetToken - Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse firebaseappcheckProjectsAppsExchangeSafetyNetToken(openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:exchangeSafetyNetToken", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse() {{
            googleFirebaseAppcheckV1AppCheckToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1AppCheckToken.class);
                res.googleFirebaseAppcheckV1AppCheckToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsGenerateAppAttestChallenge - Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse firebaseappcheckProjectsAppsGenerateAppAttestChallenge(openapisdk.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:generateAppAttestChallenge", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse() {{
            googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse.class);
                res.googleFirebaseAppcheckV1GenerateAppAttestChallengeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge - Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse firebaseappcheckProjectsAppsGeneratePlayIntegrityChallenge(openapisdk.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{app}:generatePlayIntegrityChallenge", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse() {{
            googleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse.class);
                res.googleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet - Atomically gets the PlayIntegrityConfigs for the specified list of apps.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse firebaseappcheckProjectsAppsPlayIntegrityConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/playIntegrityConfig:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet - Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse firebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet - Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse firebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/recaptchaV3Config:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsAppsSafetyNetConfigBatchGet - Atomically gets the SafetyNetConfigs for the specified list of apps.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse firebaseappcheckProjectsAppsSafetyNetConfigBatchGet(openapisdk.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/apps/-/safetyNetConfig:batchGet", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse() {{
            googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse.class);
                res.googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsServicesBatchUpdate - Atomically updates the specified Service configurations.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsServicesBatchUpdateResponse firebaseappcheckProjectsServicesBatchUpdate(openapisdk.models.operations.FirebaseappcheckProjectsServicesBatchUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/services:batchUpdate", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsServicesBatchUpdateResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsServicesBatchUpdateResponse() {{
            googleFirebaseAppcheckV1BatchUpdateServicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1BatchUpdateServicesResponse.class);
                res.googleFirebaseAppcheckV1BatchUpdateServicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsServicesGet - Gets the Service configuration for the specified service name.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsServicesGetResponse firebaseappcheckProjectsServicesGet(openapisdk.models.operations.FirebaseappcheckProjectsServicesGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsServicesGetResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsServicesGetResponse() {{
            googleFirebaseAppcheckV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1Service.class);
                res.googleFirebaseAppcheckV1Service = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsServicesList - Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsServicesListResponse firebaseappcheckProjectsServicesList(openapisdk.models.operations.FirebaseappcheckProjectsServicesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{parent}/services", request.pathParams);
        
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

        openapisdk.models.operations.FirebaseappcheckProjectsServicesListResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsServicesListResponse() {{
            googleFirebaseAppcheckV1ListServicesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1ListServicesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1ListServicesResponse.class);
                res.googleFirebaseAppcheckV1ListServicesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * firebaseappcheckProjectsServicesPatch - Updates the specified Service configuration.
    **/
    public openapisdk.models.operations.FirebaseappcheckProjectsServicesPatchResponse firebaseappcheckProjectsServicesPatch(openapisdk.models.operations.FirebaseappcheckProjectsServicesPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
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

        openapisdk.models.operations.FirebaseappcheckProjectsServicesPatchResponse res = new openapisdk.models.operations.FirebaseappcheckProjectsServicesPatchResponse() {{
            googleFirebaseAppcheckV1Service = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseAppcheckV1Service out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseAppcheckV1Service.class);
                res.googleFirebaseAppcheckV1Service = out;
            }
        }

        return res;
    }
	
}