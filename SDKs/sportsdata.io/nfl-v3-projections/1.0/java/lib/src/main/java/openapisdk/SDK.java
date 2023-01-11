

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
     * dfsSlatesByWeek - DFS Slates by Week
    **/
    public openapisdk.models.operations.DfsSlatesByWeekResponse dfsSlatesByWeek(openapisdk.models.operations.DfsSlatesByWeekRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/DfsSlatesByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DfsSlatesByWeekResponse res = new openapisdk.models.operations.DfsSlatesByWeekResponse() {{
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
     * idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse idpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(openapisdk.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/IdpPlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.IdpProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse() {{
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
     * idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse idpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(openapisdk.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.IdpProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse() {{
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
     * idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - IDP Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse idpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(openapisdk.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.IdpProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse() {{
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
     * projectedFantasyDefenseGameStatsWDfsSalaries - Projected Fantasy Defense Game Stats (w/ DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse projectedFantasyDefenseGameStatsWDfsSalaries(openapisdk.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseProjectionsByGame/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse res = new openapisdk.models.operations.ProjectedFantasyDefenseGameStatsWDfsSalariesResponse() {{
            fantasyDefenseGameProjections = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyDefenseGameProjections = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedFantasyDefenseSeasonStatsWByeWeekAdp - Projected Fantasy Defense Season Stats (w/ Bye Week, ADP)
    **/
    public openapisdk.models.operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse projectedFantasyDefenseSeasonStatsWByeWeekAdp(openapisdk.models.operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseProjectionsBySeason/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse res = new openapisdk.models.operations.ProjectedFantasyDefenseSeasonStatsWByeWeekAdpResponse() {{
            fantasyDefenseSeasonProjections = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyDefenseSeasonProjections = out;
            }
        }

        return res;
    }
	
	
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameProjectionStatsByPlayerID/{season}/{week}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse() {{
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
     * projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Team (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse projectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalaries(openapisdk.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.ProjectedPlayerGameStatsByTeamWInjuriesLineupsDfsSalariesResponse() {{
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
     * projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Week (w/ Injuries, Lineups, DFS Salaries)
    **/
    public openapisdk.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse projectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalaries(openapisdk.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse res = new openapisdk.models.operations.ProjectedPlayerGameStatsByWeekWInjuriesLineupsDfsSalariesResponse() {{
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
     * projectedPlayerSeasonStatsByPlayerWByeWeekAdp - Projected Player Season Stats by Player (w/ Bye Week, ADP)
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse projectedPlayerSeasonStatsByPlayerWByeWeekAdp(openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStatsByPlayerID/{season}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsByPlayerWByeWeekAdpResponse() {{
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
     * projectedPlayerSeasonStatsByTeamWByeWeekAdp - Projected Player Season Stats by Team (w/ Bye Week, ADP)
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse projectedPlayerSeasonStatsByTeamWByeWeekAdp(openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsByTeamWByeWeekAdpResponse() {{
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
     * projectedPlayerSeasonStatsWByeWeekAdp - Projected Player Season Stats (w/ Bye Week, ADP)
    **/
    public openapisdk.models.operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse projectedPlayerSeasonStatsWByeWeekAdp(openapisdk.models.operations.ProjectedPlayerSeasonStatsWByeWeekAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonProjectionStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse res = new openapisdk.models.operations.ProjectedPlayerSeasonStatsWByeWeekAdpResponse() {{
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