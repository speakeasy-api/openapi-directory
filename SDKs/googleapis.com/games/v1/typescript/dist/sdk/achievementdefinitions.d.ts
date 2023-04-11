import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AchievementDefinitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all the achievement definitions for your application.
     */
    gamesAchievementDefinitionsList(req: operations.GamesAchievementDefinitionsListRequest, security: operations.GamesAchievementDefinitionsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementDefinitionsListResponse>;
}
