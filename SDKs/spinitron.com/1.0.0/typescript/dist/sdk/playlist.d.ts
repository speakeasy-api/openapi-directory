import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Playlist {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns playlists optionally filtered by {start} and/or {end} datetimes
     *
     * @remarks
     * Get Playlists optionally filtered by a datetime range.
     * Only past Playlists will be returned (with allowed tolerance equals 1 hour in future).
     *
     * Ordered chronologically from newest to oldest.
     *
     */
    getPlaylists(req: operations.GetPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
    /**
     * Get a Playlist by id
     *
     * @remarks
     * The response object represents the playlist specified by {id}.
     *
     * Status 404 is returned if a playlist with {id} does not exist or if it does but starts in the future (with allowed tolerance equals 1 hour in future).
     *
     */
    getPlaylistsId(req: operations.GetPlaylistsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsIdResponse>;
}
