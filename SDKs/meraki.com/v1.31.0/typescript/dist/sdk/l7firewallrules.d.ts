import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class L7FirewallRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the MX L7 firewall rules for an MX network
     *
     * @remarks
     * List the MX L7 firewall rules for an MX network
     */
    getNetworkApplianceFirewallL7FirewallRules(req: operations.GetNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * Return the L7 firewall application categories and their associated applications for an MX network
     *
     * @remarks
     * Return the L7 firewall application categories and their associated applications for an MX network
     */
    getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(req: operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse>;
    /**
     * Return the L7 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L7 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * Update the MX L7 firewall rules for an MX network
     *
     * @remarks
     * Update the MX L7 firewall rules for an MX network
     */
    updateNetworkApplianceFirewallL7FirewallRules(req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * Update the L7 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L7 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
}
