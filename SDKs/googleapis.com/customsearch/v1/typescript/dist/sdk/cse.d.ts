import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Cse {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
     */
    searchCseList(req: operations.SearchCseListRequest, config?: AxiosRequestConfig): Promise<operations.SearchCseListResponse>;
    /**
     * Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
     */
    searchCseSiterestrictList(req: operations.SearchCseSiterestrictListRequest, config?: AxiosRequestConfig): Promise<operations.SearchCseSiterestrictListResponse>;
}
