import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.sportsdata.io", "https://api.sportsdata.io", "http://azure-api.sportsdata.io", "https://azure-api.sportsdata.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * dfsSlatesByDate - DFS Slates by Date
    **/
    dfsSlatesByDate(req: operations.DfsSlatesByDateRequest, config?: AxiosRequestConfig): Promise<operations.DfsSlatesByDateResponse>;
    /**
     * projectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Date (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByDateWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByDateWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries - Projected Player Game Stats by Player (w/ Injuries, Lineups, DFS Salaries)
    **/
    projectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalaries(req: operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerGameStatsByPlayerWInjuriesLineupsDfsSalariesResponse>;
    /**
     * projectedPlayerSeasonStatsWithAdp - Projected Player Season Stats (with ADP)
    **/
    projectedPlayerSeasonStatsWithAdp(req: operations.ProjectedPlayerSeasonStatsWithAdpRequest, config?: AxiosRequestConfig): Promise<operations.ProjectedPlayerSeasonStatsWithAdpResponse>;
}
