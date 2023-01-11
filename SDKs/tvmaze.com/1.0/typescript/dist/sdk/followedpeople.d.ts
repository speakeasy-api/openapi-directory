import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FollowedPeople {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUserFollowsPeoplePersonId - Unfollow a person
    **/
    deleteUserFollowsPeoplePersonId(req: operations.DeleteUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserFollowsPeoplePersonIdResponse>;
    /**
     * getUserFollowsPeople - List the followed people
    **/
    getUserFollowsPeople(req: operations.GetUserFollowsPeopleRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsPeopleResponse>;
    /**
     * getUserFollowsPeoplePersonId - Check if a person is followed
    **/
    getUserFollowsPeoplePersonId(req: operations.GetUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUserFollowsPeoplePersonIdResponse>;
    /**
     * putUserFollowsPeoplePersonId - Follow a person
    **/
    putUserFollowsPeoplePersonId(req: operations.PutUserFollowsPeoplePersonIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUserFollowsPeoplePersonIdResponse>;
}
