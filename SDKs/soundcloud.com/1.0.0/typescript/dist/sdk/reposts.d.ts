import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reposts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRepostsPlaylistsPlaylistId - Removes a repost on a playlist as the authenticated user
    **/
    deleteRepostsPlaylistsPlaylistId(req: operations.DeleteRepostsPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepostsPlaylistsPlaylistIdResponse>;
    /**
     * deleteRepostsTracksTrackId - Removes a repost on a track as the authenticated user
    **/
    deleteRepostsTracksTrackId(req: operations.DeleteRepostsTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepostsTracksTrackIdResponse>;
    /**
     * postRepostsPlaylistsPlaylistId - Reposts a playlist as the authenticated user
    **/
    postRepostsPlaylistsPlaylistId(req: operations.PostRepostsPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRepostsPlaylistsPlaylistIdResponse>;
    /**
     * postRepostsTracksTrackId - Reposts a track as the authenticated user
    **/
    postRepostsTracksTrackId(req: operations.PostRepostsTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.PostRepostsTracksTrackIdResponse>;
}
