import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for the RequestPhoneVerification method.
 */
export declare class RequestPhoneVerificationResponse extends SpeakeasyBase {
    /**
     * The verification ID to use in subsequent calls to `verifyphonenumber`.
     */
    verificationId?: string;
}
