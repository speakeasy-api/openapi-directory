import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPlaylists - Performs a playlist search based on a query
    **/
    getPlaylists(req: operations.GetPlaylistsRequest, config?: AxiosRequestConfig): Promise<operations.GetPlaylistsResponse>;
    /**
     * getTracks - Performs a track search based on a query
    **/
    getTracks(req: operations.GetTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetTracksResponse>;
    /**
     * getUsers - Performs a user search based on a query
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
}
