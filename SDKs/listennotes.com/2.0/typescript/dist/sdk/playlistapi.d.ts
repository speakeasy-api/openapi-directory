import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PlaylistApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPlaylistById - Fetch a playlist's info and items (i.e., episodes or podcasts).
     *
     * A playlist can be an episode list (i.e., all items are episodes) or a podcast list (i.e., all items are podcasts),
     * which is essentially the same as those created via listennotes.com/listen/.
     * This endpoint fetches a list of items (i.e., episodes or podcasts) in the playlist.
     * You can use the **last_pub_date_ms** parameter to do pagination and fetch more items.
     * A playlist can be **public** (discoverable on ListenNotes.com),
     * **unlisted** (accessible to anyone who knows the playlist id),
     * or **private** (accessible to its owner).
     * You can fetch all playlists created by you, and **public** / **unlisted** playlists created by others.
     *
    **/
    getPlaylistById(req: operations.GetPlaylistByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistByIdResponse>;
    /**
     * getPlaylists - Fetch a list of your playlists.
     *
     * This endpoint returns same data as listennotes.com/listen under your account.
     * You can use the **page** parameter to do pagination and fetch more playlists.
     *
    **/
    getPlaylists(req: operations.GetPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
}
