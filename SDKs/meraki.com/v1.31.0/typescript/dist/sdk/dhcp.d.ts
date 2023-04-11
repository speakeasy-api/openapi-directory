import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Dhcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the DHCP subnet information for an appliance
     *
     * @remarks
     * Return the DHCP subnet information for an appliance
     */
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch
     */
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * List common DHCP settings of MGs
     *
     * @remarks
     * List common DHCP settings of MGs
     */
    getNetworkCellularGatewayDhcp(req: operations.GetNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayDhcpResponse>;
    /**
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     *
     * @remarks
     * Return the network's DHCPv4 servers seen within the selected timeframe (default 1 day)
     */
    getNetworkSwitchDhcpV4ServersSeen(req: operations.GetNetworkSwitchDhcpV4ServersSeenRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchDhcpV4ServersSeenResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch
     */
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * Update common DHCP settings of MGs
     *
     * @remarks
     * Update common DHCP settings of MGs
     */
    updateNetworkCellularGatewayDhcp(req: operations.UpdateNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch stack
     */
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
}
