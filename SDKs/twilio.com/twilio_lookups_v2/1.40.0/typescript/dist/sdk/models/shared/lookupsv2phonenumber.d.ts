import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberEnumValidationErrorEnum } from "./phonenumberenumvalidationerrorenum";
/**
 * OK
 */
export declare class LookupsV2PhoneNumber extends SpeakeasyBase {
    /**
     * An object that contains information on the unconditional call forwarding status of mobile phone number.
     */
    callForwarding?: any;
    /**
     * An object that contains caller name information based on [CNAM](https://support.twilio.com/hc/en-us/articles/360051670533-Getting-Started-with-CNAM-Caller-ID).
     */
    callerName?: any;
    /**
     * International dialing prefix of the phone number defined in the E.164 standard.
     */
    callingCountryCode?: string;
    /**
     * The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    countryCode?: string;
    /**
     * An object that contains information on if a mobile phone number could be a disposable or burner number.
     */
    disposablePhoneNumberRisk?: any;
    /**
     * An object that contains identity match information. The result of comparing user-provided information including name, address, date of birth, national ID, against authoritative phone-based data sources
     */
    identityMatch?: any;
    /**
     * An object that contains line type information including the carrier name, mobile country code, and mobile network code.
     */
    lineTypeIntelligence?: any;
    /**
     * An object that contains live activity information for a mobile phone number.
     */
    liveActivity?: any;
    /**
     * The phone number in [national format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).
     */
    nationalFormat?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * An object that contains information on the last date the subscriber identity module (SIM) was changed for a mobile phone number.
     */
    simSwap?: any;
    /**
     * An object that contains information on if a phone number has been currently or previously blocked by Verify Fraud Guard for receiving malicious SMS pumping traffic as well as other signals associated with risky carriers and low conversion rates.
     */
    smsPumpingRisk?: any;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * Boolean which indicates if the phone number is in a valid range that can be freely assigned by a carrier to a user.
     */
    valid?: boolean;
    /**
     * Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG, INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER.
     */
    validationErrors?: PhoneNumberEnumValidationErrorEnum[];
}
