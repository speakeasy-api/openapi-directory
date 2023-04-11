import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the redirect action.
 */
export declare enum SecurityPolicyRuleRedirectOptionsTypeEnum {
    External302 = "EXTERNAL_302",
    GoogleRecaptcha = "GOOGLE_RECAPTCHA"
}
export declare class SecurityPolicyRuleRedirectOptions extends SpeakeasyBase {
    /**
     * Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.
     */
    target?: string;
    /**
     * Type of the redirect action.
     */
    type?: SecurityPolicyRuleRedirectOptionsTypeEnum;
}
