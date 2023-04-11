import { SpeakeasyBase } from "../../../internal/utils";
import { PasswordStatus } from "./passwordstatus";
/**
 * User level password validation policy.
 */
export declare class UserPasswordValidationPolicy extends SpeakeasyBase {
    /**
     * Number of failed login attempts allowed before user get locked.
     */
    allowedFailedAttempts?: number;
    /**
     * If true, failed login attempts check will be enabled.
     */
    enableFailedAttemptsCheck?: boolean;
    /**
     * If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
     */
    enablePasswordVerification?: boolean;
    /**
     * Expiration duration after password is updated.
     */
    passwordExpirationDuration?: string;
    /**
     * Read-only password status.
     */
    status?: PasswordStatus;
}
