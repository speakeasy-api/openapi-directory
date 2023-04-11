import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record.
 */
export declare class PricingV2TrunkingNumberOriginatingCallPrice extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV2TrunkingNumberTerminatingPrefixPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    destinationPrefixes?: string[];
    friendlyName?: string;
    originationPrefixes?: string[];
}
/**
 * OK
 */
export declare class PricingV2TrunkingNumber extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The destination phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    destinationNumber?: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
     */
    isoCountry?: string;
    /**
     * The [OriginatingCallPrice](https://www.twilio.com/docs/voice/pricing#inbound-call-price) record.
     */
    originatingCallPrice?: PricingV2TrunkingNumberOriginatingCallPrice;
    /**
     * The origination phone number in [[E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    originationNumber?: string;
    /**
     * The currency in which prices are measured, specified in [ISO 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    terminatingPrefixPrices?: PricingV2TrunkingNumberTerminatingPrefixPrices[];
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
