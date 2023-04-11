import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class LossAndLatencyHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     *
     * @remarks
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     */
    getDeviceLossAndLatencyHistory(req: operations.GetDeviceLossAndLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLossAndLatencyHistoryResponse>;
}
