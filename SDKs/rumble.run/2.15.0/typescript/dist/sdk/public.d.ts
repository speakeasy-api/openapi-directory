import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Unauthenticated
 */
export declare class Public {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns latest agent version
     */
    getLatestAgentVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestAgentVersionResponse>;
    /**
     * Returns latest platform version
     */
    getLatestPlatformVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestPlatformVersionResponse>;
    /**
     * Returns latest scanner version
     */
    getLatestScannerVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestScannerVersionResponse>;
}
