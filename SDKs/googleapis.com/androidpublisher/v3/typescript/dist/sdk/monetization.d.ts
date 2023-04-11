import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Monetization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Calculates the region prices, using today's exchange rate and country-specific pricing patterns, based on the price in the request for a set of regions.
     */
    androidpublisherMonetizationConvertRegionPrices(req: operations.AndroidpublisherMonetizationConvertRegionPricesRequest, security: operations.AndroidpublisherMonetizationConvertRegionPricesSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationConvertRegionPricesResponse>;
    /**
     * Archives a subscription. Can only be done if at least one base plan was active in the past, and no base plan is available for new or existing subscribers currently. This action is irreversible, and the subscription ID will remain reserved.
     */
    androidpublisherMonetizationSubscriptionsArchive(req: operations.AndroidpublisherMonetizationSubscriptionsArchiveRequest, security: operations.AndroidpublisherMonetizationSubscriptionsArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsArchiveResponse>;
    /**
     * Activates a base plan. Once activated, base plans will be available to new subscribers.
     */
    androidpublisherMonetizationSubscriptionsBasePlansActivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansActivateResponse>;
    /**
     * Deactivates a base plan. Once deactivated, the base plan will become unavailable to new subscribers, but existing subscribers will maintain their subscription
     */
    androidpublisherMonetizationSubscriptionsBasePlansDeactivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeactivateResponse>;
    /**
     * Deletes a base plan. Can only be done for draft base plans. This action is irreversible.
     */
    androidpublisherMonetizationSubscriptionsBasePlansDelete(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansDeleteResponse>;
    /**
     * Migrates subscribers who are receiving an historical subscription price to the currently-offered price for the specified region. Requests will cause price change notifications to be sent to users who are currently receiving an historical price older than the supplied timestamp. Subscribers who do not agree to the new price will have their subscription ended at the next renewal.
     */
    androidpublisherMonetizationSubscriptionsBasePlansMigratePrices(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansMigratePricesResponse>;
    /**
     * Activates a subscription offer. Once activated, subscription offers will be available to new subscribers.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersActivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersActivateResponse>;
    /**
     * Creates a new subscription offer. Only auto-renewing base plans can have subscription offers. The offer state will be DRAFT until it is activated.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersCreate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse>;
    /**
     * Deactivates a subscription offer. Once deactivated, existing subscribers will maintain their subscription, but the offer will become unavailable to new subscribers.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersDeactivate(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeactivateResponse>;
    /**
     * Deletes a subscription offer. Can only be done for draft offers. This action is irreversible.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersDelete(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersDeleteResponse>;
    /**
     * Reads a single offer
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersGet(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersGetResponse>;
    /**
     * Lists all offers under a given subscription.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersList(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersListResponse>;
    /**
     * Updates an existing subscription offer.
     */
    androidpublisherMonetizationSubscriptionsBasePlansOffersPatch(req: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchRequest, security: operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsBasePlansOffersPatchResponse>;
    /**
     * Creates a new subscription. Newly added base plans will remain in draft state until activated.
     */
    androidpublisherMonetizationSubscriptionsCreate(req: operations.AndroidpublisherMonetizationSubscriptionsCreateRequest, security: operations.AndroidpublisherMonetizationSubscriptionsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsCreateResponse>;
    /**
     * Deletes a subscription. A subscription can only be deleted if it has never had a base plan published.
     */
    androidpublisherMonetizationSubscriptionsDelete(req: operations.AndroidpublisherMonetizationSubscriptionsDeleteRequest, security: operations.AndroidpublisherMonetizationSubscriptionsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsDeleteResponse>;
    /**
     * Reads a single subscription.
     */
    androidpublisherMonetizationSubscriptionsGet(req: operations.AndroidpublisherMonetizationSubscriptionsGetRequest, security: operations.AndroidpublisherMonetizationSubscriptionsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsGetResponse>;
    /**
     * Lists all subscriptions under a given app.
     */
    androidpublisherMonetizationSubscriptionsList(req: operations.AndroidpublisherMonetizationSubscriptionsListRequest, security: operations.AndroidpublisherMonetizationSubscriptionsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsListResponse>;
    /**
     * Updates an existing subscription.
     */
    androidpublisherMonetizationSubscriptionsPatch(req: operations.AndroidpublisherMonetizationSubscriptionsPatchRequest, security: operations.AndroidpublisherMonetizationSubscriptionsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherMonetizationSubscriptionsPatchResponse>;
}
