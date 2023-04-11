import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Accounts
     *
     * @remarks
     * Get Accounts
     */
    getAccounts(req: operations.GetAccountsRequest, security: operations.GetAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * Get Accounts
     *
     * @remarks
     * Get Accounts by Account ID
     */
    getAccountsAccountId(req: operations.GetAccountsAccountIdRequest, security: operations.GetAccountsAccountIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdResponse>;
}
