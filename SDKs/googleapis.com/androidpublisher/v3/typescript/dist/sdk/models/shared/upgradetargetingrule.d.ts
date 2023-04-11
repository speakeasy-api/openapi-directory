import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";
/**
 * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
 */
export declare class UpgradeTargetingRule extends SpeakeasyBase {
    /**
     * The specific billing period duration, specified in ISO 8601 format, that a user must be currently subscribed to to be eligible for this rule. If not specified, users subscribed to any billing period are matched.
     */
    billingPeriodDuration?: string;
    /**
     * Limit this offer to only once per user. If set to true, a user can never be eligible for this offer again if they ever subscribed to this offer.
     */
    oncePerUser?: boolean;
    /**
     * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
     */
    scope?: TargetingRuleScope;
}
