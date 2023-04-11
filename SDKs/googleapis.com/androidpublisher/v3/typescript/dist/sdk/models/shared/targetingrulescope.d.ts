import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
 */
export declare class TargetingRuleScope extends SpeakeasyBase {
    /**
     * The scope of the current targeting rule is the subscription with the specified subscription ID. Must be a subscription within the same parent app.
     */
    specificSubscriptionInApp?: string;
}
