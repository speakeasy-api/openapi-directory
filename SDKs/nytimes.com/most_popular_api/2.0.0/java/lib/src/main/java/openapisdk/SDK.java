

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

/** SDK Documentation: http://developer.nytimes.com/**/
public class SDK {
	public static final String[] SERVERS = {
		"http://api.nytimes.com/svc/mostpopular/v2",
		"https://api.nytimes.com/svc/mostpopular/v2",
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
     * getMostemailedSectionTimePeriodJson - Most Emailed by Section & Time Period
    **/
    public openapisdk.models.operations.GetMostemailedSectionTimePeriodJsonResponse getMostemailedSectionTimePeriodJson(openapisdk.models.operations.GetMostemailedSectionTimePeriodJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mostemailed/{section}/{time-period}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMostemailedSectionTimePeriodJsonResponse res = new openapisdk.models.operations.GetMostemailedSectionTimePeriodJsonResponse() {{
            getMostemailedSectionTimePeriodJSON200ApplicationJSONObject = null;
            body = null;
            body = null;
            getMostemailedSectionTimePeriodJSON400ApplicationJSONObject = null;
            body = null;
            getMostemailedSectionTimePeriodJSON403ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMostemailedSectionTimePeriodJson200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMostemailedSectionTimePeriodJson200ApplicationJson.class);
                res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMostemailedSectionTimePeriodJson400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMostemailedSectionTimePeriodJson400ApplicationJson.class);
                res.getMostemailedSectionTimePeriodJSON400ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 403) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getMostemailedSectionTimePeriodJSON403ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMostsharedSectionTimePeriodJson - Most Shared by Section & Time Period
    **/
    public openapisdk.models.operations.GetMostsharedSectionTimePeriodJsonResponse getMostsharedSectionTimePeriodJson(openapisdk.models.operations.GetMostsharedSectionTimePeriodJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mostshared/{section}/{time-period}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMostsharedSectionTimePeriodJsonResponse res = new openapisdk.models.operations.GetMostsharedSectionTimePeriodJsonResponse() {{
            getMostsharedSectionTimePeriodJSON200ApplicationJSONObject = null;
            getMostsharedSectionTimePeriodJSON400ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMostsharedSectionTimePeriodJson200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMostsharedSectionTimePeriodJson200ApplicationJson.class);
                res.getMostsharedSectionTimePeriodJSON200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMostsharedSectionTimePeriodJson400ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMostsharedSectionTimePeriodJson400ApplicationJson.class);
                res.getMostsharedSectionTimePeriodJSON400ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMostviewedSectionTimePeriodJson - Most Viewed by Section & Time Period
    **/
    public openapisdk.models.operations.GetMostviewedSectionTimePeriodJsonResponse getMostviewedSectionTimePeriodJson(openapisdk.models.operations.GetMostviewedSectionTimePeriodJsonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mostviewed/{section}/{time-period}.json", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMostviewedSectionTimePeriodJsonResponse res = new openapisdk.models.operations.GetMostviewedSectionTimePeriodJsonResponse() {{
            getMostviewedSectionTimePeriodJSON200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetMostviewedSectionTimePeriodJson200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetMostviewedSectionTimePeriodJson200ApplicationJson.class);
                res.getMostviewedSectionTimePeriodJSON200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}