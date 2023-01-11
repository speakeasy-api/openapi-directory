import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FollowedShows {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserFollowsShowsShowId - Unfollow a show
    **/
    deleteUserFollowsShowsShowId(req: operations.DeleteUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsShowsShowIdResponse>;
    /**
     * getUserFollowsShows - List the followed shows
    **/
    getUserFollowsShows(req: operations.GetUserFollowsShowsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsShowsResponse>;
    /**
     * getUserFollowsShowsShowId - Check if a show is followed
    **/
    getUserFollowsShowsShowId(req: operations.GetUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsShowsShowIdResponse>;
    /**
     * putUserFollowsShowsShowId - Follow a show
    **/
    putUserFollowsShowsShowId(req: operations.PutUserFollowsShowsShowIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsShowsShowIdResponse>;
}
