import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
 */
export declare class FirstLastNamePhoneCodedOut extends SpeakeasyBase {
    countryIso2?: string;
    /**
     * The first name (also known as given name)
     */
    firstName?: string;
    id?: string;
    /**
     * The normalized phone number, verified using libphonenumber.
     */
    internationalPhoneNumberVerified?: string;
    /**
     * The last name (also known as family name, or surname)
     */
    lastName?: string;
    /**
     * The likely country of origin of the name.
     */
    originCountryIso2?: string;
    /**
     * The best alternative country of origin of the name.
     */
    originCountryIso2Alt?: string;
    /**
     * The phone country code of the phone number, verified using libphonenumber.
     */
    phoneCountryCode?: number;
    /**
     * The best alternative phone country code of the phone number.
     */
    phoneCountryCodeAlt?: number;
    /**
     * The likely country of the phone number.
     */
    phoneCountryIso2?: string;
    /**
     * The best alternative country of the phone number.
     */
    phoneCountryIso2Alt?: string;
    /**
     * The phone ISO2 country code, verified using libphonenumber.
     */
    phoneCountryIso2Verified?: string;
    /**
     * The input phone number.
     */
    phoneNumber?: string;
    /**
     * Higher score is better, but score is not normalized. Use calibratedProbability if available.
     */
    score?: number;
    script?: string;
    /**
     * Indicates if the phone number could be positively verified using libphonenumber.
     */
    verified?: boolean;
}
