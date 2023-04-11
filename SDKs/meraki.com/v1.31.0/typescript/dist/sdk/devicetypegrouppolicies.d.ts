import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DeviceTypeGroupPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the device type group policies for the SSID
     *
     * @remarks
     * List the device type group policies for the SSID
     */
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * Update the device type group policies for the SSID
     *
     * @remarks
     * Update the device type group policies for the SSID
     */
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
}
