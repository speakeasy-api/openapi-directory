import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * List support details
 */
export declare class Support {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the IP address from where your API request originated
     */
    getIpAddress(config?: AxiosRequestConfig): Promise<operations.GetIpAddressResponse>;
    /**
     * List all Service Status messages
     */
    getServiceStatus(config?: AxiosRequestConfig): Promise<operations.GetServiceStatusResponse>;
    /**
     * Return the IP address from where your API request originated
     */
    getSupportIpAddress(config?: AxiosRequestConfig): Promise<operations.GetSupportIpAddressResponse>;
    /**
     * List all Service Status messages
     */
    getSupportServiceStatus(config?: AxiosRequestConfig): Promise<operations.GetSupportServiceStatusResponse>;
}
