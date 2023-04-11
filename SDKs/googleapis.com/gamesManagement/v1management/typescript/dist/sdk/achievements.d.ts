import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Achievements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.
     */
    gamesManagementAchievementsReset(req: operations.GamesManagementAchievementsResetRequest, security: operations.GamesManagementAchievementsResetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementAchievementsResetResponse>;
    /**
     * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.
     */
    gamesManagementAchievementsResetAll(req: operations.GamesManagementAchievementsResetAllRequest, security: operations.GamesManagementAchievementsResetAllSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementAchievementsResetAllResponse>;
    /**
     * Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
     */
    gamesManagementAchievementsResetAllForAllPlayers(req: operations.GamesManagementAchievementsResetAllForAllPlayersRequest, security: operations.GamesManagementAchievementsResetAllForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementAchievementsResetAllForAllPlayersResponse>;
    /**
     * Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.
     */
    gamesManagementAchievementsResetForAllPlayers(req: operations.GamesManagementAchievementsResetForAllPlayersRequest, security: operations.GamesManagementAchievementsResetForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementAchievementsResetForAllPlayersResponse>;
    /**
     * Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.
     */
    gamesManagementAchievementsResetMultipleForAllPlayers(req: operations.GamesManagementAchievementsResetMultipleForAllPlayersRequest, security: operations.GamesManagementAchievementsResetMultipleForAllPlayersSecurity, config?: AxiosRequestConfig): Promise<operations.GamesManagementAchievementsResetMultipleForAllPlayersResponse>;
}
