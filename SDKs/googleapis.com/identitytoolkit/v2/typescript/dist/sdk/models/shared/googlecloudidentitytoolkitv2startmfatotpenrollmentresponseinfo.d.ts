import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mfa response info specific to TOTP auth for StartMfa.
 */
export declare class GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo extends SpeakeasyBase {
    /**
     * The time by which the enrollment must finish.
     */
    finalizeEnrollmentTime?: string;
    /**
     * The hashing algorithm used to generate the verification code.
     */
    hashingAlgorithm?: string;
    /**
     * Duration in seconds at which the verification code will change.
     */
    periodSec?: number;
    /**
     * An encoded string that represents the enrollment session.
     */
    sessionInfo?: string;
    /**
     * A base 32 encoded string that represents the shared TOTP secret. The base 32 encoding is the one specified by [RFC4648#section-6](https://datatracker.ietf.org/doc/html/rfc4648#section-6). (This is the same as the base 32 encoding from [RFC3548#section-5](https://datatracker.ietf.org/doc/html/rfc3548#section-5).)
     */
    sharedSecretKey?: string;
    /**
     * The length of the verification code that needs to be generated.
     */
    verificationCodeLength?: number;
}
