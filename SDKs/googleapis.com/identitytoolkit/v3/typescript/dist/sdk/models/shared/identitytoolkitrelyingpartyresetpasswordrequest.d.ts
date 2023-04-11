import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to reset the password.
 */
export declare class IdentitytoolkitRelyingpartyResetPasswordRequest extends SpeakeasyBase {
    /**
     * The email address of the user.
     */
    email?: string;
    /**
     * The new password inputted by the user.
     */
    newPassword?: string;
    /**
     * The old password inputted by the user.
     */
    oldPassword?: string;
    /**
     * The confirmation code.
     */
    oobCode?: string;
}
