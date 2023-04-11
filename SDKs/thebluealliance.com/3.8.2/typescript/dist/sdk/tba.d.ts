import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Calls that expose TBA internals or status.
 */
export declare class Tba {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns API status, and TBA status information.
     */
    getStatus(req: operations.GetStatusRequest, security: operations.GetStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
}
