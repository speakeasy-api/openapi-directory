import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Interfaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a layer 3 interface for a switch
     *
     * @remarks
     * Create a layer 3 interface for a switch
     */
    createDeviceSwitchRoutingInterface(req: operations.CreateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Create a layer 3 interface for a switch stack
     *
     * @remarks
     * Create a layer 3 interface for a switch stack
     */
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 interface from the switch
     *
     * @remarks
     * Delete a layer 3 interface from the switch
     */
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 interface from a switch stack
     *
     * @remarks
     * Delete a layer 3 interface from a switch stack
     */
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface for a switch
     *
     * @remarks
     * Return a layer 3 interface for a switch
     */
    getDeviceSwitchRoutingInterface(req: operations.GetDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch
     */
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch
     *
     * @remarks
     * List layer 3 interfaces for a switch. Those for a stack may be found under switch stack routing.
     */
    getDeviceSwitchRoutingInterfaces(req: operations.GetDeviceSwitchRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse>;
    /**
     * Return a layer 3 interface from a switch stack
     *
     * @remarks
     * Return a layer 3 interface from a switch stack
     */
    getNetworkSwitchStackRoutingInterface(req: operations.GetNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Return a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Return a layer 3 interface DHCP configuration for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * List layer 3 interfaces for a switch stack
     *
     * @remarks
     * List layer 3 interfaces for a switch stack
     */
    getNetworkSwitchStackRoutingInterfaces(req: operations.GetNetworkSwitchStackRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse>;
    /**
     * Update a layer 3 interface for a switch
     *
     * @remarks
     * Update a layer 3 interface for a switch
     */
    updateDeviceSwitchRoutingInterface(req: operations.UpdateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch
     */
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * Update a layer 3 interface for a switch stack
     *
     * @remarks
     * Update a layer 3 interface for a switch stack
     */
    updateNetworkSwitchStackRoutingInterface(req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Update a layer 3 interface DHCP configuration for a switch stack
     *
     * @remarks
     * Update a layer 3 interface DHCP configuration for a switch stack
     */
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
}
