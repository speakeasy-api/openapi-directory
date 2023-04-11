import { SpeakeasyBase } from "../../../internal/utils";
import { AddressVerificationData } from "./addressverificationdata";
import { EmailVerificationData } from "./emailverificationdata";
import { PhoneVerificationData } from "./phoneverificationdata";
/**
 * Method to verify the location.
 */
export declare enum VerificationOptionVerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}
/**
 * The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
 */
export declare class VerificationOption extends SpeakeasyBase {
    /**
     * Display data for verifications through postcard.
     */
    addressData?: AddressVerificationData;
    /**
     * Display data for verifications through email.
     */
    emailData?: EmailVerificationData;
    /**
     * Display Data for verifications through phone, e.g. phone call, sms.
     */
    phoneData?: PhoneVerificationData;
    /**
     * Method to verify the location.
     */
    verificationMethod?: VerificationOptionVerificationMethodEnum;
}
