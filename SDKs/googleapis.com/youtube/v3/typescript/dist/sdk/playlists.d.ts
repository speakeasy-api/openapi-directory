import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Playlists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes a resource.
     */
    youtubePlaylistsDelete(req: operations.YoutubePlaylistsDeleteRequest, security: operations.YoutubePlaylistsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubePlaylistsInsert(req: operations.YoutubePlaylistsInsertRequest, security: operations.YoutubePlaylistsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubePlaylistsList(req: operations.YoutubePlaylistsListRequest, security: operations.YoutubePlaylistsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubePlaylistsUpdate(req: operations.YoutubePlaylistsUpdateRequest, security: operations.YoutubePlaylistsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistsUpdateResponse>;
}
