

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;


public class SDK {
	public static final String[] SERVERS = {
		"https://pricing.twilio.com",
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
     * fetchTrunkingCountry - Fetch a specific Country.
    **/
    public openapisdk.models.operations.FetchTrunkingCountryResponse fetchTrunkingCountry(openapisdk.models.operations.FetchTrunkingCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrunkingCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Trunking/Countries/{IsoCountry}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchTrunkingCountryResponse res = new openapisdk.models.operations.FetchTrunkingCountryResponse() {{
            pricingV2TrunkingCountryInstance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PricingV2TrunkingCountryInstance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PricingV2TrunkingCountryInstance.class);
                res.pricingV2TrunkingCountryInstance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchTrunkingNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
    **/
    public openapisdk.models.operations.FetchTrunkingNumberResponse fetchTrunkingNumber(openapisdk.models.operations.FetchTrunkingNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchTrunkingNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Trunking/Numbers/{DestinationNumber}", request.pathParams);
        
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

        openapisdk.models.operations.FetchTrunkingNumberResponse res = new openapisdk.models.operations.FetchTrunkingNumberResponse() {{
            pricingV2TrunkingNumber = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PricingV2TrunkingNumber out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PricingV2TrunkingNumber.class);
                res.pricingV2TrunkingNumber = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVoiceCountry - Fetch a specific Country.
    **/
    public openapisdk.models.operations.FetchVoiceCountryResponse fetchVoiceCountry(openapisdk.models.operations.FetchVoiceCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVoiceCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Voice/Countries/{IsoCountry}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FetchVoiceCountryResponse res = new openapisdk.models.operations.FetchVoiceCountryResponse() {{
            pricingV2VoiceVoiceCountryInstance = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PricingV2VoiceVoiceCountryInstance out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PricingV2VoiceVoiceCountryInstance.class);
                res.pricingV2VoiceVoiceCountryInstance = out;
            }
        }

        return res;
    }
	
	
    /**
     * fetchVoiceNumber - Fetch pricing information for a specific destination and, optionally, origination phone number.
    **/
    public openapisdk.models.operations.FetchVoiceNumberResponse fetchVoiceNumber(openapisdk.models.operations.FetchVoiceNumberRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.FetchVoiceNumberRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Voice/Numbers/{DestinationNumber}", request.pathParams);
        
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

        openapisdk.models.operations.FetchVoiceNumberResponse res = new openapisdk.models.operations.FetchVoiceNumberResponse() {{
            pricingV2VoiceVoiceNumber = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PricingV2VoiceVoiceNumber out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PricingV2VoiceVoiceNumber.class);
                res.pricingV2VoiceVoiceNumber = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListTrunkingCountryResponse listTrunkingCountry(openapisdk.models.operations.ListTrunkingCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListTrunkingCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Trunking/Countries");
        
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

        openapisdk.models.operations.ListTrunkingCountryResponse res = new openapisdk.models.operations.ListTrunkingCountryResponse() {{
            listTrunkingCountryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTrunkingCountryListTrunkingCountryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTrunkingCountryListTrunkingCountryResponse.class);
                res.listTrunkingCountryResponse = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.ListVoiceCountryResponse listVoiceCountry(openapisdk.models.operations.ListVoiceCountryRequest request) throws Exception {
        String baseUrl = openapisdk.models.operations.ListVoiceCountryRequestServerList.SERVERS[0];
        if (request.serverURL != null && !request.serverURL.isBlank()) {
            baseUrl = request.serverURL;
        }
        
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v2/Voice/Countries");
        
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

        openapisdk.models.operations.ListVoiceCountryResponse res = new openapisdk.models.operations.ListVoiceCountryResponse() {{
            listVoiceCountryResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListVoiceCountryListVoiceCountryResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListVoiceCountryListVoiceCountryResponse.class);
                res.listVoiceCountryResponse = out;
            }
        }

        return res;
    }
	
}