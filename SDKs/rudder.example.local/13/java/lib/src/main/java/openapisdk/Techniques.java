package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Techniques {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Techniques(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * listTechniqueVersionDirectives - List all directives based on a version of a technique
     *
     * List all directives based on a version of a technique
    **/
    public openapisdk.models.operations.ListTechniqueVersionDirectivesResponse listTechniqueVersionDirectives(openapisdk.models.operations.ListTechniqueVersionDirectivesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/techniques/{techniqueName}/{techniqueVersion}/directives", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListTechniqueVersionDirectivesResponse res = new openapisdk.models.operations.ListTechniqueVersionDirectivesResponse() {{
            listTechniqueVersionDirectives200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTechniqueVersionDirectives200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTechniqueVersionDirectives200ApplicationJson.class);
                res.listTechniqueVersionDirectives200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTechniques - List all techniques
     *
     * List all technique with their versions
    **/
    public openapisdk.models.operations.ListTechniquesResponse listTechniques() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/techniques");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListTechniquesResponse res = new openapisdk.models.operations.ListTechniquesResponse() {{
            listTechniques200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTechniques200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTechniques200ApplicationJson.class);
                res.listTechniques200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * listTechniquesDirectives - List all directives based on a technique
     *
     * List all directives based on all version of a technique
    **/
    public openapisdk.models.operations.ListTechniquesDirectivesResponse listTechniquesDirectives(openapisdk.models.operations.ListTechniquesDirectivesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/techniques/{techniqueName}/directives", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListTechniquesDirectivesResponse res = new openapisdk.models.operations.ListTechniquesDirectivesResponse() {{
            listTechniquesDirectives200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListTechniquesDirectives200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListTechniquesDirectives200ApplicationJson.class);
                res.listTechniquesDirectives200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}