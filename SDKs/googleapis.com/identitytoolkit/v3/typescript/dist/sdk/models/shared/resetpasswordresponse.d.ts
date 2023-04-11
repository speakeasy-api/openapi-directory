import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of resetting the password.
 */
export declare class ResetPasswordResponse extends SpeakeasyBase {
    /**
     * The user's email. If the out-of-band code is for email recovery, the user's original email.
     */
    email?: string;
    /**
     * The fixed string "identitytoolkit#ResetPasswordResponse".
     */
    kind?: string;
    /**
     * If the out-of-band code is for email recovery, the user's new email.
     */
    newEmail?: string;
    /**
     * The request type.
     */
    requestType?: string;
}
