import { SpeakeasyBase } from "../../../internal/utils";
export declare class PricingV1MessagingMessagingCountryInstanceInboundSmsPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices extends SpeakeasyBase {
    basePrice?: number;
    currentPrice?: number;
    numberType?: string;
}
export declare class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices extends SpeakeasyBase {
    carrier?: string;
    mcc?: string;
    mnc?: string;
    prices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[];
}
/**
 * OK
 */
export declare class PricingV1MessagingMessagingCountryInstance extends SpeakeasyBase {
    /**
     * The name of the country.
     */
    country?: string;
    /**
     * The list of [InboundPrice](https://www.twilio.com/docs/sms/api/pricing#inbound-price) records that describe the price to receive an inbound SMS to the different Twilio phone number types supported in this country
     */
    inboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[];
    /**
     * The [ISO country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     */
    isoCountry?: string;
    /**
     * The list of [OutboundSMSPrice](https://www.twilio.com/docs/sms/api/pricing#outbound-sms-price) records that represent the price to send a message for each MCC/MNC applicable in this country.
     */
    outboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[];
    /**
     * The currency in which prices are measured, specified in [ISO 4127](http://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g. `usd`, `eur`, `jpy`).
     */
    priceUnit?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
