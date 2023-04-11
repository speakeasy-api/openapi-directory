import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An InappPurchase resource indicates the status of a user's inapp product purchase.
 */
export declare class InappPurchase extends SpeakeasyBase {
    /**
     * The consumption state of the inapp product. Possible values are:
     *
     * @remarks
     * - Yet to be consumed
     * - Consumed
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
     * The order id associated with the purchase of the inapp product.
     */
    orderId?: string;
    /**
     * The purchase state of the order. Possible values are:
     *
     * @remarks
     * - Purchased
     * - Canceled
     * - Pending
     */
    purchaseState?: number;
    /**
     * The time the product was purchased, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTime?: string;
    /**
     * The type of purchase of the inapp product. This field is only set if this purchase was not made using the standard in-app billing flow. Possible values are:
     *
     * @remarks
     * - Test (i.e. purchased from a license testing account)
     * - Promo (i.e. purchased using a promo code)
     * - Rewarded (i.e. from watching a video ad instead of paying)
     */
    purchaseType?: number;
}
