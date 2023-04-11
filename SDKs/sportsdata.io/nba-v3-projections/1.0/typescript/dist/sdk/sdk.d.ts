import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/nba/projections", "https://azure-api.sportsdata.io/v3/nba/projections"];
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
     * Depth Charts
     *
     * @remarks
     * This endpoint provides a depth chart for each NBA team.
     */
    depthCharts(req: operations.DepthChartsRequest, config?: AxiosRequestConfig): Promise<operations.DepthChartsResponse>;
    /**
     * DFS Slates by Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Injured Players
     *
     * @remarks
     * This endpoint provides all currently injured NBA players, along with injury details.
     */
    injuredPlayers(req: operations.InjuredPlayersRequest, config?: AxiosRequestConfig): Promise<operations.InjuredPlayersResponse>;
    /**
     * Projected Player Game Stats by Date (w/ Injuries, DFS Salaries)
     */
    projectedPlayerGameStatsByDateWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesDfsSalariesResponse>;
    /**
     * Projected Player Game Stats by Player (w/ Injuries, DFS Salaries)
     */
    projectedPlayerGameStatsByPlayerWInjuriesDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesDfsSalariesResponse>;
    /**
     * Projected Player Season Stats
     */
    projectedPlayerSeasonStats(req: operations.ProjectedPlayerSeasonStatsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsResponse>;
    /**
     * Projected Player Season Stats by Player
     */
    projectedPlayerSeasonStatsByPlayer(req: operations.ProjectedPlayerSeasonStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByPlayerResponse>;
    /**
     * Projected Player Season Stats by Team
     */
    projectedPlayerSeasonStatsByTeam(req: operations.ProjectedPlayerSeasonStatsByTeamRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsByTeamResponse>;
    /**
     * Starting Lineups by Date
     *
     * @remarks
     * This endpoint provides the projected & confirmed starting lineups for NBA games on a given date.
     */
    startingLineupsByDate(req: operations.StartingLineupsByDateRequest, config?: AxiosRequestConfig): Promise<operations.StartingLineupsByDateResponse>;
}
