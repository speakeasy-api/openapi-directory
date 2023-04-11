import { Subscriptions } from "./subscriptions";
import { Topics } from "./topics";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://pubsub.googleapis.com/"];
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
 * Provides reliable, many-to-many, asynchronous messaging between applications.
 *
 * @see {@link https://cloud.google.com/pubsub/docs}
 */
export declare class SDK {
    subscriptions: Subscriptions;
    topics: Topics;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
