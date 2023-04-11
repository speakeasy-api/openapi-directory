import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Search Endpoints.
 */
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Performs a playlist search based on a query
     */
    getPlaylists(req: operations.GetPlaylistsRequest, security: operations.GetPlaylistsSecurity, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
    /**
     * Performs a track search based on a query
     */
    getTracks(req: operations.GetTracksRequest, security: operations.GetTracksSecurity, config?: AxiosRequestConfig): Promise<operations.GetTracksResponse>;
    /**
     * Performs a user search based on a query
     */
    getUsers(req: operations.GetUsersRequest, security: operations.GetUsersSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
}
