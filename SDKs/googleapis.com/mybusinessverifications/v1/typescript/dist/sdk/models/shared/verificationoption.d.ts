import { SpeakeasyBase } from "../../../internal/utils";
import { AddressVerificationData } from "./addressverificationdata";
import { EmailVerificationData } from "./emailverificationdata";
/**
 * Method to verify the location.
 */
export declare enum VerificationOptionVerificationMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO",
    VettedPartner = "VETTED_PARTNER"
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
     * Set only if the method is VETTED_PARTNER.
     */
    announcement?: string;
    /**
     * Display data for verifications through email.
     */
    emailData?: EmailVerificationData;
    /**
     * Set only if the method is PHONE_CALL or SMS. Phone number that the PIN will be sent to.
     */
    phoneNumber?: string;
    /**
     * Method to verify the location.
     */
    verificationMethod?: VerificationOptionVerificationMethodEnum;
}
