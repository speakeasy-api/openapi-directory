import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDeferralInfo } from "./subscriptiondeferralinfo";
export declare class SubscriptionPurchasesDeferRequest extends SpeakeasyBase {
    /**
     * A SubscriptionDeferralInfo contains the data needed to defer a subscription purchase to a future expiry time.
     */
    deferralInfo?: SubscriptionDeferralInfo;
}
