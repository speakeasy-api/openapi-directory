import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The match operator for the field.
 */
export declare enum SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum {
    Contains = "CONTAINS",
    EndsWith = "ENDS_WITH",
    Equals = "EQUALS",
    EqualsAny = "EQUALS_ANY",
    StartsWith = "STARTS_WITH"
}
export declare class SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams extends SpeakeasyBase {
    /**
     * The match operator for the field.
     */
    op?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParamsOpEnum;
    /**
     * The value of the field.
     */
    val?: string;
}
