import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of getting a code for user confirmation (reset password, change email etc.).
 */
export declare class GetOobConfirmationCodeResponse extends SpeakeasyBase {
    /**
     * The email address that the email is sent to.
     */
    email?: string;
    /**
     * The fixed string "identitytoolkit#GetOobConfirmationCodeResponse".
     */
    kind?: string;
    /**
     * The code to be send to the user.
     */
    oobCode?: string;
}
