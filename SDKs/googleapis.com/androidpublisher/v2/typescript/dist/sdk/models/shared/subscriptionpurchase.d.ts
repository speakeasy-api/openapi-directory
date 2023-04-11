import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionCancelSurveyResult } from "./subscriptioncancelsurveyresult";
import { SubscriptionPriceChange } from "./subscriptionpricechange";
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
 */
export declare class SubscriptionPurchase extends SpeakeasyBase {
    /**
     * Whether the subscription will automatically be renewed when it reaches its current expiry time.
     */
    autoRenewing?: boolean;
    /**
     * The reason why a subscription was canceled or is not auto-renewing. Possible values are:
     *
     * @remarks
     * - User canceled the subscription
     * - Subscription was canceled by the system, for example because of a billing problem
     * - Subscription was replaced with a new subscription
     * - Subscription was canceled by the developer
     */
    cancelReason?: number;
    /**
     * Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).
     */
    cancelSurveyResult?: SubscriptionCancelSurveyResult;
    /**
     * ISO 3166-1 alpha-2 billing country/region code of the user at the time the subscription was granted.
     */
    countryCode?: string;
    /**
     * A developer-specified string that contains supplemental information about an order.
     */
    developerPayload?: string;
    /**
     * The email address of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    emailAddress?: string;
    /**
     * Time at which the subscription will expire, in milliseconds since the Epoch.
     */
    expiryTimeMillis?: string;
    /**
     * The family name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    familyName?: string;
    /**
     * The given name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    givenName?: string;
    /**
     * This kind represents a subscriptionPurchase object in the androidpublisher service.
     */
    kind?: string;
    /**
     * The purchase token of the originating purchase if this subscription is one of the following:
     *
     * @remarks
     * - Re-signup of a canceled but non-lapsed subscription
     * - Upgrade/downgrade from a previous subscription  For example, suppose a user originally signs up and you receive purchase token X, then the user cancels and goes through the resignup flow (before their subscription lapses) and you receive purchase token Y, and finally the user upgrades their subscription and you receive purchase token Z. If you call this API with purchase token Z, this field will be set to Y. If you call this API with purchase token Y, this field will be set to X. If you call this API with purchase token X, this field will not be set.
     */
    linkedPurchaseToken?: string;
    /**
     * The order id of the latest recurring order associated with the purchase of the subscription.
     */
    orderId?: string;
    /**
     * The payment state of the subscription. Possible values are:
     *
     * @remarks
     * - Payment pending
     * - Payment received
     * - Free trial
     * - Pending deferred upgrade/downgrade
     */
    paymentState?: number;
    /**
     * Price of the subscription, not including tax. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000.
     */
    priceAmountMicros?: string;
    /**
     * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
     */
    priceChange?: SubscriptionPriceChange;
    /**
     * ISO 4217 currency code for the subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is "GBP".
     */
    priceCurrencyCode?: string;
    /**
     * The Google profile id of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    profileId?: string;
    /**
     * The profile name of the user when the subscription was purchased. Only present for purchases made with 'Subscribe with Google'.
     */
    profileName?: string;
    /**
     * The type of purchase of the subscription. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
     *
     * @remarks
     * - Test (i.e. purchased from a license testing account)
     * - Promo (i.e. purchased using a promo code)
     */
    purchaseType?: number;
    /**
     * Time at which the subscription was granted, in milliseconds since the Epoch.
     */
    startTimeMillis?: string;
    /**
     * The time at which the subscription was canceled by the user, in milliseconds since the epoch. Only present if cancelReason is 0.
     */
    userCancellationTimeMillis?: string;
}
