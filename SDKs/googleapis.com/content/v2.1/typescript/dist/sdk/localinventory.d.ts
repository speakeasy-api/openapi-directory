import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Localinventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Updates local inventory for multiple products or stores in a single request.
     */
    contentLocalinventoryCustombatch(req: operations.ContentLocalinventoryCustombatchRequest, security: operations.ContentLocalinventoryCustombatchSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLocalinventoryCustombatchResponse>;
    /**
     * Updates the local inventory of a product in your Merchant Center account.
     */
    contentLocalinventoryInsert(req: operations.ContentLocalinventoryInsertRequest, security: operations.ContentLocalinventoryInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ContentLocalinventoryInsertResponse>;
}
