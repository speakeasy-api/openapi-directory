import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2startmfaphoneresponseinfo";
import { GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo } from "./googlecloudidentitytoolkitv2startmfatotpenrollmentresponseinfo";
/**
 * StartMfaEnrollment response.
 */
export declare class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse extends SpeakeasyBase {
    /**
     * Phone Verification info for a StartMfa response.
     */
    phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo;
    /**
     * Mfa response info specific to TOTP auth for StartMfa.
     */
    totpSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo;
}
