import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the billing settings of this network
     *
     * @remarks
     * Return the billing settings of this network
     */
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * Update the billing settings
     *
     * @remarks
     * Update the billing settings
     */
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
}
