import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ChannelUtilization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the channel utilization over each radio for all APs in a network.
     *
     * @remarks
     * Get the channel utilization over each radio for all APs in a network.
     */
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
}
