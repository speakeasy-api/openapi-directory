import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SSIDs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the SSID statuses of an access point
     *
     * @remarks
     * Return the SSID statuses of an access point
     */
    getNetworkDeviceWirelessStatus(req: operations.GetNetworkDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceWirelessStatusResponse>;
    /**
     * Return a single SSID
     *
     * @remarks
     * Return a single SSID
     */
    getNetworkSsid(req: operations.GetNetworkSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSsidResponse>;
    /**
     * List the SSIDs in a network
     *
     * @remarks
     * List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.
     */
    getNetworkSsids(req: operations.GetNetworkSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSsidsResponse>;
    /**
     * Update the attributes of an SSID
     *
     * @remarks
     * Update the attributes of an SSID
     */
    updateNetworkSsid(req: operations.UpdateNetworkSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSsidResponse>;
}
