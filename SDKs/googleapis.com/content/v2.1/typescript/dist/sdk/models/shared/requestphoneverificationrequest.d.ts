import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Verification method to receive verification code.
 */
export declare enum RequestPhoneVerificationRequestPhoneVerificationMethodEnum {
    PhoneVerificationMethodUnspecified = "PHONE_VERIFICATION_METHOD_UNSPECIFIED",
    Sms = "SMS",
    PhoneCall = "PHONE_CALL"
}
/**
 * Request message for the RequestPhoneVerification method.
 */
export declare class RequestPhoneVerificationRequest extends SpeakeasyBase {
    /**
     * Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided.
     */
    languageCode?: string;
    /**
     * Phone number to be verified.
     */
    phoneNumber?: string;
    /**
     * Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes.
     */
    phoneRegionCode?: string;
    /**
     * Verification method to receive verification code.
     */
    phoneVerificationMethod?: RequestPhoneVerificationRequestPhoneVerificationMethodEnum;
}
