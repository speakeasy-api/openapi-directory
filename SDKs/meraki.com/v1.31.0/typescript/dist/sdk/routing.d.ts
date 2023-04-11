import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routing {
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
     * Create a layer 3 static route for a switch
     *
     * @remarks
     * Create a layer 3 static route for a switch
     */
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Create a multicast rendezvous point
     *
     * @remarks
     * Create a multicast rendezvous point
     */
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Create a layer 3 interface for a switch stack
     *
     * @remarks
     * Create a layer 3 interface for a switch stack
     */
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Create a layer 3 static route for a switch stack
     *
     * @remarks
     * Create a layer 3 static route for a switch stack
     */
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Delete a layer 3 interface from the switch
     *
     * @remarks
     * Delete a layer 3 interface from the switch
     */
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch
     *
     * @remarks
     * Delete a layer 3 static route for a switch
     */
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Delete a multicast rendezvous point
     *
     * @remarks
     * Delete a multicast rendezvous point
     */
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Delete a layer 3 interface from a switch stack
     *
     * @remarks
     * Delete a layer 3 interface from a switch stack
     */
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * Delete a layer 3 static route for a switch stack
     *
     * @remarks
     * Delete a layer 3 static route for a switch stack
     */
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
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
     * Return a layer 3 static route for a switch
     *
     * @remarks
     * Return a layer 3 static route for a switch
     */
    getDeviceSwitchRoutingStaticRoute(req: operations.GetDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch
     *
     * @remarks
     * List layer 3 static routes for a switch
     */
    getDeviceSwitchRoutingStaticRoutes(req: operations.GetDeviceSwitchRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse>;
    /**
     * Return multicast settings for a network
     *
     * @remarks
     * Return multicast settings for a network
     */
    getNetworkSwitchRoutingMulticast(req: operations.GetNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastResponse>;
    /**
     * Return a multicast rendezvous point
     *
     * @remarks
     * Return a multicast rendezvous point
     */
    getNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * List multicast rendezvous points
     *
     * @remarks
     * List multicast rendezvous points
     */
    getNetworkSwitchRoutingMulticastRendezvousPoints(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse>;
    /**
     * Return layer 3 OSPF routing configuration
     *
     * @remarks
     * Return layer 3 OSPF routing configuration
     */
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
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
     * Return a layer 3 static route for a switch stack
     *
     * @remarks
     * Return a layer 3 static route for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoute(req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * List layer 3 static routes for a switch stack
     *
     * @remarks
     * List layer 3 static routes for a switch stack
     */
    getNetworkSwitchStackRoutingStaticRoutes(req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse>;
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
     * Update a layer 3 static route for a switch
     *
     * @remarks
     * Update a layer 3 static route for a switch
     */
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Update multicast settings for a network
     *
     * @remarks
     * Update multicast settings for a network
     */
    updateNetworkSwitchRoutingMulticast(req: operations.UpdateNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse>;
    /**
     * Update a multicast rendezvous point
     *
     * @remarks
     * Update a multicast rendezvous point
     */
    updateNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Update layer 3 OSPF routing configuration
     *
     * @remarks
     * Update layer 3 OSPF routing configuration
     */
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
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
    /**
     * Update a layer 3 static route for a switch stack
     *
     * @remarks
     * Update a layer 3 static route for a switch stack
     */
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
}
