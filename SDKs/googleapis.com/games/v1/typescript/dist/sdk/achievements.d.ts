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
     * Increments the steps of the achievement with the given ID for the currently authenticated player.
     */
    gamesAchievementsIncrement(req: operations.GamesAchievementsIncrementRequest, security: operations.GamesAchievementsIncrementSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsIncrementResponse>;
    /**
     * Lists the progress for all your application's achievements for the currently authenticated player.
     */
    gamesAchievementsList(req: operations.GamesAchievementsListRequest, security: operations.GamesAchievementsListSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsListResponse>;
    /**
     * Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
     */
    gamesAchievementsReveal(req: operations.GamesAchievementsRevealRequest, security: operations.GamesAchievementsRevealSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsRevealResponse>;
    /**
     * Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
     */
    gamesAchievementsSetStepsAtLeast(req: operations.GamesAchievementsSetStepsAtLeastRequest, security: operations.GamesAchievementsSetStepsAtLeastSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsSetStepsAtLeastResponse>;
    /**
     * Unlocks this achievement for the currently authenticated player.
     */
    gamesAchievementsUnlock(req: operations.GamesAchievementsUnlockRequest, security: operations.GamesAchievementsUnlockSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsUnlockResponse>;
    /**
     * Updates multiple achievements for the currently authenticated player.
     */
    gamesAchievementsUpdateMultiple(req: operations.GamesAchievementsUpdateMultipleRequest, security: operations.GamesAchievementsUpdateMultipleSecurity, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsUpdateMultipleResponse>;
}
