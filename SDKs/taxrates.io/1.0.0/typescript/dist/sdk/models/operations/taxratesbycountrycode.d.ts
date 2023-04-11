import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxRatesByCountryCodeRequest extends SpeakeasyBase {
    /**
     * Country code alpha 2
     */
    countryCode?: string;
    date?: string;
    /**
     * Domain name: api.taxrates.io
     */
    domain?: string;
    /**
     * You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
     */
    filter?: string;
    /**
     * Use one or many product code/s.
     */
    productCodes?: string;
    /**
     * Use for Canada
     */
    province?: string;
    /**
     * You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.
     */
    zip?: string;
}
/**
 * Unexpected error
 */
export declare class TaxRatesByCountryCode500ApplicationJSON extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class TaxRatesByCountryCode200ApplicationJSONTaxes extends SpeakeasyBase {
    country?: string;
    type?: string;
    dataName?: string;
    dataValue?: string;
}
/**
 * Success
 */
export declare class TaxRatesByCountryCode200ApplicationJSON extends SpeakeasyBase {
    countryName?: string;
    taxes?: TaxRatesByCountryCode200ApplicationJSONTaxes[];
}
export declare class TaxRatesByCountryCodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taxRatesByCountryCode200ApplicationJSONObject?: TaxRatesByCountryCode200ApplicationJSON;
    /**
     * Unexpected error
     */
    taxRatesByCountryCode500ApplicationJSONObject?: TaxRatesByCountryCode500ApplicationJSON;
}
