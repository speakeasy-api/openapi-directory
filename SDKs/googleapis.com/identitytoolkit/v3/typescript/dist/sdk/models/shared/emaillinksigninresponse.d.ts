import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of email signIn.
 */
export declare class EmailLinkSigninResponse extends SpeakeasyBase {
    /**
     * The user's email.
     */
    email?: string;
    /**
     * Expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The STS id token to login the newly signed in user.
     */
    idToken?: string;
    /**
     * Whether the user is new.
     */
    isNewUser?: boolean;
    /**
     * The fixed string "identitytoolkit#EmailLinkSigninResponse".
     */
    kind?: string;
    /**
     * The RP local ID of the user.
     */
    localId?: string;
    /**
     * The refresh token for the signed in user.
     */
    refreshToken?: string;
}
