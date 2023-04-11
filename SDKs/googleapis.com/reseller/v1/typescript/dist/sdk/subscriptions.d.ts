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
     * Activates a subscription previously suspended by the reseller. If you did not suspend the customer subscription and it is suspended for any other reason, such as for abuse or a pending ToS acceptance, this call will not reactivate the customer subscription.
     */
    resellerSubscriptionsActivate(req: operations.ResellerSubscriptionsActivateRequest, security: operations.ResellerSubscriptionsActivateSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsActivateResponse>;
    /**
     * Updates a subscription plan. Use this method to update a plan for a 30-day trial or a flexible plan subscription to an annual commitment plan with monthly or yearly payments. How a plan is updated differs depending on the plan and the products. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_plan).
     */
    resellerSubscriptionsChangePlan(req: operations.ResellerSubscriptionsChangePlanRequest, security: operations.ResellerSubscriptionsChangePlanSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsChangePlanResponse>;
    /**
     * Updates a user license's renewal settings. This is applicable for accounts with annual commitment plans only. For more information, see the description in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_renewal).
     */
    resellerSubscriptionsChangeRenewalSettings(req: operations.ResellerSubscriptionsChangeRenewalSettingsRequest, security: operations.ResellerSubscriptionsChangeRenewalSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsChangeRenewalSettingsResponse>;
    /**
     * Updates a subscription's user license settings. For more information about updating an annual commitment plan or a flexible plan subscription’s licenses, see [Manage Subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#update_subscription_seat).
     */
    resellerSubscriptionsChangeSeats(req: operations.ResellerSubscriptionsChangeSeatsRequest, security: operations.ResellerSubscriptionsChangeSeatsSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsChangeSeatsResponse>;
    /**
     * Cancels, suspends, or transfers a subscription to direct.
     */
    resellerSubscriptionsDelete(req: operations.ResellerSubscriptionsDeleteRequest, security: operations.ResellerSubscriptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsDeleteResponse>;
    /**
     * Gets a specific subscription. The `subscriptionId` can be found using the [Retrieve all reseller subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_all_subscriptions) method. For more information about retrieving a specific subscription, see the information descrived in [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#get_subscription).
     */
    resellerSubscriptionsGet(req: operations.ResellerSubscriptionsGetRequest, security: operations.ResellerSubscriptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsGetResponse>;
    /**
     * Creates or transfer a subscription. Create a subscription for a customer's account that you ordered using the [Order a new customer account](/admin-sdk/reseller/v1/reference/customers/insert.html) method. For more information about creating a subscription for different payment plans, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#create_subscription).\ If you did not order the customer's account using the customer insert method, use the customer's `customerAuthToken` when creating a subscription for that customer. If transferring a G Suite subscription with an associated Google Drive or Google Vault subscription, use the [batch operation](/admin-sdk/reseller/v1/how-tos/batch.html) to transfer all of these subscriptions. For more information, see how to [transfer subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#transfer_a_subscription).
     */
    resellerSubscriptionsInsert(req: operations.ResellerSubscriptionsInsertRequest, security: operations.ResellerSubscriptionsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsInsertResponse>;
    /**
     * Lists of subscriptions managed by the reseller. The list can be all subscriptions, all of a customer's subscriptions, or all of a customer's transferable subscriptions. Optionally, this method can filter the response by a `customerNamePrefix`. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions).
     */
    resellerSubscriptionsList(req: operations.ResellerSubscriptionsListRequest, security: operations.ResellerSubscriptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsListResponse>;
    /**
     * Immediately move a 30-day free trial subscription to a paid service subscription. This method is only applicable if a payment plan has already been set up for the 30-day trial subscription. For more information, see [manage subscriptions](/admin-sdk/reseller/v1/how-tos/manage_subscriptions#paid_service).
     */
    resellerSubscriptionsStartPaidService(req: operations.ResellerSubscriptionsStartPaidServiceRequest, security: operations.ResellerSubscriptionsStartPaidServiceSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsStartPaidServiceResponse>;
    /**
     * Suspends an active subscription. You can use this method to suspend a paid subscription that is currently in the `ACTIVE` state. * For `FLEXIBLE` subscriptions, billing is paused. * For `ANNUAL_MONTHLY_PAY` or `ANNUAL_YEARLY_PAY` subscriptions: * Suspending the subscription does not change the renewal date that was originally committed to. * A suspended subscription does not renew. If you activate the subscription after the original renewal date, a new annual subscription will be created, starting on the day of activation. We strongly encourage you to suspend subscriptions only for short periods of time as suspensions over 60 days may result in the subscription being cancelled.
     */
    resellerSubscriptionsSuspend(req: operations.ResellerSubscriptionsSuspendRequest, security: operations.ResellerSubscriptionsSuspendSecurity, config?: AxiosRequestConfig): Promise<operations.ResellerSubscriptionsSuspendResponse>;
}
