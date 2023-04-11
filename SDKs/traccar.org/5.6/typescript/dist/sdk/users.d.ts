import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User management
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a User
     */
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * Fetch a list of Users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Create a User
     */
    postUsers(req: shared.User, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * Update a User
     */
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
}
