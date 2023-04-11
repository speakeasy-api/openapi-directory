import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quotas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists the daily call quota and usage per method for your Merchant Center account.
     */
    contentQuotasList(req: operations.ContentQuotasListRequest, security: operations.ContentQuotasListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentQuotasListResponse>;
}
