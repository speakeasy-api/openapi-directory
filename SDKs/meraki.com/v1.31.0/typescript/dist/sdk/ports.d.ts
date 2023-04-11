import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cycle a set of switch ports
     *
     * @remarks
     * Cycle a set of switch ports
     */
    cycleDeviceSwitchPorts(req: operations.CycleDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.CycleDeviceSwitchPortsResponse>;
    /**
     * Return a switch port
     *
     * @remarks
     * Return a switch port
     */
    getDeviceSwitchPort(req: operations.GetDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortResponse>;
    /**
     * List the switch ports for a switch
     *
     * @remarks
     * List the switch ports for a switch
     */
    getDeviceSwitchPorts(req: operations.GetDeviceSwitchPortsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchPortsResponse>;
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
     * Return a switch profile port
     *
     * @remarks
     * Return a switch profile port
     */
    getOrganizationConfigTemplateSwitchProfilePort(req: operations.GetOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortResponse>;
    /**
     * Return all the ports of a switch profile
     *
     * @remarks
     * Return all the ports of a switch profile
     */
    getOrganizationConfigTemplateSwitchProfilePorts(req: operations.GetOrganizationConfigTemplateSwitchProfilePortsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationConfigTemplateSwitchProfilePortsResponse>;
    /**
     * List the switchports in an organization by switch
     *
     * @remarks
     * List the switchports in an organization by switch
     */
    getOrganizationSwitchPortsBySwitch(req: operations.GetOrganizationSwitchPortsBySwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSwitchPortsBySwitchResponse>;
    /**
     * Update a switch port
     *
     * @remarks
     * Update a switch port
     */
    updateDeviceSwitchPort(req: operations.UpdateDeviceSwitchPortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchPortResponse>;
    /**
     * Update the per-port VLAN settings for a single MX port.
     *
     * @remarks
     * Update the per-port VLAN settings for a single MX port.
     */
    updateNetworkAppliancePort(req: operations.UpdateNetworkAppliancePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAppliancePortResponse>;
    /**
     * Update a switch profile port
     *
     * @remarks
     * Update a switch profile port
     */
    updateOrganizationConfigTemplateSwitchProfilePort(req: operations.UpdateOrganizationConfigTemplateSwitchProfilePortRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationConfigTemplateSwitchProfilePortResponse>;
}
