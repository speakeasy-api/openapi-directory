import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfatotpenrollmentrequestinfo";
/**
 * Finishes enrolling a second factor for the user.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest extends SpeakeasyBase {
    /**
     * Display name which is entered by users to distinguish between different second factors with same type or different type.
     */
    displayName?: string;
    /**
     * Required. ID token.
     */
    idToken?: string;
    /**
     * Phone Verification info for a FinalizeMfa request.
     */
    phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant that the user enrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string;
    /**
     * Mfa request info specific to TOTP auth for FinalizeMfa.
     */
    totpVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo;
}
