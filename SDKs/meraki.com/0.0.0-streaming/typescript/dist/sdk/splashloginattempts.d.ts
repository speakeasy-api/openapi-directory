import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SplashLoginAttempts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the splash login attempts for a network
     *
     * @remarks
     * List the splash login attempts for a network
     */
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
}
