package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class AquiferCodes {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AquiferCodes(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * aquiferCodesDemandList - return a list of aquifer demand codes
    **/
    public openapisdk.models.operations.AquiferCodesDemandListResponse aquiferCodesDemandList(openapisdk.models.operations.AquiferCodesDemandListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/demand/");
        
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

        openapisdk.models.operations.AquiferCodesDemandListResponse res = new openapisdk.models.operations.AquiferCodesDemandListResponse() {{
            aquiferCodesDemandList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesDemandList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesDemandList200ApplicationJson.class);
                res.aquiferCodesDemandList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesMaterialsList - return a list of aquifer material codes
    **/
    public openapisdk.models.operations.AquiferCodesMaterialsListResponse aquiferCodesMaterialsList(openapisdk.models.operations.AquiferCodesMaterialsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/materials/");
        
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

        openapisdk.models.operations.AquiferCodesMaterialsListResponse res = new openapisdk.models.operations.AquiferCodesMaterialsListResponse() {{
            aquiferCodesMaterialsList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesMaterialsList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesMaterialsList200ApplicationJson.class);
                res.aquiferCodesMaterialsList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesProductivityList - return a list of aquifer productivity codes
    **/
    public openapisdk.models.operations.AquiferCodesProductivityListResponse aquiferCodesProductivityList(openapisdk.models.operations.AquiferCodesProductivityListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/productivity/");
        
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

        openapisdk.models.operations.AquiferCodesProductivityListResponse res = new openapisdk.models.operations.AquiferCodesProductivityListResponse() {{
            aquiferCodesProductivityList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesProductivityList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesProductivityList200ApplicationJson.class);
                res.aquiferCodesProductivityList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesQualityConcernsList - return a list of quality concern codes
    **/
    public openapisdk.models.operations.AquiferCodesQualityConcernsListResponse aquiferCodesQualityConcernsList(openapisdk.models.operations.AquiferCodesQualityConcernsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/quality-concerns/");
        
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

        openapisdk.models.operations.AquiferCodesQualityConcernsListResponse res = new openapisdk.models.operations.AquiferCodesQualityConcernsListResponse() {{
            aquiferCodesQualityConcernsList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesQualityConcernsList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesQualityConcernsList200ApplicationJson.class);
                res.aquiferCodesQualityConcernsList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesSubtypesList - return a list of aquifer subtype codes
    **/
    public openapisdk.models.operations.AquiferCodesSubtypesListResponse aquiferCodesSubtypesList(openapisdk.models.operations.AquiferCodesSubtypesListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/subtypes/");
        
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

        openapisdk.models.operations.AquiferCodesSubtypesListResponse res = new openapisdk.models.operations.AquiferCodesSubtypesListResponse() {{
            aquiferCodesSubtypesList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesSubtypesList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesSubtypesList200ApplicationJson.class);
                res.aquiferCodesSubtypesList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesVulnerabilityList - return a list of aquifer vulnerability codes
    **/
    public openapisdk.models.operations.AquiferCodesVulnerabilityListResponse aquiferCodesVulnerabilityList(openapisdk.models.operations.AquiferCodesVulnerabilityListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/vulnerability/");
        
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

        openapisdk.models.operations.AquiferCodesVulnerabilityListResponse res = new openapisdk.models.operations.AquiferCodesVulnerabilityListResponse() {{
            aquiferCodesVulnerabilityList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesVulnerabilityList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesVulnerabilityList200ApplicationJson.class);
                res.aquiferCodesVulnerabilityList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * aquiferCodesWaterUseList - return a list of water use codes
    **/
    public openapisdk.models.operations.AquiferCodesWaterUseListResponse aquiferCodesWaterUseList(openapisdk.models.operations.AquiferCodesWaterUseListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/aquifer-codes/water-use/");
        
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

        openapisdk.models.operations.AquiferCodesWaterUseListResponse res = new openapisdk.models.operations.AquiferCodesWaterUseListResponse() {{
            aquiferCodesWaterUseList200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AquiferCodesWaterUseList200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AquiferCodesWaterUseList200ApplicationJson.class);
                res.aquiferCodesWaterUseList200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}