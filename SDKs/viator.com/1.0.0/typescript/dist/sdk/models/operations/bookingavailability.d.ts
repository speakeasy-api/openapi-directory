import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookingAvailabilityRequestBodyAgeBands extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **number of people** in *this* age band
     */
    count?: number;
}
export declare class BookingAvailabilityRequestBody extends SpeakeasyBase {
    /**
     * **array of objects** specifying the age bands by which to to filter search results
     */
    ageBands?: BookingAvailabilityRequestBodyAgeBands[];
    /**
     * **currency code** for the currency in which to display tour grade pricing information
     */
    currencyCode?: string;
    /**
     * **month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)
     */
    month?: string;
    /**
     * **unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information
     */
    productCode?: string;
    /**
     * **year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)
     */
    year?: string;
}
export declare class BookingAvailabilityRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingAvailabilityRequestBody;
}
export declare class BookingAvailability200ApplicationJSONDataAvailability extends SpeakeasyBase {
    /**
     * **indicator** - `true` if *this* tour grade is available to book
     */
    available?: boolean;
    /**
     * **date** on which *this* tour grade is available to be booked
     */
    bookingDate?: string;
    /**
     * **currency code** of the currency in which product pricing is displayed
     */
    currencyCode?: string;
    /**
     * **alphanumeric identifier** for *this* tour grade
     */
    gradeCode?: string;
    /**
     * **numeric merchant net rate** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPrice?: number;
    /**
     * **currency-formatted merchant net rate** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPriceFormatted?: string;
    /**
     * **numeric suggested retail price** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    retailPrice?: number;
    /**
     * **currency-formatted suggested retail price** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    retailPriceFormatted?: string;
    /**
     * **sort order** of this tour grade availability object
     */
    sortOrder?: number;
    /**
     * **natural-language explanation** as to why *this* tour grade is not available to be booked
     */
    unavailableReason?: string;
}
/**
 * **object** detailing available tourgrades for the specified age bands and date range for this product
 */
export declare class BookingAvailability200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **array** of tour grade availability objects
     */
    availability?: BookingAvailability200ApplicationJSONDataAvailability[];
    /**
     * **first available date** (in plain text format) for the tour grade
     */
    firstAvailableDate?: string;
    /**
     * **last available date** for the tour grade
     */
    lastAvailableDate?: string;
    /**
     * **unique alphanumeric identifer** of the product that was specified in the request
     */
    productCode?: string;
}
/**
 * Success
 */
export declare class BookingAvailability200ApplicationJSON extends SpeakeasyBase {
    /**
     * **object** detailing available tourgrades for the specified age bands and date range for this product
     */
    data?: BookingAvailability200ApplicationJSONData;
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
export declare class BookingAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingAvailability200ApplicationJSONObject?: BookingAvailability200ApplicationJSON;
}
