import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Vlans {
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
    createNetworkApplianceVlan(req: operations.CreateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkApplianceVlanResponse>;
    /**
     * Delete a VLAN from a network
     *
     * @remarks
     * Delete a VLAN from a network
     */
    deleteNetworkApplianceVlan(req: operations.DeleteNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkApplianceVlanResponse>;
    /**
     * Return a VLAN
     *
     * @remarks
     * Return a VLAN
     */
    getNetworkApplianceVlan(req: operations.GetNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlanResponse>;
    /**
     * List the VLANs for an MX network
     *
     * @remarks
     * List the VLANs for an MX network
     */
    getNetworkApplianceVlans(req: operations.GetNetworkApplianceVlansRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansResponse>;
    /**
     * Returns the enabled status of VLANs for the network
     *
     * @remarks
     * Returns the enabled status of VLANs for the network
     */
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
    /**
     * Update a VLAN
     *
     * @remarks
     * Update a VLAN
     */
    updateNetworkApplianceVlan(req: operations.UpdateNetworkApplianceVlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlanResponse>;
    /**
     * Enable/Disable VLANs for the given network
     *
     * @remarks
     * Enable/Disable VLANs for the given network
     */
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
}
