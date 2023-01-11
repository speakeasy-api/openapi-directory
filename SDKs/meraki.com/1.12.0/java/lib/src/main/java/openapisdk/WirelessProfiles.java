package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class WirelessProfiles {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public WirelessProfiles(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createNetworkCameraWirelessProfile - Creates a new camera wireless profile for this network.
     *
     * Creates a new camera wireless profile for this network.
    **/
    public openapisdk.models.operations.CreateNetworkCameraWirelessProfileResponse createNetworkCameraWirelessProfile(openapisdk.models.operations.CreateNetworkCameraWirelessProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/wirelessProfiles", request.pathParams);
        
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

        openapisdk.models.operations.CreateNetworkCameraWirelessProfileResponse res = new openapisdk.models.operations.CreateNetworkCameraWirelessProfileResponse() {{
            createNetworkCameraWirelessProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.createNetworkCameraWirelessProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * deleteNetworkCameraWirelessProfile - Delete an existing camera wireless profile for this network.
     *
     * Delete an existing camera wireless profile for this network.
    **/
    public openapisdk.models.operations.DeleteNetworkCameraWirelessProfileResponse deleteNetworkCameraWirelessProfile(openapisdk.models.operations.DeleteNetworkCameraWirelessProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteNetworkCameraWirelessProfileResponse res = new openapisdk.models.operations.DeleteNetworkCameraWirelessProfileResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * getDeviceCameraWirelessProfiles - Returns wireless profile assigned to the given camera
     *
     * Returns wireless profile assigned to the given camera
    **/
    public openapisdk.models.operations.GetDeviceCameraWirelessProfilesResponse getDeviceCameraWirelessProfiles(openapisdk.models.operations.GetDeviceCameraWirelessProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/wirelessProfiles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetDeviceCameraWirelessProfilesResponse res = new openapisdk.models.operations.GetDeviceCameraWirelessProfilesResponse() {{
            getDeviceCameraWirelessProfiles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getDeviceCameraWirelessProfiles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCameraWirelessProfile - Retrieve a single camera wireless profile.
     *
     * Retrieve a single camera wireless profile.
    **/
    public openapisdk.models.operations.GetNetworkCameraWirelessProfileResponse getNetworkCameraWirelessProfile(openapisdk.models.operations.GetNetworkCameraWirelessProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCameraWirelessProfileResponse res = new openapisdk.models.operations.GetNetworkCameraWirelessProfileResponse() {{
            getNetworkCameraWirelessProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCameraWirelessProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getNetworkCameraWirelessProfiles - List the camera wireless profiles for this network.
     *
     * List the camera wireless profiles for this network.
    **/
    public openapisdk.models.operations.GetNetworkCameraWirelessProfilesResponse getNetworkCameraWirelessProfiles(openapisdk.models.operations.GetNetworkCameraWirelessProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/wirelessProfiles", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetNetworkCameraWirelessProfilesResponse res = new openapisdk.models.operations.GetNetworkCameraWirelessProfilesResponse() {{
            getNetworkCameraWirelessProfiles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getNetworkCameraWirelessProfiles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateDeviceCameraWirelessProfiles - Assign wireless profiles to the given camera
     *
     * Assign wireless profiles to the given camera. Incremental updates are not supported, all profile assignment need to be supplied at once.
    **/
    public openapisdk.models.operations.UpdateDeviceCameraWirelessProfilesResponse updateDeviceCameraWirelessProfiles(openapisdk.models.operations.UpdateDeviceCameraWirelessProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/devices/{serial}/camera/wirelessProfiles", request.pathParams);
        
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

        openapisdk.models.operations.UpdateDeviceCameraWirelessProfilesResponse res = new openapisdk.models.operations.UpdateDeviceCameraWirelessProfilesResponse() {{
            updateDeviceCameraWirelessProfiles200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateDeviceCameraWirelessProfiles200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateNetworkCameraWirelessProfile - Update an existing camera wireless profile in this network.
     *
     * Update an existing camera wireless profile in this network.
    **/
    public openapisdk.models.operations.UpdateNetworkCameraWirelessProfileResponse updateNetworkCameraWirelessProfile(openapisdk.models.operations.UpdateNetworkCameraWirelessProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/networks/{networkId}/camera/wirelessProfiles/{wirelessProfileId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateNetworkCameraWirelessProfileResponse res = new openapisdk.models.operations.UpdateNetworkCameraWirelessProfileResponse() {{
            updateNetworkCameraWirelessProfile200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateNetworkCameraWirelessProfile200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}