import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Email address to send the reset password link to
 */
export declare class ResetPasswordRequest extends SpeakeasyBase {
    /**
     * the email address of the user requesting the reset password
     */
    email: string;
}
