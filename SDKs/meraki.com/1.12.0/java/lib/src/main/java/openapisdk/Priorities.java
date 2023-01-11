package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Priorities {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Priorities(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getOrganizationBrandingPoliciesPriorities - Return the branding policy IDs of an organization in priority order
     *
     * Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).
    **/
    public openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse getOrganizationBrandingPoliciesPriorities(openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/priorities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse res = new openapisdk.models.operations.GetOrganizationBrandingPoliciesPrioritiesResponse() {{
            getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateOrganizationBrandingPoliciesPriorities - Update the priority ordering of an organization's branding policies.
     *
     * Update the priority ordering of an organization's branding policies.
    **/
    public openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse updateOrganizationBrandingPoliciesPriorities(openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/organizations/{organizationId}/brandingPolicies/priorities", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse res = new openapisdk.models.operations.UpdateOrganizationBrandingPoliciesPrioritiesResponse() {{
            updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateOrganizationBrandingPoliciesPriorities200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}