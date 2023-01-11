import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FollowedWebchannels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserFollowsWebchannelsWebchannelId - Unfollow a webchannel
    **/
    deleteUserFollowsWebchannelsWebchannelId(req: operations.DeleteUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsWebchannelsWebchannelIdResponse>;
    /**
     * getUserFollowsWebchannels - List the followed webchannels
    **/
    getUserFollowsWebchannels(req: operations.GetUserFollowsWebchannelsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsWebchannelsResponse>;
    /**
     * getUserFollowsWebchannelsWebchannelId - Check if a webchannel is followed
    **/
    getUserFollowsWebchannelsWebchannelId(req: operations.GetUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsWebchannelsWebchannelIdResponse>;
    /**
     * putUserFollowsWebchannelsWebchannelId - Follow a webchannel
    **/
    putUserFollowsWebchannelsWebchannelId(req: operations.PutUserFollowsWebchannelsWebchannelIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsWebchannelsWebchannelIdResponse>;
}
