import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/nfl/scores", "https://azure-api.sportsdata.io/v3/nfl/scores"];
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
 * NFL schedules, scores, odds, weather, and news API.
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
     * Bye Weeks
     *
     * @remarks
     * Get bye weeks for the teams during a specified NFL season.
     */
    byeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    /**
     * Depth Charts
     *
     * @remarks
     * Depth charts for all NFL teams split by offensive, defensive, and special teams position groupings.
     */
    depthCharts(req: operations.DepthChartsRequest, config?: AxiosRequestConfig): Promise<operations.DepthChartsResponse>;
    /**
     * Game Stats by Season (Deprecated, use Team Game Stats instead)
     */
    gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * Game Stats by Week (Deprecated, use Team Game Stats instead)
     */
    gameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
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
     * News by Team
     */
    newsByTeam(req: operations.NewsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.NewsByTeamResponse>;
    /**
     * Player Details by Available
     */
    playerDetailsByAvailable(req: operations.PlayerDetailsByAvailableRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByAvailableResponse>;
    /**
     * Player Details by Free Agents
     */
    playerDetailsByFreeAgents(req: operations.PlayerDetailsByFreeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByFreeAgentsResponse>;
    /**
     * Player Details by Player
     */
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * Player Details by Rookie Draft Year
     */
    playerDetailsByRookieDraftYear(req: operations.PlayerDetailsByRookieDraftYearRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByRookieDraftYearResponse>;
    /**
     * Player Details by Team
     */
    playerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    /**
     * Referees
     *
     * @remarks
     * Returns full list of NFL Referees
     */
    referees(req: operations.RefereesRequest, config?: AxiosRequestConfig): Promise<operations.RefereesResponse>;
    /**
     * Schedule
     *
     * @remarks
     * Game schedule for a specified season.
     */
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Scores by Date
     *
     * @remarks
     * Get game scores for a specified week of a season.
     */
    scoresByDate(req: operations.ScoresByDateRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByDateResponse>;
    /**
     * Scores by Season
     *
     * @remarks
     * Game scores for a specified season.
     */
    scoresBySeason(req: operations.ScoresBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.ScoresBySeasonResponse>;
    /**
     * Scores by Week
     *
     * @remarks
     * Get game scores for a specified week of a season.
     */
    scoresByWeek(req: operations.ScoresByWeekRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekResponse>;
    /**
     * Scores by Week Simulation
     *
     * @remarks
     * Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.
     */
    scoresByWeekSimulation(req: operations.ScoresByWeekSimulationRequest, config?: AxiosRequestConfig): Promise<operations.ScoresByWeekSimulationResponse>;
    /**
     * Season Current
     *
     * @remarks
     * Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
     */
    seasonCurrent(req: operations.SeasonCurrentRequest, config?: AxiosRequestConfig): Promise<operations.SeasonCurrentResponse>;
    /**
     * Season Last Completed
     *
     * @remarks
     * Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
     */
    seasonLastCompleted(req: operations.SeasonLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.SeasonLastCompletedResponse>;
    /**
     * Season Upcoming
     *
     * @remarks
     * Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.
     */
    seasonUpcoming(req: operations.SeasonUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.SeasonUpcomingResponse>;
    /**
     * Stadiums
     *
     * @remarks
     * This method returns all stadiums.
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
     * Team Game Stats
     */
    teamGameStats(req: operations.TeamGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsResponse>;
    /**
     * Team Season Stats
     */
    teamSeasonStats(req: operations.TeamSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsResponse>;
    /**
     * Teams (Active)
     *
     * @remarks
     * Gets all active teams.
     */
    teamsActive(req: operations.TeamsActiveRequest, config?: AxiosRequestConfig): Promise<operations.TeamsActiveResponse>;
    /**
     * Teams (All)
     *
     * @remarks
     * Gets all teams, including pro bowl teams.
     */
    teamsAll(req: operations.TeamsAllRequest, config?: AxiosRequestConfig): Promise<operations.TeamsAllResponse>;
    /**
     * Teams by Season
     *
     * @remarks
     * List of teams playing in a specified season.
     */
    teamsBySeason(req: operations.TeamsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.TeamsBySeasonResponse>;
    /**
     * Timeframes
     *
     * @remarks
     * Get detailed information about past, present, and future timeframes.
     */
    timeframes(req: operations.TimeframesRequest, config?: AxiosRequestConfig): Promise<operations.TimeframesResponse>;
    /**
     * Week Current
     *
     * @remarks
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
     */
    weekCurrent(req: operations.WeekCurrentRequest, config?: AxiosRequestConfig): Promise<operations.WeekCurrentResponse>;
    /**
     * Week Last Completed
     *
     * @remarks
     * Number of the last completed week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
     */
    weekLastCompleted(req: operations.WeekLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.WeekLastCompletedResponse>;
    /**
     * Week Upcoming
     *
     * @remarks
     * Number of the upcoming week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
     */
    weekUpcoming(req: operations.WeekUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.WeekUpcomingResponse>;
    /**
     * X Ping
     *
     * @remarks
     * Ping NFL API
     */
    xPing(req: operations.XPingRequest, config?: AxiosRequestConfig): Promise<operations.XPingResponse>;
}
