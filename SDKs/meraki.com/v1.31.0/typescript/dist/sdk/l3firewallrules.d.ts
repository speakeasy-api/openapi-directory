import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class L3FirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the L3 firewall rules for an MX network
     *
     * @remarks
     * Return the L3 firewall rules for an MX network
     */
    getNetworkApplianceFirewallL3FirewallRules(req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * Return the L3 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L3 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an MX network
     *
     * @remarks
     * Update the L3 firewall rules of an MX network
     */
    updateNetworkApplianceFirewallL3FirewallRules(req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L3 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
}
