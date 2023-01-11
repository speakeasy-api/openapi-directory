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
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest request) throws Exception {
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
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse res = new openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse() {{
            googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet.class);
                res.googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet = out;
            }
        }

        return res;
    }
	
	
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
    **/
    public openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(openapisdk.models.operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{name}:query", request.pathParams);
        
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
            googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse.class);
                res.googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse = out;
            }
        }

        return res;
    }
	
}