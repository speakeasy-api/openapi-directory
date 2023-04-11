import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
 */
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
export declare class ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree extends SpeakeasyBase {
    /**
     * The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required. `any` means an address is required, but it can be anywhere in the world. `local` means an address in the phone number's country is required. `foreign` means an address outside of the phone number's country is required.
     */
    addressRequirements?: string;
    /**
     * Whether the phone number is new to the Twilio platform. Can be: `true` or `false`.
     */
    beta?: boolean;
    /**
     * The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
     */
    capabilities?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeCapabilities;
    /**
     * A formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
     */
    isoCountry?: string;
    /**
     * The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number. Available for only phone numbers from the US and Canada.
     */
    lata?: string;
    /**
     * The latitude of this phone number's location. Available for only phone numbers from the US and Canada.
     */
    latitude?: number;
    /**
     * The locality or city of this phone number's location.
     */
    locality?: string;
    /**
     * The longitude of this phone number's location. Available for only phone numbers from the US and Canada.
     */
    longitude?: number;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The postal or ZIP code of this phone number's location. Available for only phone numbers from the US and Canada.
     */
    postalCode?: string;
    /**
     * The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number. Available for only phone numbers from the US and Canada.
     */
    rateCenter?: string;
    /**
     * The two-letter state or province abbreviation of this phone number's location. Available for only phone numbers from the US and Canada.
     */
    region?: string;
}
