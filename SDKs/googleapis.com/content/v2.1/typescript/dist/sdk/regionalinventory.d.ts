import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Regionalinventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Updates regional inventory for multiple products or regions in a single request.
     */
    contentRegionalinventoryCustombatch(req: operations.ContentRegionalinventoryCustombatchRequest, security: operations.ContentRegionalinventoryCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionalinventoryCustombatchResponse>;
    /**
     * Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.
     */
    contentRegionalinventoryInsert(req: operations.ContentRegionalinventoryInsertRequest, security: operations.ContentRegionalinventoryInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentRegionalinventoryInsertResponse>;
}
