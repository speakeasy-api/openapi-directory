import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all Users detail
     * This will return all properties related to User entity
     *
     */
    userGet(config?: AxiosRequestConfig): Promise<operations.UserGetResponse>;
    /**
     * Register a new User
     *
     */
    userRegisterUser(req: operations.UserRegisterUserRequest, config?: AxiosRequestConfig): Promise<operations.UserRegisterUserResponse>;
    /**
     * Update an exsisting User
     *
     */
    userUpdateUser(req: operations.UserUpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UserUpdateUserResponse>;
}
