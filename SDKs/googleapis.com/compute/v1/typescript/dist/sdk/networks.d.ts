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
     * Adds a peering to the specified network.
     */
    computeNetworksAddPeering(req: operations.ComputeNetworksAddPeeringRequest, security: operations.ComputeNetworksAddPeeringSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksAddPeeringResponse>;
    /**
     * Deletes the specified network.
     */
    computeNetworksDelete(req: operations.ComputeNetworksDeleteRequest, security: operations.ComputeNetworksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksDeleteResponse>;
    /**
     * Returns the specified network.
     */
    computeNetworksGet(req: operations.ComputeNetworksGetRequest, security: operations.ComputeNetworksGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksGetResponse>;
    /**
     * Returns the effective firewalls on a given network.
     */
    computeNetworksGetEffectiveFirewalls(req: operations.ComputeNetworksGetEffectiveFirewallsRequest, security: operations.ComputeNetworksGetEffectiveFirewallsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksGetEffectiveFirewallsResponse>;
    /**
     * Creates a network in the specified project using the data included in the request.
     */
    computeNetworksInsert(req: operations.ComputeNetworksInsertRequest, security: operations.ComputeNetworksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksInsertResponse>;
    /**
     * Retrieves the list of networks available to the specified project.
     */
    computeNetworksList(req: operations.ComputeNetworksListRequest, security: operations.ComputeNetworksListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksListResponse>;
    /**
     * Lists the peering routes exchanged over peering connection.
     */
    computeNetworksListPeeringRoutes(req: operations.ComputeNetworksListPeeringRoutesRequest, security: operations.ComputeNetworksListPeeringRoutesSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksListPeeringRoutesResponse>;
    /**
     * Patches the specified network with the data included in the request. Only the following fields can be modified: routingConfig.routingMode.
     */
    computeNetworksPatch(req: operations.ComputeNetworksPatchRequest, security: operations.ComputeNetworksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksPatchResponse>;
    /**
     * Removes a peering from the specified network.
     */
    computeNetworksRemovePeering(req: operations.ComputeNetworksRemovePeeringRequest, security: operations.ComputeNetworksRemovePeeringSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksRemovePeeringResponse>;
    /**
     * Switches the network mode from auto subnet mode to custom subnet mode.
     */
    computeNetworksSwitchToCustomMode(req: operations.ComputeNetworksSwitchToCustomModeRequest, security: operations.ComputeNetworksSwitchToCustomModeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksSwitchToCustomModeResponse>;
    /**
     * Updates the specified network peering with the data included in the request. You can only modify the NetworkPeering.export_custom_routes field and the NetworkPeering.import_custom_routes field.
     */
    computeNetworksUpdatePeering(req: operations.ComputeNetworksUpdatePeeringRequest, security: operations.ComputeNetworksUpdatePeeringSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeNetworksUpdatePeeringResponse>;
}
