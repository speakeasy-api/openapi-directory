import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Transaction operations
 *
 * @see {@link https://netlicensing.io/wiki/transaction-services} - Transaction Services
 */
export declare class Transaction {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Transaction
     *
     * @remarks
     * Creates a new Transaction
     */
    createTransaction(req: operations.CreateTransactionRequestBody, security: operations.CreateTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTransactionResponse>;
    /**
     * Get Transaction
     *
     * @remarks
     * Return a Transaction by 'transactionNumber'
     */
    getTransaction(req: operations.GetTransactionRequest, security: operations.GetTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.GetTransactionResponse>;
    /**
     * List Transactions
     *
     * @remarks
     * Return a list of all Transactions for the current Vendor
     */
    listTransactions(config?: AxiosRequestConfig): Promise<operations.ListTransactionsResponse>;
    /**
     * Update Transaction
     *
     * @remarks
     * Sets the provided properties to a Transaction. Return an updated Transaction
     */
    updateTransaction(req: operations.UpdateTransactionRequest, security: operations.UpdateTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTransactionResponse>;
}
