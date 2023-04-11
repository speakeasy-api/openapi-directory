import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Statuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
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
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX and Z series appliances in the organization
     */
    getOrganizationApplianceUplinkStatuses(req: operations.GetOrganizationApplianceUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceUplinkStatusesResponse>;
    /**
     * Show VPN status for networks in an organization
     *
     * @remarks
     * Show VPN status for networks in an organization
     */
    getOrganizationApplianceVpnStatuses(req: operations.GetOrganizationApplianceVpnStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnStatusesResponse>;
    /**
     * Fetch onboarding status of cameras
     *
     * @remarks
     * Fetch onboarding status of cameras
     */
    getOrganizationCameraOnboardingStatuses(req: operations.GetOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCameraOnboardingStatusesResponse>;
    /**
     * List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MG cellular gateway in the organization
     */
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
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
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MX, MG and Z series devices in the organization
     */
    getOrganizationUplinksStatuses(req: operations.GetOrganizationUplinksStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationUplinksStatusesResponse>;
    /**
     * Endpoint to see power status for wireless devices
     *
     * @remarks
     * Endpoint to see power status for wireless devices
     */
    getOrganizationWirelessDevicesEthernetStatuses(req: operations.GetOrganizationWirelessDevicesEthernetStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationWirelessDevicesEthernetStatusesResponse>;
    /**
     * Notify that credential handoff to camera has completed
     *
     * @remarks
     * Notify that credential handoff to camera has completed
     */
    updateOrganizationCameraOnboardingStatuses(req: operations.UpdateOrganizationCameraOnboardingStatusesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationCameraOnboardingStatusesResponse>;
}
