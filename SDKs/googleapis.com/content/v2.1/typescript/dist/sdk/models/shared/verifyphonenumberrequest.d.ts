import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Verification method used to receive verification code.
 */
export declare enum VerifyPhoneNumberRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}
/**
 * Request message for the VerifyPhoneNumber method.
 */
export declare class VerifyPhoneNumberRequest extends SpeakeasyBase {
    /**
     * Verification method used to receive verification code.
     */
    phoneVerificationMethod?: VerifyPhoneNumberRequestPhoneVerificationMethodEnum;
    /**
     * The verification code that was sent to the phone number for validation.
     */
    verificationCode?: string;
    /**
     * The verification ID returned by `requestphoneverification`.
     */
    verificationId?: string;
}
