import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-only password status.
 */
export declare class PasswordStatus extends SpeakeasyBase {
    /**
     * If true, user does not have login privileges.
     */
    locked?: boolean;
    /**
     * The expiration time of the current password.
     */
    passwordExpirationTime?: string;
}
