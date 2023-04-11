import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookingHotelsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    /**
     * **unique numeric identifier** of the destination
     */
    destId?: number;
    /**
     * **unique alphanumeric identifier** of the product
     */
    productCode?: string;
}
export declare class BookingHotels200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **natural-language address** of hotel pick-up point
     */
    address?: string;
    /**
     * ignore (Viator only)
     */
    brand?: string;
    /**
     * **natural-language name** of the destination that *this* hotel pick-up point pertains to
     */
    city?: string;
    /**
     * **unique numeric identifer** of the destination that *this* hotel pick-up point pertains to
     */
    destinationId?: number;
    /**
     * ignore (Viator only)
     */
    hotelString?: string;
    /**
     * **identifier** of *this* hotel pick-up point`
     */
    id?: string;
    /**
     * **numeric latitude component** of *this* hotel pick-up point's geolocation
     */
    latitude?: number;
    /**
     * **numeric longitude component** of *this* hotel pick-up point's geolocation
     */
    longitude?: number;
    /**
     * **natural-language name** of hotel pick-up point
     */
    name?: string;
    /**
     * **natural-language notes** about *this* hotel pick-up point
     */
    notes?: string;
    /**
     * **phone number** of *this* hotel pick-up point
     */
    phone?: string;
    /**
     * **post code** of *this* hotel pick-up point
     */
    postcode?: string;
    /**
     * **array** of product codes pertaining to *this* hotel pick-up point
     */
    productCodes?: string[];
    /**
     * **sort-order** of *this* hotel pick-up point
     */
    sortOrder?: number;
}
/**
 * Success
 */
export declare class BookingHotels200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of hotel pick-up objects
     */
    data?: BookingHotels200ApplicationJSONData[];
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
export declare class BookingHotelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingHotels200ApplicationJSONObject?: BookingHotels200ApplicationJSON;
}
