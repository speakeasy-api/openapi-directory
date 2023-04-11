import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settlementtransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a list of transactions for the settlement.
     */
    contentSettlementtransactionsList(req: operations.ContentSettlementtransactionsListRequest, security: operations.ContentSettlementtransactionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ContentSettlementtransactionsListResponse>;
}
