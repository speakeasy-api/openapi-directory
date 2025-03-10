import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Metadata functions
 */
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the status of the API
     */
    getStatus(config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
}
