import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllTaxRatesRequest extends SpeakeasyBase {
    productCode?: string;
    /**
     * Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.
     */
    cursor?: string;
    /**
     * Domain name: api.taxrates.io
     */
    domain?: string;
    /**
     * You can filter your taxes by one of following types: 'standard', 'CombinedRate', 'CountyRate', 'CityRate', 'SPDRate' and 'MTARate'.
     */
    filter?: string;
}
/**
 * Unexpected error
 */
export declare class AllTaxRates500ApplicationJSON extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class AllTaxRates200ApplicationJSONRates extends SpeakeasyBase {
    dataName?: string;
    dataValue?: string;
    productCode?: string;
    type?: string;
}
export declare class AllTaxRates200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    name?: string;
    rates?: AllTaxRates200ApplicationJSONRates[];
    state?: string;
    zip?: string;
}
export declare class AllTaxRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of locations with tax rates
     */
    allTaxRates200ApplicationJSONObjects?: AllTaxRates200ApplicationJSON[];
    /**
     * Unexpected error
     */
    allTaxRates500ApplicationJSONObject?: AllTaxRates500ApplicationJSON;
}
