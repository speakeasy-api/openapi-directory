import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MXStaticRoutes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a static route for an MX or teleworker network
     *
     * @remarks
     * Add a static route for an MX or teleworker network
     */
    createNetworkStaticRoute(req: operations.CreateNetworkStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkStaticRouteResponse>;
    /**
     * Delete a static route from an MX or teleworker network
     *
     * @remarks
     * Delete a static route from an MX or teleworker network
     */
    deleteNetworkStaticRoute(req: operations.DeleteNetworkStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkStaticRouteResponse>;
    /**
     * Return a static route for an MX or teleworker network
     *
     * @remarks
     * Return a static route for an MX or teleworker network
     */
    getNetworkStaticRoute(req: operations.GetNetworkStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkStaticRouteResponse>;
    /**
     * List the static routes for an MX or teleworker network
     *
     * @remarks
     * List the static routes for an MX or teleworker network
     */
    getNetworkStaticRoutes(req: operations.GetNetworkStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkStaticRoutesResponse>;
    /**
     * Update a static route for an MX or teleworker network
     *
     * @remarks
     * Update a static route for an MX or teleworker network
     */
    updateNetworkStaticRoute(req: operations.UpdateNetworkStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkStaticRouteResponse>;
}
