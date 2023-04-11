import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stores {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a list of video game storefronts.
     */
    storesList(req: operations.StoresListRequest, config?: AxiosRequestConfig): Promise<operations.StoresListResponse>;
    /**
     * Get details of the store.
     */
    storesRead(req: operations.StoresReadRequest, config?: AxiosRequestConfig): Promise<operations.StoresReadResponse>;
}
