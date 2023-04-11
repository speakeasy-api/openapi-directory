import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FollowedNetworks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Unfollow a network
     */
    deleteUserFollowsNetworksNetworkId(req: operations.DeleteUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsNetworksNetworkIdResponse>;
    /**
     * List the followed networks
     */
    getUserFollowsNetworks(req: operations.GetUserFollowsNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksResponse>;
    /**
     * Check if a network is followed
     */
    getUserFollowsNetworksNetworkId(req: operations.GetUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksNetworkIdResponse>;
    /**
     * Follow a network
     */
    putUserFollowsNetworksNetworkId(req: operations.PutUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsNetworksNetworkIdResponse>;
}
