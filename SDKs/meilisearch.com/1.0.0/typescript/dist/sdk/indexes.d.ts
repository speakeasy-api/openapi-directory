import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Indexes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create index with primary key
     *
     * @remarks
     * Create index with primary key
     */
    createIndexWithPrimaryKey(req: operations.CreateIndexWithPrimaryKeyRequestBody, config?: AxiosRequestConfig): Promise<operations.CreateIndexWithPrimaryKeyResponse>;
    /**
     * Delete an index
     *
     * @remarks
     * Delete an index
     */
    deleteAnIndex(config?: AxiosRequestConfig): Promise<operations.DeleteAnIndexResponse>;
    /**
     * Get indexes
     *
     * @remarks
     * Get indexes
     */
    getIndexes(req: operations.GetIndexesRequest, config?: AxiosRequestConfig): Promise<operations.GetIndexesResponse>;
    /**
     * Show index
     *
     * @remarks
     * Show index
     */
    showIndex(config?: AxiosRequestConfig): Promise<operations.ShowIndexResponse>;
    /**
     * Swap indexes
     *
     * @remarks
     * Swap indexes
     */
    swapIndexes(req: operations.SwapIndexesRequestBody[], config?: AxiosRequestConfig): Promise<operations.SwapIndexesResponse>;
    /**
     * Udpate index
     *
     * @remarks
     * Can only change the document identifier if it has not already been added before.
     */
    udpateIndex(req: operations.UdpateIndexRequestBody, config?: AxiosRequestConfig): Promise<operations.UdpateIndexResponse>;
}
