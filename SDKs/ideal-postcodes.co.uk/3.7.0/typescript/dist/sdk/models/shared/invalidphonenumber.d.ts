import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Full country name
 */
export declare enum InvalidPhoneNumberCountryEnum {
    Null = "null"
}
/**
 * Representation of current phone carrier information like network code, name, country, network type
 */
export declare enum InvalidPhoneNumberCurrentCarrierEnum {
    Null = "null"
}
/**
 * Phone number formatted to international standard
 */
export declare enum InvalidPhoneNumberInternationalFormatEnum {
    Null = "null"
}
/**
 * Country code in 3 letter ISO format
 */
export declare enum InvalidPhoneNumberIsoCountryEnum {
    Null = "null"
}
/**
 * Country code in 2 letter ISO format
 */
export declare enum InvalidPhoneNumberIsoCountry2Enum {
    Null = "null"
}
/**
 * Phone number formatted to local standard
 */
export declare enum InvalidPhoneNumberNationalFormatEnum {
    Null = "null"
}
/**
 * Representation of original phone carrier information like network code, name, country, network type
 */
export declare enum InvalidPhoneNumberOriginalCarrierEnum {
    Null = "null"
}
export declare enum InvalidPhoneNumberValidEnum {
    False = "false"
}
export declare class InvalidPhoneNumber extends SpeakeasyBase {
    /**
     * Full country name
     */
    country: InvalidPhoneNumberCountryEnum;
    /**
     * Representation of current phone carrier information like network code, name, country, network type
     */
    currentCarrier?: InvalidPhoneNumberCurrentCarrierEnum;
    /**
     * Phone number formatted to international standard
     */
    internationalFormat: InvalidPhoneNumberInternationalFormatEnum;
    /**
     * Country code in 3 letter ISO format
     */
    isoCountry: InvalidPhoneNumberIsoCountryEnum;
    /**
     * Country code in 2 letter ISO format
     */
    isoCountry2: InvalidPhoneNumberIsoCountry2Enum;
    /**
     * Phone number formatted to local standard
     */
    nationalFormat: InvalidPhoneNumberNationalFormatEnum;
    /**
     * Representation of original phone carrier information like network code, name, country, network type
     */
    originalCarrier?: InvalidPhoneNumberOriginalCarrierEnum;
    valid: InvalidPhoneNumberValidEnum;
}
