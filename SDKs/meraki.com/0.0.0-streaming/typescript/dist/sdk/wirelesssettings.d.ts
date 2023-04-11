import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WirelessSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the wireless settings for a network
     *
     * @remarks
     * Return the wireless settings for a network
     */
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * Update the wireless settings for a network
     *
     * @remarks
     * Update the wireless settings for a network
     */
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
}
