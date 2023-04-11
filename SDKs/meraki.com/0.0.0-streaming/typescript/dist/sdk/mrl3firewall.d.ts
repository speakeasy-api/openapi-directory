import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Mrl3Firewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the L3 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L3 firewall rules for an SSID on an MR network
     */
    getNetworkSsidL3FirewallRules(req: operations.GetNetworkSsidL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSsidL3FirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L3 firewall rules of an SSID on an MR network
     */
    updateNetworkSsidL3FirewallRules(req: operations.UpdateNetworkSsidL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSsidL3FirewallRulesResponse>;
}
