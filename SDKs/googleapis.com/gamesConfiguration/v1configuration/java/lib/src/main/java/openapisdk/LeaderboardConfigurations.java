package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class LeaderboardConfigurations {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public LeaderboardConfigurations(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * gamesConfigurationLeaderboardConfigurationsDelete - Delete the leaderboard configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse gamesConfigurationLeaderboardConfigurationsDelete(openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/leaderboards/{leaderboardId}", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse res = new openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationLeaderboardConfigurationsGet - Retrieves the metadata of the leaderboard configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsGetResponse gamesConfigurationLeaderboardConfigurationsGet(openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsGetRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/leaderboards/{leaderboardId}", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsGetResponse res = new openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsGetResponse() {{
            leaderboardConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LeaderboardConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LeaderboardConfiguration.class);
                res.leaderboardConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationLeaderboardConfigurationsInsert - Insert a new leaderboard configuration in this application.
    **/
    public openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsInsertResponse gamesConfigurationLeaderboardConfigurationsInsert(openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsInsertRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/applications/{applicationId}/leaderboards", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsInsertResponse res = new openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsInsertResponse() {{
            leaderboardConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LeaderboardConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LeaderboardConfiguration.class);
                res.leaderboardConfiguration = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationLeaderboardConfigurationsList - Returns a list of the leaderboard configurations in this application.
    **/
    public openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsListResponse gamesConfigurationLeaderboardConfigurationsList(openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/applications/{applicationId}/leaderboards", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsListResponse res = new openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsListResponse() {{
            leaderboardConfigurationListResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LeaderboardConfigurationListResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LeaderboardConfigurationListResponse.class);
                res.leaderboardConfigurationListResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * gamesConfigurationLeaderboardConfigurationsUpdate - Update the metadata of the leaderboard configuration with the given ID.
    **/
    public openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse gamesConfigurationLeaderboardConfigurationsUpdate(openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/games/v1configuration/leaderboards/{leaderboardId}", request.pathParams);
        
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

        openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse res = new openapisdk.models.operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse() {{
            leaderboardConfiguration = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.LeaderboardConfiguration out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.LeaderboardConfiguration.class);
                res.leaderboardConfiguration = out;
            }
        }

        return res;
    }
	
}