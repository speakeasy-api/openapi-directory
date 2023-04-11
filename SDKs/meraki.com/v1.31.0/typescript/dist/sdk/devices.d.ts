import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Devices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Blink the LEDs on a device
     *
     * @remarks
     * Blink the LEDs on a device
     */
    blinkDeviceLeds(req: operations.BlinkDeviceLedsRequest, config?: AxiosRequestConfig): Promise<operations.BlinkDeviceLedsResponse>;
    /**
     * Force check-in a set of devices
     *
     * @remarks
     * Force check-in a set of devices
     */
    checkinNetworkSmDevices(req: operations.CheckinNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CheckinNetworkSmDevicesResponse>;
    /**
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     *
     * @remarks
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)
     */
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches
     *
     * @remarks
     * Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring
     */
    cloneOrganizationSwitchDevices(req: operations.CloneOrganizationSwitchDevicesRequest, config?: AxiosRequestConfig): Promise<operations.CloneOrganizationSwitchDevicesResponse>;
    /**
     * Enqueue a job to ping a target host from the device
     *
     * @remarks
     * Enqueue a job to ping a target host from the device
     */
    createDeviceLiveToolsPing(req: operations.CreateDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingResponse>;
    /**
     * Enqueue a job to check connectivity status to the device
     *
     * @remarks
     * Enqueue a job to check connectivity status to the device
     */
    createDeviceLiveToolsPingDevice(req: operations.CreateDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceLiveToolsPingDeviceResponse>;
    /**
     * Return a single device
     *
     * @remarks
     * Return a single device
     */
    getDevice(req: operations.GetDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceResponse>;
    /**
     * Return the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Return the SIM and APN configurations for a cellular device.
     */
    getDeviceCellularSims(req: operations.GetDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularSimsResponse>;
    /**
     * List the clients of a device, up to a maximum of a month ago
     *
     * @remarks
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
     */
    getDeviceClients(req: operations.GetDeviceClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceClientsResponse>;
    /**
     * Return a ping job
     *
     * @remarks
     * Return a ping job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPing(req: operations.GetDeviceLiveToolsPingRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingResponse>;
    /**
     * Return a ping device job
     *
     * @remarks
     * Return a ping device job. Latency unit in response is in milliseconds. Size is in bytes.
     */
    getDeviceLiveToolsPingDevice(req: operations.GetDeviceLiveToolsPingDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLiveToolsPingDeviceResponse>;
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
     * Return the management interface settings for a device
     *
     * @remarks
     * Return the management interface settings for a device
     */
    getDeviceManagementInterface(req: operations.GetDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceManagementInterfaceResponse>;
    /**
     * List the devices in a network
     *
     * @remarks
     * List the devices in a network
     */
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * Return the client's daily cellular data usage history
     *
     * @remarks
     * Return the client's daily cellular data usage history. Usage data is in kilobytes.
     */
    getNetworkSmDeviceCellularUsageHistory(req: operations.GetNetworkSmDeviceCellularUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCellularUsageHistoryResponse>;
    /**
     * List the certs on a device
     *
     * @remarks
     * List the certs on a device
     */
    getNetworkSmDeviceCerts(req: operations.GetNetworkSmDeviceCertsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCertsResponse>;
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
     * Get the installed profiles associated with a device
     *
     * @remarks
     * Get the installed profiles associated with a device
     */
    getNetworkSmDeviceDeviceProfiles(req: operations.GetNetworkSmDeviceDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceDeviceProfilesResponse>;
    /**
     * List the network adapters of a device
     *
     * @remarks
     * List the network adapters of a device
     */
    getNetworkSmDeviceNetworkAdapters(req: operations.GetNetworkSmDeviceNetworkAdaptersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceNetworkAdaptersResponse>;
    /**
     * Return historical records of various Systems Manager client metrics for desktop devices.
     *
     * @remarks
     * Return historical records of various Systems Manager client metrics for desktop devices.
     */
    getNetworkSmDevicePerformanceHistory(req: operations.GetNetworkSmDevicePerformanceHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicePerformanceHistoryResponse>;
    /**
     * List the restrictions on a device
     *
     * @remarks
     * List the restrictions on a device
     */
    getNetworkSmDeviceRestrictions(req: operations.GetNetworkSmDeviceRestrictionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceRestrictionsResponse>;
    /**
     * List the security centers on a device
     *
     * @remarks
     * List the security centers on a device
     */
    getNetworkSmDeviceSecurityCenters(req: operations.GetNetworkSmDeviceSecurityCentersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse>;
    /**
     * Get a list of softwares associated with a device
     *
     * @remarks
     * Get a list of softwares associated with a device
     */
    getNetworkSmDeviceSoftwares(req: operations.GetNetworkSmDeviceSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSoftwaresResponse>;
    /**
     * List the saved SSID names on a device
     *
     * @remarks
     * List the saved SSID names on a device
     */
    getNetworkSmDeviceWlanLists(req: operations.GetNetworkSmDeviceWlanListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceWlanListsResponse>;
    /**
     * List the devices enrolled in an SM network with various specified fields and filters
     *
     * @remarks
     * List the devices enrolled in an SM network with various specified fields and filters
     */
    getNetworkSmDevices(req: operations.GetNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDevicesResponse>;
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
     * List the devices in an organization
     *
     * @remarks
     * List the devices in an organization
     */
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
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
     * Return a single device from the inventory of an organization
     *
     * @remarks
     * Return a single device from the inventory of an organization
     */
    getOrganizationInventoryDevice(req: operations.GetOrganizationInventoryDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDeviceResponse>;
    /**
     * Return the device inventory for an organization
     *
     * @remarks
     * Return the device inventory for an organization
     */
    getOrganizationInventoryDevices(req: operations.GetOrganizationInventoryDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationInventoryDevicesResponse>;
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
     * Endpoint to see power status for wireless devices
     *
     * @remarks
     * Endpoint to see power status for wireless devices
     */
    getOrganizationWirelessDevicesEthernetStatuses(req: operations.GetOrganizationWirelessDevicesEthernetStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWirelessDevicesEthernetStatusesResponse>;
    /**
     * Lock a set of devices
     *
     * @remarks
     * Lock a set of devices
     */
    lockNetworkSmDevices(req: operations.LockNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.LockNetworkSmDevicesResponse>;
    /**
     * Add, delete, or update the tags of a set of devices
     *
     * @remarks
     * Add, delete, or update the tags of a set of devices
     */
    modifyNetworkSmDevicesTags(req: operations.ModifyNetworkSmDevicesTagsRequest, config?: AxiosRequestConfig): Promise<operations.ModifyNetworkSmDevicesTagsResponse>;
    /**
     * Move a set of devices to a new network
     *
     * @remarks
     * Move a set of devices to a new network
     */
    moveNetworkSmDevices(req: operations.MoveNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.MoveNetworkSmDevicesResponse>;
    /**
     * Reboot a device
     *
     * @remarks
     * Reboot a device
     */
    rebootDevice(req: operations.RebootDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RebootDeviceResponse>;
    /**
     * Refresh the details of a device
     *
     * @remarks
     * Refresh the details of a device
     */
    refreshNetworkSmDeviceDetails(req: operations.RefreshNetworkSmDeviceDetailsRequest, config?: AxiosRequestConfig): Promise<operations.RefreshNetworkSmDeviceDetailsResponse>;
    /**
     * Remove a single device
     *
     * @remarks
     * Remove a single device
     */
    removeNetworkDevices(req: operations.RemoveNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDevicesResponse>;
    /**
     * Unenroll a device
     *
     * @remarks
     * Unenroll a device
     */
    unenrollNetworkSmDevice(req: operations.UnenrollNetworkSmDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UnenrollNetworkSmDeviceResponse>;
    /**
     * Update the attributes of a device
     *
     * @remarks
     * Update the attributes of a device
     */
    updateDevice(req: operations.UpdateDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceResponse>;
    /**
     * Updates the SIM and APN configurations for a cellular device.
     *
     * @remarks
     * Updates the SIM and APN configurations for a cellular device.
     */
    updateDeviceCellularSims(req: operations.UpdateDeviceCellularSimsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularSimsResponse>;
    /**
     * Update the management interface settings for a device
     *
     * @remarks
     * Update the management interface settings for a device
     */
    updateDeviceManagementInterface(req: operations.UpdateDeviceManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceManagementInterfaceResponse>;
    /**
     * Modify the fields of a device
     *
     * @remarks
     * Modify the fields of a device
     */
    updateNetworkSmDevicesFields(req: operations.UpdateNetworkSmDevicesFieldsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSmDevicesFieldsResponse>;
    /**
     * Claim a vMX into a network
     *
     * @remarks
     * Claim a vMX into a network
     */
    vmxNetworkDevicesClaim(req: operations.VmxNetworkDevicesClaimRequest, config?: AxiosRequestConfig): Promise<operations.VmxNetworkDevicesClaimResponse>;
    /**
     * Wipe a device
     *
     * @remarks
     * Wipe a device
     */
    wipeNetworkSmDevices(req: operations.WipeNetworkSmDevicesRequest, config?: AxiosRequestConfig): Promise<operations.WipeNetworkSmDevicesResponse>;
}
