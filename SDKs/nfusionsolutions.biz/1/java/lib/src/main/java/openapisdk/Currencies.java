package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Currencies {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Currencies(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getApiVVersionCurrenciesHistory - Get historical prices for requested currency pairs
     *
     * Historical OHLC data for the specified period and interval size
     * 
     * The combination of the interval parameter and start and end dates can result in results
     * being truncated to conform to result size limits. See comments on interval parameter for details on valid interval values.
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesHistoryResponse getApiVVersionCurrenciesHistory(openapisdk.models.operations.GetApiVVersionCurrenciesHistoryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/history", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesHistoryResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesHistoryResponse() {{
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
     * getApiVVersionCurrenciesHistorySupported - Get list of currency pairs supported by the history endpoint
     *
     * Only the currency pairs in the direction noted can be used with the history endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesHistorySupportedResponse getApiVVersionCurrenciesHistorySupported(openapisdk.models.operations.GetApiVVersionCurrenciesHistorySupportedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/history/supported", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesHistorySupportedResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesHistorySupportedResponse() {{
            getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings = null;
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
                res.getApiVVersionCurrenciesHistorySupported200ApplicationJSONStrings = out;
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
     * getApiVVersionCurrenciesRate - Get latest mid rate for requested currency pairs
     *
     * Current Mid Rate
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesRateResponse getApiVVersionCurrenciesRate(openapisdk.models.operations.GetApiVVersionCurrenciesRateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/rate", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesRateResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesRateResponse() {{
            rateResponses = null;
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
                openapisdk.models.shared.RateResponse[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.RateResponse[].class);
                res.rateResponses = out;
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
     * getApiVVersionCurrenciesRateSupported - Get list of currencies supported by the rate endpoint
     *
     * Any of the currencies in this list can be paired with any other currency in this list when supplied to the Rate endpoint.
     * For example: USD/CAD,CAD/USD,USD/EUR,EUR/CAD
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesRateSupportedResponse getApiVVersionCurrenciesRateSupported(openapisdk.models.operations.GetApiVVersionCurrenciesRateSupportedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/rate/supported", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesRateSupportedResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesRateSupportedResponse() {{
            getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings = null;
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
                res.getApiVVersionCurrenciesRateSupported200ApplicationJSONStrings = out;
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
     * getApiVVersionCurrenciesSummary - Get latest Summary for requested currency pairs
     *
     * Current and daily summary information combined into a single quote
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesSummaryResponse getApiVVersionCurrenciesSummary(openapisdk.models.operations.GetApiVVersionCurrenciesSummaryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/summary", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesSummaryResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesSummaryResponse() {{
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
     * getApiVVersionCurrenciesSummarySupported - Get list of currency pairs supported by the Summary endpoint
     *
     * Only the currency pairs in the direction noted can be used with the Summary endpoint.
     * For example: USD/CAD is not the same as CAD/USD
    **/
    public openapisdk.models.operations.GetApiVVersionCurrenciesSummarySupportedResponse getApiVVersionCurrenciesSummarySupported(openapisdk.models.operations.GetApiVVersionCurrenciesSummarySupportedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/v{version}/Currencies/summary/supported", request.pathParams);
        
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

        openapisdk.models.operations.GetApiVVersionCurrenciesSummarySupportedResponse res = new openapisdk.models.operations.GetApiVVersionCurrenciesSummarySupportedResponse() {{
            getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings = null;
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
                res.getApiVVersionCurrenciesSummarySupported200ApplicationJSONStrings = out;
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