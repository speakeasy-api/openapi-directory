import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CellularGateway {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Show the LAN Settings of a MG
     *
     * @remarks
     * Show the LAN Settings of a MG
     */
    getDeviceCellularGatewayLan(req: operations.GetDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayLanResponse>;
    /**
     * Returns the port forwarding rules for a single MG.
     *
     * @remarks
     * Returns the port forwarding rules for a single MG.
     */
    getDeviceCellularGatewayPortForwardingRules(req: operations.GetDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Return the connectivity testing destinations for an MG network
     *
     * @remarks
     * Return the connectivity testing destinations for an MG network
     */
    getNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * List common DHCP settings of MGs
     *
     * @remarks
     * List common DHCP settings of MGs
     */
    getNetworkCellularGatewayDhcp(req: operations.GetNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayDhcpResponse>;
    /**
     * Return the subnet pool and mask configured for MGs in the network.
     *
     * @remarks
     * Return the subnet pool and mask configured for MGs in the network.
     */
    getNetworkCellularGatewaySubnetPool(req: operations.GetNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * Returns the uplink settings for your MG network.
     *
     * @remarks
     * Returns the uplink settings for your MG network.
     */
    getNetworkCellularGatewayUplink(req: operations.GetNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayUplinkResponse>;
    /**
     * List the uplink status of every Meraki MG cellular gateway in the organization
     *
     * @remarks
     * List the uplink status of every Meraki MG cellular gateway in the organization
     */
    getOrganizationCellularGatewayUplinkStatuses(req: operations.GetOrganizationCellularGatewayUplinkStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationCellularGatewayUplinkStatusesResponse>;
    /**
     * Update the LAN Settings for a single MG.
     *
     * @remarks
     * Update the LAN Settings for a single MG.
     */
    updateDeviceCellularGatewayLan(req: operations.UpdateDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayLanResponse>;
    /**
     * Updates the port forwarding rules for a single MG.
     *
     * @remarks
     * Updates the port forwarding rules for a single MG.
     */
    updateDeviceCellularGatewayPortForwardingRules(req: operations.UpdateDeviceCellularGatewayPortForwardingRulesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayPortForwardingRulesResponse>;
    /**
     * Update the connectivity testing destinations for an MG network
     *
     * @remarks
     * Update the connectivity testing destinations for an MG network
     */
    updateNetworkCellularGatewayConnectivityMonitoringDestinations(req: operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse>;
    /**
     * Update common DHCP settings of MGs
     *
     * @remarks
     * Update common DHCP settings of MGs
     */
    updateNetworkCellularGatewayDhcp(req: operations.UpdateNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse>;
    /**
     * Update the subnet pool and mask configuration for MGs in the network.
     *
     * @remarks
     * Update the subnet pool and mask configuration for MGs in the network.
     */
    updateNetworkCellularGatewaySubnetPool(req: operations.UpdateNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * Updates the uplink settings for your MG network.
     *
     * @remarks
     * Updates the uplink settings for your MG network.
     */
    updateNetworkCellularGatewayUplink(req: operations.UpdateNetworkCellularGatewayUplinkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayUplinkResponse>;
}
