import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Transactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Transactions
     *
     * @remarks
     * Get Transactions by Account ID and Statement ID
     */
    getAccountsAccountIdStatementsStatementIdTransactions(req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest, security: operations.GetAccountsAccountIdStatementsStatementIdTransactionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse>;
    /**
     * Get Transactions
     *
     * @remarks
     * Get Transactions by Account ID
     */
    getAccountsAccountIdTransactions(req: operations.GetAccountsAccountIdTransactionsRequest, security: operations.GetAccountsAccountIdTransactionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdTransactionsResponse>;
}
