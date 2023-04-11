import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `items` resource contains data about things that can be tracked using the Brain.
 *
 * @remarks
 * When an item is detected for the first time by a device connected to the Brain, it will be added to this resource.
 * It will then be updated with information about where the item currently is, or where it has been seen for the last time.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/articles/360007502554}
 */
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create item
     */
    addItem(req: any, config?: AxiosRequestConfig): Promise<operations.AddItemResponse>;
    /**
     * Delete item
     */
    deleteItem(req: operations.DeleteItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemResponse>;
    /**
     * Get item
     */
    getItemById(req: operations.GetItemByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemByIdResponse>;
    /**
     * Get all items
     */
    getItems(req: operations.GetItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsResponse>;
    /**
     * Update existing item
     */
    updateItem(req: operations.UpdateItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemResponse>;
}
