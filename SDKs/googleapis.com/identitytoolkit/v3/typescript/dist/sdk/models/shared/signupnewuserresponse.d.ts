import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response of signing up new user, creating anonymous user or anonymous user reauth.
 */
export declare class SignupNewUserResponse extends SpeakeasyBase {
    /**
     * The name of the user.
     */
    displayName?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * If idToken is STS id token, then this field will be expiration time of STS id token in seconds.
     */
    expiresIn?: string;
    /**
     * The Gitkit id token to login the newly sign up user.
     */
    idToken?: string;
    /**
     * The fixed string "identitytoolkit#SignupNewUserResponse".
     */
    kind?: string;
    /**
     * The RP local ID of the user.
     */
    localId?: string;
    /**
     * If idToken is STS id token, then this field will be refresh token.
     */
    refreshToken?: string;
}
