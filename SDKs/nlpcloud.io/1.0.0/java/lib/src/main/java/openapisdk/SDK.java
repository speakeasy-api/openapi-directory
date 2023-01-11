

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;


public class SDK {
	public static final String[] SERVERS = {
		"https://nlpcloud.io",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
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
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
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
     * readDependenciesV1EnCoreWebSmDependenciesPost - Read Dependencies
    **/
    public openapisdk.models.operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse readDependenciesV1EnCoreWebSmDependenciesPost(openapisdk.models.operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/en_core_web_sm/dependencies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse res = new openapisdk.models.operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse() {{
            dependenciesOut = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.DependenciesOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.DependenciesOut.class);
                res.dependenciesOut = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * readEntitiesV1EnCoreWebSmEntitiesPost - Read Entities
    **/
    public openapisdk.models.operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse readEntitiesV1EnCoreWebSmEntitiesPost(openapisdk.models.operations.ReadEntitiesV1EnCoreWebSmEntitiesPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/en_core_web_sm/entities");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse res = new openapisdk.models.operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse() {{
            entitiesOut = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.EntitiesOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.EntitiesOut.class);
                res.entitiesOut = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * readRootV1EnCoreWebSmGet - Read Root
    **/
    public openapisdk.models.operations.ReadRootV1EnCoreWebSmGetResponse readRootV1EnCoreWebSmGet() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/en_core_web_sm/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReadRootV1EnCoreWebSmGetResponse res = new openapisdk.models.operations.ReadRootV1EnCoreWebSmGetResponse() {{
            readRootV1EnCoreWebSmGet200ApplicationJSONAny = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.readRootV1EnCoreWebSmGet200ApplicationJSONAny = out;
            }
        }

        return res;
    }
	
	
    /**
     * readSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPost - Read Sentence Dependencies
    **/
    public openapisdk.models.operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse readSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPost(openapisdk.models.operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/en_core_web_sm/sentence-dependencies");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse res = new openapisdk.models.operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse() {{
            sentenceDependenciesOut = null;
            httpValidationError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SentenceDependenciesOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SentenceDependenciesOut.class);
                res.sentenceDependenciesOut = out;
            }
        }
        else if (httpRes.statusCode() == 422) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.HttpValidationError out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.HttpValidationError.class);
                res.httpValidationError = out;
            }
        }

        return res;
    }
	
	
    /**
     * readVersionV1EnCoreWebSmVersionGet - Read Version
    **/
    public openapisdk.models.operations.ReadVersionV1EnCoreWebSmVersionGetResponse readVersionV1EnCoreWebSmVersionGet() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/en_core_web_sm/version");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ReadVersionV1EnCoreWebSmVersionGetResponse res = new openapisdk.models.operations.ReadVersionV1EnCoreWebSmVersionGetResponse() {{
            versionOut = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.VersionOut out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.VersionOut.class);
                res.versionOut = out;
            }
        }

        return res;
    }
	
}