import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/nhl/projections", "https://azure-api.sportsdata.io/v3/nhl/projections"];
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
     * DFS Slates by Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Injured Players
     *
     * @remarks
     * This endpoint provides all currently injured NHL players, along with injury details.
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
     * Starting Goaltenders by Date
     *
     * @remarks
     * This endpoint provides the projected & confirmed starting goaltenders for NHL games on a given date.
     */
    startingGoaltendersByDate(req: operations.StartingGoaltendersByDateRequest, config?: AxiosRequestConfig): Promise<operations.StartingGoaltendersByDateResponse>;
}
