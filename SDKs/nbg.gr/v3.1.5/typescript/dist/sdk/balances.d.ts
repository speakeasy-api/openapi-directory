import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Balances {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Balances
     *
     * @remarks
     * Get Balances by Account ID
     */
    getAccountsAccountIdBalances(req: operations.GetAccountsAccountIdBalancesRequest, security: operations.GetAccountsAccountIdBalancesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBalancesResponse>;
}
