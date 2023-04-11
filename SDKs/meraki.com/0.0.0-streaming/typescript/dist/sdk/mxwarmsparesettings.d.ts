import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXWarmSpareSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return MX warm spare settings
     *
     * @remarks
     * Return MX warm spare settings
     */
    getNetworkWarmSpareSettings(req: operations.GetNetworkWarmSpareSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWarmSpareSettingsResponse>;
    /**
     * Swap MX primary and warm spare appliances
     *
     * @remarks
     * Swap MX primary and warm spare appliances
     */
    swapNetworkWarmSpare(req: operations.SwapNetworkWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkWarmSpareResponse>;
    /**
     * Update MX warm spare settings
     *
     * @remarks
     * Update MX warm spare settings
     */
    updateNetworkWarmSpareSettings(req: operations.UpdateNetworkWarmSpareSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWarmSpareSettingsResponse>;
}
