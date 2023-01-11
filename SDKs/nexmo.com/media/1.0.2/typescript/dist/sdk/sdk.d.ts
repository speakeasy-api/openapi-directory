import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.nexmo.com/v3/media"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * deleteAMediaItem - Delete a media item
     *
     * Delete a previously created media item by ID.
    **/
    deleteAMediaItem(config?: AxiosRequestConfig): Promise<operations.DeleteAMediaItemResponse>;
    /**
     * listAndSearchMediaItems - List and search media items
     *
     * Retrieve information about multiple media items with the ability to search and paginate.
    **/
    listAndSearchMediaItems(req: operations.ListAndSearchMediaItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListAndSearchMediaItemsResponse>;
    /**
     * retrieveAMediaItem - Retrieve a media item
     *
     * Retrieve information about a single media item
    **/
    retrieveAMediaItem(config?: AxiosRequestConfig): Promise<operations.RetrieveAMediaItemResponse>;
    /**
     * updateAMediaItem - Update a media item
     *
     * Update a previously created media item by ID.
    **/
    updateAMediaItem(req: operations.UpdateAMediaItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAMediaItemResponse>;
}
