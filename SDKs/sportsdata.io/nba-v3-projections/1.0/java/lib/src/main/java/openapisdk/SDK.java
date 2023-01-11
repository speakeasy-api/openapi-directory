

package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.SpeakeasyHTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;


public class SDK {
	public static final String[] SERVERS = {
		"http://api.sportsdata.io",
		"https://api.sportsdata.io",
		"http://azure-api.sportsdata.io",
		"https://azure-api.sportsdata.io",
	};
  		

	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private openapisdk.models.shared.Security _security;
	private String _serverUrl;
	private String _language = "java";
	private String _sdkVersion = "0.0.1";
	private String _genVersion = "internal";

	public static class Builder {
		private HTTPClient client;
		private openapisdk.models.shared.Security security;
		private String serverUrl;
		private java.util.Map<String, String> params = new java.util.HashMap<String, String>();

		private Builder() {
		}

		public Builder setClient(HTTPClient client) {
			this.client = client;
			return this;
		}
		
		public Builder setSecurity(openapisdk.models.shared.Security security) {
			this.security = security;
			return this;
		}
		
		public Builder setServerURL(String serverUrl) {
			this.serverUrl = serverUrl;
			return this;
		}
		
		public Builder setServerURL(String serverUrl, java.util.Map<String, String> params) {
			this.serverUrl = serverUrl;
			this.params = params;
			return this;
		}
		
		public SDK build() throws Exception {
			return new SDK(this.client, this.security, this.serverUrl, this.params);
		}
	}

	public static Builder builder() {
		return new Builder();
	}

	private SDK(HTTPClient client, openapisdk.models.shared.Security security, String serverUrl, java.util.Map<String, String> params) throws Exception {
		this._defaultClient = client;
		
		if (this._defaultClient == null) {
			this._defaultClient = new SpeakeasyHTTPClient();
		}
		
		if (security != null) {
			this._security = security;
			this._securityClient = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, this._security);
		}
		
		if (this._securityClient == null) {
			this._securityClient = this._defaultClient;
		}

		if (serverUrl != null && !serverUrl.isBlank()) {
			this._serverUrl = openapisdk.utils.Utils.replaceParameters(serverUrl, params);
		}
		
		if (this._serverUrl == null) {
			this._serverUrl = SERVERS[0];
		}
		
	}
	
	
    /**
     * dfsSlatesByDate - DFS Slates by Date
    **/
    public openapisdk.models.operations.DfsSlatesByDateResponse dfsSlatesByDate(openapisdk.models.operations.DfsSlatesByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/DfsSlatesByDate/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DfsSlatesByDateResponse res = new openapisdk.models.operations.DfsSlatesByDateResponse() {{
            dfsSlates = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.dfsSlates = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerGameStatsByDateWInjuriesDfsSalaries - Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse projectedPlayerGameStatsByDateWInjuriesDfsSalaries(openapisdk.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameProjectionStatsByDate/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse res = new openapisdk.models.operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse() {{
            playerGameProjections = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGameProjections = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameProjectionStatsByPlayer/{date}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse res = new openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse() {{
            playerGameProjection = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.playerGameProjection = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerSeasonStats - Projected Player Season Stats
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsResponse projectedPlayerSeasonStats(openapisdk.models.operations.ProjectedPlayerSeasonStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsResponse() {{
            playerSeasonProjections = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonProjections = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerSeasonStatsByPlayer - Projected Player Season Stats by Player
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerResponse projectedPlayerSeasonStatsByPlayer(openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStatsByPlayer/{season}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerResponse() {{
            playerSeasonProjection = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.playerSeasonProjection = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerSeasonStatsByTeam - Projected Player Season Stats by Team
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamResponse projectedPlayerSeasonStatsByTeam(openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamResponse() {{
            playerSeasonProjections = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonProjections = out;
            }
        }

        return res;
    }
	
}