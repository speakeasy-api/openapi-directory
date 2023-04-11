import { SpeakeasyBase } from "../../../internal/utils";
export declare class PhoneValidateResponse extends SpeakeasyBase {
    /**
     * The phone number country
     */
    country: string;
    /**
     * The phone number country as an ISO 2-letter country code
     */
    countryCode: string;
    /**
     * The phone number country as an ISO 3-letter country code
     */
    countryCode3: string;
    /**
     * ISO 4217 currency code associated with the country
     */
    currencyCode: string;
    /**
     * The international calling code
     */
    internationalCallingCode: string;
    /**
     * The number represented in full international format (E.164)
     */
    internationalNumber: string;
    /**
     * True if this is a mobile number. If the number type is unknown this value will be false
     */
    isMobile: boolean;
    /**
     * The number represented in local dialing format
     */
    localNumber: string;
    /**
     * The phone number location. Could be the city, region or country depending on the type of number
     */
    location: string;
    /**
     * The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)
     */
    prefixNetwork: string;
    /**
     * The number type based on the number prefix. <br>Possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>
     */
    type: string;
    /**
     * Is this a valid phone number
     */
    valid: boolean;
}
