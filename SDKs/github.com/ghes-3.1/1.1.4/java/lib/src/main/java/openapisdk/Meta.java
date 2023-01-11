package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Meta {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Meta(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * metaGet - Get GitHub Enterprise Server meta information
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-github-meta-information - API method documentation
    **/
    public openapisdk.models.operations.MetaGetResponse metaGet() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/meta");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MetaGetResponse res = new openapisdk.models.operations.MetaGetResponse() {{
            apiOverview = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ApiOverview out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ApiOverview.class);
                res.apiOverview = out;
            }
        }
        else if (httpRes.statusCode() == 304) {
        }

        return res;
    }
	
	
    /**
     * metaGetOctocat - Get Octocat
     *
     * Get the octocat as ASCII art
     *
     * https://docs.github.com/enterprise-server@3.1/rest/reference/meta#get-octocat - API method documentation
    **/
    public openapisdk.models.operations.MetaGetOctocatResponse metaGetOctocat(openapisdk.models.operations.MetaGetOctocatRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/octocat");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MetaGetOctocatResponse res = new openapisdk.models.operations.MetaGetOctocatResponse() {{
            metaGetOctocat200ApplicationOctocatStreamString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/octocat-stream")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.metaGetOctocat200ApplicationOctocatStreamString = out;
            }
        }

        return res;
    }
	
	
    /**
     * metaGetZen - Get the Zen of GitHub
     *
     * Get a random sentence from the Zen of GitHub
    **/
    public openapisdk.models.operations.MetaGetZenResponse metaGetZen() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/zen");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MetaGetZenResponse res = new openapisdk.models.operations.MetaGetZenResponse() {{
            metaGetZen200TextPlainString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/plain")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.metaGetZen200TextPlainString = out;
            }
        }

        return res;
    }
	
	
    /**
     * metaRoot - GitHub API Root
     *
     * Get Hypermedia links to resources accessible in GitHub's REST API
     *
     * https://docs.github.com/enterprise-server@3.1/rest/overview/resources-in-the-rest-api#root-endpoint - API method documentation
    **/
    public openapisdk.models.operations.MetaRootResponse metaRoot() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.MetaRootResponse res = new openapisdk.models.operations.MetaRootResponse() {{
            metaRoot200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.MetaRoot200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.MetaRoot200ApplicationJson.class);
                res.metaRoot200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}