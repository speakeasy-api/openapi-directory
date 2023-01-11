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
     * retrieveAccountBalances - Access account balances.
     *
     * Balances will be returned in Berlin Group PSD2 format.
    **/
    retrieveAccountBalances(req: operations.RetrieveAccountBalancesRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountBalancesResponse>;
    /**
     * retrieveAccountDetails - Access account details.
     *
     * Account details will be returned in Berlin Group PSD2 format.
    **/
    retrieveAccountDetails(req: operations.RetrieveAccountDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountDetailsResponse>;
    /**
     * retrieveAccountMetadata - Access account metadata.
     *
     * Information about the account record, such as the processing status and IBAN.
    **/
    retrieveAccountMetadata(req: operations.RetrieveAccountMetadataRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountMetadataResponse>;
    /**
     * retrieveAccountTransactions - Access account transactions.
     *
     * Transactions will be returned in Berlin Group PSD2 format.
    **/
    retrieveAccountTransactions(req: operations.RetrieveAccountTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountTransactionsResponse>;
}
