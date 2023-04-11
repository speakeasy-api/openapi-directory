import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SensitiveData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update sensitive data
     *
     * @remarks
     * Sends new or updated employee sensitive data information directly to Web Pay.
     */
    addOrUpdateSensitiveData(req: operations.AddOrUpdateSensitiveDataRequest, security: operations.AddOrUpdateSensitiveDataSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateSensitiveDataResponse>;
    /**
     * Get sensitive data
     *
     * @remarks
     * Gets employee sensitive data information directly from Web Pay.
     */
    getSensitiveData(req: operations.GetSensitiveDataRequest, security: operations.GetSensitiveDataSecurity, config?: AxiosRequestConfig): Promise<operations.GetSensitiveDataResponse>;
}
