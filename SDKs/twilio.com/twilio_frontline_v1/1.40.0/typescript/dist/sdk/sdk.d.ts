import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://frontline-api.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Fetch a frontline user
     */
    fetchUser(req: operations.FetchUserRequest, security: operations.FetchUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchUserResponse>;
    /**
     * Update an existing frontline user
     */
    updateUser(req: operations.UpdateUserRequest, security: operations.UpdateUserSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
