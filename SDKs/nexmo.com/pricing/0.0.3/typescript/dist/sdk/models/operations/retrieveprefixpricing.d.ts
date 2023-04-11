import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievePrefixPricingRequest extends SpeakeasyBase {
    /**
     * Your Nexmo API key.
     */
    apiKey: string;
    /**
     * Your Nexmo API secret.
     */
    apiSecret: string;
    /**
     * The numerical dialing prefix to look up pricing for. Examples include 44, 1 and so on.
     */
    prefix: string;
    /**
     * The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
     */
    type: string;
}
/**
 * You did not provide valid credentials
 */
export declare class RetrievePrefixPricing401ApplicationJSON extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePrefixPricing400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
/**
 * Bad request. You probably provided an invalid parameter.
 */
export declare class RetrievePrefixPricing400ApplicationJSON extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePrefixPricing400ApplicationJSONInvalidParameters;
    type: string;
}
export declare class RetrievePrefixPricingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Pricing countries response
     */
    pricingCountriesResponse?: shared.PricingCountriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request. You probably provided an invalid parameter.
     */
    retrievePrefixPricing400ApplicationJSONObject?: RetrievePrefixPricing400ApplicationJSON;
    /**
     * You did not provide valid credentials
     */
    retrievePrefixPricing401ApplicationJSONObject?: RetrievePrefixPricing401ApplicationJSON;
}
