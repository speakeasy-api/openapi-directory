import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Leaderboards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves the metadata of the leaderboard with the given ID.
     */
    gamesLeaderboardsGet(req: operations.GamesLeaderboardsGetRequest, security: operations.GamesLeaderboardsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesLeaderboardsGetResponse>;
    /**
     * Lists all the leaderboard metadata for your application.
     */
    gamesLeaderboardsList(req: operations.GamesLeaderboardsListRequest, security: operations.GamesLeaderboardsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesLeaderboardsListResponse>;
}
