import { SpeakeasyBase } from "../../../internal/utils";
import { AddressInput } from "./addressinput";
import { EmailInput } from "./emailinput";
import { PhoneInput } from "./phoneinput";
import { ServiceBusinessContext } from "./servicebusinesscontext";
/**
 * Verification method.
 */
export declare enum VerifyLocationRequestMethodEnum {
    VerificationMethodUnspecified = "VERIFICATION_METHOD_UNSPECIFIED",
    Address = "ADDRESS",
    Email = "EMAIL",
    PhoneCall = "PHONE_CALL",
    Sms = "SMS",
    Auto = "AUTO"
}
/**
 * Request message for Verifications.VerifyLocation.
 */
export declare class VerifyLocationRequest extends SpeakeasyBase {
    /**
     * Input for ADDRESS verification.
     */
    addressInput?: AddressInput;
    /**
     * Additional data for service business verification.
     */
    context?: ServiceBusinessContext;
    /**
     * Input for EMAIL verification.
     */
    emailInput?: EmailInput;
    /**
     * The BCP 47 language code representing the language that is to be used for the verification process.
     */
    languageCode?: string;
    /**
     * Verification method.
     */
    method?: VerifyLocationRequestMethodEnum;
    /**
     * Input for PHONE_CALL/SMS verification.
     */
    phoneInput?: PhoneInput;
}
