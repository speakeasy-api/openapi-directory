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
     * Delete transaction
     *
     * @remarks
     * Deletes a transaction and all its data by ID.
     */
    deleteTransactionsId(req: operations.DeleteTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsIdResponse>;
    /**
     * List transactions in account
     *
     * @remarks
     * Lists transactions belonging to an account by its ID.
     */
    getAccountsIdTransactions(req: operations.GetAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsIdTransactionsResponse>;
    /**
     * List transactions in categories
     *
     * @remarks
     * Lists transactions belonging to one or more categories by their IDs.
     */
    getCategoriesIdTransactions(req: operations.GetCategoriesIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetCategoriesIdTransactionsResponse>;
    /**
     * List transactions in transaction account
     *
     * @remarks
     * Lists transactions belonging to a transaction account by its ID.
     */
    getTransactionAccountsIdTransactions(req: operations.GetTransactionAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionAccountsIdTransactionsResponse>;
    /**
     * Get a transaction
     *
     * @remarks
     * Gets a transaction by its ID.
     */
    getTransactionsId(req: operations.GetTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsIdResponse>;
    /**
     * List transactions in user
     *
     * @remarks
     * Lists transactions belonging to a user by their ID.
     */
    getUsersIdTransactions(req: operations.GetUsersIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdTransactionsResponse>;
    /**
     * Create a transaction in transaction account
     *
     * @remarks
     * Creates a transaction in a transaction account by its ID.
     */
    postTransactionAccountsIdTransactions(req: operations.PostTransactionAccountsIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionAccountsIdTransactionsResponse>;
    /**
     * Update a transaction
     *
     * @remarks
     * Updates a transaction by its ID.
     */
    putTransactionsId(req: operations.PutTransactionsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutTransactionsIdResponse>;
}
