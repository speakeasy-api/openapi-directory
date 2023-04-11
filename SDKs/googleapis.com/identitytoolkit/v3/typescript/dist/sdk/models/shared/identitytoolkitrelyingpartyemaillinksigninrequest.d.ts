import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to sign in with email.
 */
export declare class IdentitytoolkitRelyingpartyEmailLinkSigninRequest extends SpeakeasyBase {
    /**
     * The email address of the user.
     */
    email?: string;
    /**
     * Token for linking flow.
     */
    idToken?: string;
    /**
     * The confirmation code.
     */
    oobCode?: string;
}
