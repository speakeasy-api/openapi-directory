import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Consumer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a batch of consumer transaction classification results.
     *
     * @remarks
     * Get a batch of consumer transaction classification results.
     */
    getABatchOfConsumerTransactionClassificationResults(req: operations.GetABatchOfConsumerTransactionClassificationResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetABatchOfConsumerTransactionClassificationResultsResponse>;
}
