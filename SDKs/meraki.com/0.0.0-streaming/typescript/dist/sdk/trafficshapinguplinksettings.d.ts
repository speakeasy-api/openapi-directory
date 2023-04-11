import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class TrafficShapingUplinkSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the uplink settings for your MX network.
     *
     * @remarks
     * Returns the uplink settings for your MX network.
     */
    getNetworkUplinkSettings(req: operations.GetNetworkUplinkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkUplinkSettingsResponse>;
    /**
     * Updates the uplink settings for your MX network.
     *
     * @remarks
     * Updates the uplink settings for your MX network.
     */
    updateNetworkUplinkSettings(req: operations.UpdateNetworkUplinkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkUplinkSettingsResponse>;
}
