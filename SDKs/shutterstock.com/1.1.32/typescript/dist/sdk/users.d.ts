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
     * Get access token details
     */
    getAccessToken(config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
    /**
     * Get user details
     */
    getUser(config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * List user subscriptions
     */
    getUserSubscriptionList(config?: AxiosRequestConfig): Promise<operations.GetUserSubscriptionListResponse>;
}
