import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TransactionsFindPaymentsAndRefunds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deleted a transaction
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     *
     */
    deleteTransactionsTransactionId(req: operations.DeleteTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTransactionsTransactionIdResponse>;
    /**
     * Returns a paginated list of transactions
     *
     * @remarks
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
     */
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
    /**
     * Returns a transaction
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     *
     */
    getTransactionsTransactionId(req: operations.GetTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsTransactionIdResponse>;
    /**
     * Updates a transaction
     *
     * @remarks
     * - Results are returned for the market provided within the basic authentication credentials
     *
     */
    postTransactionsTransactionId(req: operations.PostTransactionsTransactionIdRequest, config?: AxiosRequestConfig): Promise<operations.PostTransactionsTransactionIdResponse>;
}
