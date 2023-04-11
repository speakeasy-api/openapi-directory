import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2AutoRetrievalInfo } from "./googlecloudidentitytoolkitv2autoretrievalinfo";
/**
 * App Verification info for a StartMfa request.
 */
export declare class GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo extends SpeakeasyBase {
    /**
     * The information required to auto-retrieve an SMS.
     */
    autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo;
    /**
     * iOS only. Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string;
    /**
     * iOS only. Secret delivered to iOS app via APNS.
     */
    iosSecret?: string;
    /**
     * Required for enrollment. Phone number to be enrolled as MFA.
     */
    phoneNumber?: string;
    /**
     * Android only. Used to assert application identity in place of a recaptcha token (or safety net token). A Play Integrity Token can be generated via the [PlayIntegrity API] (https://developer.android.com/google/play/integrity) with applying SHA256 to the `phone_number` field as the nonce.
     */
    playIntegrityToken?: string;
    /**
     * Web only. Recaptcha solution.
     */
    recaptchaToken?: string;
    /**
     * Android only. Used to assert application identity in place of a recaptcha token. A SafetyNet Token can be generated via the [SafetyNet Android Attestation API](https://developer.android.com/training/safetynet/attestation.html), with the Base64 encoding of the `phone_number` field as the nonce.
     */
    safetyNetToken?: string;
}
