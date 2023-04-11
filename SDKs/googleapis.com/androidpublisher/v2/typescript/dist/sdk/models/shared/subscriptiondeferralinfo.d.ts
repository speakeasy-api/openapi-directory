import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
 */
export declare class SubscriptionDeferralInfo extends SpeakeasyBase {
    /**
     * The desired next expiry time to assign to the subscription, in milliseconds since the Epoch. The given time must be later/greater than the current expiry time for the subscription.
     */
    desiredExpiryTimeMillis?: string;
    /**
     * The expected expiry time for the subscription. If the current expiry time for the subscription is not the value specified here, the deferral will not occur.
     */
    expectedExpiryTimeMillis?: string;
}
