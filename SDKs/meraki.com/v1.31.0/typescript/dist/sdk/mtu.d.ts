import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mtu {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the MTU configuration
     *
     * @remarks
     * Return the MTU configuration
     */
    getNetworkSwitchMtu(req: operations.GetNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchMtuResponse>;
    /**
     * Update the MTU configuration
     *
     * @remarks
     * Update the MTU configuration
     */
    updateNetworkSwitchMtu(req: operations.UpdateNetworkSwitchMtuRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchMtuResponse>;
}
