import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Email history represents a single email that was sent using Fitbit Plus.
 */
export declare class EmailHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List email histories
     *
     * @remarks
     * Get a list of email histories
     */
    fetchEmailHistories(req: operations.FetchEmailHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.FetchEmailHistoriesResponse>;
    /**
     * Get an email history
     *
     * @remarks
     * Get an email history by id
     */
    fetchEmailHistory(req: operations.FetchEmailHistoryRequest, config?: AxiosRequestConfig): Promise<operations.FetchEmailHistoryResponse>;
}
