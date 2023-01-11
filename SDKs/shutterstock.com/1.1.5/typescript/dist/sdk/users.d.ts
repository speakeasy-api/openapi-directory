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
     * getAccessToken - Get access token details
    **/
    getAccessToken(req: operations.GetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
    /**
     * getUser - Get user details
    **/
    getUser(req: operations.GetUserRequest, config?: AxiosRequestConfig): Promise<operations.GetUserResponse>;
    /**
     * getUserSubscriptionList - List user subscriptions
    **/
    getUserSubscriptionList(req: operations.GetUserSubscriptionListRequest, config?: AxiosRequestConfig): Promise<operations.GetUserSubscriptionListResponse>;
}
