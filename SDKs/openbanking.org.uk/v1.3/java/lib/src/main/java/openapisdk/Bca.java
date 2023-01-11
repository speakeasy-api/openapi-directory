package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Bca {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Bca(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getBusinessCurrentAccounts - Gets a list of all `Branch Current Account` objects.
    **/
    public openapisdk.models.operations.GetBusinessCurrentAccountsResponse getBusinessCurrentAccounts(openapisdk.models.operations.GetBusinessCurrentAccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/business-current-accounts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetBusinessCurrentAccountsResponse res = new openapisdk.models.operations.GetBusinessCurrentAccountsResponse() {{
            getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = null;
            fourHundredErrorObject = null;
            fourHundredAndEightErrorObject = null;
            fourHundredAndTwentyNineErrorObject = null;
            fiveHundredErrorObject = null;
            fiveHundredAndThreeErrorObject = null;
            errorObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson.class);
                res.getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts400ErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts400ErrorObject.class);
                res.fourHundredErrorObject = out;
            }
        }
        else if (httpRes.statusCode() == 408) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts408ErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts408ErrorObject.class);
                res.fourHundredAndEightErrorObject = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts429ErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts429ErrorObject.class);
                res.fourHundredAndTwentyNineErrorObject = out;
            }
        }
        else if (httpRes.statusCode() == 500) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts500ErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts500ErrorObject.class);
                res.fiveHundredErrorObject = out;
            }
        }
        else if (httpRes.statusCode() == 503) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccounts503ErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccounts503ErrorObject.class);
                res.fiveHundredAndThreeErrorObject = out;
            }
        }
        else {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetBusinessCurrentAccountsErrorObject out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetBusinessCurrentAccountsErrorObject.class);
                res.errorObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * headBusinessCurrentAccounts - Gets header information on the current set of `Business Current Account` data
    **/
    public openapisdk.models.operations.HeadBusinessCurrentAccountsResponse headBusinessCurrentAccounts(openapisdk.models.operations.HeadBusinessCurrentAccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/business-current-accounts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("HEAD");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.HeadBusinessCurrentAccountsResponse res = new openapisdk.models.operations.HeadBusinessCurrentAccountsResponse() {{
            noResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (true) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/prs.openbanking.opendata.v1.3+json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.noResponse = out;
            }
        }

        return res;
    }
	
}