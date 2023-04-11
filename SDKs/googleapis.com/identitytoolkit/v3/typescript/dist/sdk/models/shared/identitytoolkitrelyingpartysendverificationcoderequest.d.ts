import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for Identitytoolkit-SendVerificationCode
 */
export declare class IdentitytoolkitRelyingpartySendVerificationCodeRequest extends SpeakeasyBase {
    /**
     * Receipt of successful app token validation with APNS.
     */
    iosReceipt?: string;
    /**
     * Secret delivered to iOS app via APNS.
     */
    iosSecret?: string;
    /**
     * The phone number to send the verification code to in E.164 format.
     */
    phoneNumber?: string;
    /**
     * Recaptcha solution.
     */
    recaptchaToken?: string;
}
