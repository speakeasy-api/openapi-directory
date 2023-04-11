import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";
/**
 * Represents a targeting rule of the form: User never had {scope} before.
 */
export declare class AcquisitionTargetingRule extends SpeakeasyBase {
    /**
     * Defines the scope of subscriptions which a targeting rule can match to target offers to users based on past or current entitlement.
     */
    scope?: TargetingRuleScope;
}
