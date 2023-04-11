import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The scope of non-compliant password.
 */
export declare enum PasswordPoliciesContextPasswordPolicyScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeDevice = "SCOPE_DEVICE",
    ScopeProfile = "SCOPE_PROFILE"
}
/**
 * Additional context for non-compliance related to password policies.
 */
export declare class PasswordPoliciesContext extends SpeakeasyBase {
    /**
     * The scope of non-compliant password.
     */
    passwordPolicyScope?: PasswordPoliciesContextPasswordPolicyScopeEnum;
}
