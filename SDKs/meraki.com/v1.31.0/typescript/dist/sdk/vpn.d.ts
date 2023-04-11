import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vpn {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a Hub BGP Configuration
     *
     * @remarks
     * Return a Hub BGP Configuration
     */
    getNetworkApplianceVpnBgp(req: operations.GetNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnBgpResponse>;
    /**
     * Return the site-to-site VPN settings of a network
     *
     * @remarks
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
     */
    getNetworkApplianceVpnSiteToSiteVpn(req: operations.GetNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * List the VPN settings for the SSID.
     *
     * @remarks
     * List the VPN settings for the SSID.
     */
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * Show VPN history stat for networks in an organization
     *
     * @remarks
     * Show VPN history stat for networks in an organization
     */
    getOrganizationApplianceVpnStats(req: operations.GetOrganizationApplianceVpnStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatsResponse>;
    /**
     * Show VPN status for networks in an organization
     *
     * @remarks
     * Show VPN status for networks in an organization
     */
    getOrganizationApplianceVpnStatuses(req: operations.GetOrganizationApplianceVpnStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatusesResponse>;
    /**
     * Return the third party VPN peers for an organization
     *
     * @remarks
     * Return the third party VPN peers for an organization
     */
    getOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.GetOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
    /**
     * Return the firewall rules for an organization's site-to-site VPN
     *
     * @remarks
     * Return the firewall rules for an organization's site-to-site VPN
     */
    getOrganizationApplianceVpnVpnFirewallRules(req: operations.GetOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnVpnFirewallRulesResponse>;
    /**
     * Update a Hub BGP Configuration
     *
     * @remarks
     * Update a Hub BGP Configuration
     */
    updateNetworkApplianceVpnBgp(req: operations.UpdateNetworkApplianceVpnBgpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnBgpResponse>;
    /**
     * Update the site-to-site VPN settings of a network
     *
     * @remarks
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
     */
    updateNetworkApplianceVpnSiteToSiteVpn(req: operations.UpdateNetworkApplianceVpnSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVpnSiteToSiteVpnResponse>;
    /**
     * Update the VPN settings for the SSID
     *
     * @remarks
     * Update the VPN settings for the SSID
     */
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
    /**
     * Update the third party VPN peers for an organization
     *
     * @remarks
     * Update the third party VPN peers for an organization
     */
    updateOrganizationApplianceVPNThirdPartyVPNPeers(req: operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVPNThirdPartyVPNPeersResponse>;
    /**
     * Update the firewall rules of an organization's site-to-site VPN
     *
     * @remarks
     * Update the firewall rules of an organization's site-to-site VPN
     */
    updateOrganizationApplianceVpnVpnFirewallRules(req: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnVpnFirewallRulesResponse>;
}
