import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InventoryItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one inventory item by ID.
     */
    dfareportingInventoryItemsGet(req: operations.DfareportingInventoryItemsGetRequest, security: operations.DfareportingInventoryItemsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingInventoryItemsGetResponse>;
    /**
     * Retrieves a list of inventory items, possibly filtered. This method supports paging.
     */
    dfareportingInventoryItemsList(req: operations.DfareportingInventoryItemsListRequest, security: operations.DfareportingInventoryItemsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingInventoryItemsListResponse>;
}
