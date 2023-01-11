package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortfolioConstruction {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortfolioConstruction(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postPortfolioConstructionInvestable - Investable Portfolio
     *
     * Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
     * * The desired assets weights
     * * The desired assets groups weights
     * * The desired maximum assets groups weights
     * * The prices of the assets
     * * The portfolio value
     * * The requirement to purchase some assets by round lots or by odd lots
     * * The possibility to purchase some assets by a fractional quantity of shares
     * * The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets
     * 
     * References
     * * [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioConstructionInvestableResponse postPortfolioConstructionInvestable(openapisdk.models.operations.PostPortfolioConstructionInvestableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/construction/investable");
        
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

        openapisdk.models.operations.PostPortfolioConstructionInvestableResponse res = new openapisdk.models.operations.PostPortfolioConstructionInvestableResponse() {{
            postPortfolioConstructionInvestable200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioConstructionInvestable200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioConstructionInvestable200ApplicationJson.class);
                res.postPortfolioConstructionInvestable200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioConstructionMimicking - Mimicking Portfolio
     *
     * Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References 
     * * Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioConstructionMimickingResponse postPortfolioConstructionMimicking(openapisdk.models.operations.PostPortfolioConstructionMimickingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/construction/mimicking");
        
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

        openapisdk.models.operations.PostPortfolioConstructionMimickingResponse res = new openapisdk.models.operations.PostPortfolioConstructionMimickingResponse() {{
            postPortfolioConstructionMimicking200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioConstructionMimicking200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioConstructionMimicking200ApplicationJson.class);
                res.postPortfolioConstructionMimicking200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioConstructionRandom - Random Portfolio
     *
     * Construct one or several random portfolio(s), optionally subject to:       
     * * Minimum and maximum weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * > Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.
     * 
     * References
     * * [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioConstructionRandomResponse postPortfolioConstructionRandom(openapisdk.models.operations.PostPortfolioConstructionRandomRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/construction/random");
        
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

        openapisdk.models.operations.PostPortfolioConstructionRandomResponse res = new openapisdk.models.operations.PostPortfolioConstructionRandomResponse() {{
            postPortfolioConstructionRandom200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioConstructionRandom200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioConstructionRandom200ApplicationJson.class);
                res.postPortfolioConstructionRandom200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}