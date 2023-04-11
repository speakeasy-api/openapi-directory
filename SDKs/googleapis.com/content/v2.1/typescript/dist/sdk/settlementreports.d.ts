import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settlementreports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a settlement report from your Merchant Center account.
     */
    contentSettlementreportsGet(req: operations.ContentSettlementreportsGetRequest, security: operations.ContentSettlementreportsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ContentSettlementreportsGetResponse>;
    /**
     * Retrieves a list of settlement reports from your Merchant Center account.
     */
    contentSettlementreportsList(req: operations.ContentSettlementreportsListRequest, security: operations.ContentSettlementreportsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentSettlementreportsListResponse>;
}
