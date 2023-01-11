

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
		"https://accounts.twilio.com",
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
     * createCredentialAws - Create a new AWS Credential
    **/
    public openapisdk.models.operations.CreateCredentialAwsResponse createCredentialAws(openapisdk.models.operations.CreateCredentialAwsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCredentialAwsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/AWS");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCredentialAwsResponse res = new openapisdk.models.operations.CreateCredentialAwsResponse() {{
            accountsV1CredentialCredentialAws = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialAws out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialAws.class);
                res.accountsV1CredentialCredentialAws = out;
            }
        }

        return res;
    }
	
	
    /**
     * createCredentialPublicKey - Create a new Public Key Credential
    **/
    public openapisdk.models.operations.CreateCredentialPublicKeyResponse createCredentialPublicKey(openapisdk.models.operations.CreateCredentialPublicKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateCredentialPublicKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/PublicKeys");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateCredentialPublicKeyResponse res = new openapisdk.models.operations.CreateCredentialPublicKeyResponse() {{
            accountsV1CredentialCredentialPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey.class);
                res.accountsV1CredentialCredentialPublicKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * createSecondaryAuthToken - Create a new secondary Auth Token
    **/
    public openapisdk.models.operations.CreateSecondaryAuthTokenResponse createSecondaryAuthToken(openapisdk.models.operations.CreateSecondaryAuthTokenRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.CreateSecondaryAuthTokenRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/AuthTokens/Secondary");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateSecondaryAuthTokenResponse res = new openapisdk.models.operations.CreateSecondaryAuthTokenResponse() {{
            accountsV1SecondaryAuthToken = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1SecondaryAuthToken out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1SecondaryAuthToken.class);
                res.accountsV1SecondaryAuthToken = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteCredentialAws - Delete a Credential from your account
    **/
    public openapisdk.models.operations.DeleteCredentialAwsResponse deleteCredentialAws(openapisdk.models.operations.DeleteCredentialAwsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCredentialAwsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/AWS/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCredentialAwsResponse res = new openapisdk.models.operations.DeleteCredentialAwsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteCredentialPublicKey - Delete a Credential from your account
    **/
    public openapisdk.models.operations.DeleteCredentialPublicKeyResponse deleteCredentialPublicKey(openapisdk.models.operations.DeleteCredentialPublicKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteCredentialPublicKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/PublicKeys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCredentialPublicKeyResponse res = new openapisdk.models.operations.DeleteCredentialPublicKeyResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * deleteSecondaryAuthToken - Delete the secondary Auth Token from your account
    **/
    public openapisdk.models.operations.DeleteSecondaryAuthTokenResponse deleteSecondaryAuthToken(openapisdk.models.operations.DeleteSecondaryAuthTokenRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.DeleteSecondaryAuthTokenRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/AuthTokens/Secondary");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSecondaryAuthTokenResponse res = new openapisdk.models.operations.DeleteSecondaryAuthTokenResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * fetchCredentialAws - Fetch the AWS credentials specified by the provided Credential Sid
    **/
    public openapisdk.models.operations.FetchCredentialAwsResponse fetchCredentialAws(openapisdk.models.operations.FetchCredentialAwsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCredentialAwsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/AWS/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCredentialAwsResponse res = new openapisdk.models.operations.FetchCredentialAwsResponse() {{
            accountsV1CredentialCredentialAws = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialAws out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialAws.class);
                res.accountsV1CredentialCredentialAws = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchCredentialPublicKey - Fetch the public key specified by the provided Credential Sid
    **/
    public openapisdk.models.operations.FetchCredentialPublicKeyResponse fetchCredentialPublicKey(openapisdk.models.operations.FetchCredentialPublicKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchCredentialPublicKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/PublicKeys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchCredentialPublicKeyResponse res = new openapisdk.models.operations.FetchCredentialPublicKeyResponse() {{
            accountsV1CredentialCredentialPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey.class);
                res.accountsV1CredentialCredentialPublicKey = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCredentialAws - Retrieves a collection of AWS Credentials belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListCredentialAwsResponse listCredentialAws(openapisdk.models.operations.ListCredentialAwsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCredentialAwsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/AWS");
        
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

        openapisdk.models.operations.ListCredentialAwsResponse res = new openapisdk.models.operations.ListCredentialAwsResponse() {{
            listCredentialAwsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCredentialAwsListCredentialAwsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCredentialAwsListCredentialAwsResponse.class);
                res.listCredentialAwsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * listCredentialPublicKey - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
    **/
    public openapisdk.models.operations.ListCredentialPublicKeyResponse listCredentialPublicKey(openapisdk.models.operations.ListCredentialPublicKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListCredentialPublicKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/PublicKeys");
        
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

        openapisdk.models.operations.ListCredentialPublicKeyResponse res = new openapisdk.models.operations.ListCredentialPublicKeyResponse() {{
            listCredentialPublicKeyResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCredentialPublicKeyListCredentialPublicKeyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCredentialPublicKeyListCredentialPublicKeyResponse.class);
                res.listCredentialPublicKeyResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateAuthTokenPromotion - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
    **/
    public openapisdk.models.operations.UpdateAuthTokenPromotionResponse updateAuthTokenPromotion(openapisdk.models.operations.UpdateAuthTokenPromotionRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateAuthTokenPromotionRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/AuthTokens/Promote");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAuthTokenPromotionResponse res = new openapisdk.models.operations.UpdateAuthTokenPromotionResponse() {{
            accountsV1AuthTokenPromotion = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1AuthTokenPromotion out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1AuthTokenPromotion.class);
                res.accountsV1AuthTokenPromotion = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCredentialAws - Modify the properties of a given Account
    **/
    public openapisdk.models.operations.UpdateCredentialAwsResponse updateCredentialAws(openapisdk.models.operations.UpdateCredentialAwsRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCredentialAwsRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/AWS/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCredentialAwsResponse res = new openapisdk.models.operations.UpdateCredentialAwsResponse() {{
            accountsV1CredentialCredentialAws = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialAws out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialAws.class);
                res.accountsV1CredentialCredentialAws = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCredentialPublicKey - Modify the properties of a given Account
    **/
    public openapisdk.models.operations.UpdateCredentialPublicKeyResponse updateCredentialPublicKey(openapisdk.models.operations.UpdateCredentialPublicKeyRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.UpdateCredentialPublicKeyRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/Credentials/PublicKeys/{Sid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCredentialPublicKeyResponse res = new openapisdk.models.operations.UpdateCredentialPublicKeyResponse() {{
            accountsV1CredentialCredentialPublicKey = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AccountsV1CredentialCredentialPublicKey.class);
                res.accountsV1CredentialCredentialPublicKey = out;
            }
        }

        return res;
    }
	
}