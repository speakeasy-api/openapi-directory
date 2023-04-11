import { SpeakeasyBase } from "../../../internal/utils";
export declare class HLRLookupResponse extends SpeakeasyBase {
    /**
     * The phone number country
     */
    country: string;
    /**
     * The number location as an ISO 2-letter country code
     */
    countryCode: string;
    /**
     * The number location as an ISO 3-letter country code
     */
    countryCode3: string;
    /**
     * ISO 4217 currency code associated with the country
     */
    currencyCode: string;
    /**
     * The currently used network/carrier name
     */
    currentNetwork: string;
    /**
     * The HLR lookup status, possible values are: <br> <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>
     */
    hlrStatus: string;
    /**
     * Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)
     */
    hlrValid: boolean;
    /**
     * The mobile IMSI number (International Mobile Subscriber Identity)
     */
    imsi: string;
    /**
     * The international calling code
     */
    internationalCallingCode: string;
    /**
     * The number represented in full international format
     */
    internationalNumber: string;
    /**
     * True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)
     */
    isMobile: boolean;
    /**
     * Has this number been ported to another network
     */
    isPorted: boolean;
    /**
     * Is this number currently roaming from its origin country
     */
    isRoaming: boolean;
    /**
     * The number represented in local dialing format
     */
    localNumber: string;
    /**
     * The number location. Could be a city, region or country depending on the type of number
     */
    location: string;
    /**
     * The mobile MCC number (Mobile Country Code)
     */
    mcc: string;
    /**
     * The mobile MNC number (Mobile Network Code)
     */
    mnc: string;
    /**
     * The mobile MSC number (Mobile Switching Center)
     */
    msc: string;
    /**
     * The mobile MSIN number (Mobile Subscription Identification Number)
     */
    msin: string;
    /**
     * The number type, possible values are: <br> <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>
     */
    numberType: string;
    /**
     * True if this a valid phone number
     */
    numberValid: boolean;
    /**
     * The origin network/carrier name
     */
    originNetwork: string;
    /**
     * The ported to network/carrier name (only set if the number has been ported)
     */
    portedNetwork: string;
    /**
     * If the number is currently roaming, the ISO 2-letter country code of the roaming in country
     */
    roamingCountryCode: string;
}
