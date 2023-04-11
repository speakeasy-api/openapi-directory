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
     * Triggers user account deletion.
     */
    userDelete(config?: AxiosRequestConfig): Promise<operations.UserDeleteResponse>;
    /**
     * Gets the informations for the user.
     *
     * @remarks
     * Gets the informations for the user.
     */
    userGet(config?: AxiosRequestConfig): Promise<operations.UserGetResponse>;
}
