package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class QualityRetentionProfiles {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public QualityRetentionProfiles(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkCameraQualityRetentionProfile - Creates new quality retention profile for this network.
     *
     * Creates new quality retention profile for this network.
    **/
    public openapisdk.models.operations.CreateNetworkCameraQualityRetentionProfileResponse createNetworkCameraQualityRetentionProfile(openapisdk.models.operations.CreateNetworkCameraQualityRetentionProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/qualityRetentionProfiles", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkCameraQualityRetentionProfileResponse res = new openapisdk.models.operations.CreateNetworkCameraQualityRetentionProfileResponse() {{
            createNetworkCameraQualityRetentionProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkCameraQualityRetentionProfile - Delete an existing quality retention profile for this network.
     *
     * Delete an existing quality retention profile for this network.
    **/
    public openapisdk.models.operations.DeleteNetworkCameraQualityRetentionProfileResponse deleteNetworkCameraQualityRetentionProfile(openapisdk.models.operations.DeleteNetworkCameraQualityRetentionProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkCameraQualityRetentionProfileResponse res = new openapisdk.models.operations.DeleteNetworkCameraQualityRetentionProfileResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getNetworkCameraQualityRetentionProfile - Retrieve a single quality retention profile
     *
     * Retrieve a single quality retention profile
    **/
    public openapisdk.models.operations.GetNetworkCameraQualityRetentionProfileResponse getNetworkCameraQualityRetentionProfile(openapisdk.models.operations.GetNetworkCameraQualityRetentionProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCameraQualityRetentionProfileResponse res = new openapisdk.models.operations.GetNetworkCameraQualityRetentionProfileResponse() {{
            getNetworkCameraQualityRetentionProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCameraQualityRetentionProfiles - List the quality retention profiles for this network
     *
     * List the quality retention profiles for this network
    **/
    public openapisdk.models.operations.GetNetworkCameraQualityRetentionProfilesResponse getNetworkCameraQualityRetentionProfiles(openapisdk.models.operations.GetNetworkCameraQualityRetentionProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/qualityRetentionProfiles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCameraQualityRetentionProfilesResponse res = new openapisdk.models.operations.GetNetworkCameraQualityRetentionProfilesResponse() {{
            getNetworkCameraQualityRetentionProfiles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCameraQualityRetentionProfiles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCameraQualityRetentionProfile - Update an existing quality retention profile for this network.
     *
     * Update an existing quality retention profile for this network.
    **/
    public openapisdk.models.operations.UpdateNetworkCameraQualityRetentionProfileResponse updateNetworkCameraQualityRetentionProfile(openapisdk.models.operations.UpdateNetworkCameraQualityRetentionProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/qualityRetentionProfiles/{qualityRetentionProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCameraQualityRetentionProfileResponse res = new openapisdk.models.operations.UpdateNetworkCameraQualityRetentionProfileResponse() {{
            updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCameraQualityRetentionProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}