import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Wireless {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates new RF profile for this network
     *
     * @remarks
     * Creates new RF profile for this network
     */
    createNetworkWirelessRfProfile(req: operations.CreateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessRfProfileResponse>;
    /**
     * Create an Identity PSK
     *
     * @remarks
     * Create an Identity PSK
     */
    createNetworkWirelessSsidIdentityPsk(req: operations.CreateNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Delete a RF Profile
     *
     * @remarks
     * Delete a RF Profile
     */
    deleteNetworkWirelessRfProfile(req: operations.DeleteNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessRfProfileResponse>;
    /**
     * Delete an Identity PSK
     *
     * @remarks
     * Delete an Identity PSK
     */
    deleteNetworkWirelessSsidIdentityPsk(req: operations.DeleteNetworkWirelessSsidIdentityPskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkWirelessSsidIdentityPskResponse>;
    /**
     * Return the bluetooth settings for a wireless device
     *
     * @remarks
     * Return the bluetooth settings for a wireless device
     */
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Aggregated connectivity info for a given AP on this network
     *
     * @remarks
     * Aggregated connectivity info for a given AP on this network
     */
    getDeviceWirelessConnectionStats(req: operations.GetDeviceWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessConnectionStatsResponse>;
    /**
     * Aggregated latency info for a given AP on this network
     *
     * @remarks
     * Aggregated latency info for a given AP on this network
     */
    getDeviceWirelessLatencyStats(req: operations.GetDeviceWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessLatencyStatsResponse>;
    /**
     * Return the radio settings of a device
     *
     * @remarks
     * Return the radio settings of a device
     */
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * Return the SSID statuses of an access point
     *
     * @remarks
     * Return the SSID statuses of an access point
     */
    getDeviceWirelessStatus(req: operations.GetDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessStatusResponse>;
    /**
     * List Air Marshal scan results from a network
     *
     * @remarks
     * List Air Marshal scan results from a network
     */
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
    /**
     * Return alternate management interface and devices with IP assigned
     *
     * @remarks
     * Return alternate management interface and devices with IP assigned
     */
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * Return the billing settings of this network
     *
     * @remarks
     * Return the billing settings of this network
     */
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * @remarks
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     */
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Return AP channel utilization over time for a device or network client
     *
     * @remarks
     * Return AP channel utilization over time for a device or network client
     */
    getNetworkWirelessChannelUtilizationHistory(req: operations.GetNetworkWirelessChannelUtilizationHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessChannelUtilizationHistoryResponse>;
    /**
     * Aggregated connectivity info for a given client on this network
     *
     * @remarks
     * Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientConnectionStats(req: operations.GetNetworkWirelessClientConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectionStatsResponse>;
    /**
     * List the wireless connectivity events for a client within a network in the timespan.
     *
     * @remarks
     * List the wireless connectivity events for a client within a network in the timespan.
     */
    getNetworkWirelessClientConnectivityEvents(req: operations.GetNetworkWirelessClientConnectivityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientConnectivityEventsResponse>;
    /**
     * Return wireless client counts over time for a network, device, or network client
     *
     * @remarks
     * Return wireless client counts over time for a network, device, or network client
     */
    getNetworkWirelessClientCountHistory(req: operations.GetNetworkWirelessClientCountHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientCountHistoryResponse>;
    /**
     * Return the latency history for a client
     *
     * @remarks
     * Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
     */
    getNetworkWirelessClientLatencyHistory(req: operations.GetNetworkWirelessClientLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyHistoryResponse>;
    /**
     * Aggregated latency info for a given client on this network
     *
     * @remarks
     * Aggregated latency info for a given client on this network. Clients are identified by their MAC.
     */
    getNetworkWirelessClientLatencyStats(req: operations.GetNetworkWirelessClientLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by clients
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by clients
     */
    getNetworkWirelessClientsConnectionStats(req: operations.GetNetworkWirelessClientsConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsConnectionStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by clients
     *
     * @remarks
     * Aggregated latency info for this network, grouped by clients
     */
    getNetworkWirelessClientsLatencyStats(req: operations.GetNetworkWirelessClientsLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessClientsLatencyStatsResponse>;
    /**
     * Aggregated connectivity info for this network
     *
     * @remarks
     * Aggregated connectivity info for this network
     */
    getNetworkWirelessConnectionStats(req: operations.GetNetworkWirelessConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessConnectionStatsResponse>;
    /**
     * Return PHY data rates over time for a network, device, or network client
     *
     * @remarks
     * Return PHY data rates over time for a network, device, or network client
     */
    getNetworkWirelessDataRateHistory(req: operations.GetNetworkWirelessDataRateHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDataRateHistoryResponse>;
    /**
     * Aggregated connectivity info for this network, grouped by node
     *
     * @remarks
     * Aggregated connectivity info for this network, grouped by node
     */
    getNetworkWirelessDevicesConnectionStats(req: operations.GetNetworkWirelessDevicesConnectionStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesConnectionStatsResponse>;
    /**
     * Aggregated latency info for this network, grouped by node
     *
     * @remarks
     * Aggregated latency info for this network, grouped by node
     */
    getNetworkWirelessDevicesLatencyStats(req: operations.GetNetworkWirelessDevicesLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDevicesLatencyStatsResponse>;
    /**
     * List of all failed client connection events on this network in a given time range
     *
     * @remarks
     * List of all failed client connection events on this network in a given time range
     */
    getNetworkWirelessFailedConnections(req: operations.GetNetworkWirelessFailedConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessFailedConnectionsResponse>;
    /**
     * Return average wireless latency over time for a network, device, or network client
     *
     * @remarks
     * Return average wireless latency over time for a network, device, or network client
     */
    getNetworkWirelessLatencyHistory(req: operations.GetNetworkWirelessLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessLatencyHistoryResponse>;
    /**
     * Aggregated latency info for this network
     *
     * @remarks
     * Aggregated latency info for this network
     */
    getNetworkWirelessLatencyStats(req: operations.GetNetworkWirelessLatencyStatsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessLatencyStatsResponse>;
    /**
     * List wireless mesh statuses for repeaters
     *
     * @remarks
     * List wireless mesh statuses for repeaters
     */
    getNetworkWirelessMeshStatuses(req: operations.GetNetworkWirelessMeshStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessMeshStatusesResponse>;
    /**
     * Return a RF profile
     *
     * @remarks
     * Return a RF profile
     */
    getNetworkWirelessRfProfile(req: operations.GetNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfileResponse>;
    /**
     * List the non-basic RF profiles for this network
     *
     * @remarks
     * List the non-basic RF profiles for this network
     */
    getNetworkWirelessRfProfiles(req: operations.GetNetworkWirelessRfProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessRfProfilesResponse>;
    /**
     * Return the wireless settings for a network
     *
     * @remarks
     * Return the wireless settings for a network
     */
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * @remarks
     * Return signal quality (SNR/RSSI) over time for a device or network client
     */
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
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
     * Return AP usage over time for a device or network client
     *
     * @remarks
     * Return AP usage over time for a device or network client
     */
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
    /**
     * Endpoint to see power status for wireless devices
     *
     * @remarks
     * Endpoint to see power status for wireless devices
     */
    getOrganizationWirelessDevicesEthernetStatuses(req: operations.GetOrganizationWirelessDevicesEthernetStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWirelessDevicesEthernetStatusesResponse>;
    /**
     * Update the bluetooth settings for a wireless device
     *
     * @remarks
     * Update the bluetooth settings for a wireless device
     */
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Update the radio settings of a device
     *
     * @remarks
     * Update the radio settings of a device
     */
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * Update alternate management interface and device static IP
     *
     * @remarks
     * Update alternate management interface and device static IP
     */
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * Update the billing settings
     *
     * @remarks
     * Update the billing settings
     */
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
    /**
     * Update the Bluetooth settings for a network
     *
     * @remarks
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
     */
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Updates specified RF profile for this network
     *
     * @remarks
     * Updates specified RF profile for this network
     */
    updateNetworkWirelessRfProfile(req: operations.UpdateNetworkWirelessRfProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessRfProfileResponse>;
    /**
     * Update the wireless settings for a network
     *
     * @remarks
     * Update the wireless settings for a network
     */
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
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
