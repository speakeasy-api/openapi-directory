import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AlertSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the alert configuration for this network
     *
     * @remarks
     * Return the alert configuration for this network
     */
    getNetworkAlertSettings(req: operations.GetNetworkAlertSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertSettingsResponse>;
    /**
     * Update the alert configuration for this network
     *
     * @remarks
     * Update the alert configuration for this network
     */
    updateNetworkAlertSettings(req: operations.UpdateNetworkAlertSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertSettingsResponse>;
}
