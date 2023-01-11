package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Projects {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Projects(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * recommenderProjectsLocationsInsightTypesInsightsList - Lists insights for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified insight type.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse recommenderProjectsLocationsInsightTypesInsightsList(openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/insights", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsListResponse() {{
            googleCloudRecommenderV1beta1ListInsightsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1ListInsightsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1ListInsightsResponse.class);
                res.googleCloudRecommenderV1beta1ListInsightsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsInsightTypesInsightsMarkAccepted - Marks the Insight State as Accepted. Users can use this method to indicate to the Recommender API that they have applied some action based on the insight. This stops the insight content from being updated. MarkInsightAccepted can be applied to insights in ACTIVE state. Requires the recommender.*.update IAM permission for the specified insight.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse recommenderProjectsLocationsInsightTypesInsightsMarkAccepted(openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:markAccepted", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse() {{
            googleCloudRecommenderV1beta1Insight = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1Insight out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1Insight.class);
                res.googleCloudRecommenderV1beta1Insight = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsGet - Gets the requested recommendation. Requires the recommender.*.get IAM permission for the specified recommender.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse recommenderProjectsLocationsRecommendersRecommendationsGet(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsGetResponse() {{
            googleCloudRecommenderV1beta1Recommendation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation.class);
                res.googleCloudRecommenderV1beta1Recommendation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsList - Lists recommendations for the specified Cloud Resource. Requires the recommender.*.list IAM permission for the specified recommender.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse recommenderProjectsLocationsRecommendersRecommendationsList(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/recommendations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsListResponse() {{
            googleCloudRecommenderV1beta1ListRecommendationsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1ListRecommendationsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1ListRecommendationsResponse.class);
                res.googleCloudRecommenderV1beta1ListRecommendationsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed - Marks the Recommendation State as Claimed. Users can use this method to indicate to the Recommender API that they are starting to apply the recommendation themselves. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationClaimed can be applied to recommendations in CLAIMED or ACTIVE state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse recommenderProjectsLocationsRecommendersRecommendationsMarkClaimed(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:markClaimed", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkClaimedResponse() {{
            googleCloudRecommenderV1beta1Recommendation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation.class);
                res.googleCloudRecommenderV1beta1Recommendation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkFailed - Marks the Recommendation State as Failed. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation failed. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationFailed can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse recommenderProjectsLocationsRecommendersRecommendationsMarkFailed(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:markFailed", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse() {{
            googleCloudRecommenderV1beta1Recommendation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation.class);
                res.googleCloudRecommenderV1beta1Recommendation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded - Marks the Recommendation State as Succeeded. Users can use this method to indicate to the Recommender API that they have applied the recommendation themselves, and the operation was successful. This stops the recommendation content from being updated. Associated insights are frozen and placed in the ACCEPTED state. MarkRecommendationSucceeded can be applied to recommendations in ACTIVE, CLAIMED, SUCCEEDED, or FAILED state. Requires the recommender.*.update IAM permission for the specified recommender.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse recommenderProjectsLocationsRecommendersRecommendationsMarkSucceeded(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:markSucceeded", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse() {{
            googleCloudRecommenderV1beta1Recommendation = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1Recommendation.class);
                res.googleCloudRecommenderV1beta1Recommendation = out;
            }
        }

        return res;
    }
	
	
    /**
     * recommenderProjectsLocationsRecommendersUpdateConfig - Updates a Recommender Config. This will create a new revision of the config.
    **/
    public openapisdk.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse recommenderProjectsLocationsRecommendersUpdateConfig(openapisdk.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse res = new openapisdk.models.operations.RecommenderProjectsLocationsRecommendersUpdateConfigResponse() {{
            googleCloudRecommenderV1beta1RecommenderConfig = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfig out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleCloudRecommenderV1beta1RecommenderConfig.class);
                res.googleCloudRecommenderV1beta1RecommenderConfig = out;
            }
        }

        return res;
    }
	
}