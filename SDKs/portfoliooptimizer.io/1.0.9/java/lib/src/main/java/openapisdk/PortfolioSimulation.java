package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PortfolioSimulation {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PortfolioSimulation(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * postPortfolioSimulationRebalancingDriftWeight - Drift-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).
     * 
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeightResponse postPortfolioSimulationRebalancingDriftWeight(openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeightRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/simulation/rebalancing/drift-weight");
        
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

        openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeightResponse res = new openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeightResponse() {{
            postPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioSimulationRebalancingDriftWeight200ApplicationJson.class);
                res.postPortfolioSimulationRebalancingDriftWeight200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioSimulationRebalancingFixedWeight - Fixed-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.
     * 
     * References
     * * [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        
     * 
    **/
    public openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeightResponse postPortfolioSimulationRebalancingFixedWeight(openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeightRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/simulation/rebalancing/fixed-weight");
        
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

        openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeightResponse res = new openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeightResponse() {{
            postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioSimulationRebalancingFixedWeight200ApplicationJson.class);
                res.postPortfolioSimulationRebalancingFixedWeight200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPortfolioSimulationRebalancingRandomWeight - Random-weight Portfolio Rebalancing
     *
     * Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.
     * 
     * References
     * * [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)
     * 
    **/
    public openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeightResponse postPortfolioSimulationRebalancingRandomWeight(openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeightRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/portfolio/simulation/rebalancing/random-weight");
        
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

        openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeightResponse res = new openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeightResponse() {{
            postPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPortfolioSimulationRebalancingRandomWeight200ApplicationJson.class);
                res.postPortfolioSimulationRebalancingRandomWeight200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}