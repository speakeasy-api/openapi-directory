import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ByDevice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     *
     * @remarks
     * Return the devices that have a Dynamic ARP Inspection warning and their warnings
     */
    getNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDevice(req: operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpServerPolicyArpInspectionWarningsByDeviceResponse>;
    /**
     * List the power status information for devices in an organization
     *
     * @remarks
     * List the power status information for devices in an organization. The data returned by this endpoint is updated every 5 minutes.
     */
    getOrganizationDevicesPowerModulesStatusesByDevice(req: operations.GetOrganizationDevicesPowerModulesStatusesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesPowerModulesStatusesByDeviceResponse>;
    /**
     * List the current uplink addresses for devices in an organization.
     *
     * @remarks
     * List the current uplink addresses for devices in an organization.
     */
    getOrganizationDevicesUplinksAddressesByDevice(req: operations.GetOrganizationDevicesUplinksAddressesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationDevicesUplinksAddressesByDeviceResponse>;
    /**
     * Get firmware upgrade status for the filtered devices
     *
     * @remarks
     * Get firmware upgrade status for the filtered devices
     */
    getOrganizationFirmwareUpgradesByDevice(req: operations.GetOrganizationFirmwareUpgradesByDeviceRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationFirmwareUpgradesByDeviceResponse>;
}
