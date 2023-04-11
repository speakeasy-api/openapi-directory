import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Networks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Bind a network to a template.
     *
     * @remarks
     * Bind a network to a template.
     */
    bindNetwork(req: operations.BindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.BindNetworkResponse>;
    /**
     * Combine multiple networks into a single network
     *
     * @remarks
     * Combine multiple networks into a single network
     */
    combineOrganizationNetworks(req: operations.CombineOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.CombineOrganizationNetworksResponse>;
    /**
     * Create a network
     *
     * @remarks
     * Create a network
     */
    createOrganizationNetwork(req: operations.CreateOrganizationNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationNetworkResponse>;
    /**
     * Delete a network
     *
     * @remarks
     * Delete a network
     */
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
    /**
     * Return a network
     *
     * @remarks
     * Return a network
     */
    getNetwork(req: operations.GetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResponse>;
    /**
     * List Air Marshal scan results from a network
     *
     * @remarks
     * List Air Marshal scan results from a network
     */
    getNetworkAirMarshal(req: operations.GetNetworkAirMarshalRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAirMarshalResponse>;
    /**
     * Return the site-to-site VPN settings of a network
     *
     * @remarks
     * Return the site-to-site VPN settings of a network. Only valid for MX networks.
     */
    getNetworkSiteToSiteVpn(req: operations.GetNetworkSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSiteToSiteVpnResponse>;
    /**
     * Return the traffic analysis data for this network
     *
     * @remarks
     * Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.
     */
    getNetworkTraffic(req: operations.GetNetworkTrafficRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkTrafficResponse>;
    /**
     * List the networks in an organization
     *
     * @remarks
     * List the networks in an organization
     */
    getOrganizationNetworks(req: operations.GetOrganizationNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationNetworksResponse>;
    /**
     * Split a combined network into individual networks for each type of device
     *
     * @remarks
     * Split a combined network into individual networks for each type of device
     */
    splitNetwork(req: operations.SplitNetworkRequest, config?: AxiosRequestConfig): Promise<operations.SplitNetworkResponse>;
    /**
     * Unbind a network from a template.
     *
     * @remarks
     * Unbind a network from a template.
     */
    unbindNetwork(req: operations.UnbindNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UnbindNetworkResponse>;
    /**
     * Update a network
     *
     * @remarks
     * Update a network
     */
    updateNetwork(req: operations.UpdateNetworkRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkResponse>;
    /**
     * Update the site-to-site VPN settings of a network
     *
     * @remarks
     * Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.
     */
    updateNetworkSiteToSiteVpn(req: operations.UpdateNetworkSiteToSiteVpnRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSiteToSiteVpnResponse>;
}
