import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Multicast {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a multicast rendezvous point
     *
     * @remarks
     * Create a multicast rendezvous point
     */
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * Delete a multicast rendezvous point
     *
     * @remarks
     * Delete a multicast rendezvous point
     */
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
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
}
