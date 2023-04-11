import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Uplinks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the uplink settings for an MX appliance
     *
     * @remarks
     * Return the uplink settings for an MX appliance
     */
    getDeviceApplianceUplinksSettings(req: operations.GetDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceUplinksSettingsResponse>;
    /**
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     *
     * @remarks
     * Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.
     */
    getDeviceLossAndLatencyHistory(req: operations.GetDeviceLossAndLatencyHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLossAndLatencyHistoryResponse>;
    /**
     * Get the sent and received bytes for each uplink of a network.
     *
     * @remarks
     * Get the sent and received bytes for each uplink of a network.
     */
    getNetworkApplianceUplinksUsageHistory(req: operations.GetNetworkApplianceUplinksUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceUplinksUsageHistoryResponse>;
    /**
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     */
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
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
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     */
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * Update the uplink settings for an MX appliance
     *
     * @remarks
     * Update the uplink settings for an MX appliance
     */
    updateDeviceApplianceUplinksSettings(req: operations.UpdateDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceApplianceUplinksSettingsResponse>;
}
