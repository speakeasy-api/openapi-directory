import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo } from "./googlecloudidentitytoolkitv2startmfaphonerequestinfo";
/**
 * Starts multi-factor sign-in by sending the multi-factor auth challenge.
 */
export declare class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest extends SpeakeasyBase {
    /**
     * Required. MFA enrollment id from the user's list of current MFA enrollments.
     */
    mfaEnrollmentId?: string;
    /**
     * Required. Pending credential from first factor sign-in.
     */
    mfaPendingCredential?: string;
    /**
     * App Verification info for a StartMfa request.
     */
    phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo;
    /**
     * The ID of the Identity Platform tenant the user is signing in to. If not set, the user will sign in to the default Identity Platform project.
     */
    tenantId?: string;
}
