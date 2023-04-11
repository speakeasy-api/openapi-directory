import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo } from "./googlecloudidentitytoolkitv2finalizemfaphoneresponseinfo";
/**
 * FinalizeMfaSignIn response.
 */
export declare class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse extends SpeakeasyBase {
    /**
     * ID token for the authenticated user.
     */
    idToken?: string;
    /**
     * Phone Verification info for a FinalizeMfa response.
     */
    phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo;
    /**
     * Refresh token for the authenticated user.
     */
    refreshToken?: string;
}
