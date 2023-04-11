import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://mercure.local"];
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
 * [Mercure](https://mercure.rocks) is a protocol allowing to push data updates to web browsers and other HTTP clients in a convenient, fast, reliable and battery-efficient way.
 *
 * @see {@link https://mercure.rocks/spec} - The Mercure protocol specification
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
     * Subscribe to updates
     *
     * @see {@link https://mercure.rocks/spec#subscription} - Subscription specification
     */
    getWellKnownMercure(req: operations.GetWellKnownMercureRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureResponse>;
    /**
     * Active subscriptions
     *
     * @see {@link https://mercure.rocks/spec#subscription-api} - Subscription API
     */
    getWellKnownMercureSubscriptions(config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsResponse>;
    /**
     * Active subscriptions for the given topic
     *
     * @see {@link https://mercure.rocks/spec#subscription-api} - Subscription API
     */
    getWellKnownMercureSubscriptionsTopic(req: operations.GetWellKnownMercureSubscriptionsTopicRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicResponse>;
    /**
     * Active subscription for the given topic and subscriber
     *
     * @see {@link https://mercure.rocks/spec#active-subscriptions} - Subscription API
     */
    getWellKnownMercureSubscriptionsTopicSubscriber(req: operations.GetWellKnownMercureSubscriptionsTopicSubscriberRequest, config?: AxiosRequestConfig): Promise<operations.GetWellKnownMercureSubscriptionsTopicSubscriberResponse>;
    /**
     * Publish an update
     *
     * @see {@link https://mercure.rocks/spec#publication} - Publishing specification
     */
    postWellKnownMercure(req: operations.PostWellKnownMercureRequestBody, config?: AxiosRequestConfig): Promise<operations.PostWellKnownMercureResponse>;
}
