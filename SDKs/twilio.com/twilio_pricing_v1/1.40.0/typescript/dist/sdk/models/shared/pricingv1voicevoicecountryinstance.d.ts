import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    friendlyName?: string;
    prefixes?: string[];
}
/**
 * OK
 */
export declare class PricingV1VoiceVoiceCountryInstance extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The list of [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records.
     */
    inboundCallPrices?: PricingV1VoiceVoiceCountryInstanceInboundCallPrices[];
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The list of OutboundPrefixPrice records, which include a list of the `prefixes`, the `friendly_name`, `base_price`, and the   `current_price` for those prefixes.
     */
    outboundPrefixPrices?: PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[];
    /**
     * The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
