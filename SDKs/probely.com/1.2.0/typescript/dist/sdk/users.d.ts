import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteUsersId - Deactivate a user
    **/
    deleteUsersId(req: operations.DeleteUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsersIdResponse>;
    /**
     * getProfile - User data
    **/
    getProfile(req: operations.GetProfileRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileResponse>;
    /**
     * getUsers - List users
    **/
    getUsers(req: operations.GetUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersResponse>;
    /**
     * getUsersId - Retrieve user
    **/
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * patchUsersId - Partial update user
    **/
    patchUsersId(req: operations.PatchUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchUsersIdResponse>;
    /**
     * postProfileChangePassword - Change user password
     *
     * Our password policy requires a minimum password length of 10 chars with
     * at least one symbol or number.
     *
    **/
    postProfileChangePassword(req: operations.PostProfileChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.PostProfileChangePasswordResponse>;
    /**
     * postUsers - Create/Reactivate a user.
    **/
    postUsers(req: operations.PostUsersRequest, config?: AxiosRequestConfig): Promise<operations.PostUsersResponse>;
    /**
     * putUsersId - Update user
    **/
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
}
