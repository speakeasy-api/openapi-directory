import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contact information defining a Customer Match audience member.
 */
export declare class ContactInfo extends SpeakeasyBase {
    /**
     * Country code of the member. Must also be set with the following fields: * hashed_first_name * hashed_last_name * zip_codes
     */
    countryCode?: string;
    /**
     * A list of SHA256 hashed email of the member. Before hashing, remove all whitespace and make sure the string is all lowercase.
     */
    hashedEmails?: string[];
    /**
     * SHA256 hashed first name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_last_name * zip_codes
     */
    hashedFirstName?: string;
    /**
     * SHA256 hashed last name of the member. Before hashing, remove all whitespace and make sure the string is all lowercase. Must also be set with the following fields: * country_code * hashed_first_name * zip_codes
     */
    hashedLastName?: string;
    /**
     * A list of SHA256 hashed phone numbers of the member. Before hashing, all phone numbers must be formatted using the [E.164 format](//en.wikipedia.org/wiki/E.164) and include the country calling code.
     */
    hashedPhoneNumbers?: string[];
    /**
     * A list of zip codes of the member. Must also be set with the following fields: * country_code * hashed_first_name * hashed_last_name
     */
    zipCodes?: string[];
}
