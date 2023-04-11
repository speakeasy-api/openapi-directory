import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A ProductPurchase resource indicates the status of a user's inapp product purchase.
 */
export declare class ProductPurchase extends SpeakeasyBase {
    /**
     * The acknowledgement state of the inapp product. Possible values are: 0. Yet to be acknowledged 1. Acknowledged
     */
    acknowledgementState?: number;
    /**
     * The consumption state of the inapp product. Possible values are: 0. Yet to be consumed 1. Consumed
     */
    consumptionState?: number;
    /**
     * A developer-specified string that contains supplemental information about an order.
     */
    developerPayload?: string;
    /**
     * This kind represents an inappPurchase object in the androidpublisher service.
     */
    kind?: string;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's account in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedaccountid when the purchase was made.
     */
    obfuscatedExternalAccountId?: string;
    /**
     * An obfuscated version of the id that is uniquely associated with the user's profile in your app. Only present if specified using https://developer.android.com/reference/com/android/billingclient/api/BillingFlowParams.Builder#setobfuscatedprofileid when the purchase was made.
     */
    obfuscatedExternalProfileId?: string;
    /**
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string;
    /**
     * The inapp product SKU. May not be present.
     */
    productId?: string;
    /**
     * The purchase state of the order. Possible values are: 0. Purchased 1. Canceled 2. Pending
     */
    purchaseState?: number;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTimeMillis?: string;
    /**
     * The purchase token generated to identify this purchase. May not be present.
     */
    purchaseToken?: string;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are: 0. Test (i.e. purchased from a license testing account) 1. Promo (i.e. purchased using a promo code) 2. Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number;
    /**
     * The quantity associated with the purchase of the inapp product. If not present, the quantity is 1.
     */
    quantity?: number;
    /**
     * ISO 3166-1 alpha-2 billing region code of the user at the time the product was granted.
     */
    regionCode?: string;
}
