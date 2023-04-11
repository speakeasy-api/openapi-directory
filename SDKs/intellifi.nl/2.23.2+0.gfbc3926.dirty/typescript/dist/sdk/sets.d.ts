import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * It can be useful to group items or Smartspots in a list. The `sets` resource can be used to create and manage such list sets.
 *
 * @remarks
 * Sets can be utilized in various Brain Management Console utilities and can also be useful in custom Brain applications.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007824993}
 */
export declare class Sets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add items to an existing list
     */
    addItemIdsList(req: operations.AddItemIdsListRequest, config?: AxiosRequestConfig): Promise<operations.AddItemIdsListResponse>;
    /**
     * Add spots to an existing list
     */
    addItemIdsSpotList(req: operations.AddItemIdsSpotListRequest, config?: AxiosRequestConfig): Promise<operations.AddItemIdsSpotListResponse>;
    /**
     * Create item list
     */
    addItemList(req: shared.ItemListInput, config?: AxiosRequestConfig): Promise<operations.AddItemListResponse>;
    /**
     * Create spot list
     */
    addSpotList(req: shared.ItemListInput, config?: AxiosRequestConfig): Promise<operations.AddSpotListResponse>;
    /**
     * Delete item from list
     */
    deleteItemIdFromItemList(req: operations.DeleteItemIdFromItemListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemIdFromItemListResponse>;
    /**
     * Delete spot from list
     */
    deleteItemIdFromSpotList(req: operations.DeleteItemIdFromSpotListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemIdFromSpotListResponse>;
    /**
     * Delete item list
     */
    deleteItemSet(req: operations.DeleteItemSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemSetResponse>;
    /**
     * Delete spot list
     */
    deleteSpotList(req: operations.DeleteSpotListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpotListResponse>;
    /**
     * Get item list
     */
    getItemListById(req: operations.GetItemListByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListByIdResponse>;
    /**
     * Get item ids for this list
     */
    getItemListIdsById(req: operations.GetItemListIdsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListIdsByIdResponse>;
    /**
     * Get all item lists
     */
    getItemLists(req: operations.GetItemListsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListsResponse>;
    /**
     * Info for a specific spot list
     */
    getSpotListById(req: operations.GetSpotListByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListByIdResponse>;
    /**
     * Get spot ids for this list
     */
    getSpotListIdsById(req: operations.GetSpotListIdsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListIdsByIdResponse>;
    /**
     * Get all spot lists
     */
    getSpotLists(req: operations.GetSpotListsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListsResponse>;
    /**
     * Update existing item list
     */
    updateItemList(req: operations.UpdateItemListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemListResponse>;
    /**
     * Update existing spot list
     */
    updateSpotList(req: operations.UpdateSpotListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotListResponse>;
}
