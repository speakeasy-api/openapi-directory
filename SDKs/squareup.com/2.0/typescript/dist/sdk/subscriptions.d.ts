import * as operations from "./models/operations";
import * as shared from "./models/shared";
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
     * CancelSubscription
     *
     * @remarks
     * Sets the `canceled_date` field to the end of the active billing period.
     * After this date, the status changes from ACTIVE to CANCELED.
     */
    cancelSubscription(req: operations.CancelSubscriptionRequest, security: operations.CancelSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.CancelSubscriptionResponse>;
    /**
     * CreateSubscription
     *
     * @remarks
     * Creates a subscription for a customer to a subscription plan.
     *
     * If you provide a card on file in the request, Square charges the card for
     * the subscription. Otherwise, Square bills an invoice to the customer's email
     * address. The subscription starts immediately, unless the request includes
     * the optional `start_date`. Each individual subscription is associated with a particular location.
     */
    createSubscription(req: shared.CreateSubscriptionRequest, security: operations.CreateSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * ListSubscriptionEvents
     *
     * @remarks
     * Lists all events for a specific subscription.
     * In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.
     */
    listSubscriptionEvents(req: operations.ListSubscriptionEventsRequest, security: operations.ListSubscriptionEventsSecurity, config?: AxiosRequestConfig): Promise<operations.ListSubscriptionEventsResponse>;
    /**
     * ResumeSubscription
     *
     * @remarks
     * Resumes a deactivated subscription.
     */
    resumeSubscription(req: operations.ResumeSubscriptionRequest, security: operations.ResumeSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.ResumeSubscriptionResponse>;
    /**
     * RetrieveSubscription
     *
     * @remarks
     * Retrieves a subscription.
     */
    retrieveSubscription(req: operations.RetrieveSubscriptionRequest, security: operations.RetrieveSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveSubscriptionResponse>;
    /**
     * SearchSubscriptions
     *
     * @remarks
     * Searches for subscriptions.
     * Results are ordered chronologically by subscription creation date. If
     * the request specifies more than one location ID,
     * the endpoint orders the result
     * by location ID, and then by creation date within each location. If no locations are given
     * in the query, all locations are searched.
     *
     * You can also optionally specify `customer_ids` to search by customer.
     * If left unset, all customers
     * associated with the specified locations are returned.
     * If the request specifies customer IDs, the endpoint orders results
     * first by location, within location by customer ID, and within
     * customer by subscription creation date.
     *
     * For more information, see
     * [Retrieve subscriptions](https://developer.squareup.com/docs/subscriptions-api/overview#retrieve-subscriptions).
     */
    searchSubscriptions(req: shared.SearchSubscriptionsRequest, security: operations.SearchSubscriptionsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchSubscriptionsResponse>;
    /**
     * UpdateSubscription
     *
     * @remarks
     * Updates a subscription. You can set, modify, and clear the
     * `subscription` field values.
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, security: operations.UpdateSubscriptionSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
