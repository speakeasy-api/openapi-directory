

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
		"https://api.openfigi.com/{basePath}",
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
     * getMappingValuesKey - Get values for enum-like fields.
    **/
    public openapisdk.models.operations.GetMappingValuesKeyResponse getMappingValuesKey(openapisdk.models.operations.GetMappingValuesKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mapping/values/{key}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMappingValuesKeyResponse res = new openapisdk.models.operations.GetMappingValuesKeyResponse() {{
            getMappingValuesKey200ApplicationJSONObject = null;
            getMappingValuesKey400WildcardString = null;
            getMappingValuesKey500WildcardString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMappingValuesKey200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMappingValuesKey200ApplicationJson.class);
                res.getMappingValuesKey200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getMappingValuesKey400WildcardString = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.getMappingValuesKey500WildcardString = out;
            }
        }

        return res;
    }
	
	
    /**
     * postMapping - Allows mapping from third-party identifiers to FIGIs.
    **/
    public openapisdk.models.operations.PostMappingResponse postMapping(openapisdk.models.operations.PostMappingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mapping");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostMappingResponse res = new openapisdk.models.operations.PostMappingResponse() {{
            bulkMappingJobResult = null;
            postMapping400WildcardString = null;
            postMapping401WildcardString = null;
            postMapping406WildcardString = null;
            postMapping413WildcardString = null;
            postMapping500WildcardString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.bulkMappingJobResult = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postMapping400WildcardString = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postMapping401WildcardString = out;
            }
        }
        else if (httpRes.statusCode() == 406) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postMapping406WildcardString = out;
            }
        }
        else if (httpRes.statusCode() == 413) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postMapping413WildcardString = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "*/*")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.postMapping500WildcardString = out;
            }
        }

        return res;
    }
	
}