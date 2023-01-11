import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThirdPartyTransmission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteThirdPartyTransaction - Delete third party transaction
     *
     * Deletes a third party transaction record from the given resource location
    **/
    deleteThirdPartyTransaction(req: operations.DeleteThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionResponse>;
    /**
     * getThirdPartyTransaction - Get a third party transaction
     *
     * Get a third party transaction
    **/
    getThirdPartyTransaction(req: operations.GetThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionResponse>;
    /**
     * getThirdPartyTransactions - Get all third party transaction links
     *
     * Get all third party transaction links
    **/
    getThirdPartyTransactions(req: operations.GetThirdPartyTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionsResponse>;
}
