import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Public {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLatestAgentVersion - Returns latest agent version
    **/
    getLatestAgentVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestAgentVersionResponse>;
    /**
     * getLatestPlatformVersion - Returns latest platform version
    **/
    getLatestPlatformVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestPlatformVersionResponse>;
    /**
     * getLatestScannerVersion - Returns latest scanner version
    **/
    getLatestScannerVersion(config?: AxiosRequestConfig): Promise<operations.GetLatestScannerVersionResponse>;
}
