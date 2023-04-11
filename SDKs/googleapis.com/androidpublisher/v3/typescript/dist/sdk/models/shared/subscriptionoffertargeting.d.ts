import { SpeakeasyBase } from "../../../internal/utils";
import { AcquisitionTargetingRule } from "./acquisitiontargetingrule";
import { UpgradeTargetingRule } from "./upgradetargetingrule";
/**
 * Defines the rule a user needs to satisfy to receive this offer.
 */
export declare class SubscriptionOfferTargeting extends SpeakeasyBase {
    /**
     * Represents a targeting rule of the form: User never had {scope} before.
     */
    acquisitionRule?: AcquisitionTargetingRule;
    /**
     * Represents a targeting rule of the form: User currently has {scope} [with billing period {billing_period}].
     */
    upgradeRule?: UpgradeTargetingRule;
}
