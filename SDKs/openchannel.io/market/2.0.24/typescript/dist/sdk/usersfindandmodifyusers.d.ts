import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UsersFindAndModifyUsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUsersUserId - Removes a single user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    deleteUsersUserId(req: operations.DeleteUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersUserIdResponse>;
    /**
     * getUsers - Returns a paginated list of users
     *
     * - Results are paginated and the default is value is 100 if no limit is provided
     *
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersUserId - Return a single user
     *
     * - Results are returned for the market provided within the basic authentication credentials
     *
    **/
    getUsersUserId(req: operations.GetUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersUserIdResponse>;
    /**
     * patchUsersUserId - Updates user fields
    **/
    patchUsersUserId(req: operations.PatchUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersUserIdResponse>;
    /**
     * postUsersUserId - Updates a single user or adds the user if they don't exist
    **/
    postUsersUserId(req: operations.PostUsersUserIdRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersUserIdResponse>;
}
