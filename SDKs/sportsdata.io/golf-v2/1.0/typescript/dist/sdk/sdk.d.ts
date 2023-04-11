import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/golf/v2", "https://azure-api.sportsdata.io/golf/v2"];
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
     * Current Season
     */
    currentSeason(req: operations.CurrentSeasonRequest, config?: AxiosRequestConfig): Promise<operations.CurrentSeasonResponse>;
    /**
     * DFS Slates
     */
    dfsSlates(req: operations.DfsSlatesRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesResponse>;
    /**
     * Injuries
     */
    injuries(req: operations.InjuriesRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesResponse>;
    /**
     * Injuries (Historical)
     */
    injuriesHistorical(req: operations.InjuriesHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.InjuriesHistoricalResponse>;
    /**
     * Leaderboard
     */
    leaderboard(req: operations.LeaderboardRequest, config?: AxiosRequestConfig): Promise<operations.LeaderboardResponse>;
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
     * Player
     */
    player(req: operations.PlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerResponse>;
    /**
     * Player Season Stats (w/ World Golf Rankings)
     */
    playerSeasonStatsWWorldGolfRankings(req: operations.PlayerSeasonStatsWWorldGolfRankingsRequest, config?: AxiosRequestConfig): Promise<operations.PlayerSeasonStatsWWorldGolfRankingsResponse>;
    /**
     * Player Tournament Projected Stats (w/ DraftKings Salaries)
     */
    playerTournamentProjectedStatsWDraftkingsSalaries(req: operations.PlayerTournamentProjectedStatsWDraftkingsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.PlayerTournamentProjectedStatsWDraftkingsSalariesResponse>;
    /**
     * Player Tournament Stats By Player
     */
    playerTournamentStatsByPlayer(req: operations.PlayerTournamentStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.PlayerTournamentStatsByPlayerResponse>;
    /**
     * Players
     */
    players(req: operations.PlayersRequest, config?: AxiosRequestConfig): Promise<operations.PlayersResponse>;
    /**
     * Schedule
     */
    schedule(req: operations.ScheduleRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleResponse>;
    /**
     * Schedule by Season
     */
    scheduleBySeason(req: operations.ScheduleBySeasonRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleBySeasonResponse>;
}
