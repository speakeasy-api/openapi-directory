import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Phone Verification info for a FinalizeMfa request.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo extends SpeakeasyBase {
    /**
     * Android only. Uses for "instant" phone number verification though GmsCore.
     */
    androidVerificationProof?: string;
    /**
     * User-entered verification code.
     */
    code?: string;
    /**
     * Required if Android verification proof is presented.
     */
    phoneNumber?: string;
    /**
     * An opaque string that represents the enrollment session.
     */
    sessionInfo?: string;
}
