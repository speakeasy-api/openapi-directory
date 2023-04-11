import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SplashSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Display the splash page settings for the given SSID
     *
     * @remarks
     * Display the splash page settings for the given SSID
     */
    getNetworkSsidSplashSettings(req: operations.GetNetworkSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSsidSplashSettingsResponse>;
    /**
     * Modify the splash page settings for the given SSID
     *
     * @remarks
     * Modify the splash page settings for the given SSID
     */
    updateNetworkSsidSplashSettings(req: operations.UpdateNetworkSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSsidSplashSettingsResponse>;
}
