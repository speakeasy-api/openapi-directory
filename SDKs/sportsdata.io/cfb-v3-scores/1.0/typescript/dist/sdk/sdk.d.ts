import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/cfb/scores", "https://azure-api.sportsdata.io/v3/cfb/scores"];
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
 * CFB schedules, scores, team stats, odds, weather, and news API.
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
     * Conference Hierarchy (with Teams)
     */
    conferenceHierarchyWithTeams(req: operations.ConferenceHierarchyWithTeamsRequest, config?: AxiosRequestConfig): Promise<operations.ConferenceHierarchyWithTeamsResponse>;
    /**
     * Current Season
     */
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * Current Season Details
     */
    currentSeasonDetails(req: operations.CurrentSeasonDetailsRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonDetailsResponse>;
    /**
     * Current SeasonType
     */
    currentSeasontype(req: operations.CurrentSeasontypeRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasontypeResponse>;
    /**
     * Current Week
     */
    currentWeek(req: operations.CurrentWeekRequest, config?: AxiosRequestConfig): Promise<operations.CurrentWeekResponse>;
    /**
     * Games by Date
     */
    gamesByDate(req: operations.GamesByDateRequest, config?: AxiosRequestConfig): Promise<operations.GamesByDateResponse>;
    /**
     * Games by Week
     */
    gamesByWeek(req: operations.GamesByWeekRequest, config?: AxiosRequestConfig): Promise<operations.GamesByWeekResponse>;
    /**
     * Injured Players
     *
     * @remarks
     * This endpoint provides all currently injured college football players, along with injury details.
     */
    injuredPlayers(req: operations.InjuredPlayersRequest, config?: AxiosRequestConfig): Promise<operations.InjuredPlayersResponse>;
    /**
     * Player Details By Active
     */
    playerDetailsByActive(req: operations.PlayerDetailsByActiveRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByActiveResponse>;
    /**
     * Player Details By Player
     */
    playerDetailsByPlayer(req: operations.PlayerDetailsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByPlayerResponse>;
    /**
     * Player Details by Team
     */
    playerDetailsByTeam(req: operations.PlayerDetailsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.PlayerDetailsByTeamResponse>;
    /**
     * Schedules
     */
    schedules(req: operations.SchedulesRequest, config?: AxiosRequestConfig): Promise<operations.SchedulesResponse>;
    /**
     * Stadiums
     */
    stadiums(req: operations.StadiumsRequest, config?: AxiosRequestConfig): Promise<operations.StadiumsResponse>;
    /**
     * Team Game Logs By Season
     *
     * @remarks
     * Game by game log of total team statistics.
     */
    teamGameLogsBySeason(req: operations.TeamGameLogsBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameLogsBySeasonResponse>;
    /**
     * Team Game Stats by Week
     */
    teamGameStatsByWeek(req: operations.TeamGameStatsByWeekRequest, config?: AxiosRequestConfig): Promise<operations.TeamGameStatsByWeekResponse>;
    /**
     * Team Season Stats & Standings
     */
    teamSeasonStatsStandings(req: operations.TeamSeasonStatsStandingsRequest, config?: AxiosRequestConfig): Promise<operations.TeamSeasonStatsStandingsResponse>;
    /**
     * Teams
     */
    teams(req: operations.TeamsRequest, config?: AxiosRequestConfig): Promise<operations.TeamsResponse>;
}
