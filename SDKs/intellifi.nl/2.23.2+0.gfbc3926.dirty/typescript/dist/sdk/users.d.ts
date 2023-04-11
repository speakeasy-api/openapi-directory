import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `users` resource contains the user accounts that can log into the Brain Management Console.
 *
 * @remarks
 *
 * Note that this resource is only accessible for administrator users logged into the Brain Management Console.
 * It is not possible to access this resource using API key authentication.
 * This resource is therefore irrelevant to most applications.
 *
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
     * Create user
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    addUser(req: shared.UserInput, security: operations.AddUserSecurity, config?: AxiosRequestConfig): Promise<operations.AddUserResponse>;
    /**
     * Delete user
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    deleteUser(req: operations.DeleteUserRequest, security: operations.DeleteUserSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Get user
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    getUserById(req: operations.GetUserByIdRequest, security: operations.GetUserByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetUserByIdResponse>;
    /**
     * Get all users
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    getUsers(req: operations.GetUsersRequest, security: operations.GetUsersSecurity, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Update existing user
     *
     * @remarks
     * Can only be used by an **administrative** user.
     */
    updateUser(req: operations.UpdateUserRequest, security: operations.UpdateUserSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
