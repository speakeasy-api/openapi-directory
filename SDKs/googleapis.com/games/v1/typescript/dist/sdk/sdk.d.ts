import { AchievementDefinitions } from "./achievementdefinitions";
import { Achievements } from "./achievements";
import { Applications } from "./applications";
import { Events } from "./events";
import { Leaderboards } from "./leaderboards";
import { Metagame } from "./metagame";
import { Players } from "./players";
import { Revisions } from "./revisions";
import { Scores } from "./scores";
import { Snapshots } from "./snapshots";
import { Stats } from "./stats";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://games.googleapis.com/"];
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
 * The Google Play games service allows developers to enhance games with social leaderboards, achievements, game state, sign-in with Google, and more.
 *
 * @see {@link https://developers.google.com/games/}
 */
export declare class SDK {
    achievementDefinitions: AchievementDefinitions;
    achievements: Achievements;
    applications: Applications;
    events: Events;
    leaderboards: Leaderboards;
    metagame: Metagame;
    players: Players;
    revisions: Revisions;
    scores: Scores;
    snapshots: Snapshots;
    stats: Stats;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
