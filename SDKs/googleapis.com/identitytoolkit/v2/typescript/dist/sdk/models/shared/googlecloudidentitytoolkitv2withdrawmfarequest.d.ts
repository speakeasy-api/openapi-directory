import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Withdraws MFA.
 */
export declare class GoogleCloudIdentitytoolkitV2WithdrawMfaRequest extends SpeakeasyBase {
    /**
     * Required. User's ID token.
     */
    idToken?: string;
    /**
     * Required. MFA enrollment id from a current MFA enrollment.
     */
    mfaEnrollmentId?: string;
    /**
     * The ID of the Identity Platform tenant that the user unenrolling MFA belongs to. If not set, the user belongs to the default Identity Platform project.
     */
    tenantId?: string;
}
