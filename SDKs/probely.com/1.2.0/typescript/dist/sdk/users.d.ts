import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage self and other users.
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
     * Deactivate a user
     */
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * User data
     */
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * List users
     */
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * Retrieve user
     */
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * Partial update user
     */
    patchUsersId(req: operations.PatchUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersIdResponse>;
    /**
     * Change user password
     *
     * @remarks
     * Our password policy requires a minimum password length of 10 chars with
     * at least one symbol or number.
     *
     */
    postProfileChangePassword(req: operations.PostProfileChangePasswordRequestBody, config?: AxiosRequestConfig): Promise<operations.PostProfileChangePasswordResponse>;
    /**
     * Create/Reactivate a user.
     */
    postUsers(req: operations.PostUsersRequestBodyInput, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * Update user
     */
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
}
