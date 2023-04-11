import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for the purchases.subscriptions.defer API.
 */
export declare class SubscriptionPurchasesDeferResponse extends SpeakeasyBase {
    /**
     * The new expiry time for the subscription in milliseconds since the Epoch.
     */
    newExpiryTimeMillis?: string;
}
