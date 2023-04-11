import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievePricingCountryRequest extends SpeakeasyBase {
    /**
     * Your Nexmo API key.
     */
    apiKey: string;
    /**
     * Your Nexmo API secret.
     */
    apiSecret: string;
    /**
     * A two letter [country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). For example, `CA`.
     */
    country: string;
    /**
     * The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
     */
    type: string;
}
/**
 * You did not provide valid credentials
 */
export declare class RetrievePricingCountry401ApplicationJSON extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePricingCountry400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
/**
 * Bad request. You probably provided an invalid parameter.
 */
export declare class RetrievePricingCountry400ApplicationJSON extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePricingCountry400ApplicationJSONInvalidParameters;
    type: string;
}
export declare class RetrievePricingCountryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Pricing information for a specific country.
     */
    pricingCountryResponse?: shared.PricingCountryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request. You probably provided an invalid parameter.
     */
    retrievePricingCountry400ApplicationJSONObject?: RetrievePricingCountry400ApplicationJSON;
    /**
     * You did not provide valid credentials
     */
    retrievePricingCountry401ApplicationJSONObject?: RetrievePricingCountry401ApplicationJSON;
}
