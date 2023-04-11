import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/soccer/projections", "https://azure-api.sportsdata.io/v3/soccer/projections"];
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
     * Dfs Slates By Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Injured Players By Competition
     *
     * @remarks
     * This endpoint provides all currently injured soccer players by competition, along with injury details.
     */
    injuredPlayersByCompetition(req: operations.InjuredPlayersByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.InjuredPlayersByCompetitionResponse>;
    /**
     * Projected Player Game Stats by Competition (w/ DFS Salaries)
     */
    projectedPlayerGameStatsByCompetitionWDfsSalaries(req: operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByCompetitionWDfsSalariesResponse>;
    /**
     * Projected Player Game Stats by Date (w/ DFS Salaries)
     */
    projectedPlayerGameStatsByDateWDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWDfsSalariesResponse>;
    /**
     * Projected Player Game Stats by Player (w/ DFS Salaries)
     */
    projectedPlayerGameStatsByPlayerWDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWDfsSalariesResponse>;
    /**
     * Upcoming Dfs Slates By Competition
     */
    upcomingDfsSlatesByCompetition(req: operations.UpcomingDfsSlatesByCompetitionRequest, config?: AxiosRequestConfig): Promise<operations.UpcomingDfsSlatesByCompetitionResponse>;
}
