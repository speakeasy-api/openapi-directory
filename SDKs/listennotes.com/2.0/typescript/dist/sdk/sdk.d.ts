import { DirectoryAPI } from "./directoryapi";
import { InsightsAPI } from "./insightsapi";
import { PlaylistAPI } from "./playlistapi";
import { PodcasterAPI } from "./podcasterapi";
import { SearchAPI } from "./searchapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://listen-api.listennotes.com/api/v2"];
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
 * Simple & no-nonsense podcast search & directory API. Search all podcasts and episodes by people, places, or topics.
 *
 * @remarks
 *
 */
export declare class SDK {
    /**
     * Endpoints to fetch podcasts data
     */
    directoryAPI: DirectoryAPI;
    /**
     * Endpoints to get insights of podcasts, e.g., audience demographics
     */
    insightsAPI: InsightsAPI;
    /**
     * Endpoints to fetch Listen Later playlists data
     */
    playlistAPI: PlaylistAPI;
    /**
     * Endpoints to improve the podcast database
     */
    podcasterAPI: PodcasterAPI;
    /**
     * Endpoints to search podcasts
     */
    searchAPI: SearchAPI;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
