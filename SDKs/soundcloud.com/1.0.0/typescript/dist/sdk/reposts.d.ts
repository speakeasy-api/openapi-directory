import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Reposting Tracks & Playlists.
 */
export declare class Reposts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Removes a repost on a playlist as the authenticated user
     */
    deleteRepostsPlaylistsPlaylistId(req: operations.DeleteRepostsPlaylistsPlaylistIdRequest, security: operations.DeleteRepostsPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepostsPlaylistsPlaylistIdResponse>;
    /**
     * Removes a repost on a track as the authenticated user
     */
    deleteRepostsTracksTrackId(req: operations.DeleteRepostsTracksTrackIdRequest, security: operations.DeleteRepostsTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepostsTracksTrackIdResponse>;
    /**
     * Reposts a playlist as the authenticated user
     */
    postRepostsPlaylistsPlaylistId(req: operations.PostRepostsPlaylistsPlaylistIdRequest, security: operations.PostRepostsPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepostsPlaylistsPlaylistIdResponse>;
    /**
     * Reposts a track as the authenticated user
     */
    postRepostsTracksTrackId(req: operations.PostRepostsTracksTrackIdRequest, security: operations.PostRepostsTracksTrackIdSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepostsTracksTrackIdResponse>;
}
