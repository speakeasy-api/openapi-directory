import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Hotspot20 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the Hotspot 2.0 settings for an SSID
     *
     * @remarks
     * Return the Hotspot 2.0 settings for an SSID
     */
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * Update the Hotspot 2.0 settings of an SSID
     *
     * @remarks
     * Update the Hotspot 2.0 settings of an SSID
     */
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
}
