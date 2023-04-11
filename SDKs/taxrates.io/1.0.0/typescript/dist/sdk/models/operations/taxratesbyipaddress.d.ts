import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TaxRatesByIpAddressRequest extends SpeakeasyBase {
    /**
     * Domain name: api.taxrates.io
     */
    domain?: string;
    /**
     * For US sales tax you can filter the tax type
     */
    filter?: string;
    /**
     * Customer's IP address
     */
    ip?: string;
    /**
     * Your can filter your taxes by product code
     */
    productCode?: string;
    /**
     * For US sales tax a Zipcode must be proivded
     */
    zip?: string;
}
/**
 * Unexpected error
 */
export declare class TaxRatesByIpAddress500ApplicationJSON extends SpeakeasyBase {
    code?: string;
    fields?: string;
    message?: string;
}
export declare class TaxRatesByIpAddress200ApplicationJSONTaxes extends SpeakeasyBase {
    country?: string;
    type?: string;
    dataName?: string;
    dataValue?: string;
}
export declare class TaxRatesByIpAddress200ApplicationJSON extends SpeakeasyBase {
    countryName?: string;
    taxes?: TaxRatesByIpAddress200ApplicationJSONTaxes[];
}
export declare class TaxRatesByIpAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of tax rates for VAT, GST & TAX
     */
    taxRatesByIpAddress200ApplicationJSONObjects?: TaxRatesByIpAddress200ApplicationJSON[];
    /**
     * Unexpected error
     */
    taxRatesByIpAddress500ApplicationJSONObject?: TaxRatesByIpAddress500ApplicationJSON;
}
