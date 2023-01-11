import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Likes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLikesPlaylistsPlaylistId - Unlikes a playlist.
    **/
    deleteLikesPlaylistsPlaylistId(req: operations.DeleteLikesPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLikesPlaylistsPlaylistIdResponse>;
    /**
     * deleteLikesTracksTrackId - Unlikes a track.
    **/
    deleteLikesTracksTrackId(req: operations.DeleteLikesTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLikesTracksTrackIdResponse>;
    /**
     * postLikesPlaylistsPlaylistId - Likes a playlist.
    **/
    postLikesPlaylistsPlaylistId(req: operations.PostLikesPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.PostLikesPlaylistsPlaylistIdResponse>;
    /**
     * postLikesTracksTrackId - Likes a track.
    **/
    postLikesTracksTrackId(req: operations.PostLikesTracksTrackIdRequest, config?: AxiosRequestConfig): Promise<operations.PostLikesTracksTrackIdResponse>;
}
