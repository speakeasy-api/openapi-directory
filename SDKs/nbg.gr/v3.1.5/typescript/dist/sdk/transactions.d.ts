import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
     *
     * Get Transactions by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementIdTransactions(req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse>;
    /**
     * getAccountsAccountIdTransactions - Get Transactions
     *
     * Get Transactions by Account ID
    **/
    getAccountsAccountIdTransactions(req: operations.GetAccountsAccountIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdTransactionsResponse>;
}
