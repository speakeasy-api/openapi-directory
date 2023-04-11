import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelUtilizationHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return AP channel utilization over time for a device or network client
     *
     * @remarks
     * Return AP channel utilization over time for a device or network client
     */
    getNetworkWirelessChannelUtilizationHistory(req: operations.GetNetworkWirelessChannelUtilizationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessChannelUtilizationHistoryResponse>;
}
