import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VpnTunnels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of VPN tunnels.
     */
    computeVpnTunnelsAggregatedList(req: operations.ComputeVpnTunnelsAggregatedListRequest, security: operations.ComputeVpnTunnelsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsAggregatedListResponse>;
    /**
     * Deletes the specified VpnTunnel resource.
     */
    computeVpnTunnelsDelete(req: operations.ComputeVpnTunnelsDeleteRequest, security: operations.ComputeVpnTunnelsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsDeleteResponse>;
    /**
     * Returns the specified VpnTunnel resource.
     */
    computeVpnTunnelsGet(req: operations.ComputeVpnTunnelsGetRequest, security: operations.ComputeVpnTunnelsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsGetResponse>;
    /**
     * Creates a VpnTunnel resource in the specified project and region using the data included in the request.
     */
    computeVpnTunnelsInsert(req: operations.ComputeVpnTunnelsInsertRequest, security: operations.ComputeVpnTunnelsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsInsertResponse>;
    /**
     * Retrieves a list of VpnTunnel resources contained in the specified project and region.
     */
    computeVpnTunnelsList(req: operations.ComputeVpnTunnelsListRequest, security: operations.ComputeVpnTunnelsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsListResponse>;
    /**
     * Sets the labels on a VpnTunnel. To learn more about labels, read the Labeling Resources documentation.
     */
    computeVpnTunnelsSetLabels(req: operations.ComputeVpnTunnelsSetLabelsRequest, security: operations.ComputeVpnTunnelsSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeVpnTunnelsSetLabelsResponse>;
}
