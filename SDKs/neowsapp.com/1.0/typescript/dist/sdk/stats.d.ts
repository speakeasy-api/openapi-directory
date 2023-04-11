import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Stats on Near Earth Object data sets
 */
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the Near Earth Object data set totals
     *
     * @remarks
     * retrieveCurrentNeoStatistics
     */
    retrieveCurrentNeoStatistics(config?: AxiosRequestConfig): Promise<operations.RetrieveCurrentNeoStatisticsResponse>;
}
