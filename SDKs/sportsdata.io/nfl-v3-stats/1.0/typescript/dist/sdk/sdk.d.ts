import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/nfl/stats", "https://azure-api.sportsdata.io/v3/nfl/stats"];
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
 * NFL rosters, player stats, team stats, and fantasy stats API.
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
     * Box Score by ScoreID V3
     */
    boxScoreByScoreidV(req: operations.BoxScoreByScoreidVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreByScoreidVResponse>;
    /**
     * Box Score V3
     */
    boxScoreV(req: operations.BoxScoreVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoreVResponse>;
    /**
     * Box Scores Delta V3
     *
     * @remarks
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.
     */
    boxScoresDeltaV(req: operations.BoxScoresDeltaVRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresDeltaVResponse>;
    /**
     * Box Scores V3 Simulation
     *
     * @remarks
     * Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.
     */
    boxScoresVSimulation(req: operations.BoxScoresVSimulationRequest, config?: AxiosRequestConfig): Promise<operations.BoxScoresVSimulationResponse>;
    /**
     * Bye Weeks
     *
     * @remarks
     * Get bye weeks for the teams during a specified NFL season.
     */
    byeWeeks(req: operations.ByeWeeksRequest, config?: AxiosRequestConfig): Promise<operations.ByeWeeksResponse>;
    /**
     * Daily Fantasy Players
     */
    dailyFantasyPlayers(req: operations.DailyFantasyPlayersRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyPlayersResponse>;
    /**
     * Daily Fantasy Scoring
     */
    dailyFantasyScoring(req: operations.DailyFantasyScoringRequest, config?: AxiosRequestConfig): Promise<operations.DailyFantasyScoringResponse>;
    /**
     * DFS Slates by Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * DFS Slates by Week
     */
    dfsSlatesByWeek(req: operations.DfsSlatesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByWeekResponse>;
    /**
     * Fantasy Defense Game Stats
     */
    fantasyDefenseGameStats(req: operations.FantasyDefenseGameStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsResponse>;
    /**
     * Fantasy Defense Game Stats by Team
     */
    fantasyDefenseGameStatsByTeam(req: operations.FantasyDefenseGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseGameStatsByTeamResponse>;
    /**
     * Fantasy Defense Season Stats
     */
    fantasyDefenseSeasonStats(req: operations.FantasyDefenseSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsResponse>;
    /**
     * Fantasy Defense Season Stats by Team
     */
    fantasyDefenseSeasonStatsByTeam(req: operations.FantasyDefenseSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.FantasyDefenseSeasonStatsByTeamResponse>;
    /**
     * Fantasy Player Ownership Percentages (Season-Long)
     */
    fantasyPlayerOwnershipPercentagesSeasonLong(req: operations.FantasyPlayerOwnershipPercentagesSeasonLongRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayerOwnershipPercentagesSeasonLongResponse>;
    /**
     * Fantasy Players with ADP
     *
     * @remarks
     * This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).
     */
    fantasyPlayersWithAdp(req: operations.FantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.FantasyPlayersWithAdpResponse>;
    /**
     * Game Stats by Season (Deprecated, use Team Game Stats instead)
     *
     * @remarks
     * Game stats for a specified season.
     */
    gameStatsBySeasonDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsBySeasonDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * Game Stats by Week (Deprecated, use Team Game Stats instead)
     *
     * @remarks
     * Game stats for a specified season and week.
     */
    gameStatsByWeekDeprecatedUseTeamGameStatsInstead(req: operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadRequest, config?: AxiosRequestConfig): Promise<operations.GameStatsByWeekDeprecatedUseTeamGameStatsInsteadResponse>;
    /**
     * IDP Fantasy Players with ADP
     *
     * @remarks
     * This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.
     */
    idpFantasyPlayersWithAdp(req: operations.IdpFantasyPlayersWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.IdpFantasyPlayersWithAdpResponse>;
    /**
     * Injuries
     */
    injuries(req: operations.InjuriesRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesResponse>;
    /**
     * Injuries by Team
     */
    injuriesByTeam(req: operations.InjuriesByTeamRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesByTeamResponse>;
    /**
     * League Leaders by Season
     */
    leagueLeadersBySeason(req: operations.LeagueLeadersBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersBySeasonResponse>;
    /**
     * League Leaders by Week
     */
    leagueLeadersByWeek(req: operations.LeagueLeadersByWeekRequest, config?: AxiosRequestConfig): Promise<operations.LeagueLeadersByWeekResponse>;
    /**
     * Legacy Box Score
     */
    legacyBoxScore(req: operations.LegacyBoxScoreRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoreResponse>;
    /**
     * Legacy Box Scores
     *
     * @remarks
     * This method returns all box scores for a given season and week.
     */
    legacyBoxScores(req: operations.LegacyBoxScoresRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresResponse>;
    /**
     * Legacy Box Scores Active
     *
     * @remarks
     * This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.
     */
    legacyBoxScoresActive(req: operations.LegacyBoxScoresActiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresActiveResponse>;
    /**
     * Legacy Box Scores Delta
     *
     * @remarks
     * This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.
     */
    legacyBoxScoresDelta(req: operations.LegacyBoxScoresDeltaRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaResponse>;
    /**
     * Legacy Box Scores Delta (Current Week)
     */
    legacyBoxScoresDeltaCurrentWeek(req: operations.LegacyBoxScoresDeltaCurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresDeltaCurrentWeekResponse>;
    /**
     * Legacy Box Scores Final
     */
    legacyBoxScoresFinal(req: operations.LegacyBoxScoresFinalRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresFinalResponse>;
    /**
     * Legacy Box Scores Live
     */
    legacyBoxScoresLive(req: operations.LegacyBoxScoresLiveRequest, config?: AxiosRequestConfig): Promise<operations.LegacyBoxScoresLiveResponse>;
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
     * Player Game Logs By Season
     */
    playerGameLogsBySeason(req: operations.PlayerGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameLogsBySeasonResponse>;
    /**
     * Player Game Red Zone Stats
     */
    playerGameRedZoneStats(req: operations.PlayerGameRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsResponse>;
    /**
     * Player Game Red Zone Stats Inside Five
     */
    playerGameRedZoneStatsInsideFive(req: operations.PlayerGameRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideFiveResponse>;
    /**
     * Player Game Red Zone Stats Inside Ten
     */
    playerGameRedZoneStatsInsideTen(req: operations.PlayerGameRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameRedZoneStatsInsideTenResponse>;
    /**
     * Player Game Stats by Player
     */
    playerGameStatsByPlayer(req: operations.PlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByPlayerResponse>;
    /**
     * Player Game Stats by Team
     */
    playerGameStatsByTeam(req: operations.PlayerGameStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByTeamResponse>;
    /**
     * Player Game Stats by Week
     */
    playerGameStatsByWeek(req: operations.PlayerGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekResponse>;
    /**
     * Player Game Stats by Week Delta
     */
    playerGameStatsByWeekDelta(req: operations.PlayerGameStatsByWeekDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsByWeekDeltaResponse>;
    /**
     * Player Game Stats Delta
     */
    playerGameStatsDelta(req: operations.PlayerGameStatsDeltaRequest, config?: AxiosRequestConfig): Promise<operations.PlayerGameStatsDeltaResponse>;
    /**
     * Player Season Red Zone Stats
     */
    playerSeasonRedZoneStats(req: operations.PlayerSeasonRedZoneStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsResponse>;
    /**
     * Player Season Red Zone Stats Inside Five
     */
    playerSeasonRedZoneStatsInsideFive(req: operations.PlayerSeasonRedZoneStatsInsideFiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideFiveResponse>;
    /**
     * Player Season Red Zone Stats Inside Ten
     */
    playerSeasonRedZoneStatsInsideTen(req: operations.PlayerSeasonRedZoneStatsInsideTenRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonRedZoneStatsInsideTenResponse>;
    /**
     * Player Season Stats
     */
    playerSeasonStats(req: operations.PlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsResponse>;
    /**
     * Player Season Stats by Player
     */
    playerSeasonStatsByPlayer(req: operations.PlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByPlayerResponse>;
    /**
     * Player Season Stats by Team
     */
    playerSeasonStatsByTeam(req: operations.PlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsByTeamResponse>;
    /**
     * Player Season Third Down Stats
     */
    playerSeasonThirdDownStats(req: operations.PlayerSeasonThirdDownStatsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonThirdDownStatsResponse>;
    /**
     * Pro Bowlers
     */
    proBowlers(req: operations.ProBowlersRequest, config?: AxiosRequestConfig): Promise<operations.ProBowlersResponse>;
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
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
     */
    weekLastCompleted(req: operations.WeekLastCompletedRequest, config?: AxiosRequestConfig): Promise<operations.WeekLastCompletedResponse>;
    /**
     * Week Upcoming
     *
     * @remarks
     * Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.
     */
    weekUpcoming(req: operations.WeekUpcomingRequest, config?: AxiosRequestConfig): Promise<operations.WeekUpcomingResponse>;
}
