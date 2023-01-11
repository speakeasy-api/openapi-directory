

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
     * areGamesInProgress - Are Games In Progress
     *
     * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
    **/
    public openapisdk.models.operations.AreGamesInProgressResponse areGamesInProgress(openapisdk.models.operations.AreGamesInProgressRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/AreAnyGamesInProgress", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AreGamesInProgressResponse res = new openapisdk.models.operations.AreGamesInProgressResponse() {{
            areGamesInProgress200ApplicationJSONBoolean = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Boolean out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Boolean.class);
                res.areGamesInProgress200ApplicationJSONBoolean = out;
            }
        }

        return res;
    }
	
	
    /**
     * boxScoreByScoreidV - Box Score by ScoreID V3
    **/
    public openapisdk.models.operations.BoxScoreByScoreidVResponse boxScoreByScoreidV(openapisdk.models.operations.BoxScoreByScoreidVRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScoreByScoreIDV3/{scoreid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BoxScoreByScoreidVResponse res = new openapisdk.models.operations.BoxScoreByScoreidVResponse() {{
            boxScoreV3 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.boxScoreV3 = out;
            }
        }

        return res;
    }
	
	
    /**
     * boxScoreV - Box Score V3
    **/
    public openapisdk.models.operations.BoxScoreVResponse boxScoreV(openapisdk.models.operations.BoxScoreVRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScoreV3/{season}/{week}/{hometeam}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BoxScoreVResponse res = new openapisdk.models.operations.BoxScoreVResponse() {{
            boxScoreV3 = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.boxScoreV3 = out;
            }
        }

        return res;
    }
	
	
    /**
     * boxScoresDeltaV - Box Scores Delta V3
     *
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
    **/
    public openapisdk.models.operations.BoxScoresDeltaVResponse boxScoresDeltaV(openapisdk.models.operations.BoxScoresDeltaVRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BoxScoresDeltaVResponse res = new openapisdk.models.operations.BoxScoresDeltaVResponse() {{
            boxScoreV3s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScoreV3s = out;
            }
        }

        return res;
    }
	
	
    /**
     * boxScoresVSimulation - Box Scores V3 Simulation
     *
     * Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    public openapisdk.models.operations.BoxScoresVSimulationResponse boxScoresVSimulation(openapisdk.models.operations.BoxScoresVSimulationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/SimulatedBoxScoresV3/{numberofplays}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.BoxScoresVSimulationResponse res = new openapisdk.models.operations.BoxScoresVSimulationResponse() {{
            boxScoreV3s = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScoreV3s = out;
            }
        }

        return res;
    }
	
	
    /**
     * byeWeeks - Bye Weeks
     *
     * Get bye weeks for the teams during a specified NFL season. 
    **/
    public openapisdk.models.operations.ByeWeeksResponse byeWeeks(openapisdk.models.operations.ByeWeeksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Byes/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ByeWeeksResponse res = new openapisdk.models.operations.ByeWeeksResponse() {{
            byes = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.byes = out;
            }
        }

        return res;
    }
	
	
    /**
     * dailyFantasyPlayers - Daily Fantasy Players
    **/
    public openapisdk.models.operations.DailyFantasyPlayersResponse dailyFantasyPlayers(openapisdk.models.operations.DailyFantasyPlayersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/DailyFantasyPlayers/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DailyFantasyPlayersResponse res = new openapisdk.models.operations.DailyFantasyPlayersResponse() {{
            dailyFantasyPlayers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.dailyFantasyPlayers = out;
            }
        }

        return res;
    }
	
	
    /**
     * dailyFantasyScoring - Daily Fantasy Scoring
    **/
    public openapisdk.models.operations.DailyFantasyScoringResponse dailyFantasyScoring(openapisdk.models.operations.DailyFantasyScoringRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/DailyFantasyPoints/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DailyFantasyScoringResponse res = new openapisdk.models.operations.DailyFantasyScoringResponse() {{
            dailyFantasyScorings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.dailyFantasyScorings = out;
            }
        }

        return res;
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
     * fantasyDefenseGameStats - Fantasy Defense Game Stats
    **/
    public openapisdk.models.operations.FantasyDefenseGameStatsResponse fantasyDefenseGameStats(openapisdk.models.operations.FantasyDefenseGameStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseByGame/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyDefenseGameStatsResponse res = new openapisdk.models.operations.FantasyDefenseGameStatsResponse() {{
            fantasyDefenseGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyDefenseGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * fantasyDefenseGameStatsByTeam - Fantasy Defense Game Stats by Team
    **/
    public openapisdk.models.operations.FantasyDefenseGameStatsByTeamResponse fantasyDefenseGameStatsByTeam(openapisdk.models.operations.FantasyDefenseGameStatsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyDefenseGameStatsByTeamResponse res = new openapisdk.models.operations.FantasyDefenseGameStatsByTeamResponse() {{
            fantasyDefenseGame = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.fantasyDefenseGame = out;
            }
        }

        return res;
    }
	
	
    /**
     * fantasyDefenseSeasonStats - Fantasy Defense Season Stats
    **/
    public openapisdk.models.operations.FantasyDefenseSeasonStatsResponse fantasyDefenseSeasonStats(openapisdk.models.operations.FantasyDefenseSeasonStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseBySeason/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyDefenseSeasonStatsResponse res = new openapisdk.models.operations.FantasyDefenseSeasonStatsResponse() {{
            fantasyDefenseSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyDefenseSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * fantasyDefenseSeasonStatsByTeam - Fantasy Defense Season Stats by Team
    **/
    public openapisdk.models.operations.FantasyDefenseSeasonStatsByTeamResponse fantasyDefenseSeasonStatsByTeam(openapisdk.models.operations.FantasyDefenseSeasonStatsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyDefenseSeasonStatsByTeamResponse res = new openapisdk.models.operations.FantasyDefenseSeasonStatsByTeamResponse() {{
            fantasyDefenseSeason = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.fantasyDefenseSeason = out;
            }
        }

        return res;
    }
	
	
    /**
     * fantasyPlayerOwnershipPercentagesSeasonLong - Fantasy Player Ownership Percentages (Season-Long)
    **/
    public openapisdk.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse fantasyPlayerOwnershipPercentagesSeasonLong(openapisdk.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerOwnership/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse res = new openapisdk.models.operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse() {{
            playerOwnerships = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerOwnerships = out;
            }
        }

        return res;
    }
	
	
    /**
     * fantasyPlayersWithAdp - Fantasy Players with ADP
     *
     * This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
    **/
    public openapisdk.models.operations.FantasyPlayersWithAdpResponse fantasyPlayersWithAdp(openapisdk.models.operations.FantasyPlayersWithAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyPlayers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.FantasyPlayersWithAdpResponse res = new openapisdk.models.operations.FantasyPlayersWithAdpResponse() {{
            fantasyPlayers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyPlayers = out;
            }
        }

        return res;
    }
	
	
    /**
     * gameStatsBySeasonDeprecatedUseTeamGameStatsInstead - Game Stats by Season (Deprecated, use Team Game Stats instead)
     *
     * Game stats for a specified season.
    **/
    public openapisdk.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(openapisdk.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/GameStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse res = new openapisdk.models.operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse() {{
            games = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.games = out;
            }
        }

        return res;
    }
	
	
    /**
     * gameStatsByWeekDeprecatedUseTeamGameStatsInstead - Game Stats by Week (Deprecated, use Team Game Stats instead)
     *
     * Game stats for a specified season and week.
    **/
    public openapisdk.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse gameStatsByWeekDeprecatedUseTeamGameStatsInstead(openapisdk.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/GameStatsByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse res = new openapisdk.models.operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse() {{
            games = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.games = out;
            }
        }

        return res;
    }
	
	
    /**
     * idpFantasyPlayersWithAdp - IDP Fantasy Players with ADP
     *
     * This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
    **/
    public openapisdk.models.operations.IdpFantasyPlayersWithAdpResponse idpFantasyPlayersWithAdp(openapisdk.models.operations.IdpFantasyPlayersWithAdpRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FantasyPlayersIDP", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.IdpFantasyPlayersWithAdpResponse res = new openapisdk.models.operations.IdpFantasyPlayersWithAdpResponse() {{
            fantasyPlayers = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.fantasyPlayers = out;
            }
        }

        return res;
    }
	
	
    /**
     * injuries - Injuries
    **/
    public openapisdk.models.operations.InjuriesResponse injuries(openapisdk.models.operations.InjuriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Injuries/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InjuriesResponse res = new openapisdk.models.operations.InjuriesResponse() {{
            injuries = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.injuries = out;
            }
        }

        return res;
    }
	
	
    /**
     * injuriesByTeam - Injuries by Team
    **/
    public openapisdk.models.operations.InjuriesByTeamResponse injuriesByTeam(openapisdk.models.operations.InjuriesByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Injuries/{season}/{week}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.InjuriesByTeamResponse res = new openapisdk.models.operations.InjuriesByTeamResponse() {{
            injuries = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.injuries = out;
            }
        }

        return res;
    }
	
	
    /**
     * leagueLeadersBySeason - League Leaders by Season
    **/
    public openapisdk.models.operations.LeagueLeadersBySeasonResponse leagueLeadersBySeason(openapisdk.models.operations.LeagueLeadersBySeasonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/SeasonLeagueLeaders/{season}/{position}/{column}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LeagueLeadersBySeasonResponse res = new openapisdk.models.operations.LeagueLeadersBySeasonResponse() {{
            playerSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * leagueLeadersByWeek - League Leaders by Week
    **/
    public openapisdk.models.operations.LeagueLeadersByWeekResponse leagueLeadersByWeek(openapisdk.models.operations.LeagueLeadersByWeekRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/GameLeagueLeaders/{season}/{week}/{position}/{column}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LeagueLeadersByWeekResponse res = new openapisdk.models.operations.LeagueLeadersByWeekResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScore - Legacy Box Score
    **/
    public openapisdk.models.operations.LegacyBoxScoreResponse legacyBoxScore(openapisdk.models.operations.LegacyBoxScoreRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScore/{season}/{week}/{hometeam}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoreResponse res = new openapisdk.models.operations.LegacyBoxScoreResponse() {{
            boxScore = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.boxScore = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScores - Legacy Box Scores
     *
     * This method returns all box scores for a given season and week.
    **/
    public openapisdk.models.operations.LegacyBoxScoresResponse legacyBoxScores(openapisdk.models.operations.LegacyBoxScoresRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScores/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresResponse res = new openapisdk.models.operations.LegacyBoxScoresResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScoresActive - Legacy Box Scores Active
     *
     * This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
    **/
    public openapisdk.models.operations.LegacyBoxScoresActiveResponse legacyBoxScoresActive(openapisdk.models.operations.LegacyBoxScoresActiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/ActiveBoxScores", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresActiveResponse res = new openapisdk.models.operations.LegacyBoxScoresActiveResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScoresDelta - Legacy Box Scores Delta
     *
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
    **/
    public openapisdk.models.operations.LegacyBoxScoresDeltaResponse legacyBoxScoresDelta(openapisdk.models.operations.LegacyBoxScoresDeltaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/BoxScoresDelta/{season}/{week}/{minutes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresDeltaResponse res = new openapisdk.models.operations.LegacyBoxScoresDeltaResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScoresDeltaCurrentWeek - Legacy Box Scores Delta (Current Week)
    **/
    public openapisdk.models.operations.LegacyBoxScoresDeltaCurrentWeekResponse legacyBoxScoresDeltaCurrentWeek(openapisdk.models.operations.LegacyBoxScoresDeltaCurrentWeekRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/RecentlyUpdatedBoxScores/{minutes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresDeltaCurrentWeekResponse res = new openapisdk.models.operations.LegacyBoxScoresDeltaCurrentWeekResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScoresFinal - Legacy Box Scores Final
    **/
    public openapisdk.models.operations.LegacyBoxScoresFinalResponse legacyBoxScoresFinal(openapisdk.models.operations.LegacyBoxScoresFinalRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FinalBoxScores", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresFinalResponse res = new openapisdk.models.operations.LegacyBoxScoresFinalResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * legacyBoxScoresLive - Legacy Box Scores Live
    **/
    public openapisdk.models.operations.LegacyBoxScoresLiveResponse legacyBoxScoresLive(openapisdk.models.operations.LegacyBoxScoresLiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/LiveBoxScores", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LegacyBoxScoresLiveResponse res = new openapisdk.models.operations.LegacyBoxScoresLiveResponse() {{
            boxScores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.boxScores = out;
            }
        }

        return res;
    }
	
	
    /**
     * news - News
    **/
    public openapisdk.models.operations.NewsResponse news(openapisdk.models.operations.NewsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/News", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NewsResponse res = new openapisdk.models.operations.NewsResponse() {{
            news = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.news = out;
            }
        }

        return res;
    }
	
	
    /**
     * newsByDate - News by Date
    **/
    public openapisdk.models.operations.NewsByDateResponse newsByDate(openapisdk.models.operations.NewsByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/NewsByDate/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NewsByDateResponse res = new openapisdk.models.operations.NewsByDateResponse() {{
            news = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.news = out;
            }
        }

        return res;
    }
	
	
    /**
     * newsByPlayer - News by Player
    **/
    public openapisdk.models.operations.NewsByPlayerResponse newsByPlayer(openapisdk.models.operations.NewsByPlayerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/NewsByPlayerID/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NewsByPlayerResponse res = new openapisdk.models.operations.NewsByPlayerResponse() {{
            news = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.news = out;
            }
        }

        return res;
    }
	
	
    /**
     * newsByTeam - News by Team
    **/
    public openapisdk.models.operations.NewsByTeamResponse newsByTeam(openapisdk.models.operations.NewsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/NewsByTeam/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.NewsByTeamResponse res = new openapisdk.models.operations.NewsByTeamResponse() {{
            news = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.news = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerDetailsByAvailable - Player Details by Available
    **/
    public openapisdk.models.operations.PlayerDetailsByAvailableResponse playerDetailsByAvailable(openapisdk.models.operations.PlayerDetailsByAvailableRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Players", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerDetailsByAvailableResponse res = new openapisdk.models.operations.PlayerDetailsByAvailableResponse() {{
            players = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.players = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerDetailsByFreeAgents - Player Details by Free Agents
    **/
    public openapisdk.models.operations.PlayerDetailsByFreeAgentsResponse playerDetailsByFreeAgents(openapisdk.models.operations.PlayerDetailsByFreeAgentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/FreeAgents", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerDetailsByFreeAgentsResponse res = new openapisdk.models.operations.PlayerDetailsByFreeAgentsResponse() {{
            players = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.players = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerDetailsByPlayer - Player Details by Player
    **/
    public openapisdk.models.operations.PlayerDetailsByPlayerResponse playerDetailsByPlayer(openapisdk.models.operations.PlayerDetailsByPlayerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Player/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerDetailsByPlayerResponse res = new openapisdk.models.operations.PlayerDetailsByPlayerResponse() {{
            playerDetail = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.playerDetail = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerDetailsByRookieDraftYear - Player Details by Rookie Draft Year
    **/
    public openapisdk.models.operations.PlayerDetailsByRookieDraftYearResponse playerDetailsByRookieDraftYear(openapisdk.models.operations.PlayerDetailsByRookieDraftYearRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Rookies/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerDetailsByRookieDraftYearResponse res = new openapisdk.models.operations.PlayerDetailsByRookieDraftYearResponse() {{
            players = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.players = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerDetailsByTeam - Player Details by Team
    **/
    public openapisdk.models.operations.PlayerDetailsByTeamResponse playerDetailsByTeam(openapisdk.models.operations.PlayerDetailsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Players/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerDetailsByTeamResponse res = new openapisdk.models.operations.PlayerDetailsByTeamResponse() {{
            playerDetails = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerDetails = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameLogsBySeason - Player Game Logs By Season
    **/
    public openapisdk.models.operations.PlayerGameLogsBySeasonResponse playerGameLogsBySeason(openapisdk.models.operations.PlayerGameLogsBySeasonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameLogsBySeasonResponse res = new openapisdk.models.operations.PlayerGameLogsBySeasonResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameRedZoneStats - Player Game Red Zone Stats
    **/
    public openapisdk.models.operations.PlayerGameRedZoneStatsResponse playerGameRedZoneStats(openapisdk.models.operations.PlayerGameRedZoneStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameRedZoneStats/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameRedZoneStatsResponse res = new openapisdk.models.operations.PlayerGameRedZoneStatsResponse() {{
            playerGameRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGameRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameRedZoneStatsInsideFive - Player Game Red Zone Stats Inside Five
    **/
    public openapisdk.models.operations.PlayerGameRedZoneStatsInsideFiveResponse playerGameRedZoneStatsInsideFive(openapisdk.models.operations.PlayerGameRedZoneStatsInsideFiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameRedZoneStatsInsideFiveResponse res = new openapisdk.models.operations.PlayerGameRedZoneStatsInsideFiveResponse() {{
            playerGameRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGameRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameRedZoneStatsInsideTen - Player Game Red Zone Stats Inside Ten
    **/
    public openapisdk.models.operations.PlayerGameRedZoneStatsInsideTenResponse playerGameRedZoneStatsInsideTen(openapisdk.models.operations.PlayerGameRedZoneStatsInsideTenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameRedZoneStatsInsideTenResponse res = new openapisdk.models.operations.PlayerGameRedZoneStatsInsideTenResponse() {{
            playerGameRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGameRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameStatsByPlayer - Player Game Stats by Player
    **/
    public openapisdk.models.operations.PlayerGameStatsByPlayerResponse playerGameStatsByPlayer(openapisdk.models.operations.PlayerGameStatsByPlayerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsByPlayerID/{season}/{week}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameStatsByPlayerResponse res = new openapisdk.models.operations.PlayerGameStatsByPlayerResponse() {{
            playerGame = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.playerGame = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameStatsByTeam - Player Game Stats by Team
    **/
    public openapisdk.models.operations.PlayerGameStatsByTeamResponse playerGameStatsByTeam(openapisdk.models.operations.PlayerGameStatsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameStatsByTeamResponse res = new openapisdk.models.operations.PlayerGameStatsByTeamResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameStatsByWeek - Player Game Stats by Week
    **/
    public openapisdk.models.operations.PlayerGameStatsByWeekResponse playerGameStatsByWeek(openapisdk.models.operations.PlayerGameStatsByWeekRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameStatsByWeekResponse res = new openapisdk.models.operations.PlayerGameStatsByWeekResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameStatsByWeekDelta - Player Game Stats by Week Delta
    **/
    public openapisdk.models.operations.PlayerGameStatsByWeekDeltaResponse playerGameStatsByWeekDelta(openapisdk.models.operations.PlayerGameStatsByWeekDeltaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameStatsByWeekDeltaResponse res = new openapisdk.models.operations.PlayerGameStatsByWeekDeltaResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerGameStatsDelta - Player Game Stats Delta
    **/
    public openapisdk.models.operations.PlayerGameStatsDeltaResponse playerGameStatsDelta(openapisdk.models.operations.PlayerGameStatsDeltaRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerGameStatsDelta/{minutes}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerGameStatsDeltaResponse res = new openapisdk.models.operations.PlayerGameStatsDeltaResponse() {{
            playerGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonRedZoneStats - Player Season Red Zone Stats
    **/
    public openapisdk.models.operations.PlayerSeasonRedZoneStatsResponse playerSeasonRedZoneStats(openapisdk.models.operations.PlayerSeasonRedZoneStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonRedZoneStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonRedZoneStatsResponse res = new openapisdk.models.operations.PlayerSeasonRedZoneStatsResponse() {{
            playerSeasonRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonRedZoneStatsInsideFive - Player Season Red Zone Stats Inside Five
    **/
    public openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideFiveResponse playerSeasonRedZoneStatsInsideFive(openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideFiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideFiveResponse res = new openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideFiveResponse() {{
            playerSeasonRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonRedZoneStatsInsideTen - Player Season Red Zone Stats Inside Ten
    **/
    public openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideTenResponse playerSeasonRedZoneStatsInsideTen(openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideTenRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonRedZoneInsideTenStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideTenResponse res = new openapisdk.models.operations.PlayerSeasonRedZoneStatsInsideTenResponse() {{
            playerSeasonRedZones = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonRedZones = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonStats - Player Season Stats
    **/
    public openapisdk.models.operations.PlayerSeasonStatsResponse playerSeasonStats(openapisdk.models.operations.PlayerSeasonStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonStatsResponse res = new openapisdk.models.operations.PlayerSeasonStatsResponse() {{
            playerSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonStatsByPlayer - Player Season Stats by Player
    **/
    public openapisdk.models.operations.PlayerSeasonStatsByPlayerResponse playerSeasonStatsByPlayer(openapisdk.models.operations.PlayerSeasonStatsByPlayerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonStatsByPlayerID/{season}/{playerid}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonStatsByPlayerResponse res = new openapisdk.models.operations.PlayerSeasonStatsByPlayerResponse() {{
            playerSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonStatsByTeam - Player Season Stats by Team
    **/
    public openapisdk.models.operations.PlayerSeasonStatsByTeamResponse playerSeasonStatsByTeam(openapisdk.models.operations.PlayerSeasonStatsByTeamRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonStatsByTeam/{season}/{team}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonStatsByTeamResponse res = new openapisdk.models.operations.PlayerSeasonStatsByTeamResponse() {{
            playerSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * playerSeasonThirdDownStats - Player Season Third Down Stats
    **/
    public openapisdk.models.operations.PlayerSeasonThirdDownStatsResponse playerSeasonThirdDownStats(openapisdk.models.operations.PlayerSeasonThirdDownStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/PlayerSeasonThirdDownStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PlayerSeasonThirdDownStatsResponse res = new openapisdk.models.operations.PlayerSeasonThirdDownStatsResponse() {{
            playerSeasonThirdDowns = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerSeasonThirdDowns = out;
            }
        }

        return res;
    }
	
	
    /**
     * proBowlers - Pro Bowlers
    **/
    public openapisdk.models.operations.ProBowlersResponse proBowlers(openapisdk.models.operations.ProBowlersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/ProBowlers/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ProBowlersResponse res = new openapisdk.models.operations.ProBowlersResponse() {{
            playerInfos = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.playerInfos = out;
            }
        }

        return res;
    }
	
	
    /**
     * schedule - Schedule
     *
     * Game schedule for a specified season.
    **/
    public openapisdk.models.operations.ScheduleResponse schedule(openapisdk.models.operations.ScheduleRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Schedules/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScheduleResponse res = new openapisdk.models.operations.ScheduleResponse() {{
            schedules = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.schedules = out;
            }
        }

        return res;
    }
	
	
    /**
     * scoresByDate - Scores by Date
     *
     * Get game scores for a specified week of a season.
    **/
    public openapisdk.models.operations.ScoresByDateResponse scoresByDate(openapisdk.models.operations.ScoresByDateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/ScoresByDate/{date}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScoresByDateResponse res = new openapisdk.models.operations.ScoresByDateResponse() {{
            scores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.scores = out;
            }
        }

        return res;
    }
	
	
    /**
     * scoresBySeason - Scores by Season 
     *
     * Game scores for a specified season.
    **/
    public openapisdk.models.operations.ScoresBySeasonResponse scoresBySeason(openapisdk.models.operations.ScoresBySeasonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Scores/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScoresBySeasonResponse res = new openapisdk.models.operations.ScoresBySeasonResponse() {{
            scores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.scores = out;
            }
        }

        return res;
    }
	
	
    /**
     * scoresByWeek - Scores by Week
     *
     * Get game scores for a specified week of a season.
    **/
    public openapisdk.models.operations.ScoresByWeekResponse scoresByWeek(openapisdk.models.operations.ScoresByWeekRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/ScoresByWeek/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScoresByWeekResponse res = new openapisdk.models.operations.ScoresByWeekResponse() {{
            scores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.scores = out;
            }
        }

        return res;
    }
	
	
    /**
     * scoresByWeekSimulation - Scores by Week Simulation
     *
     * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
    **/
    public openapisdk.models.operations.ScoresByWeekSimulationResponse scoresByWeekSimulation(openapisdk.models.operations.ScoresByWeekSimulationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/SimulatedScores/{numberofplays}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ScoresByWeekSimulationResponse res = new openapisdk.models.operations.ScoresByWeekSimulationResponse() {{
            scores = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.scores = out;
            }
        }

        return res;
    }
	
	
    /**
     * seasonCurrent - Season Current
     *
     * Year of the current NFL season. This value changes on July 1st. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    public openapisdk.models.operations.SeasonCurrentResponse seasonCurrent(openapisdk.models.operations.SeasonCurrentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/CurrentSeason", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SeasonCurrentResponse res = new openapisdk.models.operations.SeasonCurrentResponse() {{
            seasonCurrent200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.seasonCurrent200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
	
    /**
     * seasonLastCompleted - Season Last Completed
     *
     * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    public openapisdk.models.operations.SeasonLastCompletedResponse seasonLastCompleted(openapisdk.models.operations.SeasonLastCompletedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/LastCompletedSeason", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SeasonLastCompletedResponse res = new openapisdk.models.operations.SeasonLastCompletedResponse() {{
            seasonLastCompleted200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.seasonLastCompleted200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
	
    /**
     * seasonUpcoming - Season Upcoming
     *
     * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
    **/
    public openapisdk.models.operations.SeasonUpcomingResponse seasonUpcoming(openapisdk.models.operations.SeasonUpcomingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/UpcomingSeason", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SeasonUpcomingResponse res = new openapisdk.models.operations.SeasonUpcomingResponse() {{
            seasonUpcoming200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.seasonUpcoming200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
	
    /**
     * stadiums - Stadiums
     *
     * This method returns all stadiums.
    **/
    public openapisdk.models.operations.StadiumsResponse stadiums(openapisdk.models.operations.StadiumsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Stadiums", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.StadiumsResponse res = new openapisdk.models.operations.StadiumsResponse() {{
            stadiums = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.stadiums = out;
            }
        }

        return res;
    }
	
	
    /**
     * standings - Standings
    **/
    public openapisdk.models.operations.StandingsResponse standings(openapisdk.models.operations.StandingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Standings/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.StandingsResponse res = new openapisdk.models.operations.StandingsResponse() {{
            standings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.standings = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamGameStats - Team Game Stats
    **/
    public openapisdk.models.operations.TeamGameStatsResponse teamGameStats(openapisdk.models.operations.TeamGameStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/TeamGameStats/{season}/{week}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamGameStatsResponse res = new openapisdk.models.operations.TeamGameStatsResponse() {{
            teamGames = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.teamGames = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamSeasonStats - Team Season Stats
    **/
    public openapisdk.models.operations.TeamSeasonStatsResponse teamSeasonStats(openapisdk.models.operations.TeamSeasonStatsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/TeamSeasonStats/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamSeasonStatsResponse res = new openapisdk.models.operations.TeamSeasonStatsResponse() {{
            teamSeasons = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.teamSeasons = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsActive - Teams (Active)
     *
     * Gets all active teams.
    **/
    public openapisdk.models.operations.TeamsActiveResponse teamsActive(openapisdk.models.operations.TeamsActiveRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Teams", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsActiveResponse res = new openapisdk.models.operations.TeamsActiveResponse() {{
            teams = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.teams = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsAll - Teams (All)
     *
     * Gets all teams, including pro bowl teams.
    **/
    public openapisdk.models.operations.TeamsAllResponse teamsAll(openapisdk.models.operations.TeamsAllRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/AllTeams", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsAllResponse res = new openapisdk.models.operations.TeamsAllResponse() {{
            teams = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.teams = out;
            }
        }

        return res;
    }
	
	
    /**
     * teamsBySeason - Teams by Season
     *
     * List of teams playing in a specified season.
    **/
    public openapisdk.models.operations.TeamsBySeasonResponse teamsBySeason(openapisdk.models.operations.TeamsBySeasonRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Teams/{season}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TeamsBySeasonResponse res = new openapisdk.models.operations.TeamsBySeasonResponse() {{
            teams = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.teams = out;
            }
        }

        return res;
    }
	
	
    /**
     * timeframes - Timeframes
     *
     * Get detailed information about past, present, and future timeframes.
    **/
    public openapisdk.models.operations.TimeframesResponse timeframes(openapisdk.models.operations.TimeframesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Timeframes/{type}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.TimeframesResponse res = new openapisdk.models.operations.TimeframesResponse() {{
            timeframes = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.timeframes = out;
            }
        }

        return res;
    }
	
	
    /**
     * weekCurrent - Week Current
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    public openapisdk.models.operations.WeekCurrentResponse weekCurrent(openapisdk.models.operations.WeekCurrentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/CurrentWeek", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WeekCurrentResponse res = new openapisdk.models.operations.WeekCurrentResponse() {{
            weekCurrent200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.weekCurrent200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
	
    /**
     * weekLastCompleted - Week Last Completed
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    public openapisdk.models.operations.WeekLastCompletedResponse weekLastCompleted(openapisdk.models.operations.WeekLastCompletedRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/LastCompletedWeek", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WeekLastCompletedResponse res = new openapisdk.models.operations.WeekLastCompletedResponse() {{
            weekLastCompleted200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.weekLastCompleted200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
	
    /**
     * weekUpcoming - Week Upcoming
     *
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
    **/
    public openapisdk.models.operations.WeekUpcomingResponse weekUpcoming(openapisdk.models.operations.WeekUpcomingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/UpcomingWeek", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.WeekUpcomingResponse res = new openapisdk.models.operations.WeekUpcomingResponse() {{
            weekUpcoming200ApplicationJSONInteger = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Long out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Long.class);
                res.weekUpcoming200ApplicationJSONInteger = out;
            }
        }

        return res;
    }
	
}