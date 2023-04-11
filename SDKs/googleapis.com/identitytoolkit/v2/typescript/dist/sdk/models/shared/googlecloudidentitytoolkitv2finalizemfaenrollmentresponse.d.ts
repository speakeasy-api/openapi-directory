import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";
/**
 * FinalizeMfaEnrollment response.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse extends SpeakeasyBase {
    /**
     * ID token updated to reflect MFA enrollment.
     */
    idToken?: string;
    /**
     * Phone Verification info for a FinalizeMfa response.
     */
    phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    /**
     * Refresh token updated to reflect MFA enrollment.
     */
    refreshToken?: string;
    /**
     * Mfa response info specific to TOTP auth for FinalizeMfa.
     */
    totpAuthInfo?: Record<string, any>;
}
