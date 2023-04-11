import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StaticRoutes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a layer 3 static route for a switch
     *
     * @remarks
     * Create a layer 3 static route for a switch
     */
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Add a static route for an MX or teleworker network
     *
     * @remarks
     * Add a static route for an MX or teleworker network
     */
    createNetworkApplianceStaticRoute(req: operations.CreateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceStaticRouteResponse>;
    /**
     * Create a layer 3 static route for a switch stack
     *
     * @remarks
     * Create a layer 3 static route for a switch stack
     */
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * Delete a layer 3 static route for a switch
     *
     * @remarks
     * Delete a layer 3 static route for a switch
     */
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Delete a static route from an MX or teleworker network
     *
     * @remarks
     * Delete a static route from an MX or teleworker network
     */
    deleteNetworkApplianceStaticRoute(req: operations.DeleteNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceStaticRouteResponse>;
    /**
     * Delete a layer 3 static route for a switch stack
     *
     * @remarks
     * Delete a layer 3 static route for a switch stack
     */
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
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
     * Return a static route for an MX or teleworker network
     *
     * @remarks
     * Return a static route for an MX or teleworker network
     */
    getNetworkApplianceStaticRoute(req: operations.GetNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRouteResponse>;
    /**
     * List the static routes for an MX or teleworker network
     *
     * @remarks
     * List the static routes for an MX or teleworker network
     */
    getNetworkApplianceStaticRoutes(req: operations.GetNetworkApplianceStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceStaticRoutesResponse>;
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
     * Update a layer 3 static route for a switch
     *
     * @remarks
     * Update a layer 3 static route for a switch
     */
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * Update a static route for an MX or teleworker network
     *
     * @remarks
     * Update a static route for an MX or teleworker network
     */
    updateNetworkApplianceStaticRoute(req: operations.UpdateNetworkApplianceStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceStaticRouteResponse>;
    /**
     * Update a layer 3 static route for a switch stack
     *
     * @remarks
     * Update a layer 3 static route for a switch stack
     */
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
}
