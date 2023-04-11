import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SubnetPool {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the subnet pool and mask configured for MGs in the network.
     *
     * @remarks
     * Return the subnet pool and mask configured for MGs in the network.
     */
    getNetworkCellularGatewaySubnetPool(req: operations.GetNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewaySubnetPoolResponse>;
    /**
     * Update the subnet pool and mask configuration for MGs in the network.
     *
     * @remarks
     * Update the subnet pool and mask configuration for MGs in the network.
     */
    updateNetworkCellularGatewaySubnetPool(req: operations.UpdateNetworkCellularGatewaySubnetPoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewaySubnetPoolResponse>;
}
