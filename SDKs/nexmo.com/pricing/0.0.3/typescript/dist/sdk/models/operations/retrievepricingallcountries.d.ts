import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrievePricingAllCountriesRequest extends SpeakeasyBase {
    /**
     * Your Nexmo API key.
     */
    apiKey: string;
    /**
     * Your Nexmo API secret.
     */
    apiSecret: string;
    /**
     * The type of service you wish to retrieve data about: either `sms`, `sms-transit` or `voice`.
     */
    type: string;
}
/**
 * You did not provide valid credentials
 */
export declare class RetrievePricingAllCountries401ApplicationJSON extends SpeakeasyBase {
    code: string;
    currency: string;
    errorCodeLabel: string;
}
export declare class RetrievePricingAllCountries400ApplicationJSONInvalidParameters extends SpeakeasyBase {
    message?: string;
    parameter?: string;
}
/**
 * Bad request. You probably provided an invalid parameter.
 */
export declare class RetrievePricingAllCountries400ApplicationJSON extends SpeakeasyBase {
    errorTitle: string;
    invalidParameters: RetrievePricingAllCountries400ApplicationJSONInvalidParameters;
    type: string;
}
export declare class RetrievePricingAllCountriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Pricing response
     */
    pricingCountriesResponse?: shared.PricingCountriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request. You probably provided an invalid parameter.
     */
    retrievePricingAllCountries400ApplicationJSONObject?: RetrievePricingAllCountries400ApplicationJSON;
    /**
     * You did not provide valid credentials
     */
    retrievePricingAllCountries401ApplicationJSONObject?: RetrievePricingAllCountries401ApplicationJSON;
}
