import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV2TrunkingCountryInstanceOriginatingCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
/**
 * OK
 */
export declare class PricingV2TrunkingCountryInstance extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The list of [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records.
     */
    originatingCallPrices?: PricingV2TrunkingCountryInstanceOriginatingCallPrices[];
    /**
     * The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The list of [TerminatingPrefixPrice](https://www.twilio.com/docs/voice/pricing#outbound-prefix-price-with-origin) records.
     */
    terminatingPrefixPrices?: PricingV2TrunkingCountryInstanceTerminatingPrefixPrices[];
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
