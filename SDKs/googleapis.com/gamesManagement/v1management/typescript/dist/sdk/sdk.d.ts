import { Achievements } from "./achievements";
import { Applications } from "./applications";
import { Events } from "./events";
import { Players } from "./players";
import { Scores } from "./scores";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://gamesmanagement.googleapis.com/"];
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
 * The Google Play Game Management API allows developers to manage resources from the Google Play Game service.
 *
 * @see {@link https://developers.google.com/games/}
 */
export declare class SDK {
    achievements: Achievements;
    applications: Applications;
    events: Events;
    players: Players;
    scores: Scores;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
