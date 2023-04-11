import { AchievementConfigurations } from "./achievementconfigurations";
import { LeaderboardConfigurations } from "./leaderboardconfigurations";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://gamesconfiguration.googleapis.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * The Google Play Game Services Publishing API allows developers to configure their games in Game Services.
 *
 * @see {@link https://developers.google.com/games/}
 */
export declare class SDK {
    achievementConfigurations: AchievementConfigurations;
    leaderboardConfigurations: LeaderboardConfigurations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
