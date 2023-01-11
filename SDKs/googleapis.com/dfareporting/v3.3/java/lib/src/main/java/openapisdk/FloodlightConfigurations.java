package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class FloodlightConfigurations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public FloodlightConfigurations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * dfareportingFloodlightConfigurationsGet - Gets one floodlight configuration by ID.
    **/
    public openapisdk.models.operations.DfareportingFloodlightConfigurationsGetResponse dfareportingFloodlightConfigurationsGet(openapisdk.models.operations.DfareportingFloodlightConfigurationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/userprofiles/{profileId}/floodlightConfigurations/{id}", request.pathParams);
        
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

        openapisdk.models.operations.DfareportingFloodlightConfigurationsGetResponse res = new openapisdk.models.operations.DfareportingFloodlightConfigurationsGetResponse() {{
            floodlightConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FloodlightConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FloodlightConfiguration.class);
                res.floodlightConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * dfareportingFloodlightConfigurationsList - Retrieves a list of floodlight configurations, possibly filtered.
    **/
    public openapisdk.models.operations.DfareportingFloodlightConfigurationsListResponse dfareportingFloodlightConfigurationsList(openapisdk.models.operations.DfareportingFloodlightConfigurationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/userprofiles/{profileId}/floodlightConfigurations", request.pathParams);
        
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

        openapisdk.models.operations.DfareportingFloodlightConfigurationsListResponse res = new openapisdk.models.operations.DfareportingFloodlightConfigurationsListResponse() {{
            floodlightConfigurationsListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FloodlightConfigurationsListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FloodlightConfigurationsListResponse.class);
                res.floodlightConfigurationsListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * dfareportingFloodlightConfigurationsPatch - Updates an existing floodlight configuration. This method supports patch semantics.
    **/
    public openapisdk.models.operations.DfareportingFloodlightConfigurationsPatchResponse dfareportingFloodlightConfigurationsPatch(openapisdk.models.operations.DfareportingFloodlightConfigurationsPatchRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/userprofiles/{profileId}/floodlightConfigurations", request.pathParams);
        
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

        openapisdk.models.operations.DfareportingFloodlightConfigurationsPatchResponse res = new openapisdk.models.operations.DfareportingFloodlightConfigurationsPatchResponse() {{
            floodlightConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FloodlightConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FloodlightConfiguration.class);
                res.floodlightConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * dfareportingFloodlightConfigurationsUpdate - Updates an existing floodlight configuration.
    **/
    public openapisdk.models.operations.DfareportingFloodlightConfigurationsUpdateResponse dfareportingFloodlightConfigurationsUpdate(openapisdk.models.operations.DfareportingFloodlightConfigurationsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/userprofiles/{profileId}/floodlightConfigurations", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.DfareportingFloodlightConfigurationsUpdateResponse res = new openapisdk.models.operations.DfareportingFloodlightConfigurationsUpdateResponse() {{
            floodlightConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.FloodlightConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.FloodlightConfiguration.class);
                res.floodlightConfiguration = out;
            }
        }

        return res;
    }
	
}