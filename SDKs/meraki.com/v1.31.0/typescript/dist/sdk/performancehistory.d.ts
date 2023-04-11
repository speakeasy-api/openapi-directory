import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PerformanceHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * @remarks
     * Return historical records of various Systems Manager client metrics for desktop devices.
     */
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
}
