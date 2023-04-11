import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LeaderboardConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the leaderboard configuration with the given ID.
     */
    gamesConfigurationLeaderboardConfigurationsDelete(req: operations.GamesConfigurationLeaderboardConfigurationsDeleteRequest, security: operations.GamesConfigurationLeaderboardConfigurationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsDeleteResponse>;
    /**
     * Retrieves the metadata of the leaderboard configuration with the given ID.
     */
    gamesConfigurationLeaderboardConfigurationsGet(req: operations.GamesConfigurationLeaderboardConfigurationsGetRequest, security: operations.GamesConfigurationLeaderboardConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsGetResponse>;
    /**
     * Insert a new leaderboard configuration in this application.
     */
    gamesConfigurationLeaderboardConfigurationsInsert(req: operations.GamesConfigurationLeaderboardConfigurationsInsertRequest, security: operations.GamesConfigurationLeaderboardConfigurationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsInsertResponse>;
    /**
     * Returns a list of the leaderboard configurations in this application.
     */
    gamesConfigurationLeaderboardConfigurationsList(req: operations.GamesConfigurationLeaderboardConfigurationsListRequest, security: operations.GamesConfigurationLeaderboardConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsListResponse>;
    /**
     * Update the metadata of the leaderboard configuration with the given ID.
     */
    gamesConfigurationLeaderboardConfigurationsUpdate(req: operations.GamesConfigurationLeaderboardConfigurationsUpdateRequest, security: operations.GamesConfigurationLeaderboardConfigurationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationLeaderboardConfigurationsUpdateResponse>;
}
