package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortfolioAnalysis {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortfolioAnalysis(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postPortfolioAnalysisAlpha - Alpha
     *
     * Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisAlphaResponse postPortfolioAnalysisAlpha(openapisdk.models.operations.PostPortfolioAnalysisAlphaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/alpha");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisAlphaResponse res = new openapisdk.models.operations.PostPortfolioAnalysisAlphaResponse() {{
            postPortfolioAnalysisAlpha200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisAlpha200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisAlpha200ApplicationJson.class);
                res.postPortfolioAnalysisAlpha200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisBeta - Beta
     *
     * Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM)..
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisBetaResponse postPortfolioAnalysisBeta(openapisdk.models.operations.PostPortfolioAnalysisBetaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/beta");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisBetaResponse res = new openapisdk.models.operations.PostPortfolioAnalysisBetaResponse() {{
            postPortfolioAnalysisBeta200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisBeta200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisBeta200ApplicationJson.class);
                res.postPortfolioAnalysisBeta200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisContributionsReturn - Return Contributions
     *
     * Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisContributionsReturnResponse postPortfolioAnalysisContributionsReturn(openapisdk.models.operations.PostPortfolioAnalysisContributionsReturnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/contributions/return");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisContributionsReturnResponse res = new openapisdk.models.operations.PostPortfolioAnalysisContributionsReturnResponse() {{
            postPortfolioAnalysisContributionsReturn200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisContributionsReturn200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisContributionsReturn200ApplicationJson.class);
                res.postPortfolioAnalysisContributionsReturn200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisContributionsRisk - Risk Contributions
     *
     * Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisContributionsRiskResponse postPortfolioAnalysisContributionsRisk(openapisdk.models.operations.PostPortfolioAnalysisContributionsRiskRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/contributions/risk");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisContributionsRiskResponse res = new openapisdk.models.operations.PostPortfolioAnalysisContributionsRiskResponse() {{
            postPortfolioAnalysisContributionsRisk200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisContributionsRisk200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisContributionsRisk200ApplicationJson.class);
                res.postPortfolioAnalysisContributionsRisk200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisDiversificationRatio - Diversification Ratio
     *
     * Compute the diversification ratio of one or several portfolio(s).
     * 
     * References
     * * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatioResponse postPortfolioAnalysisDiversificationRatio(openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatioRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/diversification-ratio");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatioResponse res = new openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatioResponse() {{
            postPortfolioAnalysisDiversificationRatio200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisDiversificationRatio200ApplicationJson.class);
                res.postPortfolioAnalysisDiversificationRatio200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisDrawdowns - Drawdowns
     *
     * Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).
     * 
     * References
     * * [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisDrawdownsResponse postPortfolioAnalysisDrawdowns(openapisdk.models.operations.PostPortfolioAnalysisDrawdownsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/drawdowns");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisDrawdownsResponse res = new openapisdk.models.operations.PostPortfolioAnalysisDrawdownsResponse() {{
            postPortfolioAnalysisDrawdowns200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisDrawdowns200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisDrawdowns200ApplicationJson.class);
                res.postPortfolioAnalysisDrawdowns200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisFactorExposures - Factor Exposures
     *
     * Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.
     * 
     * References
     * * [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisFactorExposuresResponse postPortfolioAnalysisFactorExposures(openapisdk.models.operations.PostPortfolioAnalysisFactorExposuresRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/factor/exposures");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisFactorExposuresResponse res = new openapisdk.models.operations.PostPortfolioAnalysisFactorExposuresResponse() {{
            postPortfolioAnalysisFactorExposures200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisFactorExposures200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisFactorExposures200ApplicationJson.class);
                res.postPortfolioAnalysisFactorExposures200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisMeanVarianceEfficientFrontier - Mean-Variance Efficient Frontier
     *
     * Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraint
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse postPortfolioAnalysisMeanVarianceEfficientFrontier(openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/mean-variance/efficient-frontier");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse res = new openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontierResponse() {{
            postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJson.class);
                res.postPortfolioAnalysisMeanVarianceEfficientFrontier200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier - Mean-Variance Minimum Variance Frontier
     *
     * Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
     * * Minimum and maximum weights constraints
     * * Maximum group weights constraints
     * * Minimum and maximum portfolio exposure constraint
     * 
     * > This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.
     * 
     * References
     *  * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier(openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/mean-variance/minimum-variance-frontier");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse res = new openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontierResponse() {{
            postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJson.class);
                res.postPortfolioAnalysisMeanVarianceMinimumVarianceFrontier200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisReturn - Arithmetic Return
     *
     * Compute the arithmetic return of one or several portfolio(s) from either:  
     * * Portfolio assets arithmetic returns
     * * Portfolio values
     * 
     * References
     * * [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisReturnResponse postPortfolioAnalysisReturn(openapisdk.models.operations.PostPortfolioAnalysisReturnRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/return");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisReturnResponse res = new openapisdk.models.operations.PostPortfolioAnalysisReturnResponse() {{
            postPortfolioAnalysisReturn200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisReturn200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisReturn200ApplicationJson.class);
                res.postPortfolioAnalysisReturn200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisReturnsAverage - Arithmetic Average Return
     *
     * Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).
     * 
     * References
     * * [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisReturnsAverageResponse postPortfolioAnalysisReturnsAverage(openapisdk.models.operations.PostPortfolioAnalysisReturnsAverageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/returns/average");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisReturnsAverageResponse res = new openapisdk.models.operations.PostPortfolioAnalysisReturnsAverageResponse() {{
            postPortfolioAnalysisReturnsAverage200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisReturnsAverage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisReturnsAverage200ApplicationJson.class);
                res.postPortfolioAnalysisReturnsAverage200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisSharpeRatio - Sharpe Ratio
     *
     * Compute the Sharpe ratio of one or several portfolio(s) from either:
     * * Portfolio assets arithmetic returns and assets covariance matrix
     * * Portfolio values
     * 
     * References
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisSharpeRatioResponse postPortfolioAnalysisSharpeRatio(openapisdk.models.operations.PostPortfolioAnalysisSharpeRatioRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/sharpe-ratio");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisSharpeRatioResponse res = new openapisdk.models.operations.PostPortfolioAnalysisSharpeRatioResponse() {{
            postPortfolioAnalysisSharpeRatio200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisSharpeRatio200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisSharpeRatio200ApplicationJson.class);
                res.postPortfolioAnalysisSharpeRatio200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisTrackingError - Tracking Error
     *
     * Compute the tracking error between a benchmark and one or several portfolio(s).
     * 
     * References
     * * [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisTrackingErrorResponse postPortfolioAnalysisTrackingError(openapisdk.models.operations.PostPortfolioAnalysisTrackingErrorRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/tracking-error");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisTrackingErrorResponse res = new openapisdk.models.operations.PostPortfolioAnalysisTrackingErrorResponse() {{
            postPortfolioAnalysisTrackingError200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisTrackingError200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisTrackingError200ApplicationJson.class);
                res.postPortfolioAnalysisTrackingError200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioAnalysisVolatility - Volatility
     *
     * Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
     * * Portfolio assets covariance matrix
     * * Portfolio values
     * 
     * References
     * * [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
     * * Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
     * * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.
     * 
    **/
    public openapisdk.models.operations.PostPortfolioAnalysisVolatilityResponse postPortfolioAnalysisVolatility(openapisdk.models.operations.PostPortfolioAnalysisVolatilityRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/analysis/volatility");
        
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

        openapisdk.models.operations.PostPortfolioAnalysisVolatilityResponse res = new openapisdk.models.operations.PostPortfolioAnalysisVolatilityResponse() {{
            postPortfolioAnalysisVolatility200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioAnalysisVolatility200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioAnalysisVolatility200ApplicationJson.class);
                res.postPortfolioAnalysisVolatility200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}