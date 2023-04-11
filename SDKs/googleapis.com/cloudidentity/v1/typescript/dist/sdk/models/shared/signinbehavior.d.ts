import { SpeakeasyBase } from "../../../internal/utils";
/**
 * When to redirect sign-ins to the IdP.
 */
export declare enum SignInBehaviorRedirectConditionEnum {
    RedirectConditionUnspecified = "REDIRECT_CONDITION_UNSPECIFIED",
    Never = "NEVER"
}
/**
 * Controls sign-in behavior.
 */
export declare class SignInBehavior extends SpeakeasyBase {
    /**
     * When to redirect sign-ins to the IdP.
     */
    redirectCondition?: SignInBehaviorRedirectConditionEnum;
}
