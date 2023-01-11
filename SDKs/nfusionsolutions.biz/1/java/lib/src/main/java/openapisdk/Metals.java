package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Metals {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Metals(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getApiVVersionMetalsBenchmarkHistory - Get historical benchmark prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     * 
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     * 
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsBenchmarkHistoryResponse getApiVVersionMetalsBenchmarkHistory(openapisdk.models.operations.GetApiVVersionMetalsBenchmarkHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/benchmark/history", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsBenchmarkHistoryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsBenchmarkHistoryResponse() {{
            intervalCollectionResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IntervalCollectionResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IntervalCollectionResponse[].class);
                res.intervalCollectionResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsBenchmarkSummary - Get latest Benchmark prices for requested metals
     *
     * Benchmark price information
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSummaryResponse getApiVVersionMetalsBenchmarkSummary(openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/benchmark/summary", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSummaryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSummaryResponse() {{
            summaryResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SummaryResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SummaryResponse[].class);
                res.summaryResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsBenchmarkSupported - Get list of symbols supported by the benchmark endpoints
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSupportedResponse getApiVVersionMetalsBenchmarkSupported(openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSupportedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/benchmark/supported", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSupportedResponse res = new openapisdk.models.operations.GetApiVVersionMetalsBenchmarkSupportedResponse() {{
            getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getApiVVersionMetalsBenchmarkSupported200ApplicationJSONStrings = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotHistory - Get historical Spot prices for requested metals
     *
     * Historical OHLC data for the specified period and interval size
     * 
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
     * 
     * The historicalfx flag is used to determine whether to apply today's fx rates to a historical period, or to apply the historical rates from that same time frame.
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotHistoryResponse getApiVVersionMetalsSpotHistory(openapisdk.models.operations.GetApiVVersionMetalsSpotHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/history", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotHistoryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotHistoryResponse() {{
            intervalCollectionResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IntervalCollectionResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IntervalCollectionResponse[].class);
                res.intervalCollectionResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotPerformance - Get Historical Performance for requested metals
     *
     * Historical Performance information
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceResponse getApiVVersionMetalsSpotPerformance(openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/performance", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceResponse() {{
            intervalCollectionResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IntervalCollectionResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IntervalCollectionResponse[].class);
                res.intervalCollectionResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotPerformanceAnnual - Get Historical Annual Performance for requested metals
     *
     * Annual Historical Performance information
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse getApiVVersionMetalsSpotPerformanceAnnual(openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceAnnualRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/performance/annual", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotPerformanceAnnualResponse() {{
            intervalCollectionResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IntervalCollectionResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IntervalCollectionResponse[].class);
                res.intervalCollectionResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotRatioHistory - Get historical Spot Ratio prices for requested metals
     *
     * Historical data for the specified period and interval size
     * 
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotRatioHistoryResponse getApiVVersionMetalsSpotRatioHistory(openapisdk.models.operations.GetApiVVersionMetalsSpotRatioHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/ratio/history", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotRatioHistoryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotRatioHistoryResponse() {{
            intervalCollectionResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.IntervalCollectionResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.IntervalCollectionResponse[].class);
                res.intervalCollectionResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotRatioSummary - Get latest Spot Summary for requested metal ratios
     *
     * Ratios between prices of two metals
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotRatioSummaryResponse getApiVVersionMetalsSpotRatioSummary(openapisdk.models.operations.GetApiVVersionMetalsSpotRatioSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/ratio/summary", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotRatioSummaryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotRatioSummaryResponse() {{
            summaryResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SummaryResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SummaryResponse[].class);
                res.summaryResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotSummary - Get latest Spot Summary for requested metals
     *
     * Current and daily summary information combined into a single quote
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotSummaryResponse getApiVVersionMetalsSpotSummary(openapisdk.models.operations.GetApiVVersionMetalsSpotSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/summary", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotSummaryResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotSummaryResponse() {{
            summaryResponses = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SummaryResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SummaryResponse[].class);
                res.summaryResponses = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSpotSupported - Get list of symbols supported by the spot endpoints
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSpotSupportedResponse getApiVVersionMetalsSpotSupported(openapisdk.models.operations.GetApiVVersionMetalsSpotSupportedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/spot/supported", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSpotSupportedResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSpotSupportedResponse() {{
            getApiVVersionMetalsSpotSupported200ApplicationJSONStrings = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getApiVVersionMetalsSpotSupported200ApplicationJSONStrings = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * getApiVVersionMetalsSupportedCurrency - Get list of currencies supported by metals endpoints for currency conversion
    **/
    public openapisdk.models.operations.GetApiVVersionMetalsSupportedCurrencyResponse getApiVVersionMetalsSupportedCurrency(openapisdk.models.operations.GetApiVVersionMetalsSupportedCurrencyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Metals/supported/currency", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionMetalsSupportedCurrencyResponse res = new openapisdk.models.operations.GetApiVVersionMetalsSupportedCurrencyResponse() {{
            getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings = null;
            body = null;
            body = null;
            problemDetails = null;
            body = null;
            problemDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.getApiVVersionMetalsSupportedCurrency200ApplicationJSONStrings = out;
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
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.problemDetails = out;
            }
        }

        return res;
    }
	
}