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
     * callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.
     *
     * @remarks
     * This callback API acknowledges the request for subscription from a HIU, and sends back a "id" that will be used when the patient/user approves or denies the subscription.
     *
     */
    postV05SubscriptionRequestsCmOnInit(req: operations.PostV05SubscriptionRequestsCmOnInitRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsCmOnInitResponse>;
    /**
     * Notification for subscription grant/deny/revoke
     *
     * @remarks
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
     */
    postV05SubscriptionRequestsHiuNotifyJson(req: operations.PostV05SubscriptionRequestsHiuNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuNotifyJsonResponse>;
    /**
     * Notification for subscription grant/deny/revoke
     *
     * @remarks
     * This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed.
     *
     */
    postV05SubscriptionRequestsHiuNotifyRaw(req: operations.PostV05SubscriptionRequestsHiuNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuNotifyRawResponse>;
    /**
     * Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to subscription request relevant notifications.
     *
     */
    postV05SubscriptionRequestsHiuOnNotify(req: operations.PostV05SubscriptionRequestsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionRequestsHiuOnNotifyResponse>;
    /**
     * Notification to HIU on basis of a granted subscription
     *
     * @remarks
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
     */
    postV05SubscriptionsHiuNotifyJson(req: operations.PostV05SubscriptionsHiuNotifyJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuNotifyJsonResponse>;
    /**
     * Notification to HIU on basis of a granted subscription
     *
     * @remarks
     * This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context.
     * 1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient.
     * 2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context
     *
     */
    postV05SubscriptionsHiuNotifyRaw(req: operations.PostV05SubscriptionsHiuNotifyRawRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuNotifyRawResponse>;
    /**
     * Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.
     *
     * @remarks
     * This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.
     *
     */
    postV05SubscriptionsHiuOnNotify(req: operations.PostV05SubscriptionsHiuOnNotifyRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SubscriptionsHiuOnNotifyResponse>;
}
