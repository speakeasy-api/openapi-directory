import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV2VoiceVoiceCountryInstanceInboundCallPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
/**
 * OK
 */
export declare class PricingV2VoiceVoiceCountryInstance extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The list of [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) records.
     */
    inboundCallPrices?: PricingV2VoiceVoiceCountryInstanceInboundCallPrices[];
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The list of [OutboundPrefixPriceWithOrigin](https://www.twilio.com/docs/voice/pricing#outbound-prefix-price-with-origin) records.
     */
    outboundPrefixPrices?: PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[];
    /**
     * The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
