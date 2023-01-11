import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ServiceInventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listServiceInventories - List ServiceInventories
     *
     * Returns an array of ServiceInventory objects
    **/
    listServiceInventories(req: operations.ListServiceInventoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoriesResponse>;
    /**
     * listServiceInventoryTags - List Tags for ServiceInventory
     *
     * Returns an array of Tag objects
    **/
    listServiceInventoryTags(req: operations.ListServiceInventoryTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceInventoryTagsResponse>;
    /**
     * showServiceInventory - Show an existing ServiceInventory
     *
     * Returns a ServiceInventory object
    **/
    showServiceInventory(req: operations.ShowServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ShowServiceInventoryResponse>;
    /**
     * tagServiceInventory - Tag a ServiceInventory
     *
     * Tags a ServiceInventory object
    **/
    tagServiceInventory(req: operations.TagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.TagServiceInventoryResponse>;
    /**
     * untagServiceInventory - Untag a ServiceInventory
     *
     * Untags a ServiceInventory object
    **/
    untagServiceInventory(req: operations.UntagServiceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.UntagServiceInventoryResponse>;
}
