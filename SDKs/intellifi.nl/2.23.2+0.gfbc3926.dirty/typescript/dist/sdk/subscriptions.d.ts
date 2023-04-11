import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The `subscriptions` resource contains rules to store and/or deliver events from the Brain event system.
 *
 * @remarks
 *
 * See also the `events` resource.
 *
 *
 * @see {@link https://intellifi.zendesk.com/hc/en-us/sections/360001588534}
 */
export declare class Subscriptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create subscription
     */
    addSubscription(req: shared.SubscriptionInput, config?: AxiosRequestConfig): Promise<operations.AddSubscriptionResponse>;
    /**
     * Delete subscription
     */
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * Get subscription events
     */
    getEventsForSubscriptionById(req: operations.GetEventsForSubscriptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetEventsForSubscriptionByIdResponse>;
    /**
     * Get subscription
     */
    getSubscriptionById(req: operations.GetSubscriptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionByIdResponse>;
    /**
     * Get all subscriptions
     */
    getSubscriptions(req: operations.GetSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionsResponse>;
    /**
     * Update existing subscription
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
