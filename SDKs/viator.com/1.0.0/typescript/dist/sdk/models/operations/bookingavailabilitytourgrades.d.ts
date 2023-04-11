import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookingAvailabilityTourgradesRequestBodyAgeBands extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **numeric count** of number of travelers in *this* age band
     */
    count?: number;
}
export declare class BookingAvailabilityTourgradesRequestBody extends SpeakeasyBase {
    /**
     * **array** of ageBand objects
     */
    ageBands?: BookingAvailabilityTourgradesRequestBodyAgeBands[];
    /**
     * **date** to enquire about available tour grades for *this* product (must be in the future)
     */
    bookingDate?: string;
    /**
     * **currency code** for the currency in which to display pricing information
     */
    currencyCode?: string;
    productCode?: string;
}
export declare class BookingAvailabilityTourgradesRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingAvailabilityTourgradesRequestBody;
}
export declare class BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **maximum number** of passengers from *this* age band allowable for *this* tour grade
     */
    maximumCountRequired?: number;
    /**
     * **minimum number** of passengers from *this* age band required for *this* tour grade
     */
    minimumCountRequired?: number;
}
export declare class BookingAvailabilityTourgrades200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **array** of age band objects describing the age bands and respective passenger counts allowed to book *this* tour grade; `null` if `ageBandsRequired` is filled and `available` is `false`
     */
    ageBands?: any[];
    /**
     * **array of arrays** of age band objects describing the traveler mixes eligible to book *this* tour grade; `null` if `ageBands` is filled and `available` is `true`
     *
     * @remarks
     * - **note**: multiple objects; structure will depend on available tour grades – see response sample for an example, but the exact result you receive will differ
     *
     */
    ageBandsRequired?: BookingAvailabilityTourgrades200ApplicationJSONDataAgeBandsRequired[][];
    /**
     * **indicator** - `true` if this tour grade is available to be booked according to the traveler mix specified
     */
    available?: boolean;
    /**
     * **date** on which *this* tour grade operates
     */
    bookingDate?: string;
    /**
     * **currency code for the specified currency** (will be `'ERROR'` if `available` is `false`)
     */
    currencyCode?: string;
    /**
     * **language code for standard langauge** for *this* product
     */
    defaultLanguageCode?: string;
    /**
     * **alphanumeric identifier** of *this* tour grade
     */
    gradeCode?: string;
    /**
     * **time** of *this* product
     */
    gradeDepartureTime?: string;
    /**
     * **natural-language description** of the tour grade
     */
    gradeDescription?: string;
    /**
     * **natural-language title** of the tour grade
     */
    gradeTitle?: string;
    /**
     * **object** detailing language services available for *this* product** (will be `null` if `available` is `false`)
     */
    langServices?: Record<string, any>;
    /**
     * **numeric merchant net rate** for *this* tour grade
     *
     * @remarks
     * **Note**: will be `0` if `available` is `false`
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPrice?: number;
    /**
     * **currency-formatted merchant net rate** for *this* tour grade
     *
     * @remarks
     * **Note**: will be empty if `available` is `false`
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPriceFormatted?: string;
    /**
     * **numeric suggested retail price** for *this* tour grade
     *
     * @remarks
     * **Note**: will be `0` if `available` is `false`
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    retailPrice?: number;
    /**
     * **currency-formatted suggested retail price** for *this* tour grade
     *
     * @remarks
     * **Note**: (will be '' if `available` is `false`)
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    retailPriceFormatted?: string;
    /**
     * **sort order** for *this* tour grade availability object
     */
    sortOrder?: number;
    /**
     * **enum specifier of reason for product unavailability** (will be `null` if `available` is `true`)
     */
    unavailableReason?: string;
}
/**
 * Success
 */
export declare class BookingAvailabilityTourgrades200ApplicationJSON extends SpeakeasyBase {
    data?: BookingAvailabilityTourgrades200ApplicationJSONData[];
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
export declare class BookingAvailabilityTourgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingAvailabilityTourgrades200ApplicationJSONObject?: BookingAvailabilityTourgrades200ApplicationJSON;
}
