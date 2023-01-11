package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortfolioOptimization {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortfolioOptimization(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postPortfolioOptimizationEqualRiskContributions - Equal Risk Contributions Portfolio
     *
     * Compute the assets weights of the equal risk contributions portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints  
     * 
     * References
     *  * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributionsResponse postPortfolioOptimizationEqualRiskContributions(openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/equal-risk-contributions");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributionsResponse res = new openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributionsResponse() {{
            postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationEqualRiskContributions200ApplicationJson.class);
                res.postPortfolioOptimizationEqualRiskContributions200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationEqualSharpeRatioContributions - Equal Sharpe Ratio Contributions Portfolio
     *
     * Compute the assets weights of the equal Sharpe Ratio contributions portfolio.
     * 
     * References
     *  * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse postPortfolioOptimizationEqualSharpeRatioContributions(openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/equal-sharpe-ratio-contributions");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse res = new openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributionsResponse() {{
            postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJson.class);
                res.postPortfolioOptimizationEqualSharpeRatioContributions200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationEqualWeighted - Equal Weighted Portfolio
     *
     * Compute the assets weights of the equal-weighted portfolio.
     * 
     * References
     *  * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationEqualWeightedResponse postPortfolioOptimizationEqualWeighted(openapisdk.models.operations.PostPortfolioOptimizationEqualWeightedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/equal-weighted");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationEqualWeightedResponse res = new openapisdk.models.operations.PostPortfolioOptimizationEqualWeightedResponse() {{
            postPortfolioOptimizationEqualWeighted200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationEqualWeighted200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationEqualWeighted200ApplicationJson.class);
                res.postPortfolioOptimizationEqualWeighted200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationInverseVarianceWeighted - Inverse Variance Weighted Portfolio
     *
     * Compute the assets weights of the inverse variance-weighted portfolio.
     * 
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeightedResponse postPortfolioOptimizationInverseVarianceWeighted(openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeightedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/inverse-variance-weighted");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeightedResponse res = new openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeightedResponse() {{
            postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationInverseVarianceWeighted200ApplicationJson.class);
                res.postPortfolioOptimizationInverseVarianceWeighted200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationInverseVolatilityWeighted - Inverse Volatility Weighted Portfolio
     *
     * Compute the assets weights of the inverse volatility-weighted portfolio, also known as the naive-risk parity portfolio.
     * 
     * References
     *  * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse postPortfolioOptimizationInverseVolatilityWeighted(openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/inverse-volatility-weighted");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse res = new openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeightedResponse() {{
            postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationInverseVolatilityWeighted200ApplicationJson.class);
                res.postPortfolioOptimizationInverseVolatilityWeighted200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMarketCapitalizationWeighted - Market Capitalization Weighted Portfolio
     *
     * Compute the assets weights of the market capitalization-weighted portfolio.
     * 
     * References
     *  * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse postPortfolioOptimizationMarketCapitalizationWeighted(openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/market-capitalization-weighted");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeightedResponse() {{
            postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJson.class);
                res.postPortfolioOptimizationMarketCapitalizationWeighted200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMaximumDecorrelation - Maximum Decorrelation Portfolio
     *
     * Compute the assets weights of the maximum decorrelation portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References
     *  * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)
     * 
     *
     * https://docs.portfoliooptimizer.io/#maximum-decorrelation-portfolio
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelationResponse postPortfolioOptimizationMaximumDecorrelation(openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/maximum-decorrelation");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelationResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelationResponse() {{
            postPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMaximumDecorrelation200ApplicationJson.class);
                res.postPortfolioOptimizationMaximumDecorrelation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMaximumReturn - Maximum Return Portfolio
     *
     * Compute the assets weights of the maximum return portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMaximumReturnResponse postPortfolioOptimizationMaximumReturn(openapisdk.models.operations.PostPortfolioOptimizationMaximumReturnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/maximum-return");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMaximumReturnResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMaximumReturnResponse() {{
            postPortfolioOptimizationMaximumReturn200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMaximumReturn200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMaximumReturn200ApplicationJson.class);
                res.postPortfolioOptimizationMaximumReturn200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMaximumSharpeRatio - Maximum Sharpe Ratio Portfolio
     *
     * Compute the assets weights of the maximum Sharpe ratio portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatioResponse postPortfolioOptimizationMaximumSharpeRatio(openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatioRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/maximum-sharpe-ratio");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatioResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatioResponse() {{
            postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMaximumSharpeRatio200ApplicationJson.class);
                res.postPortfolioOptimizationMaximumSharpeRatio200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMeanVarianceEfficient - Mean-Variance Efficient Portfolio
     *
     * Compute the assets weights of a mean-variance efficient portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * > A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficientResponse postPortfolioOptimizationMeanVarianceEfficient(openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficientRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/mean-variance-efficient");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficientResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficientResponse() {{
            postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMeanVarianceEfficient200ApplicationJson.class);
                res.postPortfolioOptimizationMeanVarianceEfficient200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMinimumCorrelation - Minimum Correlation Portfolio
     *
     * Compute the assets weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).
     * 
     * References
     *  * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelationResponse postPortfolioOptimizationMinimumCorrelation(openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/minimum-correlation");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelationResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelationResponse() {{
            postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMinimumCorrelation200ApplicationJson.class);
                res.postPortfolioOptimizationMinimumCorrelation200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMinimumVariance - Minimum Variance Portfolio
     *
     * Compute the assets weights of the minimum variance portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMinimumVarianceResponse postPortfolioOptimizationMinimumVariance(openapisdk.models.operations.PostPortfolioOptimizationMinimumVarianceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/minimum-variance");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMinimumVarianceResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMinimumVarianceResponse() {{
            postPortfolioOptimizationMinimumVariance200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMinimumVariance200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMinimumVariance200ApplicationJson.class);
                res.postPortfolioOptimizationMinimumVariance200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioOptimizationMostDiversified - Most Diversified Portfolio
     *
     * Compute the assets weights of the most diversified portfolio, optionally subject to:  
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraints
     * 
     * References
     *  * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioOptimizationMostDiversifiedResponse postPortfolioOptimizationMostDiversified(openapisdk.models.operations.PostPortfolioOptimizationMostDiversifiedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/optimization/most-diversified");
        
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

        openapisdk.models.operations.PostPortfolioOptimizationMostDiversifiedResponse res = new openapisdk.models.operations.PostPortfolioOptimizationMostDiversifiedResponse() {{
            postPortfolioOptimizationMostDiversified200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioOptimizationMostDiversified200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioOptimizationMostDiversified200ApplicationJson.class);
                res.postPortfolioOptimizationMostDiversified200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}