import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AccountAndPortfolio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Brokerage Accounts
     *
     * @remarks
     * Allows the caller to request a list of accounts associated with the session.
     */
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * Account Positions
     *
     * @remarks
     * Returns a list of positions for the indicated account.
     */
    getAccountsAccountPositions(req: operations.GetAccountsAccountPositionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountPositionsResponse>;
    /**
     * Account Values Summary
     *
     * @remarks
     * Returns a list of account and margin balances associated with the account passed in the URL
     */
    getAccountsAccountSummary(req: operations.GetAccountsAccountSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountSummaryResponse>;
}
