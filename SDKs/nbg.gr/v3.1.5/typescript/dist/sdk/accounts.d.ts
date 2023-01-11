import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccounts - Get Accounts
     *
     * Get Accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAccountsAccountId - Get Accounts
     *
     * Get Accounts by Account ID
    **/
    getAccountsAccountId(req: operations.GetAccountsAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdResponse>;
}
