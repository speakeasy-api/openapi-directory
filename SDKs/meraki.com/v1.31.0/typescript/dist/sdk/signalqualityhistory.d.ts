import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SignalQualityHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * @remarks
     * Return signal quality (SNR/RSSI) over time for a device or network client
     */
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
}
