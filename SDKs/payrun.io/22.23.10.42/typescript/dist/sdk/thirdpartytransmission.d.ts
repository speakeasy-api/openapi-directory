import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ThirdPartyTransmission {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete third party transaction
     *
     * @remarks
     * Deletes a third party transaction record from the given resource location
     */
    deleteThirdPartyTransaction(req: operations.DeleteThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteThirdPartyTransactionResponse>;
    /**
     * Get a third party transaction
     *
     * @remarks
     * Get a third party transaction
     */
    getThirdPartyTransaction(req: operations.GetThirdPartyTransactionRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionResponse>;
    /**
     * Get all third party transaction links
     *
     * @remarks
     * Get all third party transaction links
     */
    getThirdPartyTransactions(req: operations.GetThirdPartyTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyTransactionsResponse>;
}
