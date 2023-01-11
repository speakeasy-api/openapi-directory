package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Vitals {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Vitals(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * playdeveloperreportingVitalsErrorsIssuesSearch - Searches all error issues in which reports have been grouped.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse playdeveloperreportingVitalsErrorsIssuesSearch(openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/errorIssues:search", request.pathParams);
        
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

        openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse res = new openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse() {{
            googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse.class);
                res.googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * playdeveloperreportingVitalsErrorsReportsSearch - Searches all error reports received for an app.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse playdeveloperreportingVitalsErrorsReportsSearch(openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{parent}/errorReports:search", request.pathParams);
        
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

        openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse res = new openapisdk.models.operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse() {{
            googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse.class);
                res.googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}", request.pathParams);
        
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

        openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse res = new openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse() {{
            googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet.class);
                res.googlePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet = out;
            }
        }

        return res;
    }
	
	
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1alpha1/{name}:query", request.pathParams);
        
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse res = new openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse() {{
            googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse.class);
                res.googlePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse = out;
            }
        }

        return res;
    }
	
}