import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientCountHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return wireless client counts over time for a network, device, or network client
     *
     * @remarks
     * Return wireless client counts over time for a network, device, or network client
     */
    getNetworkWirelessClientCountHistory(req: operations.GetNetworkWirelessClientCountHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientCountHistoryResponse>;
}
