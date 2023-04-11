import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WarmSpare {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return warm spare configuration for a switch
     *
     * @remarks
     * Return warm spare configuration for a switch
     */
    getDeviceSwitchWarmSpare(req: operations.GetDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchWarmSpareResponse>;
    /**
     * Return MX warm spare settings
     *
     * @remarks
     * Return MX warm spare settings
     */
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * Swap MX primary and warm spare appliances
     *
     * @remarks
     * Swap MX primary and warm spare appliances
     */
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * Update warm spare configuration for a switch
     *
     * @remarks
     * Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.
     */
    updateDeviceSwitchWarmSpare(req: operations.UpdateDeviceSwitchWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchWarmSpareResponse>;
    /**
     * Update MX warm spare settings
     *
     * @remarks
     * Update MX warm spare settings
     */
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
}
