import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BookingPastbookingRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    /**
     * **email address** by which to search for past bookings
     */
    email?: string;
    /**
     * Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.
     *
     * @remarks
     *
     */
    itemId?: string;
    /**
     * **specifier** of past booking type (use *one* of: `itemId` (booking reference) *and* `'voucherKey'` *or* `'email'`)
     */
    voucherKey?: string;
}
export declare class BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    /**
     * **number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness
     */
    dayRangeMax?: number;
    /**
     * **number** of days prior to the tour start date that *this* policy window ends
     */
    dayRangeMin?: number;
    /**
     * **percentage** of total price refundable if cancelled within *this* time window
     */
    percentageRefundable?: number;
    /**
     * **Unix timestamp** giving the exact time the policy ends
     */
    policyEndTimestamp?: number;
    /**
     * **Unix timestamp** giving the exact time the policy commences
     */
    policyStartTimestamp?: number;
}
export declare class BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
    /**
     * **currency-formatted** amount that will be refunded if the cancellation is processed now.
     */
    amountRefundable?: string;
    /**
     * **array** of cancellation policy objects
     */
    cancellationFromTourDate?: BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];
    /**
     * **natural-language description** of the terms and conditions for *this* product
     */
    termsAndConditions?: string;
}
export declare class BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    ageBandId?: number;
    /**
     * **number** of travelers in *this* age band
     */
    count?: number;
    /**
     * **natural-language description** (singular) of *this* age band
     */
    description?: string;
    /**
     * **natural-language description** (plural) of *this* age band
     */
    pluralDescription?: string;
    /**
     * **sort order** for *this* age band
     */
    sortOrder?: number;
}
export declare class BookingPastbooking200ApplicationJSONDataItemSummaries extends SpeakeasyBase {
    /**
     * Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.
     */
    barcodeOption?: string;
    /**
     * **alphanumeric code** specifying the type of barcode
     */
    barcodeType?: string;
    /**
     * [booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
     *
     * @remarks
     *
     * *one of* the following:
     * - `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately
     * - `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
     * - `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
     *
     */
    bookingEngineId?: shared.BookingEngineIdResponseEnum;
    /**
     * **object** containing item booking status information
     */
    bookingStatus?: shared.BookingStatusItem;
    /**
     * **currency code** for the currency in which pricing is displayed
     */
    currencyCode?: string;
    /**
     * **natural-language description** of *this* item's departure location
     */
    departsFrom?: string;
    /**
     * **natural-language description** of the product departure point
     */
    departurePoint?: string;
    /**
     * **natural-language address** of the departure point for the product
     */
    departurePointAddress?: string;
    /**
     * **natural-language description** of how to access the departure point for the product
     */
    departurePointDirections?: string;
    /**
     * **unique numeric identifier** of the destination in which the product operates
     */
    destId?: number;
    /**
     * **alphanumeric reference code** of the distributor item
     */
    distributorItemRef?: string;
    /**
     * The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.
     *
     * @remarks
     *
     */
    hoursConfirmed?: number;
    /**
     * Booking-reference number generated by Viator
     *
     * @remarks
     * - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)
     *
     */
    itemId?: string;
    /**
     * ignore (Viator only)
     */
    itineraryId?: number;
    /**
     * **language code** for the language that the product operates in
     */
    languageServicesLanguageCode?: string;
    /**
     * **numeric last retail price** of *this* item
     */
    lastRetailPrice?: number;
    /**
     * **currency-formatted retail price** of *this* item
     */
    lastRetailPriceFormatted?: string;
    /**
     * **first name** of the lead traveler
     */
    leadTravellerFirstname?: string;
    /**
     * **surname** of the lead traveler
     */
    leadTravellerSurname?: string;
    /**
     * **title** of the lead traveler's name
     */
    leadTravellerTitle?: string;
    /**
     * ignore (Viator only)
     *
     * @remarks
     *
     * For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object
     *
     */
    merchantCancellable?: boolean;
    /**
     * **numeric merchant net rate** for *this* item
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPrice?: number;
    /**
     * **currency-formatted merchant net rate** for *this* item
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPriceFormatted?: string;
    merchantTermsAndConditions?: BookingPastbooking200ApplicationJSONDataItemSummariesMerchantTermsAndConditions;
    /**
     * ignore (Viator only)
     */
    obfsId?: string;
    /**
     * ignore (Viator only)
     */
    passbooks?: string;
    /**
     * **numeric merchant total price** for the booked product
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    price?: number;
    /**
     * **currency-formatted merchant total price** for *this* item
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFormatted?: string;
    /**
     * **numeric merchant total price** of the item in USD
     */
    priceUSD?: number;
    /**
     * **unique alphanumeric identifier** of the product that was booked
     */
    productCode?: string;
    /**
     * ignore (Viator only)
     */
    productPulledDown?: boolean;
    /**
     * **natural-language description** of the product that was booked
     */
    productTitle?: string;
    /**
     * ignore (Viator only)
     */
    productWidgetList?: string;
    /**
     * ignore (Viator only)
     */
    rulesApplied?: string;
    /**
     * Ignore (Viator only)
     *
     * @remarks
     *
     */
    savingAmount?: string;
    /**
     * Ignore (Viator only)
     *
     * @remarks
     *
     */
    savingAmountFormated?: string;
    sortOrder?: number;
    /**
     * ignore (Viator only)
     */
    termsAndConditions?: string;
    /**
     * **alphanumeric identifier** of the tour grade of the product that was booked
     */
    tourGradeCode?: string;
    /**
     * **natural-language description** of *this* tour grade
     */
    tourGradeDescription?: string;
    /**
     * **date** of travel for the product that was booked
     */
    travelDate?: string;
    /**
     * **array** of age band objects
     */
    travellerAgeBands?: BookingPastbooking200ApplicationJSONDataItemSummariesTravellerAgeBands[];
    /**
     * Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints
     */
    voucherKey?: string;
    /**
     * **specifier** of the rules pertaining to the use of the voucher
     */
    voucherOption?: string;
    /**
     * **natural-language description** of the requirements for using the voucher
     */
    voucherRequirements?: string;
    /**
     * **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.
     */
    voucherURL?: string;
    /**
     * ignore (Viator only)
     */
    vouchers?: string;
}
/**
 * **object** containing pricing matrix information
 */
export declare class BookingPastbooking200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **email address** of the entity that booked the tour
     */
    bookerEmail?: string;
    /**
     * **date** on which the booking was made
     */
    bookingDate?: string;
    /**
     * **object** containing itinerary booking status information
     */
    bookingStatus?: shared.BookingStatusItinerary;
    /**
     * **currency code** for the currency in which pricing is displayed
     */
    currencyCode?: string;
    /**
     * **reference code** for the distributor
     */
    distributorRef?: string;
    /**
     * ignore (Viator only)
     */
    exchangeRate?: number;
    /**
     * **indicator**: `true` if a voucher exists
     */
    hasVoucher?: boolean;
    /**
     * **array** of item summary objects
     */
    itemSummaries?: BookingPastbooking200ApplicationJSONDataItemSummaries[];
    /**
     * ignore (Viator only)
     */
    itineraryId?: number;
    /**
     * ignore (Viator only)
     */
    rulesApplied?: string;
    /**
     * **sort order** for *this* result
     */
    sortOrder?: number;
    /**
     * **numeric merchant total price** for *this* booking
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    totalPrice?: number;
    /**
     * **currency-formatted merchant total price** for *this* booking
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    totalPriceFormatted?: string;
    /**
     * **numeric merchant total price** of this booking in USD
     */
    totalPriceUSD?: number;
    /**
     * ignore (Viator only)
     */
    userId?: string;
    /**
     * Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints
     */
    voucherKey?: string;
    /**
     * **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.
     */
    voucherURL?: string;
}
/**
 * Success
 */
export declare class BookingPastbooking200ApplicationJSON extends SpeakeasyBase {
    /**
     * **object** containing pricing matrix information
     */
    data?: BookingPastbooking200ApplicationJSONData;
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
export declare class BookingPastbookingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingPastbooking200ApplicationJSONObject?: BookingPastbooking200ApplicationJSON;
}
