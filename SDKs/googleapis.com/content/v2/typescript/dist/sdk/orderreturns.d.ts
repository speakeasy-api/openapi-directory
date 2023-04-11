import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Orderreturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an order return from your Merchant Center account.
     */
    contentOrderreturnsGet(req: operations.ContentOrderreturnsGetRequest, security: operations.ContentOrderreturnsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsGetResponse>;
    /**
     * Lists order returns in your Merchant Center account.
     */
    contentOrderreturnsList(req: operations.ContentOrderreturnsListRequest, security: operations.ContentOrderreturnsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsListResponse>;
}
