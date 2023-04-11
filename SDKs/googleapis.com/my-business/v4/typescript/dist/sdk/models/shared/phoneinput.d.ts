import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input for PHONE_CALL/SMS verification.
 */
export declare class PhoneInput extends SpeakeasyBase {
    /**
     * The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options.
     */
    phoneNumber?: string;
}
