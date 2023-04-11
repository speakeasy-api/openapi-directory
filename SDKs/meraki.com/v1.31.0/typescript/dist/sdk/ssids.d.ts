import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ssids {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an Identity PSK
     *
     * @remarks
     * Create an Identity PSK
     */
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Delete an Identity PSK
     *
     * @remarks
     * Delete an Identity PSK
     */
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Return a single MX SSID
     *
     * @remarks
     * Return a single MX SSID
     */
    getNetworkApplianceSsid(req: operations.GetNetworkApplianceSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSsidResponse>;
    /**
     * List the MX SSIDs in a network
     *
     * @remarks
     * List the MX SSIDs in a network
     */
    getNetworkApplianceSsids(req: operations.GetNetworkApplianceSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSsidsResponse>;
    /**
     * Return a single MR SSID
     *
     * @remarks
     * Return a single MR SSID
     */
    getNetworkWirelessSsid(req: operations.GetNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidResponse>;
    /**
     * List the Bonjour forwarding setting and rules for the SSID
     *
     * @remarks
     * List the Bonjour forwarding setting and rules for the SSID
     */
    getNetworkWirelessSsidBonjourForwarding(req: operations.GetNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * List the device type group policies for the SSID
     *
     * @remarks
     * List the device type group policies for the SSID
     */
    getNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * Return the EAP overridden parameters for an SSID
     *
     * @remarks
     * Return the EAP overridden parameters for an SSID
     */
    getNetworkWirelessSsidEapOverride(req: operations.GetNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidEapOverrideResponse>;
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
     * Return the Hotspot 2.0 settings for an SSID
     *
     * @remarks
     * Return the Hotspot 2.0 settings for an SSID
     */
    getNetworkWirelessSsidHotspot20(req: operations.GetNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidHotspot20Response>;
    /**
     * Return an Identity PSK
     *
     * @remarks
     * Return an Identity PSK
     */
    getNetworkWirelessSsidIdentityPsk(req: operations.GetNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPskResponse>;
    /**
     * List all Identity PSKs in a wireless network
     *
     * @remarks
     * List all Identity PSKs in a wireless network
     */
    getNetworkWirelessSsidIdentityPsks(req: operations.GetNetworkWirelessSsidIdentityPsksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidIdentityPsksResponse>;
    /**
     * List the outage schedule for the SSID
     *
     * @remarks
     * List the outage schedule for the SSID
     */
    getNetworkWirelessSsidSchedules(req: operations.GetNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSchedulesResponse>;
    /**
     * Display the splash page settings for the given SSID
     *
     * @remarks
     * Display the splash page settings for the given SSID
     */
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Display the traffic shaping settings for a SSID on an MR network
     *
     * @remarks
     * Display the traffic shaping settings for a SSID on an MR network
     */
    getNetworkWirelessSsidTrafficShapingRules(req: operations.GetNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * List the VPN settings for the SSID.
     *
     * @remarks
     * List the VPN settings for the SSID.
     */
    getNetworkWirelessSsidVpn(req: operations.GetNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidVpnResponse>;
    /**
     * List the MR SSIDs in a network
     *
     * @remarks
     * List the MR SSIDs in a network
     */
    getNetworkWirelessSsids(req: operations.GetNetworkWirelessSsidsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidsResponse>;
    /**
     * Return metrics for organization's top 10 ssids by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopSsidsByUsage(req: operations.GetOrganizationSummaryTopSsidsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSsidsByUsageResponse>;
    /**
     * Update the attributes of an MX SSID
     *
     * @remarks
     * Update the attributes of an MX SSID
     */
    updateNetworkApplianceSsid(req: operations.UpdateNetworkApplianceSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSsidResponse>;
    /**
     * Update the attributes of an MR SSID
     *
     * @remarks
     * Update the attributes of an MR SSID
     */
    updateNetworkWirelessSsid(req: operations.UpdateNetworkWirelessSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidResponse>;
    /**
     * Update the bonjour forwarding setting and rules for the SSID
     *
     * @remarks
     * Update the bonjour forwarding setting and rules for the SSID
     */
    updateNetworkWirelessSsidBonjourForwarding(req: operations.UpdateNetworkWirelessSsidBonjourForwardingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidBonjourForwardingResponse>;
    /**
     * Update the device type group policies for the SSID
     *
     * @remarks
     * Update the device type group policies for the SSID
     */
    updateNetworkWirelessSsidDeviceTypeGroupPolicies(req: operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesResponse>;
    /**
     * Update the EAP overridden parameters for an SSID.
     *
     * @remarks
     * Update the EAP overridden parameters for an SSID.
     */
    updateNetworkWirelessSsidEapOverride(req: operations.UpdateNetworkWirelessSsidEapOverrideRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidEapOverrideResponse>;
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
    /**
     * Update the Hotspot 2.0 settings of an SSID
     *
     * @remarks
     * Update the Hotspot 2.0 settings of an SSID
     */
    updateNetworkWirelessSsidHotspot20(req: operations.UpdateNetworkWirelessSsidHotspot20Request, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidHotspot20Response>;
    /**
     * Update an Identity PSK
     *
     * @remarks
     * Update an Identity PSK
     */
    updateNetworkWirelessSsidIdentityPsk(req: operations.UpdateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Update the outage schedule for the SSID
     *
     * @remarks
     * Update the outage schedule for the SSID
     */
    updateNetworkWirelessSsidSchedules(req: operations.UpdateNetworkWirelessSsidSchedulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSchedulesResponse>;
    /**
     * Modify the splash page settings for the given SSID
     *
     * @remarks
     * Modify the splash page settings for the given SSID
     */
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Update the traffic shaping settings for an SSID on an MR network
     *
     * @remarks
     * Update the traffic shaping settings for an SSID on an MR network
     */
    updateNetworkWirelessSsidTrafficShapingRules(req: operations.UpdateNetworkWirelessSsidTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidTrafficShapingRulesResponse>;
    /**
     * Update the VPN settings for the SSID
     *
     * @remarks
     * Update the VPN settings for the SSID
     */
    updateNetworkWirelessSsidVpn(req: operations.UpdateNetworkWirelessSsidVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidVpnResponse>;
}
