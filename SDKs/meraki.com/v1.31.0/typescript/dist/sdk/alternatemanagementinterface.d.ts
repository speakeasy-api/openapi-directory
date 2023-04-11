import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlternateManagementInterface {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the switch alternate management interface for the network
     *
     * @remarks
     * Return the switch alternate management interface for the network
     */
    getNetworkSwitchAlternateManagementInterface(req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Return alternate management interface and devices with IP assigned
     *
     * @remarks
     * Return alternate management interface and devices with IP assigned
     */
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * Update the switch alternate management interface for the network
     *
     * @remarks
     * Update the switch alternate management interface for the network
     */
    updateNetworkSwitchAlternateManagementInterface(req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * Update alternate management interface and device static IP
     *
     * @remarks
     * Update alternate management interface and device static IP
     */
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
}
