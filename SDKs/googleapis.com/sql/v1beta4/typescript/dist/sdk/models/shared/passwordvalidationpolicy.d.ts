import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The complexity of the password.
 */
export declare enum PasswordValidationPolicyComplexityEnum {
    ComplexityUnspecified = "COMPLEXITY_UNSPECIFIED",
    ComplexityDefault = "COMPLEXITY_DEFAULT"
}
/**
 * Database instance local user password validation policy
 */
export declare class PasswordValidationPolicy extends SpeakeasyBase {
    /**
     * The complexity of the password.
     */
    complexity?: PasswordValidationPolicyComplexityEnum;
    /**
     * Disallow username as a part of the password.
     */
    disallowUsernameSubstring?: boolean;
    /**
     * Whether the password policy is enabled or not.
     */
    enablePasswordPolicy?: boolean;
    /**
     * Minimum number of characters allowed.
     */
    minLength?: number;
    /**
     * Minimum interval after which the password can be changed. This flag is only supported for PostgreSQL.
     */
    passwordChangeInterval?: string;
    /**
     * Number of previous passwords that cannot be reused.
     */
    reuseInterval?: number;
}
