import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Phone Verification info for a FinalizeMfa response.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo extends SpeakeasyBase {
    /**
     * Android only. Long-lived replacement for valid code tied to android device.
     */
    androidVerificationProof?: string;
    /**
     * Android only. Expiration time of verification proof in seconds.
     */
    androidVerificationProofExpireTime?: string;
    /**
     * For Android verification proof.
     */
    phoneNumber?: string;
}
