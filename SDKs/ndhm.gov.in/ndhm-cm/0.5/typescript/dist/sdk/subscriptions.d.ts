import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Request for subscription
     *
     * @remarks
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
     */
    postV05SubscriptionRequestsCmInitJson(req: operations.PostV05SubscriptionRequestsCmInitJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmInitJsonResponse>;
    /**
     * Request for subscription
     *
     * @remarks
     * creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role
     */
    postV05SubscriptionRequestsCmInitRaw(req: operations.PostV05SubscriptionRequestsCmInitRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmInitRawResponse>;
    /**
     * Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to subscription request relevant notifications.
     *
     */
    postV05SubscriptionRequestsHiuOnNotify(req: operations.PostV05SubscriptionRequestsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuOnNotifyResponse>;
    /**
     * Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
     */
    postV05SubscriptionsHiuOnNotify(req: operations.PostV05SubscriptionsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuOnNotifyResponse>;
}
