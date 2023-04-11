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
     * View stops, routes and myki ticket outlets that match the search term
     */
    searchSearch(req: operations.SearchSearchRequest, config?: AxiosRequestConfig): Promise<operations.SearchSearchResponse>;
}
