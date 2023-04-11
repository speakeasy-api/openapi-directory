import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Tokeninfo extends SpeakeasyBase {
    /**
     * Who is the intended audience for this token. In general the same as issued_to.
     */
    audience?: string;
    /**
     * The email address of the user. Present only if the email scope is present in the request.
     */
    email?: string;
    /**
     * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
     */
    emailVerified?: boolean;
    /**
     * The expiry time of the token, as number of seconds left until expiry.
     */
    expiresIn?: number;
    /**
     * The issue time of the token, as number of seconds.
     */
    issuedAt?: number;
    /**
     * To whom was the token issued to. In general the same as audience.
     */
    issuedTo?: string;
    /**
     * Who issued the token.
     */
    issuer?: string;
    /**
     * Nonce of the id token.
     */
    nonce?: string;
    /**
     * The space separated list of scopes granted to this token.
     */
    scope?: string;
    /**
     * The obfuscated user id.
     */
    userId?: string;
    /**
     * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
     */
    verifiedEmail?: boolean;
}
