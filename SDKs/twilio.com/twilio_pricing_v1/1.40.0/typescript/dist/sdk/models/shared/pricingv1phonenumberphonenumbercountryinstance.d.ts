import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
/**
 * OK
 */
export declare class PricingV1PhoneNumberPhoneNumberCountryInstance extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The list of [PhoneNumberPrice](https://www.twilio.com/docs/phone-numbers/pricing#phone-number-price) records.
     */
    phoneNumberPrices?: PricingV1PhoneNumberPhoneNumberCountryInstancePhoneNumberPrices[];
    /**
     * The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
