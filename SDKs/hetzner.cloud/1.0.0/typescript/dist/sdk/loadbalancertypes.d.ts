import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.
 *
 * @remarks
 *
 * Currency for all amounts is €. All prices exclude VAT.
 *
 */
export declare class LoadBalancerTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Load Balancer Types
     *
     * @remarks
     * Gets all Load Balancer type objects.
     */
    getLoadBalancerTypes(req: operations.GetLoadBalancerTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerTypesResponse>;
    /**
     * Get a Load Balancer Type
     *
     * @remarks
     * Gets a specific Load Balancer type object.
     */
    getLoadBalancerTypesId(req: operations.GetLoadBalancerTypesIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLoadBalancerTypesIdResponse>;
}
