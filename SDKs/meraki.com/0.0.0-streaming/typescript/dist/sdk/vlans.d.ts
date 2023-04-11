import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VLANs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a VLAN
     *
     * @remarks
     * Add a VLAN
     */
    createNetworkVlan(req: operations.CreateNetworkVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkVlanResponse>;
    /**
     * Delete a VLAN from a network
     *
     * @remarks
     * Delete a VLAN from a network
     */
    deleteNetworkVlan(req: operations.DeleteNetworkVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkVlanResponse>;
    /**
     * Return a VLAN
     *
     * @remarks
     * Return a VLAN
     */
    getNetworkVlan(req: operations.GetNetworkVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkVlanResponse>;
    /**
     * List the VLANs for an MX network
     *
     * @remarks
     * List the VLANs for an MX network
     */
    getNetworkVlans(req: operations.GetNetworkVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkVlansResponse>;
    /**
     * Returns the enabled status of VLANs for the network
     *
     * @remarks
     * Returns the enabled status of VLANs for the network
     */
    getNetworkVlansEnabledState(req: operations.GetNetworkVlansEnabledStateRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkVlansEnabledStateResponse>;
    /**
     * Update a VLAN
     *
     * @remarks
     * Update a VLAN
     */
    updateNetworkVlan(req: operations.UpdateNetworkVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkVlanResponse>;
    /**
     * Enable/Disable VLANs for the given network
     *
     * @remarks
     * Enable/Disable VLANs for the given network
     */
    updateNetworkVlansEnabledState(req: operations.UpdateNetworkVlansEnabledStateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkVlansEnabledStateResponse>;
}
