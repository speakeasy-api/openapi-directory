import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record. If `null`, the Phone Number is not a Twilio number owned by this account.
 */
export declare class PricingV1VoiceVoiceNumberInboundCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
/**
 * The OutboundCallPrice record, which includes a list of `origination_prefixes` and the `base_price` and `current_price` for those prefixes.
 */
export declare class PricingV1VoiceVoiceNumberOutboundCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
}
/**
 * OK
 */
export declare class PricingV1VoiceVoiceNumber extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The [InboundCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record. If `null`, the Phone Number is not a Twilio number owned by this account.
     */
    inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice;
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The phone number.
     */
    number?: string;
    /**
     * The OutboundCallPrice record, which includes a list of `origination_prefixes` and the `base_price` and `current_price` for those prefixes.
     */
    outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice;
    /**
     * The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
