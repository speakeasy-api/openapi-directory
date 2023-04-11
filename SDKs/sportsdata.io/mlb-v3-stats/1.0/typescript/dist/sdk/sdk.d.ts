import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/mlb/stats", "https://azure-api.sportsdata.io/v3/mlb/stats"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * MLB scores, stats, and news API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Are Games In Progress
     *
     * @remarks
     * Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.
     */
    areGamesInProgress(req: operations.AreGamesInProgressRequest, config?: AxiosRequestConfig): Promise<operations.AreGamesInProgressResponse>;
    /**
     * Batter vs. Pitcher Stats
     */
    batterVsPitcherStats(req: operations.BatterVsPitcherStatsRequest, config?: AxiosRequestConfig): Promise<operations.BatterVsPitcherStatsResponse>;
    /**
     * Box Score
     */
    boxScore(req: operations.BoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreResponse>;
    /**
     * Box Scores by Date
     */
    boxScoresByDate(req: operations.BoxScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateResponse>;
    /**
     * Box Scores by Date Delta
     */
    boxScoresByDateDelta(req: operations.BoxScoresByDateDeltaRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresByDateDeltaResponse>;
    /**
     * Current Season
     */
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * DFS Slates by Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Games by Date
     */
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * News
     */
    news(req: operations.NewsRequest, config?: AxiosRequestConfig): Promise<operations.NewsResponse>;
    /**
     * News by Date
     */
    newsByDate(req: operations.NewsByDateRequest, config?: AxiosRequestConfig): Promise<operations.NewsByDateResponse>;
    /**
     * News by Player
     */
    newsByPlayer(req: operations.NewsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.NewsByPlayerResponse>;
    /**
     * Player Details by Active
     */
    playerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    /**
     * Player Details by Free Agents
     */
    playerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    /**
     * Player Details by Player
     */
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * Player Game Logs By Season
     */
    playerGameLogsBySeason(req: operations.PlayerGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameLogsBySeasonResponse>;
    /**
     * Player Game Stats by Date
     */
    playerGameStatsByDate(req: operations.PlayerGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByDateResponse>;
    /**
     * Player Game Stats by Player
     */
    playerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    /**
     * Player Season Away Stats
     */
    playerSeasonAwayStats(req: operations.PlayerSeasonAwayStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonAwayStatsResponse>;
    /**
     * Player Season Home Stats
     */
    playerSeasonHomeStats(req: operations.PlayerSeasonHomeStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonHomeStatsResponse>;
    /**
     * Player Season Split Stats
     */
    playerSeasonSplitStats(req: operations.PlayerSeasonSplitStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonSplitStatsResponse>;
    /**
     * Player Season Stats
     */
    playerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    /**
     * Player Season Stats By Player
     */
    playerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    /**
     * Player Season Stats by Team
     */
    playerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    /**
     * Player Season Stats Split By Team
     */
    playerSeasonStatsSplitByTeam(req: operations.PlayerSeasonStatsSplitByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsSplitByTeamResponse>;
    /**
     * Players by Team
     */
    playersByTeam(req: operations.PlayersByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayersByTeamResponse>;
    /**
     * Schedules
     */
    schedules(req: operations.SchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SchedulesResponse>;
    /**
     * Stadiums
     */
    stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    /**
     * Standings
     */
    standings(req: operations.StandingsRequest, config?: AxiosRequestConfig): Promise<operations.StandingsResponse>;
    /**
     * Team Game Logs By Season
     *
     * @remarks
     * Game by game log of total team statistics.
     */
    teamGameLogsBySeason(req: operations.TeamGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameLogsBySeasonResponse>;
    /**
     * Team Game Stats by Date
     */
    teamGameStatsByDate(req: operations.TeamGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByDateResponse>;
    /**
     * Team Hitting vs. Starting Pitcher
     */
    teamHittingVsStartingPitcher(req: operations.TeamHittingVsStartingPitcherRequest, config?: AxiosRequestConfig): Promise<operations.TeamHittingVsStartingPitcherResponse>;
    /**
     * Team Season Stats
     */
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * Teams (Active)
     */
    teamsActive(req: operations.TeamsActiveRequest, config?: AxiosRequestConfig): Promise<operations.TeamsActiveResponse>;
    /**
     * Teams (All)
     */
    teamsAll(req: operations.TeamsAllRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAllResponse>;
}
