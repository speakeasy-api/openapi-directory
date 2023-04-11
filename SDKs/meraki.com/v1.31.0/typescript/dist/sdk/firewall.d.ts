import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Firewall {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the cellular firewall rules for an MX network
     *
     * @remarks
     * Return the cellular firewall rules for an MX network
     */
    getNetworkApplianceFirewallCellularFirewallRules(req: operations.GetNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')
     */
    getNetworkApplianceFirewallFirewalledService(req: operations.GetNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * List the appliance services and their accessibility rules
     *
     * @remarks
     * List the appliance services and their accessibility rules
     */
    getNetworkApplianceFirewallFirewalledServices(req: operations.GetNetworkApplianceFirewallFirewalledServicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallFirewalledServicesResponse>;
    /**
     * Return the inbound cellular firewall rules for an MX network
     *
     * @remarks
     * Return the inbound cellular firewall rules for an MX network
     */
    getNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
    /**
     * Return the inbound firewall rules for an MX network
     *
     * @remarks
     * Return the inbound firewall rules for an MX network
     */
    getNetworkApplianceFirewallInboundFirewallRules(req: operations.GetNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * Return the L3 firewall rules for an MX network
     *
     * @remarks
     * Return the L3 firewall rules for an MX network
     */
    getNetworkApplianceFirewallL3FirewallRules(req: operations.GetNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallL3FirewallRulesResponse>;
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
     * Return the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:Many NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToManyNatRules(req: operations.GetNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * Return the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Return the 1:1 NAT mapping rules for an MX network
     */
    getNetworkApplianceFirewallOneToOneNatRules(req: operations.GetNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * Return the port forwarding rules for an MX network
     *
     * @remarks
     * Return the port forwarding rules for an MX network
     */
    getNetworkApplianceFirewallPortForwardingRules(req: operations.GetNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * Return the firewall settings for this network
     *
     * @remarks
     * Return the firewall settings for this network
     */
    getNetworkApplianceFirewallSettings(req: operations.GetNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallSettingsResponse>;
    /**
     * Return the L3 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L3 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL3FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * Return the L7 firewall rules for an SSID on an MR network
     *
     * @remarks
     * Return the L7 firewall rules for an SSID on an MR network
     */
    getNetworkWirelessSsidFirewallL7FirewallRules(req: operations.GetNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
    /**
     * Update the cellular firewall rules of an MX network
     *
     * @remarks
     * Update the cellular firewall rules of an MX network
     */
    updateNetworkApplianceFirewallCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallCellularFirewallRulesResponse>;
    /**
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     *
     * @remarks
     * Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')
     */
    updateNetworkApplianceFirewallFirewalledService(req: operations.UpdateNetworkApplianceFirewallFirewalledServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallFirewalledServiceResponse>;
    /**
     * Update the inbound cellular firewall rules of an MX network
     *
     * @remarks
     * Update the inbound cellular firewall rules of an MX network
     */
    updateNetworkApplianceFirewallInboundCellularFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundCellularFirewallRulesResponse>;
    /**
     * Update the inbound firewall rules of an MX network
     *
     * @remarks
     * Update the inbound firewall rules of an MX network
     */
    updateNetworkApplianceFirewallInboundFirewallRules(req: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallInboundFirewallRulesResponse>;
    /**
     * Update the L3 firewall rules of an MX network
     *
     * @remarks
     * Update the L3 firewall rules of an MX network
     */
    updateNetworkApplianceFirewallL3FirewallRules(req: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL3FirewallRulesResponse>;
    /**
     * Update the MX L7 firewall rules for an MX network
     *
     * @remarks
     * Update the MX L7 firewall rules for an MX network
     */
    updateNetworkApplianceFirewallL7FirewallRules(req: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallL7FirewallRulesResponse>;
    /**
     * Set the 1:Many NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:Many NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToManyNatRules(req: operations.UpdateNetworkApplianceFirewallOneToManyNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToManyNatRulesResponse>;
    /**
     * Set the 1:1 NAT mapping rules for an MX network
     *
     * @remarks
     * Set the 1:1 NAT mapping rules for an MX network
     */
    updateNetworkApplianceFirewallOneToOneNatRules(req: operations.UpdateNetworkApplianceFirewallOneToOneNatRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallOneToOneNatRulesResponse>;
    /**
     * Update the port forwarding rules for an MX network
     *
     * @remarks
     * Update the port forwarding rules for an MX network
     */
    updateNetworkApplianceFirewallPortForwardingRules(req: operations.UpdateNetworkApplianceFirewallPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallPortForwardingRulesResponse>;
    /**
     * Update the firewall settings for this network
     *
     * @remarks
     * Update the firewall settings for this network
     */
    updateNetworkApplianceFirewallSettings(req: operations.UpdateNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallSettingsResponse>;
    /**
     * Update the L3 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L3 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL3FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse>;
    /**
     * Update the L7 firewall rules of an SSID on an MR network
     *
     * @remarks
     * Update the L7 firewall rules of an SSID on an MR network
     */
    updateNetworkWirelessSsidFirewallL7FirewallRules(req: operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse>;
}
