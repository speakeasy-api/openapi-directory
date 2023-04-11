import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AchievementConfigurations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete the achievement configuration with the given ID.
     */
    gamesConfigurationAchievementConfigurationsDelete(req: operations.GamesConfigurationAchievementConfigurationsDeleteRequest, security: operations.GamesConfigurationAchievementConfigurationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsDeleteResponse>;
    /**
     * Retrieves the metadata of the achievement configuration with the given ID.
     */
    gamesConfigurationAchievementConfigurationsGet(req: operations.GamesConfigurationAchievementConfigurationsGetRequest, security: operations.GamesConfigurationAchievementConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsGetResponse>;
    /**
     * Insert a new achievement configuration in this application.
     */
    gamesConfigurationAchievementConfigurationsInsert(req: operations.GamesConfigurationAchievementConfigurationsInsertRequest, security: operations.GamesConfigurationAchievementConfigurationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsInsertResponse>;
    /**
     * Returns a list of the achievement configurations in this application.
     */
    gamesConfigurationAchievementConfigurationsList(req: operations.GamesConfigurationAchievementConfigurationsListRequest, security: operations.GamesConfigurationAchievementConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsListResponse>;
    /**
     * Update the metadata of the achievement configuration with the given ID.
     */
    gamesConfigurationAchievementConfigurationsUpdate(req: operations.GamesConfigurationAchievementConfigurationsUpdateRequest, security: operations.GamesConfigurationAchievementConfigurationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.GamesConfigurationAchievementConfigurationsUpdateResponse>;
}
