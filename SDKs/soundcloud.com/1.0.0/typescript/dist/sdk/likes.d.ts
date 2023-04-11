import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Liking Tracks & Playlists.
 */
export declare class Likes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unlikes a playlist.
     */
    deleteLikesPlaylistsPlaylistId(req: operations.DeleteLikesPlaylistsPlaylistIdRequest, security: operations.DeleteLikesPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLikesPlaylistsPlaylistIdResponse>;
    /**
     * Unlikes a track.
     */
    deleteLikesTracksTrackId(req: operations.DeleteLikesTracksTrackIdRequest, security: operations.DeleteLikesTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLikesTracksTrackIdResponse>;
    /**
     * Likes a playlist.
     */
    postLikesPlaylistsPlaylistId(req: operations.PostLikesPlaylistsPlaylistIdRequest, security: operations.PostLikesPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostLikesPlaylistsPlaylistIdResponse>;
    /**
     * Likes a track.
     */
    postLikesTracksTrackId(req: operations.PostLikesTracksTrackIdRequest, security: operations.PostLikesTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostLikesTracksTrackIdResponse>;
}
