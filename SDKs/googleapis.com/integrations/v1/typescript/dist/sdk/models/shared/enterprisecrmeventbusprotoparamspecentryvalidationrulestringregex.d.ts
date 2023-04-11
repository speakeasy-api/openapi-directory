import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rule used to validate strings.
 */
export declare class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex extends SpeakeasyBase {
    /**
     * Whether the regex matcher is applied exclusively (if true, matching values will be rejected).
     */
    exclusive?: boolean;
    /**
     * The regex applied to the input value(s).
     */
    regex?: string;
}
