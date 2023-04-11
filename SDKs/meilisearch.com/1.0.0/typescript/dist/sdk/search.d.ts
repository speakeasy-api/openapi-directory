import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search in index
     *
     * @remarks
     * Search in index
     */
    searchInIndex(req: operations.SearchInIndexRequest, config?: AxiosRequestConfig): Promise<operations.SearchInIndexResponse>;
    /**
     * Search in index
     *
     * @remarks
     * Search in index
     */
    searchInIndex1(req: operations.SearchInIndex1RequestBody, config?: AxiosRequestConfig): Promise<operations.SearchInIndex1Response>;
}
