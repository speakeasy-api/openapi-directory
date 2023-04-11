import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Appliance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a new vMX authentication token
     *
     * @remarks
     * Generate a new vMX authentication token
     */
    createDeviceApplianceVmxAuthenticationToken(req: operations.CreateDeviceApplianceVmxAuthenticationTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceApplianceVmxAuthenticationTokenResponse>;
    /**
     * Add a static delegated prefix from a network
     *
     * @remarks
     * Add a static delegated prefix from a network
     */
    createNetworkAppliancePrefixesDelegatedStatic(req: operations.CreateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Add a static route for an MX or teleworker network
     *
     * @remarks
     * Add a static route for an MX or teleworker network
     */
    createNetworkApplianceStaticRoute(req: operations.CreateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceStaticRouteResponse>;
    /**
     * Add a custom performance class for an MX network
     *
     * @remarks
     * Add a custom performance class for an MX network
     */
    createNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Add a VLAN
     *
     * @remarks
     * Add a VLAN
     */
    createNetworkApplianceVlan(req: operations.CreateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceVlanResponse>;
    /**
     * Delete a static delegated prefix from a network
     *
     * @remarks
     * Delete a static delegated prefix from a network
     */
    deleteNetworkAppliancePrefixesDelegatedStatic(req: operations.DeleteNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Delete a static route from an MX or teleworker network
     *
     * @remarks
     * Delete a static route from an MX or teleworker network
     */
    deleteNetworkApplianceStaticRoute(req: operations.DeleteNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceStaticRouteResponse>;
    /**
     * Delete a custom performance class from an MX network
     *
     * @remarks
     * Delete a custom performance class from an MX network
     */
    deleteNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Delete a VLAN from a network
     *
     * @remarks
     * Delete a VLAN from a network
     */
    deleteNetworkApplianceVlan(req: operations.DeleteNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceVlanResponse>;
    /**
     * Return the DHCP subnet information for an appliance
     *
     * @remarks
     * Return the DHCP subnet information for an appliance
     */
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
    /**
     * Return the performance score for a single MX
     *
     * @remarks
     * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
     */
    getDeviceAppliancePerformance(req: operations.GetDeviceAppliancePerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePerformanceResponse>;
    /**
     * Return current delegated IPv6 prefixes on an appliance.
     *
     * @remarks
     * Return current delegated IPv6 prefixes on an appliance.
     */
    getDeviceAppliancePrefixesDelegated(req: operations.GetDeviceAppliancePrefixesDelegatedRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePrefixesDelegatedResponse>;
    /**
     * Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
     *
     * @remarks
     * Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
     */
    getDeviceAppliancePrefixesDelegatedVlanAssignments(req: operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePrefixesDelegatedVlanAssignmentsResponse>;
    /**
     * Return the uplink settings for an MX appliance
     *
     * @remarks
     * Return the uplink settings for an MX appliance
     */
    getDeviceApplianceUplinksSettings(req: operations.GetDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceUplinksSettingsResponse>;
    /**
     * List the security events for a client
     *
     * @remarks
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * Return the connectivity testing destinations for an MX network
     *
     * @remarks
     * Return the connectivity testing destinations for an MX network
     */
    getNetworkApplianceConnectivityMonitoringDestinations(req: operations.GetNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Return the content filtering settings for an MX network
     *
     * @remarks
     * Return the content filtering settings for an MX network
     */
    getNetworkApplianceContentFiltering(req: operations.GetNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringResponse>;
    /**
     * List all available content filtering categories for an MX network
     *
     * @remarks
     * List all available content filtering categories for an MX network
     */
    getNetworkApplianceContentFilteringCategories(req: operations.GetNetworkApplianceContentFilteringCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceContentFilteringCategoriesResponse>;
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
     * Return per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Return per-port VLAN settings for a single MX port.
     */
    getNetworkAppliancePort(req: operations.GetNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortResponse>;
    /**
     * List per-port VLAN settings for all ports of a MX.
     *
     * @remarks
     * List per-port VLAN settings for all ports of a MX.
     */
    getNetworkAppliancePorts(req: operations.GetNetworkAppliancePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePortsResponse>;
    /**
     * Return a static delegated prefix from a network
     *
     * @remarks
     * Return a static delegated prefix from a network
     */
    getNetworkAppliancePrefixesDelegatedStatic(req: operations.GetNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * List static delegated prefixes for a network
     *
     * @remarks
     * List static delegated prefixes for a network
     */
    getNetworkAppliancePrefixesDelegatedStatics(req: operations.GetNetworkAppliancePrefixesDelegatedStaticsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAppliancePrefixesDelegatedStaticsResponse>;
    /**
     * List the security events for a network
     *
     * @remarks
     * List the security events for a network
     */
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * Returns all supported intrusion settings for an MX network
     *
     * @remarks
     * Returns all supported intrusion settings for an MX network
     */
    getNetworkApplianceSecurityIntrusion(req: operations.GetNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Returns all supported malware settings for an MX network
     *
     * @remarks
     * Returns all supported malware settings for an MX network
     */
    getNetworkApplianceSecurityMalware(req: operations.GetNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityMalwareResponse>;
    /**
     * Return the appliance settings for a network
     *
     * @remarks
     * Return the appliance settings for a network
     */
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * Return single LAN configuration
     *
     * @remarks
     * Return single LAN configuration
     */
    getNetworkApplianceSingleLan(req: operations.GetNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSingleLanResponse>;
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
     * Return a static route for an MX or teleworker network
     *
     * @remarks
     * Return a static route for an MX or teleworker network
     */
    getNetworkApplianceStaticRoute(req: operations.GetNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRouteResponse>;
    /**
     * List the static routes for an MX or teleworker network
     *
     * @remarks
     * List the static routes for an MX or teleworker network
     */
    getNetworkApplianceStaticRoutes(req: operations.GetNetworkApplianceStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRoutesResponse>;
    /**
     * Display the traffic shaping settings for an MX network
     *
     * @remarks
     * Display the traffic shaping settings for an MX network
     */
    getNetworkApplianceTrafficShaping(req: operations.GetNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingResponse>;
    /**
     * Return a custom performance class for an MX network
     *
     * @remarks
     * Return a custom performance class for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * List all custom performance classes for an MX network
     *
     * @remarks
     * List all custom performance classes for an MX network
     */
    getNetworkApplianceTrafficShapingCustomPerformanceClasses(req: operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse>;
    /**
     * Display the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Display the traffic shaping settings rules for an MX network
     */
    getNetworkApplianceTrafficShapingRules(req: operations.GetNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Returns the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Returns the uplink bandwidth settings for your MX network.
     */
    getNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.GetNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Show uplink selection settings for an MX network
     *
     * @remarks
     * Show uplink selection settings for an MX network
     */
    getNetworkApplianceTrafficShapingUplinkSelection(req: operations.GetNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Get the sent and received bytes for each uplink of a network.
     *
     * @remarks
     * Get the sent and received bytes for each uplink of a network.
     */
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * Return a VLAN
     *
     * @remarks
     * Return a VLAN
     */
    getNetworkApplianceVlan(req: operations.GetNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlanResponse>;
    /**
     * List the VLANs for an MX network
     *
     * @remarks
     * List the VLANs for an MX network
     */
    getNetworkApplianceVlans(req: operations.GetNetworkApplianceVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansResponse>;
    /**
     * Returns the enabled status of VLANs for the network
     *
     * @remarks
     * Returns the enabled status of VLANs for the network
     */
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
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
     * Return MX warm spare settings
     *
     * @remarks
     * Return MX warm spare settings
     */
    getNetworkApplianceWarmSpare(req: operations.GetNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceWarmSpareResponse>;
    /**
     * List the security events for an organization
     *
     * @remarks
     * List the security events for an organization
     */
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
    /**
     * Returns all supported intrusion settings for an organization
     *
     * @remarks
     * Returns all supported intrusion settings for an organization
     */
    getOrganizationApplianceSecurityIntrusion(req: operations.GetOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityIntrusionResponse>;
    /**
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     */
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
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
     * Swap MX primary and warm spare appliances
     *
     * @remarks
     * Swap MX primary and warm spare appliances
     */
    swapNetworkApplianceWarmSpare(req: operations.SwapNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.SwapNetworkApplianceWarmSpareResponse>;
    /**
     * Update the uplink settings for an MX appliance
     *
     * @remarks
     * Update the uplink settings for an MX appliance
     */
    updateDeviceApplianceUplinksSettings(req: operations.UpdateDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceApplianceUplinksSettingsResponse>;
    /**
     * Update the connectivity testing destinations for an MX network
     *
     * @remarks
     * Update the connectivity testing destinations for an MX network
     */
    updateNetworkApplianceConnectivityMonitoringDestinations(req: operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse>;
    /**
     * Update the content filtering settings for an MX network
     *
     * @remarks
     * Update the content filtering settings for an MX network
     */
    updateNetworkApplianceContentFiltering(req: operations.UpdateNetworkApplianceContentFilteringRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceContentFilteringResponse>;
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
     * Update the per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Update the per-port VLAN settings for a single MX port.
     */
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * Update a static delegated prefix from a network
     *
     * @remarks
     * Update a static delegated prefix from a network
     */
    updateNetworkAppliancePrefixesDelegatedStatic(req: operations.UpdateNetworkAppliancePrefixesDelegatedStaticRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePrefixesDelegatedStaticResponse>;
    /**
     * Set the supported intrusion settings for an MX network
     *
     * @remarks
     * Set the supported intrusion settings for an MX network
     */
    updateNetworkApplianceSecurityIntrusion(req: operations.UpdateNetworkApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityIntrusionResponse>;
    /**
     * Set the supported malware settings for an MX network
     *
     * @remarks
     * Set the supported malware settings for an MX network
     */
    updateNetworkApplianceSecurityMalware(req: operations.UpdateNetworkApplianceSecurityMalwareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSecurityMalwareResponse>;
    /**
     * Update the appliance settings for a network
     *
     * @remarks
     * Update the appliance settings for a network
     */
    updateNetworkApplianceSettings(req: operations.UpdateNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSettingsResponse>;
    /**
     * Update single LAN configuration
     *
     * @remarks
     * Update single LAN configuration
     */
    updateNetworkApplianceSingleLan(req: operations.UpdateNetworkApplianceSingleLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSingleLanResponse>;
    /**
     * Update the attributes of an MX SSID
     *
     * @remarks
     * Update the attributes of an MX SSID
     */
    updateNetworkApplianceSsid(req: operations.UpdateNetworkApplianceSsidRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSsidResponse>;
    /**
     * Update a static route for an MX or teleworker network
     *
     * @remarks
     * Update a static route for an MX or teleworker network
     */
    updateNetworkApplianceStaticRoute(req: operations.UpdateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceStaticRouteResponse>;
    /**
     * Update the traffic shaping settings for an MX network
     *
     * @remarks
     * Update the traffic shaping settings for an MX network
     */
    updateNetworkApplianceTrafficShaping(req: operations.UpdateNetworkApplianceTrafficShapingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingResponse>;
    /**
     * Update a custom performance class for an MX network
     *
     * @remarks
     * Update a custom performance class for an MX network
     */
    updateNetworkApplianceTrafficShapingCustomPerformanceClass(req: operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse>;
    /**
     * Update the traffic shaping settings rules for an MX network
     *
     * @remarks
     * Update the traffic shaping settings rules for an MX network
     */
    updateNetworkApplianceTrafficShapingRules(req: operations.UpdateNetworkApplianceTrafficShapingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingRulesResponse>;
    /**
     * Updates the uplink bandwidth settings for your MX network.
     *
     * @remarks
     * Updates the uplink bandwidth settings for your MX network.
     */
    updateNetworkApplianceTrafficShapingUplinkBandwidth(req: operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse>;
    /**
     * Update uplink selection settings for an MX network
     *
     * @remarks
     * Update uplink selection settings for an MX network
     */
    updateNetworkApplianceTrafficShapingUplinkSelection(req: operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceTrafficShapingUplinkSelectionResponse>;
    /**
     * Update a VLAN
     *
     * @remarks
     * Update a VLAN
     */
    updateNetworkApplianceVlan(req: operations.UpdateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlanResponse>;
    /**
     * Enable/Disable VLANs for the given network
     *
     * @remarks
     * Enable/Disable VLANs for the given network
     */
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
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
     * Update MX warm spare settings
     *
     * @remarks
     * Update MX warm spare settings
     */
    updateNetworkApplianceWarmSpare(req: operations.UpdateNetworkApplianceWarmSpareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceWarmSpareResponse>;
    /**
     * Sets supported intrusion settings for an organization
     *
     * @remarks
     * Sets supported intrusion settings for an organization
     */
    updateOrganizationApplianceSecurityIntrusion(req: operations.UpdateOrganizationApplianceSecurityIntrusionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceSecurityIntrusionResponse>;
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
