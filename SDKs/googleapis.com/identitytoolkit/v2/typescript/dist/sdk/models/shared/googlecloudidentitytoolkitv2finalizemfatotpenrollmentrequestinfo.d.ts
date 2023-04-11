import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mfa request info specific to TOTP auth for FinalizeMfa.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo extends SpeakeasyBase {
    /**
     * An opaque string that represents the enrollment session.
     */
    sessionInfo?: string;
    /**
     * User-entered verification code.
     */
    verificationCode?: string;
}
