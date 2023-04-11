import { Likes } from "./likes";
import { Me } from "./me";
import { Miscellaneous } from "./miscellaneous";
import { Oauth } from "./oauth";
import { Playlists } from "./playlists";
import { Reposts } from "./reposts";
import { Search } from "./search";
import { Tracks } from "./tracks";
import { Users } from "./users";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.soundcloud.com"];
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
export declare class SDK {
    /**
     * Liking Tracks & Playlists.
     */
    likes: Likes;
    /**
     * Own User Endpoints.
     */
    me: Me;
    /**
     * Miscellaneous Endpoints.
     */
    miscellaneous: Miscellaneous;
    /**
     * Authentication and Authorization Endpoints.
     */
    oauth: Oauth;
    /**
     * Playlists Endpoints.
     */
    playlists: Playlists;
    /**
     * Reposting Tracks & Playlists.
     */
    reposts: Reposts;
    /**
     * Search Endpoints.
     */
    search: Search;
    /**
     * Tracks Endpoints.
     */
    tracks: Tracks;
    /**
     * SoundCloud Users Endpoints.
     */
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
