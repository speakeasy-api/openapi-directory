package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class AchievementConfigurations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AchievementConfigurations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * gamesConfigurationAchievementConfigurationsDelete - Delete the achievement configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse gamesConfigurationAchievementConfigurationsDelete(openapisdk.models.operations.GamesConfigurationAchievementConfigurationsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/achievements/{achievementId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse res = new openapisdk.models.operations.GamesConfigurationAchievementConfigurationsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationAchievementConfigurationsGet - Retrieves the metadata of the achievement configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationAchievementConfigurationsGetResponse gamesConfigurationAchievementConfigurationsGet(openapisdk.models.operations.GamesConfigurationAchievementConfigurationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/achievements/{achievementId}", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationAchievementConfigurationsGetResponse res = new openapisdk.models.operations.GamesConfigurationAchievementConfigurationsGetResponse() {{
            achievementConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AchievementConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AchievementConfiguration.class);
                res.achievementConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationAchievementConfigurationsInsert - Insert a new achievement configuration in this application.
    **/
    public openapisdk.models.operations.GamesConfigurationAchievementConfigurationsInsertResponse gamesConfigurationAchievementConfigurationsInsert(openapisdk.models.operations.GamesConfigurationAchievementConfigurationsInsertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/applications/{applicationId}/achievements", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationAchievementConfigurationsInsertResponse res = new openapisdk.models.operations.GamesConfigurationAchievementConfigurationsInsertResponse() {{
            achievementConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AchievementConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AchievementConfiguration.class);
                res.achievementConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationAchievementConfigurationsList - Returns a list of the achievement configurations in this application.
    **/
    public openapisdk.models.operations.GamesConfigurationAchievementConfigurationsListResponse gamesConfigurationAchievementConfigurationsList(openapisdk.models.operations.GamesConfigurationAchievementConfigurationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/applications/{applicationId}/achievements", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationAchievementConfigurationsListResponse res = new openapisdk.models.operations.GamesConfigurationAchievementConfigurationsListResponse() {{
            achievementConfigurationListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AchievementConfigurationListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AchievementConfigurationListResponse.class);
                res.achievementConfigurationListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationAchievementConfigurationsUpdate - Update the metadata of the achievement configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationAchievementConfigurationsUpdateResponse gamesConfigurationAchievementConfigurationsUpdate(openapisdk.models.operations.GamesConfigurationAchievementConfigurationsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/achievements/{achievementId}", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationAchievementConfigurationsUpdateResponse res = new openapisdk.models.operations.GamesConfigurationAchievementConfigurationsUpdateResponse() {{
            achievementConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AchievementConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AchievementConfiguration.class);
                res.achievementConfiguration = out;
            }
        }

        return res;
    }
	
}