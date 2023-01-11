

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
     * gameStatsBySeasonDeprecatedUseTeamGameStatsInstead - Game Stats by Season (Deprecated, use Team Game Stats instead)
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
     * referees - Referees
     *
     * Returns full list of NFL Referees
    **/
    public openapisdk.models.operations.RefereesResponse referees(openapisdk.models.operations.RefereesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Referees", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RefereesResponse res = new openapisdk.models.operations.RefereesResponse() {{
            referees = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object[].class);
                res.referees = out;
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
	
	
    /**
     * xPing - X Ping
     *
     * Ping NFL API
    **/
    public openapisdk.models.operations.XPingResponse xPing(openapisdk.models.operations.XPingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/{format}/Ping/{seconds}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.XPingResponse res = new openapisdk.models.operations.XPingResponse() {{
            xPing200ApplicationJSONAny = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.xPing200ApplicationJSONAny = out;
            }
        }

        return res;
    }
	
}