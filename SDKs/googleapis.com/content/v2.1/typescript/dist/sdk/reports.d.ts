import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.
     */
    contentReportsSearch(req: operations.ContentReportsSearchRequest, security: operations.ContentReportsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentReportsSearchResponse>;
}
