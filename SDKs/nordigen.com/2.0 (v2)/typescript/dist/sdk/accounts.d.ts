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
     * Access account balances.
     *
     * Balances will be returned in Berlin Group PSD2 format.
     */
    accountsBalancesRetrieve(req: operations.AccountsBalancesRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.AccountsBalancesRetrieveResponse>;
    /**
     * Access account details.
     *
     * Account details will be returned in Berlin Group PSD2 format.
     */
    accountsDetailsRetrieve(req: operations.AccountsDetailsRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.AccountsDetailsRetrieveResponse>;
    /**
     * Access account transactions.
     *
     * Transactions will be returned in Berlin Group PSD2 format.
     */
    accountsTransactionsRetrieve(req: operations.AccountsTransactionsRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.AccountsTransactionsRetrieveResponse>;
    /**
     * Access account metadata.
     *
     * Information about the account record, such as the processing status and IBAN.
     *
     * Account status is recalculated based on the error count in the latest req.
     */
    retrieveAccountMetadata(req: operations.RetrieveAccountMetadataRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountMetadataResponse>;
}
