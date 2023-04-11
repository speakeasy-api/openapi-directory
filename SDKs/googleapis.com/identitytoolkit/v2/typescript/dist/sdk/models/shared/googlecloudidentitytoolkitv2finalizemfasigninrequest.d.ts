import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2finalizemfaphonerequestinfo";
import { GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo } from "./googlecloudidentitytoolkitv2mfatotpsigninrequestinfo";
/**
 * Finalizes sign-in by verifying MFA challenge.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest extends SpeakeasyBase {
    /**
     * The MFA enrollment ID from the user's list of current MFA enrollments.
     */
    mfaEnrollmentId?: string;
    /**
     * Required. Pending credential from first factor sign-in.
     */
    mfaPendingCredential?: string;
    /**
     * Phone Verification info for a FinalizeMfa request.
     */
    phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.
     */
    tenantId?: string;
    /**
     * TOTP verification info for FinalizeMfaSignInRequest.
     */
    totpVerificationInfo?: GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo;
}
