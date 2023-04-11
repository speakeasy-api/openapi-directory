import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BookingCalculatepriceRequestBodyItemsTravellers extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
}
export declare class BookingCalculatepriceRequestBodyItems extends SpeakeasyBase {
    /**
     * **unique alphanumeric identifier** of the product the total price for which you which to calculate
     */
    productCode?: string;
    /**
     * **alphanumeric identifier** for the tour grade for which to calculate the total price
     */
    tourGradeCode?: string;
    /**
     * **date** for which to calculate the total price (must be in the future)
     */
    travelDate?: string;
    /**
     * **array of objects** detailing the age bands for which to calculate the total price
     */
    travellers?: BookingCalculatepriceRequestBodyItemsTravellers[];
}
export declare class BookingCalculatepriceRequestBody extends SpeakeasyBase {
    /**
     * **currency code** for the currency in which to display pricing details
     */
    currencyCode?: string;
    /**
     * **array** of travel detail objects
     */
    items?: BookingCalculatepriceRequestBodyItems[];
}
export declare class BookingCalculatepriceRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingCalculatepriceRequestBody;
}
export declare class BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    ageBandId?: number;
    /**
     * **number of travelers in *this* age band
     */
    count?: number;
    /**
     * **natural-language** description (singular) of *this* age band
     */
    description?: string;
    /**
     * **natural-language** description (plural) of *this* age band
     */
    pluralDescription?: string;
    /**
     * **sort order** for *this* age band
     */
    sortOrder?: number;
}
export declare class BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries extends SpeakeasyBase {
    /**
     * ignore (Viator only)
     */
    applePassSupported?: boolean;
    /**
     * Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.
     */
    barcodeOption?: string;
    /**
     * **alphanumeric specifier** of the barcode type
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
     * **currency code** for the currency in which pricing details are displayed
     */
    currencyCode?: string;
    /**
     * **natural-language description** of *this* item's general departure location
     */
    departsFrom?: string;
    /**
     * **HTML-formatted description** of *this* product's departure location(s)
     */
    departurePoint?: string;
    /**
     * **HTML-formatted description** of *this* product's departure address
     */
    departurePointAddress?: string;
    /**
     * **HTML-formatted descriptive notes** about *this* product's departure location
     */
    departurePointDirections?: string;
    /**
     * **unique numeric id** of the destination associated with *this* product
     */
    destId?: number;
    /**
     * ignore (Viator only)
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
     * ignore (Viator only)
     */
    itemId?: number;
    /**
     * ignore (Viator only)
     */
    itineraryId?: number;
    /**
     * ignore (Viator only)
     */
    languageServicesLanguageCode?: string;
    /**
     * ignore (Viator only)
     */
    lastRetailPrice?: number;
    /**
     * **currency-formatted most recent retail price** for *this* item
     */
    lastRetailPriceFormatted?: string;
    /**
     * ignore (Viator only)
     */
    leadTravellerFirstname?: string;
    /**
     * ignore (Viator only)
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
     * **numeric merchant net rate** for *this* product
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPrice?: number;
    /**
     * **currency-formatted merchant net rate** for *this* product
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    merchantNetPriceFormatted?: string;
    /**
     * ignore (Viator only)
     */
    obfsId?: number;
    /**
     * ignore (Viator only)
     */
    passbooks?: string;
    /**
     * ignore (Viator only)
     */
    pickupHotelId?: number;
    /**
     * ignore (Viator only)
     */
    pickupHotelName?: string;
    /**
     * **numeric suggested retail price** for *this* product
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    price?: number;
    /**
     * **currency-formatted suggested retail price** for *this* product
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFormatted?: string;
    /**
     * **numeric price of *this* product** in USD
     */
    priceUSD?: number;
    /**
     * **unique alphanumeric identifier** of *this* product
     */
    productCode?: string;
    /**
     * ignore (Viator only)
     */
    productPulledDown?: boolean;
    /**
     * **natural-language title** of *this* product
     */
    productTitle?: string;
    /**
     * ignore (Viator only)
     */
    productWidgetList?: string;
    /**
     * **array** of rules applied to *this* item
     */
    rulesApplied?: string[];
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
    /**
     * **sort-order** of *this* item summary
     */
    sortOrder?: number;
    /**
     * **starting time** of the tour in the supplier's local time zone
     */
    startingTime?: string;
    /**
     * **natural-language name** of *this* product's supplier
     */
    supplierName?: string;
    /**
     * **telephone number** of the supplier
     */
    supplierPhoneNumber?: string;
    /**
     * ignore (Viator only)
     */
    termsAndConditions?: string;
    /**
     * **alphanumeric specifier** of the tour grade
     */
    tourGradeCode?: string;
    /**
     * **natural-language description** of *this* item's tour grade
     */
    tourGradeDescription?: string;
    /**
     * **date** on which *this* product will operate (in the supplier's local time zone)
     */
    travelDate?: string;
    /**
     * **array** of age-band objects
     */
    travellerAgeBands?: BookingCalculateprice200ApplicationJSONDataItineraryItemSummariesTravellerAgeBands[];
    /**
     * Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints
     */
    voucherKey?: string;
    /**
     * **alphanumeric specifier** of the relevant voucher option
     */
    voucherOption?: string;
    /**
     * **natural-language description** of the voucher requirements for this tour (**note:** Should agree with value in `voucherOption` field)
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
 * **summary results** for all itinerary items
 */
export declare class BookingCalculateprice200ApplicationJSONDataItinerary extends SpeakeasyBase {
    /**
     * ignore (Viator only)
     */
    bookerEmail?: string;
    /**
     * **date** of *this* booking
     */
    bookingDate?: string;
    /**
     * **object** containing itinerary booking status information
     */
    bookingStatus?: shared.BookingStatusItinerary;
    /**
     * **specifier** of the currency in which pricing details are displayed
     */
    currencyCode?: string;
    /**
     * ignore (Viator only)
     */
    distributorRef?: string;
    /**
     * ignore (Viator only)
     */
    exchangeRate?: number;
    /**
     * ignore (Viator only)
     */
    hasVoucher?: boolean;
    /**
     * **array** of item summaries
     */
    itemSummaries?: BookingCalculateprice200ApplicationJSONDataItineraryItemSummaries[];
    /**
     * **numeric identifier** for *this* order
     */
    itineraryId?: number;
    /**
     * ignore (Viator only)
     */
    omniPreRuleList?: number;
    /**
     * ignore (Viator only)
     */
    paypalRedirectURL?: string;
    /**
     * ignore (Viator only)
     */
    rulesApplied?: string[];
    /**
     * ignore (Viator only)
     */
    securityToken?: string;
    /**
     * **sort order** for *this* itinerary
     */
    sortOrder?: number;
    /**
     * **numeric total price (total)** for *this* order
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    totalPrice?: number;
    /**
     * **currency-formatted total price (including transaction fee)** for *this* order
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    totalPriceFormatted?: string;
    /**
     * **numeric total price** of *this* order in USD
     */
    totalPriceUSD?: number;
    /**
     * ignore (Viator only)
     */
    userId?: number;
    /**
     * Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints
     */
    voucherKey?: string;
    /**
     * **URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.
     */
    voucherURL?: string;
}
export declare class BookingCalculateprice200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **specifier of the currency** in which pricing details are displayed
     */
    currencyCode?: string;
    /**
     * ignore (Viator only)
     */
    hasPromoCode?: boolean;
    /**
     * **summary results** for all itinerary items
     */
    itinerary?: BookingCalculateprice200ApplicationJSONDataItinerary;
    /**
     * ignore (Viator only)
     */
    itineraryFromPrice?: number;
    /**
     * ignore (Viator only)
     */
    itineraryFromPriceFormatted?: string;
    /**
     * ignore (Viator only)
     */
    itineraryNewPrice?: number;
    /**
     * ignore (Viator only)
     */
    itineraryNewPriceFormatted?: string;
    /**
     * ignore (Viator only)
     */
    itinerarySaving?: number;
    /**
     * ignore (Viator only)
     */
    itinerarySavingFormatted?: string;
    /**
     * ignore (Viator only)
     */
    paymentGatewayInfo?: string;
    /**
     * ignore (Viator only)
     */
    promoCode?: string;
    /**
     * ignore (Viator only)
     */
    promoCodeExpired?: boolean;
    /**
     * ignore (Viator only)
     */
    promoCodeValid?: boolean;
    /**
     * ignore (Viator only)
     */
    rulesApplied?: string[];
}
/**
 * Success
 */
export declare class BookingCalculateprice200ApplicationJSON extends SpeakeasyBase {
    data?: BookingCalculateprice200ApplicationJSONData;
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
export declare class BookingCalculatepriceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingCalculateprice200ApplicationJSONObject?: BookingCalculateprice200ApplicationJSON;
}
