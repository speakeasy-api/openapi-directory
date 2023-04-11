import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookingAvailabilityTourgradesPricingmatrixRequestBody extends SpeakeasyBase {
    /**
     * **currency code** for the currency in which to display pricing details
     */
    currencyCode?: string;
    /**
     * **month of year** (as text) by which to filter results (must be in the future)
     */
    month?: string;
    /**
     * **alphanumeric identifier** of product about which to retrieve tour grade and pricing information
     */
    productCode?: string;
    /**
     * **year** (as text) by which to filter results (must be in the future)
     */
    year?: string;
}
export declare class BookingAvailabilityTourgradesPricingmatrixRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingAvailabilityTourgradesPricingmatrixRequestBody;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices extends SpeakeasyBase {
    /**
     * **currency code** of the currency in which pricing details are displayed
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
     * **currency-formatted suggested retail price** for *this* age band
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFormatted?: string;
    /**
     * **sort order** *this* pricing detail object
     */
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **maximum number** of participants allowed for *this* tour grade
     */
    maximumCountRequired?: number;
    /**
     * **minimum number** of participants required for *this* tour grade
     */
    minimumCountRequired?: number;
    /**
     * **array** of pricing detail objects
     */
    prices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPricesPrices[];
    /**
     * **sort order** for *this* tour grade
     */
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix extends SpeakeasyBase {
    /**
     * **array** of pricing objects by age band
     */
    ageBandPrices?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrixAgeBandPrices[];
    /**
     * **date** on which *this* product operates
     */
    bookingDate?: string;
    /**
     * **natural-language description** of the pricing mode
     *
     * @remarks
     * - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information
     *
     */
    pricingUnit?: string;
    /**
     * **sort order** for *this* pricing object
     */
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades extends SpeakeasyBase {
    /**
     * **alphanumeric identifier** of the tour grade
     */
    gradeCode?: string;
    /**
     * **title of tour grade**
     */
    gradeTitle?: string;
    /**
     * **array of pricing objects** for *this* tour grade
     */
    pricingMatrix?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGradesPricingMatrix[];
    /**
     * **sort order** for *this* tour grade pricing object
     */
    sortOrder?: number;
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates extends SpeakeasyBase {
    /**
     * **date** on which *this* product operates
     */
    bookingDate?: string;
    /**
     * ignore (Viator only)
     */
    callForLastMinAvailability?: boolean;
    /**
     * **sort order** for *this* tour grade pricing object
     */
    sortOrder?: number;
    /**
     * **array** of tour grade pricing information objects
     */
    tourGrades?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDatesTourGrades[];
}
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **month of year** (as text) by which to filter results
     */
    bookingMonth?: string;
    /**
     * **array of tour grade pricing objects** each detailing availability on a single day
     */
    dates?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONDataDates[];
    /**
     * **natural-language label** for the pricing terms of this tour grade
     *
     * @remarks
     * - see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information
     *
     */
    pricingUnit?: string;
}
/**
 * Success
 */
export declare class BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON extends SpeakeasyBase {
    data?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSONData;
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
export declare class BookingAvailabilityTourgradesPricingmatrixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingAvailabilityTourgradesPricingmatrix200ApplicationJSONObject?: BookingAvailabilityTourgradesPricingmatrix200ApplicationJSON;
}
