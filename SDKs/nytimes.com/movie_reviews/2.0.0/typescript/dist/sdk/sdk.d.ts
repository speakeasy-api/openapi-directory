import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.nytimes.com/svc/movies/v2", "https://api.nytimes.com/svc/movies/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * With the Movie Reviews API, you can search New York Times movie reviews by keyword and get lists of NYT Critics' Picks.
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
    getCriticsResourceTypeJson(req: operations.GetCriticsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCriticsResourceTypeJsonResponse>;
    getReviewsSearchJson(req: operations.GetReviewsSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsSearchJsonResponse>;
    getReviewsResourceTypeJson(req: operations.GetReviewsResourceTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetReviewsResourceTypeJsonResponse>;
}
