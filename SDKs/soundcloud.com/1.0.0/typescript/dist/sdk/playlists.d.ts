import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Playlists Endpoints.
 */
export declare class Playlists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a playlist.
     */
    deletePlaylistsPlaylistId(req: operations.DeletePlaylistsPlaylistIdRequest, security: operations.DeletePlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeletePlaylistsPlaylistIdResponse>;
    /**
     * Returns a playlist.
     */
    getPlaylistsPlaylistId(req: operations.GetPlaylistsPlaylistIdRequest, security: operations.GetPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdResponse>;
    /**
     * Returns a collection of playlist's reposters.
     */
    getPlaylistsPlaylistIdReposters(req: operations.GetPlaylistsPlaylistIdRepostersRequest, security: operations.GetPlaylistsPlaylistIdRepostersSecurity, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdRepostersResponse>;
    /**
     * Returns tracks under a playlist.
     */
    getPlaylistsPlaylistIdTracks(req: operations.GetPlaylistsPlaylistIdTracksRequest, security: operations.GetPlaylistsPlaylistIdTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsPlaylistIdTracksResponse>;
    /**
     * Creates a playlist.
     */
    postPlaylists(req: shared.CreateUpdatePlaylistRequest, security: operations.PostPlaylistsSecurity, config?: AxiosRequestConfig): Promise<operations.PostPlaylistsResponse>;
    /**
     * Updates a playlist.
     */
    putPlaylistsPlaylistId(req: operations.PutPlaylistsPlaylistIdRequest, security: operations.PutPlaylistsPlaylistIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutPlaylistsPlaylistIdResponse>;
}
