import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Playlists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePlaylistsPlaylistId - Deletes a playlist.
    **/
    deletePlaylistsPlaylistId(req: operations.DeletePlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePlaylistsPlaylistIdResponse>;
    /**
     * getPlaylistsPlaylistId - Returns a playlist.
    **/
    getPlaylistsPlaylistId(req: operations.GetPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdResponse>;
    /**
     * getPlaylistsPlaylistIdReposters - Returns a collection of playlist's reposters.
    **/
    getPlaylistsPlaylistIdReposters(req: operations.GetPlaylistsPlaylistIdRepostersRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdRepostersResponse>;
    /**
     * getPlaylistsPlaylistIdTracks - Returns tracks under a playlist.
    **/
    getPlaylistsPlaylistIdTracks(req: operations.GetPlaylistsPlaylistIdTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdTracksResponse>;
    /**
     * postPlaylists - Creates a playlist.
    **/
    postPlaylists(req: operations.PostPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.PostPlaylistsResponse>;
    /**
     * putPlaylistsPlaylistId - Updates a playlist.
    **/
    putPlaylistsPlaylistId(req: operations.PutPlaylistsPlaylistIdRequest, config?: AxiosRequestConfig): Promise<operations.PutPlaylistsPlaylistIdResponse>;
}
