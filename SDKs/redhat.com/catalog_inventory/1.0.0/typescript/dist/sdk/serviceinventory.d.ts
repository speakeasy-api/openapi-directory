import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ServiceInventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ServiceInventories
     *
     * @remarks
     * Returns an array of ServiceInventory objects
     */
    listServiceInventories(req: operations.ListServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoriesResponse>;
    /**
     * List Tags for ServiceInventory
     *
     * @remarks
     * Returns an array of Tag objects
     */
    listServiceInventoryTags(req: operations.ListServiceInventoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoryTagsResponse>;
    /**
     * Show an existing ServiceInventory
     *
     * @remarks
     * Returns a ServiceInventory object
     */
    showServiceInventory(req: operations.ShowServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInventoryResponse>;
    /**
     * Tag a ServiceInventory
     *
     * @remarks
     * Tags a ServiceInventory object
     */
    tagServiceInventory(req: operations.TagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.TagServiceInventoryResponse>;
    /**
     * Untag a ServiceInventory
     *
     * @remarks
     * Untags a ServiceInventory object
     */
    untagServiceInventory(req: operations.UntagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UntagServiceInventoryResponse>;
}
