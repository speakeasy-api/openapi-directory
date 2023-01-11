import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FollowedNetworks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserFollowsNetworksNetworkId - Unfollow a network
    **/
    deleteUserFollowsNetworksNetworkId(req: operations.DeleteUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsNetworksNetworkIdResponse>;
    /**
     * getUserFollowsNetworks - List the followed networks
    **/
    getUserFollowsNetworks(req: operations.GetUserFollowsNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksResponse>;
    /**
     * getUserFollowsNetworksNetworkId - Check if a network is followed
    **/
    getUserFollowsNetworksNetworkId(req: operations.GetUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsNetworksNetworkIdResponse>;
    /**
     * putUserFollowsNetworksNetworkId - Follow a network
    **/
    putUserFollowsNetworksNetworkId(req: operations.PutUserFollowsNetworksNetworkIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsNetworksNetworkIdResponse>;
}
