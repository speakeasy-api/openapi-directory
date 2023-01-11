package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Onboarding {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Onboarding(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getOrganizationCameraOnboardingStatuses - Fetch onboarding status of cameras
     *
     * Fetch onboarding status of cameras
    **/
    public openapisdk.models.operations.GetOrganizationCameraOnboardingStatusesResponse getOrganizationCameraOnboardingStatuses(openapisdk.models.operations.GetOrganizationCameraOnboardingStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/camera/onboarding/statuses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationCameraOnboardingStatusesResponse res = new openapisdk.models.operations.GetOrganizationCameraOnboardingStatusesResponse() {{
            getOrganizationCameraOnboardingStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationCameraOnboardingStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationCameraOnboardingStatuses - Notify that credential handoff to camera has completed
     *
     * Notify that credential handoff to camera has completed
    **/
    public openapisdk.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse updateOrganizationCameraOnboardingStatuses(openapisdk.models.operations.UpdateOrganizationCameraOnboardingStatusesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/camera/onboarding/statuses", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse res = new openapisdk.models.operations.UpdateOrganizationCameraOnboardingStatusesResponse() {{
            updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationCameraOnboardingStatuses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}