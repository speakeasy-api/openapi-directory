import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://azure-api.sportsdata.io/v3/lol/projections", "https://azure-api.sportsdata.io/v3/lol/projections"];
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
 * LoL v3 Projections
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
     * Dfs Slates By Date
     */
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * Projected Player Game Stats by Date
     *
     * @remarks
     * Projected Player Game Stats by Date
     */
    projectedPlayerGameStatsByDate(req: operations.ProjectedPlayerGameStatsByDateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateResponse>;
    /**
     * Projected Player Game Stats by Player
     *
     * @remarks
     * Projected Player Game Stats by Date
     */
    projectedPlayerGameStatsByPlayer(req: operations.ProjectedPlayerGameStatsByPlayerRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerResponse>;
}
