import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the authorised user
     *
     * @remarks
     * Gets the user that corresponds to the access token used in the request.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Get user
     *
     * @remarks
     * Gets a user by ID. You must be authorised as the target user in order to make this request.
     */
    getUsersId(req: operations.GetUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdResponse>;
    /**
     * Update user
     *
     * @remarks
     * Updates the user by their ID. You must be authorised as the target user in order to make this request.
     */
    putUsersId(req: operations.PutUsersIdRequest, config?: AxiosRequestConfig): Promise<operations.PutUsersIdResponse>;
}
