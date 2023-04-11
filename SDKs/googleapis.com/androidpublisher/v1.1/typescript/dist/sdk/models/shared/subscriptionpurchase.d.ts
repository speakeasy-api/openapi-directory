import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
 */
export declare class SubscriptionPurchase extends SpeakeasyBase {
    /**
     * Whether the subscription will automatically be renewed when it reaches its current expiry time.
     */
    autoRenewing?: boolean;
    /**
     * Time at which the subscription was granted, in milliseconds since the Epoch.
     */
    initiationTimestampMsec?: string;
    /**
     * This kind represents a subscriptionPurchase object in the androidpublisher service.
     */
    kind?: string;
    /**
     * Time at which the subscription will expire, in milliseconds since the Epoch.
     */
    validUntilTimestampMsec?: string;
}
