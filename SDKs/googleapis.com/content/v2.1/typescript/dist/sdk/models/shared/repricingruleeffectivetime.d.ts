import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleEffectiveTimeFixedTimePeriod } from "./repricingruleeffectivetimefixedtimeperiod";
export declare class RepricingRuleEffectiveTime extends SpeakeasyBase {
    /**
     * A list of fixed time periods combined with OR. The maximum number of entries is limited to 5.
     */
    fixedTimePeriods?: RepricingRuleEffectiveTimeFixedTimePeriod[];
}
