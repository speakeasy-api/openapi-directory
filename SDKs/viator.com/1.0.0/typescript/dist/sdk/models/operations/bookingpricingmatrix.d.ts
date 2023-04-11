import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookingPricingmatrixRequestBody extends SpeakeasyBase {
    /**
     * **date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined)
     */
    bookingDate?: string;
    /**
     * **currency code** of the currency in which to display pricing information
     */
    currencyCode?: string;
    /**
     * **unique alphanumeric identifier** of the product for which to retrieve the pricing matrix
     */
    productCode?: string;
    /**
     * **alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix
     */
    tourGradeCode?: string;
}
export declare class BookingPricingmatrixRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingPricingmatrixRequestBody;
}
export declare class BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices extends SpeakeasyBase {
    /**
     * **currency code** for the currency in which pricing is displayed
     */
    currencyCode?: string;
    /**
     * **numeric merchant net rate** for *this* age band
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPrice?: number;
    /**
     * **currency-formatted merchant net rate** for *this* age band
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPriceFormatted?: string;
    /**
     * **minimum number of travelers** that this pricing schedule can be applied to; e.g., '3' means that the price is for a group of three people or more
     */
    minNoOfTravellersRequiredForPrice?: number;
    /**
     * **numeric suggested retail price** for *this* age band
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    price?: number;
    /**
     * **currency-formatted suggested retail price** for *this* age band and the suggested sell price
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFormatted?: string;
    /**
     * **sort order** for *this* pricing object
     */
    sortOrder?: string;
}
export declare class BookingPricingmatrix200ApplicationJSONDataAgeBandPrices extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **maximum number of travelers** that this pricing schedule can be applied to
     *
     * @remarks
     * - use this field to specify the largest group size you are interested in making a booking for
     *
     */
    maximumCountRequired?: number;
    /**
     * **minimum number of travelers** that this pricing schedule can be applied to
     *
     * @remarks
     * - use this field to specify the smallest group size you are interested in making a booking for
     *
     */
    minimumCountRequired?: number;
    /**
     * **array** of prices available for *this* age band (based on the min and max count required)
     */
    prices?: BookingPricingmatrix200ApplicationJSONDataAgeBandPricesPrices[];
    /**
     * **sort order** for *this* age band
     */
    sortOrder?: number;
}
export declare class BookingPricingmatrix200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **array** of age band pricing objects
     */
    ageBandPrices?: BookingPricingmatrix200ApplicationJSONDataAgeBandPrices[];
    /**
     * **date** for which to retrieve pricing information
     */
    bookingDate?: string;
    /**
     * **unit** in which pricing is calculated (currently, only 'per person' is supported)
     *
     * @remarks
     * - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information
     *
     */
    pricingUnit?: string;
    /**
     * **sort order** for *this* response object
     */
    sortOrder?: number;
}
/**
 * Success
 */
export declare class BookingPricingmatrix200ApplicationJSON extends SpeakeasyBase {
    data?: BookingPricingmatrix200ApplicationJSONData[];
    /**
     * **timestamp** of *this* response
     */
    dateStamp?: string;
    /**
     * **array** of error codes pertaining to *this* error
     *
     * @remarks
     * - See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes
     *
     */
    errorCodes?: string[];
    /**
     * **array** of error message strings
     */
    errorMessage?: any[];
    /**
     * **array** of error message strings in plain text
     */
    errorMessageText?: string;
    /**
     * **name** of *this* type of error
     */
    errorName?: string;
    /**
     * **reference number** of *this* error
     */
    errorReference?: string;
    /**
     * **code** specifying the type of error
     */
    errorType?: string;
    /**
     * ignore (Viator only)
     */
    extraInfo?: Record<string, any>;
    /**
     * ignore (Viator only)
     */
    extraObject?: Record<string, any>;
    /**
     * **boolean indicator** of *this* request's outcome
     *
     * @remarks
     * - `true`: the request was successful with no errors
     * - `false`: an error was encountered
     *
     */
    success?: boolean;
    /**
     * **number** of results available for *this* service
     *
     * @remarks
     *
     */
    totalCount?: number;
    /**
     * **unique numeric id** of the server that processed *this* request
     */
    vmid?: string;
}
export declare class BookingPricingmatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingPricingmatrix200ApplicationJSONObject?: BookingPricingmatrix200ApplicationJSON;
}
