import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/v3/media"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Media API can be used to query, download and delete media items such as audio files for use with other Nexmo APIs.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Delete a media item
     *
     * @remarks
     * Delete a previously created media item by ID.
     */
    deleteAMediaItem(config?: AxiosRequestConfig): Promise<operations.DeleteAMediaItemResponse>;
    /**
     * List and search media items
     *
     * @remarks
     * Retrieve information about multiple media items with the ability to search and paginate.
     */
    listAndSearchMediaItems(req: operations.ListAndSearchMediaItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListAndSearchMediaItemsResponse>;
    /**
     * Retrieve a media item
     *
     * @remarks
     * Retrieve information about a single media item
     */
    retrieveAMediaItem(config?: AxiosRequestConfig): Promise<operations.RetrieveAMediaItemResponse>;
    /**
     * Update a media item
     *
     * @remarks
     * Update a previously created media item by ID.
     */
    updateAMediaItem(req: operations.UpdateAMediaItemRequestBody, config?: AxiosRequestConfig): Promise<operations.UpdateAMediaItemResponse>;
}
