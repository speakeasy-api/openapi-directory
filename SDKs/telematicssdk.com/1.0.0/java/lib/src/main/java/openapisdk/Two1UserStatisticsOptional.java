package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Two1UserStatisticsOptional {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Two1UserStatisticsOptional(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * userStatisticeDailyValueV1StatisticsIndividualDaily - User statistice - Daily value - v1/Statistics/individual/daily
     *
     * User statistice - Daily value - v1/Statistics/individual/daily
    **/
    public openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse userStatisticeDailyValueV1StatisticsIndividualDaily(openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/statistics/v1/Statistics/individual/daily/");
        
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

        openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse res = new openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse() {{
            userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJson.class);
                res.userStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * userStatisticsAccumulatedValueV1StatisticsIndividual - User statistics - Accumulated value - /v1/Statistics/individual
     *
     * User statistics - Accumulated value - /v1/Statistics/individual
    **/
    public openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse userStatisticsAccumulatedValueV1StatisticsIndividual(openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/statistics/v1/Statistics/individual/");
        
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

        openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse res = new openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse() {{
            userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJson.class);
                res.userStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}