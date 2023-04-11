import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://api.nytimes.com/svc/news/v3", "https://api.nytimes.com/svc/news/v3"];
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
 * With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.
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
    getContentJson(req: operations.GetContentJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentJsonResponse>;
    getContentSourceSectionJson(req: operations.GetContentSourceSectionJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionJsonResponse>;
    getContentSourceSectionTimePeriodJson(req: operations.GetContentSourceSectionTimePeriodJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContentSourceSectionTimePeriodJsonResponse>;
}
