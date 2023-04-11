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
     * Gets a user by user id.
     */
    bloggerUsersGet(req: operations.BloggerUsersGetRequest, security: operations.BloggerUsersGetSecurity, config?: AxiosRequestConfig): Promise<operations.BloggerUsersGetResponse>;
}
