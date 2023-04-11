import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruledoublerange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange } from "./enterprisecrmeventbusprotoparamspecentryvalidationruleintrange";
import { EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex } from "./enterprisecrmeventbusprotoparamspecentryvalidationrulestringregex";
export declare class EnterpriseCrmEventbusProtoParamSpecEntryValidationRule extends SpeakeasyBase {
    /**
     * Range used to validate doubles and floats.
     */
    doubleRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;
    /**
     * Range used to validate longs and ints.
     */
    intRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;
    /**
     * Rule used to validate strings.
     */
    stringRegex?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
}
