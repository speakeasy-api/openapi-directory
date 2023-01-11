package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
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
     * fcmdataProjectsAndroidAppsDeliveryDataList - List aggregate delivery data for the given Android application.
    **/
    public openapisdk.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse fcmdataProjectsAndroidAppsDeliveryDataList(openapisdk.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1beta1/{parent}/deliveryData", request.pathParams);
        
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

        openapisdk.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse res = new openapisdk.models.operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse() {{
            googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse.class);
                res.googleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse = out;
            }
        }

        return res;
    }
	
}