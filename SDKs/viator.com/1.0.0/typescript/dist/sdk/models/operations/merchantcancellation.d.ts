import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MerchantCancellationRequestBodyCancelItems extends SpeakeasyBase {
    /**
     * **cancellation code** that describes the reason for the cancellation
     *
     * @remarks
     * - see: [Suggested cancellation codes](#suggested-cancellation-codes)
     *
     */
    cancelCode?: string;
    /**
     * **natural-language description** of the reason for cancellation (a reason must be provided if `cancelCode` is `62` or `66`)
     */
    cancelDescription?: string;
    /**
     * **alphanumeric reference code** of the distributor item
     */
    distributorItemRef?: string;
    /**
     * **numeric identifier** of item to cancel in itinerary
     */
    itemId?: number;
}
export declare class MerchantCancellationRequestBody extends SpeakeasyBase {
    /**
     * **array** of objects detailing itinerary items to cancel
     */
    cancelItems?: MerchantCancellationRequestBodyCancelItems[];
    /**
     * **itinerary reference identifier** (partner defined) for the booking to cancel
     */
    distributorRef?: string;
    /**
     * **numeric identifier** for the itinerary
     */
    itineraryId?: number;
}
export declare class MerchantCancellationRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: MerchantCancellationRequestBody;
}
export declare class MerchantCancellation400ApplicationJSONData extends SpeakeasyBase {
    /**
     * **natural-language description** for this response (see response codes table)
     */
    cancellationResponseDescription?: string;
    /**
     * **status code** for this response (see response codes table)
     */
    cancellationResponseStatusCode?: string;
    /**
     * **alphanumeric reference code** of the distributor item
     */
    distributorItemRef?: string;
    /**
     * **identifier** for the item to cancel
     */
    itemId?: string;
}
/**
 * Error
 */
export declare class MerchantCancellation400ApplicationJSON extends SpeakeasyBase {
    data?: MerchantCancellation400ApplicationJSONData;
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
export declare class MerchantCancellation200ApplicationJSONDataCancelItems extends SpeakeasyBase {
    /**
     * See Response codes table
     */
    cancellationResponseDescription?: string;
    /**
     * See [cancellation response codes table](#cancellation-response-status-codes-and-their-meanings)
     */
    cancellationResponseStatusCode?: string;
    /**
     * **alphanumeric reference code** of the distributor item
     */
    distributorItemRef?: string;
    /**
     * **numeric identifier** of the item to cancel
     */
    itemId?: string;
}
export declare class MerchantCancellation200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **array** of items to be cancelled
     */
    cancelItems?: MerchantCancellation200ApplicationJSONDataCancelItems[];
    /**
     * **reference code** for the distributor
     */
    distributorRef?: string;
    /**
     * **numeric** identifier for the itinerary
     */
    itineraryId?: number;
}
/**
 * Success
 */
export declare class MerchantCancellation200ApplicationJSON extends SpeakeasyBase {
    data?: MerchantCancellation200ApplicationJSONData;
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
export declare class MerchantCancellationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    merchantCancellation200ApplicationJSONObject?: MerchantCancellation200ApplicationJSON;
    /**
     * Error
     */
    merchantCancellation400ApplicationJSONObject?: MerchantCancellation400ApplicationJSON;
}
