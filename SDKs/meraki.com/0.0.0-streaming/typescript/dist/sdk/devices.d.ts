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
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
     *
     * @remarks
     * Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requests against that device to succeed)
     */
    claimNetworkDevices(req: operations.ClaimNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ClaimNetworkDevicesResponse>;
    /**
     * Cycle a set of switch ports
     *
     * @remarks
     * Cycle a set of switch ports
     */
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * Return a single device
     *
     * @remarks
     * Return a single device
     */
    getNetworkDevice(req: operations.GetNetworkDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceResponse>;
    /**
     * Get the uplink loss percentage and latency in milliseconds for a wired network device.
     *
     * @remarks
     * Get the uplink loss percentage and latency in milliseconds for a wired network device.
     */
    getNetworkDeviceLossAndLatencyHistory(req: operations.GetNetworkDeviceLossAndLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceLossAndLatencyHistoryResponse>;
    /**
     * Return the performance score for a single MX
     *
     * @remarks
     * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
     */
    getNetworkDevicePerformance(req: operations.GetNetworkDevicePerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicePerformanceResponse>;
    /**
     * Return the uplink information for a device.
     *
     * @remarks
     * Return the uplink information for a device.
     */
    getNetworkDeviceUplink(req: operations.GetNetworkDeviceUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDeviceUplinkResponse>;
    /**
     * List the devices in a network
     *
     * @remarks
     * List the devices in a network
     */
    getNetworkDevices(req: operations.GetNetworkDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkDevicesResponse>;
    /**
     * List the devices in an organization
     *
     * @remarks
     * List the devices in an organization
     */
    getOrganizationDevices(req: operations.GetOrganizationDevicesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesResponse>;
    /**
     * Reboot a device
     *
     * @remarks
     * Reboot a device
     */
    rebootNetworkDevice(req: operations.RebootNetworkDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RebootNetworkDeviceResponse>;
    /**
     * Remove a single device
     *
     * @remarks
     * Remove a single device
     */
    removeNetworkDevice(req: operations.RemoveNetworkDeviceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkDeviceResponse>;
    /**
     * Update the attributes of a device
     *
     * @remarks
     * Update the attributes of a device
     */
    updateNetworkDevice(req: operations.UpdateNetworkDeviceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkDeviceResponse>;
}
