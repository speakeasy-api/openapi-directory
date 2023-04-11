import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.nytimes.com/svc/community/v3"];
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
 * Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.
 *
 * @see {@link http://developer.nytimes.com/}
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
     * Comments by Date
     */
    getUserContentByDateJson(req: operations.GETUserContentByDateJsonRequest, security: operations.GETUserContentByDateJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETUserContentByDateJsonResponse>;
    /**
     * Recent User Comments
     */
    getUserContentRecentJson(config?: AxiosRequestConfig): Promise<operations.GETUserContentRecentJsonResponse>;
    /**
     * Comments by URL
     */
    getUserContentUrlJson(req: operations.GETUserContentUrlJsonRequest, security: operations.GETUserContentUrlJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETUserContentUrlJsonResponse>;
    /**
     * Comments by User
     */
    getUserContentUserJson(req: operations.GETUserContentUserJsonRequest, security: operations.GETUserContentUserJsonSecurity, config?: AxiosRequestConfig): Promise<operations.GETUserContentUserJsonResponse>;
}
