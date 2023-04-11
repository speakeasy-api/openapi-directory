import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of stats based rule.
 */
export declare class RepricingRuleStatsBasedRule extends SpeakeasyBase {
    /**
     * The percent change against the price target. Valid from 0 to 100 inclusively.
     */
    percentageDelta?: number;
    /**
     * The price delta against the above price target. A positive value means the price should be adjusted to be above statistical measure, and a negative value means below. Currency code must not be included.
     */
    priceDelta?: string;
}
