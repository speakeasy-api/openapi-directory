import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Number of the day. This API is free (rate limited).
 */
export declare class NumberOfTheDay {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the number of the day for current day
     */
    getNumbersNod(config?: AxiosRequestConfig): Promise<operations.GetNumbersNodResponse>;
}
