import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Balances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdBalances - Get Balances
     *
     * Get Balances by Account ID
    **/
    getAccountsAccountIdBalances(req: operations.GetAccountsAccountIdBalancesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBalancesResponse>;
}
