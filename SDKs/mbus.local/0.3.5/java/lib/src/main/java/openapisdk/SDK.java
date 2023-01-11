

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;


public class SDK {
	public static final String[] SERVERS = {
		"http://mbus.local",
		"https://mbus.local/",
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
     * get - Gets data from the slave identified by {address}
    **/
    public openapisdk.models.operations.GetResponse get(openapisdk.models.operations.GetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/get/{device}/{baudrate}/{address}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetResponse res = new openapisdk.models.operations.GetResponse() {{
            mbusData = null;
            textError = null;
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.mbusData = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * getMulti - Gets data from the slave identified by {address}, and supports multiple responses from the slave
    **/
    public openapisdk.models.operations.GetMultiResponse getMulti(openapisdk.models.operations.GetMultiRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/getMulti/{device}/{baudrate}/{address}/{maxframes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetMultiResponse res = new openapisdk.models.operations.GetMultiResponse() {{
            mbusData = null;
            textError = null;
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.mbusData = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * hat - Gets Raspberry Pi Hat information
    **/
    public openapisdk.models.operations.HatResponse hat() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/hat");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HatResponse res = new openapisdk.models.operations.HatResponse() {{
            hat = null;
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.hat = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * hatOff - Turns off power to the M-Bus
    **/
    public openapisdk.models.operations.HatOffResponse hatOff() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/hat/off");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HatOffResponse res = new openapisdk.models.operations.HatOffResponse() {{
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * hatOn - Turns on power to the M-Bus
    **/
    public openapisdk.models.operations.HatOnResponse hatOn() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/hat/on");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HatOnResponse res = new openapisdk.models.operations.HatOnResponse() {{
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * mbusApi - Returns this API specification
    **/
    public openapisdk.models.operations.MbusApiResponse mbusApi() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/api");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MbusApiResponse res = new openapisdk.models.operations.MbusApiResponse() {{
            yaml = null;
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/x-yaml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.yaml = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
	
    /**
     * scan - Scan the specified device for slaves
    **/
    public openapisdk.models.operations.ScanResponse scan(openapisdk.models.operations.ScanRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/mbus/scan/{device}/{baudrate}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScanResponse res = new openapisdk.models.operations.ScanResponse() {{
            slaves = null;
            textError = null;
            textError = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.slaves = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.textError = out;
            }
        }

        return res;
    }
	
}