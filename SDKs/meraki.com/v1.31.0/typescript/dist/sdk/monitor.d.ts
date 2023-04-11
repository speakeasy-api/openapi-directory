import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Monitor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     *
     * @remarks
     * Generate a snapshot of what the camera sees at the specified time and return a link to that image.
     */
    generateDeviceCameraSnapshot(req: operations.GenerateDeviceCameraSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GenerateDeviceCameraSnapshotResponse>;
    /**
     * Returns the identity of the current user.
     *
     * @remarks
     * Returns the identity of the current user.
     */
    getAdministeredIdentitiesMe(config?: AxiosRequestConfig): Promise<operations.GetAdministeredIdentitiesMeResponse>;
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
     * Returns live state from camera of analytics zones
     *
     * @remarks
     * Returns live state from camera of analytics zones
     */
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * Returns an overview of aggregate analytics data for a timespan
     *
     * @remarks
     * Returns an overview of aggregate analytics data for a timespan
     */
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * Returns most recent record for analytics zones
     *
     * @remarks
     * Returns most recent record for analytics zones
     */
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
    /**
     * Return historical records for analytic zones
     *
     * @remarks
     * Return historical records for analytic zones
     */
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * Returns all configured analytic zones for this camera
     *
     * @remarks
     * Returns all configured analytic zones for this camera
     */
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
    /**
     * List the clients of a device, up to a maximum of a month ago
     *
     * @remarks
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
     */
    getDeviceClients(req: operations.GetDeviceClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceClientsResponse>;
    /**
     * List LLDP and CDP information for a device
     *
     * @remarks
     * List LLDP and CDP information for a device
     */
    getDeviceLldpCdp(req: operations.GetDeviceLldpCdpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLldpCdpResponse>;
    /**
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     *
     * @remarks
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     */
    getDeviceLossAndLatencyHistory(req: operations.GetDeviceLossAndLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLossAndLatencyHistoryResponse>;
    /**
     * Return the status for all the ports of a switch
     *
     * @remarks
     * Return the status for all the ports of a switch
     */
    getDeviceSwitchPortsStatuses(req: operations.GetDeviceSwitchPortsStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesResponse>;
    /**
     * Return the packet counters for all the ports of a switch
     *
     * @remarks
     * Return the packet counters for all the ports of a switch
     */
    getDeviceSwitchPortsStatusesPackets(req: operations.GetDeviceSwitchPortsStatusesPacketsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsStatusesPacketsResponse>;
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
     * Return the SSID statuses of an access point
     *
     * @remarks
     * Return the SSID statuses of an access point
     */
    getDeviceWirelessStatus(req: operations.GetDeviceWirelessStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessStatusResponse>;
    /**
     * Return the alert history for this network
     *
     * @remarks
     * Return the alert history for this network
     */
    getNetworkAlertsHistory(req: operations.GetNetworkAlertsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsHistoryResponse>;
    /**
     * List the security events for a client
     *
     * @remarks
     * List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkApplianceClientSecurityEvents(req: operations.GetNetworkApplianceClientSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceClientSecurityEventsResponse>;
    /**
     * List the security events for a network
     *
     * @remarks
     * List the security events for a network
     */
    getNetworkApplianceSecurityEvents(req: operations.GetNetworkApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSecurityEventsResponse>;
    /**
     * Get the sent and received bytes for each uplink of a network.
     *
     * @remarks
     * Get the sent and received bytes for each uplink of a network.
     */
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * Return a Bluetooth client
     *
     * @remarks
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
     */
    getNetworkBluetoothClient(req: operations.GetNetworkBluetoothClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientResponse>;
    /**
     * List the Bluetooth clients seen by APs in this network
     *
     * @remarks
     * List the Bluetooth clients seen by APs in this network
     */
    getNetworkBluetoothClients(req: operations.GetNetworkBluetoothClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientsResponse>;
    /**
     * Return the client associated with the given identifier
     *
     * @remarks
     * Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClient(req: operations.GetNetworkClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientResponse>;
    /**
     * Return the client's network traffic data over time
     *
     * @remarks
     * Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientTrafficHistory(req: operations.GetNetworkClientTrafficHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientTrafficHistoryResponse>;
    /**
     * Return the client's daily usage history
     *
     * @remarks
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     */
    getNetworkClientUsageHistory(req: operations.GetNetworkClientUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientUsageHistoryResponse>;
    /**
     * List the clients that have used this network in the timespan
     *
     * @remarks
     * List the clients that have used this network in the timespan
     */
    getNetworkClients(req: operations.GetNetworkClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsResponse>;
    /**
     * Return the application usage data for clients
     *
     * @remarks
     * Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsApplicationUsage(req: operations.GetNetworkClientsApplicationUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsApplicationUsageResponse>;
    /**
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     *
     * @remarks
     * Returns a timeseries of total traffic consumption rates for all clients on a network within a given timespan, in megabits per second.
     */
    getNetworkClientsBandwidthUsageHistory(req: operations.GetNetworkClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsBandwidthUsageHistoryResponse>;
    /**
     * Return overview statistics for network clients
     *
     * @remarks
     * Return overview statistics for network clients
     */
    getNetworkClientsOverview(req: operations.GetNetworkClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsOverviewResponse>;
    /**
     * Return the usage histories for clients
     *
     * @remarks
     * Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.
     */
    getNetworkClientsUsageHistories(req: operations.GetNetworkClientsUsageHistoriesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientsUsageHistoriesResponse>;
    /**
     * List the events for the network
     *
     * @remarks
     * List the events for the network
     */
    getNetworkEvents(req: operations.GetNetworkEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsResponse>;
    /**
     * List the event type to human-readable description
     *
     * @remarks
     * List the event type to human-readable description
     */
    getNetworkEventsEventTypes(req: operations.GetNetworkEventsEventTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkEventsEventTypesResponse>;
    /**
     * Get application health by time
     *
     * @remarks
     * Get application health by time
     */
    getNetworkInsightApplicationHealthByTime(req: operations.GetNetworkInsightApplicationHealthByTimeRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkInsightApplicationHealthByTimeResponse>;
    /**
     * Get the channel utilization over each radio for all APs in a network.
     *
     * @remarks
     * Get the channel utilization over each radio for all APs in a network.
     */
    getNetworkNetworkHealthChannelUtilization(req: operations.GetNetworkNetworkHealthChannelUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkNetworkHealthChannelUtilizationResponse>;
    /**
     * Return an overview of currently alerting sensors by metric
     *
     * @remarks
     * Return an overview of currently alerting sensors by metric
     */
    getNetworkSensorAlertsCurrentOverviewByMetric(req: operations.GetNetworkSensorAlertsCurrentOverviewByMetricRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsCurrentOverviewByMetricResponse>;
    /**
     * Return an overview of alert occurrences over a timespan, by metric
     *
     * @remarks
     * Return an overview of alert occurrences over a timespan, by metric
     */
    getNetworkSensorAlertsOverviewByMetric(req: operations.GetNetworkSensorAlertsOverviewByMetricRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSensorAlertsOverviewByMetricResponse>;
    /**
     * Return the client's daily cellular data usage history
     *
     * @remarks
     * Return the client's daily cellular data usage history. Usage data is in kilobytes.
     */
    getNetworkSmDeviceCellularUsageHistory(req: operations.GetNetworkSmDeviceCellularUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCellularUsageHistoryResponse>;
    /**
     * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
     *
     * @remarks
     * Returns historical connectivity data (whether a device is regularly checking in to Dashboard).
     */
    getNetworkSmDeviceConnectivity(req: operations.GetNetworkSmDeviceConnectivityRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceConnectivityResponse>;
    /**
     * Return historical records of various Systems Manager network connection details for desktop devices.
     *
     * @remarks
     * Return historical records of various Systems Manager network connection details for desktop devices.
     */
    getNetworkSmDeviceDesktopLogs(req: operations.GetNetworkSmDeviceDesktopLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDesktopLogsResponse>;
    /**
     * Return historical records of commands sent to Systems Manager devices
     *
     * @remarks
     * Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.
     */
    getNetworkSmDeviceDeviceCommandLogs(req: operations.GetNetworkSmDeviceDeviceCommandLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceCommandLogsResponse>;
    /**
     * Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * @remarks
     * Return historical records of various Systems Manager client metrics for desktop devices.
     */
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
    /**
     * List the splash login attempts for a network
     *
     * @remarks
     * List the splash login attempts for a network
     */
    getNetworkSplashLoginAttempts(req: operations.GetNetworkSplashLoginAttemptsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSplashLoginAttemptsResponse>;
    /**
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     *
     * @remarks
     * List the LLDP and CDP information for all discovered devices and connections in a network.
     */
    getNetworkTopologyLinkLayer(req: operations.GetNetworkTopologyLinkLayerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTopologyLinkLayerResponse>;
    /**
     * Return the traffic analysis data for this network
     *
     * @remarks
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
     */
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
    /**
     * List Air Marshal scan results from a network
     *
     * @remarks
     * List Air Marshal scan results from a network
     */
    getNetworkWirelessAirMarshal(req: operations.GetNetworkWirelessAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAirMarshalResponse>;
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
     * Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * @remarks
     * Return signal quality (SNR/RSSI) over time for a device or network client
     */
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
    /**
     * Return AP usage over time for a device or network client
     *
     * @remarks
     * Return AP usage over time for a device or network client
     */
    getNetworkWirelessUsageHistory(req: operations.GetNetworkWirelessUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessUsageHistoryResponse>;
    /**
     * Returns adaptive policy aggregate statistics for an organization
     *
     * @remarks
     * Returns adaptive policy aggregate statistics for an organization
     */
    getOrganizationAdaptivePolicyOverview(req: operations.GetOrganizationAdaptivePolicyOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicyOverviewResponse>;
    /**
     * List the API requests made by an organization
     *
     * @remarks
     * List the API requests made by an organization
     */
    getOrganizationApiRequests(req: operations.GetOrganizationApiRequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsResponse>;
    /**
     * Return an aggregated overview of API requests data
     *
     * @remarks
     * Return an aggregated overview of API requests data
     */
    getOrganizationApiRequestsOverview(req: operations.GetOrganizationApiRequestsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponse>;
    /**
     * Tracks organizations' API requests by response code across a given time period
     *
     * @remarks
     * Tracks organizations' API requests by response code across a given time period
     */
    getOrganizationApiRequestsOverviewResponseCodesByInterval(req: operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApiRequestsOverviewResponseCodesByIntervalResponse>;
    /**
     * List the security events for an organization
     *
     * @remarks
     * List the security events for an organization
     */
    getOrganizationApplianceSecurityEvents(req: operations.GetOrganizationApplianceSecurityEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceSecurityEventsResponse>;
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
     * List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MG cellular gateway in the organization
     */
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     *
     * @remarks
     * Return data usage (in megabits per second) over time for all clients in the given organization within a given time range.
     */
    getOrganizationClientsBandwidthUsageHistory(req: operations.GetOrganizationClientsBandwidthUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsBandwidthUsageHistoryResponse>;
    /**
     * Return summary information around client data usage (in mb) across the given organization.
     *
     * @remarks
     * Return summary information around client data usage (in mb) across the given organization.
     */
    getOrganizationClientsOverview(req: operations.GetOrganizationClientsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationClientsOverviewResponse>;
    /**
     * View the Change Log for your organization
     *
     * @remarks
     * View the Change Log for your organization
     */
    getOrganizationConfigurationChanges(req: operations.GetOrganizationConfigurationChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigurationChangesResponse>;
    /**
     * List the availability information for devices in an organization
     *
     * @remarks
     * List the availability information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesAvailabilities(req: operations.GetOrganizationDevicesAvailabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesAvailabilitiesResponse>;
    /**
     * List the power status information for devices in an organization
     *
     * @remarks
     * List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesPowerModulesStatusesByDevice(req: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse>;
    /**
     * List the status of every Meraki device in the organization
     *
     * @remarks
     * List the status of every Meraki device in the organization
     */
    getOrganizationDevicesStatuses(req: operations.GetOrganizationDevicesStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesResponse>;
    /**
     * Return an overview of current device statuses
     *
     * @remarks
     * Return an overview of current device statuses
     */
    getOrganizationDevicesStatusesOverview(req: operations.GetOrganizationDevicesStatusesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesStatusesOverviewResponse>;
    /**
     * List the current uplink addresses for devices in an organization.
     *
     * @remarks
     * List the current uplink addresses for devices in an organization.
     */
    getOrganizationDevicesUplinksAddressesByDevice(req: operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse>;
    /**
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     *
     * @remarks
     * Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago
     */
    getOrganizationDevicesUplinksLossAndLatency(req: operations.GetOrganizationDevicesUplinksLossAndLatencyRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksLossAndLatencyResponse>;
    /**
     * Return an overview of the license state for an organization
     *
     * @remarks
     * Return an overview of the license state for an organization
     */
    getOrganizationLicensesOverview(req: operations.GetOrganizationLicensesOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationLicensesOverviewResponse>;
    /**
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     *
     * @remarks
     * Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON
     */
    getOrganizationOpenapiSpec(req: operations.GetOrganizationOpenapiSpecRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationOpenapiSpecResponse>;
    /**
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     *
     * @remarks
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     */
    getOrganizationSensorReadingsHistory(req: operations.GetOrganizationSensorReadingsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsHistoryResponse>;
    /**
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     *
     * @remarks
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     */
    getOrganizationSensorReadingsLatest(req: operations.GetOrganizationSensorReadingsLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsLatestResponse>;
    /**
     * Return the top 10 appliances sorted by utilization over given time range.
     *
     * @remarks
     * Return the top 10 appliances sorted by utilization over given time range.
     */
    getOrganizationSummaryTopAppliancesByUtilization(req: operations.GetOrganizationSummaryTopAppliancesByUtilizationRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopAppliancesByUtilizationResponse>;
    /**
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     *
     * @remarks
     * Return metrics for organization's top 10 clients by data usage (in mb) over given time range.
     */
    getOrganizationSummaryTopClientsByUsage(req: operations.GetOrganizationSummaryTopClientsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsByUsageResponse>;
    /**
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     *
     * @remarks
     * Return metrics for organization's top clients by data usage (in mb) over given time range, grouped by manufacturer.
     */
    getOrganizationSummaryTopClientsManufacturersByUsage(req: operations.GetOrganizationSummaryTopClientsManufacturersByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopClientsManufacturersByUsageResponse>;
    /**
     * Return metrics for organization's top 10 devices sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 devices sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesByUsage(req: operations.GetOrganizationSummaryTopDevicesByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesByUsageResponse>;
    /**
     * Return metrics for organization's top 10 device models sorted by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 device models sorted by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopDevicesModelsByUsage(req: operations.GetOrganizationSummaryTopDevicesModelsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopDevicesModelsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 ssids by data usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 ssids by data usage over given time range. Default unit is megabytes.
     */
    getOrganizationSummaryTopSsidsByUsage(req: operations.GetOrganizationSummaryTopSsidsByUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSsidsByUsageResponse>;
    /**
     * Return metrics for organization's top 10 switches by energy usage over given time range
     *
     * @remarks
     * Return metrics for organization's top 10 switches by energy usage over given time range. Default unit is joules.
     */
    getOrganizationSummaryTopSwitchesByEnergyUsage(req: operations.GetOrganizationSummaryTopSwitchesByEnergyUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSummaryTopSwitchesByEnergyUsageResponse>;
    /**
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     */
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * Return a list of alert types to be used with managing webhook alerts
     *
     * @remarks
     * Return a list of alert types to be used with managing webhook alerts
     */
    getOrganizationWebhooksAlertTypes(req: operations.GetOrganizationWebhooksAlertTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksAlertTypesResponse>;
    /**
     * Return the log of webhook POSTs sent
     *
     * @remarks
     * Return the log of webhook POSTs sent
     */
    getOrganizationWebhooksLogs(req: operations.GetOrganizationWebhooksLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWebhooksLogsResponse>;
}
