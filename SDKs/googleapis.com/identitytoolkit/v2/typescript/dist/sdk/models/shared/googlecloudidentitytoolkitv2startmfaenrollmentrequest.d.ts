import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";
/**
 * Sends MFA enrollment verification SMS for a user.
 */
export declare class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest extends SpeakeasyBase {
    /**
     * Required. User's ID token.
     */
    idToken?: string;
    /**
     * App Verification info for a StartMfa request.
     */
    phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string;
    /**
     * Mfa request info specific to TOTP auth for StartMfa.
     */
    totpEnrollmentInfo?: Record<string, any>;
}
