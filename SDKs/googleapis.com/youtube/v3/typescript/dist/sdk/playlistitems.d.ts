import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PlaylistItems {
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
    youtubePlaylistItemsDelete(req: operations.YoutubePlaylistItemsDeleteRequest, security: operations.YoutubePlaylistItemsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsDeleteResponse>;
    /**
     * Inserts a new resource into this collection.
     */
    youtubePlaylistItemsInsert(req: operations.YoutubePlaylistItemsInsertRequest, security: operations.YoutubePlaylistItemsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsInsertResponse>;
    /**
     * Retrieves a list of resources, possibly filtered.
     */
    youtubePlaylistItemsList(req: operations.YoutubePlaylistItemsListRequest, security: operations.YoutubePlaylistItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsListResponse>;
    /**
     * Updates an existing resource.
     */
    youtubePlaylistItemsUpdate(req: operations.YoutubePlaylistItemsUpdateRequest, security: operations.YoutubePlaylistItemsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubePlaylistItemsUpdateResponse>;
}
