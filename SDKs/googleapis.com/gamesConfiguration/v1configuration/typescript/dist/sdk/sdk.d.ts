import { AxiosInstance } from "axios";
import { AchievementConfigurations } from "./achievementconfigurations";
import { LeaderboardConfigurations } from "./leaderboardconfigurations";
export declare const ServerList: readonly ["https://gamesconfiguration.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    achievementConfigurations: AchievementConfigurations;
    leaderboardConfigurations: LeaderboardConfigurations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
