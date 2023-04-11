import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
 */
export declare class VoidedPurchase extends SpeakeasyBase {
    /**
     * This kind represents a voided purchase object in the androidpublisher service.
     */
    kind?: string;
    /**
     * The time at which the purchase was made, in milliseconds since the epoch (Jan 1, 1970).
     */
    purchaseTimeMillis?: string;
    /**
     * The token which uniquely identifies a one-time purchase or subscription. To uniquely identify subscription renewals use order_id (available starting from version 3 of the API).
     */
    purchaseToken?: string;
    /**
     * The time at which the purchase was canceled/refunded/charged-back, in milliseconds since the epoch (Jan 1, 1970).
     */
    voidedTimeMillis?: string;
}
