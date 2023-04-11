import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
 */
export declare class BookingBookRequestBodyBooker extends SpeakeasyBase {
    /**
     * **telephone number** of the lead traveler
     *
     * @remarks
     *
     * **Note**:
     *
     *   * Must be included to enable CLC communications
     *   * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
     *
     */
    cellPhone?: string;
    /**
     * **country code** for the telephone number of the lead traveler
     *
     * @remarks
     *
     * **Note**:
     *
     *   * Must be included to enable CLC communications.
     *   * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information
     *
     */
    cellPhoneCountryCode?: string;
    /**
     * **email address** of the primary contact
     */
    email?: string;
    /**
     * **first name** of the primary contact
     *
     * @remarks
     *
     */
    firstname: string;
    /**
     * **phone number** (home) of the primary contact
     */
    homePhone?: string;
    /**
     * **surname** of the primary contact
     */
    surname: string;
    /**
     * **title** of the primary contact
     */
    title?: string;
}
export declare class BookingBookRequestBodyItemsBookingQuestionAnswers extends SpeakeasyBase {
    /**
     * **answer** to the question for the `questionId` listed (recommended length for the answer is 500 characters)
     *
     * @remarks
     *
     * **Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example
     *
     */
    answer?: string;
    /**
     * **numeric identifier** for the question (**note**: `questionId` can be retrieved from the [/product](#operation/product) service)
     */
    questionId?: number;
}
/**
 * **object** containing partner details at a per-item level
 */
export declare class BookingBookRequestBodyItemsPartnerItemDetail extends SpeakeasyBase {
    /**
     * **unique alphanumeric code** for the order ('itinerary') (merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in *this* object
     *
     * @remarks
     * - this code can be any alphanumeric string and is defined by the distributor
     *
     */
    distributorItemRef?: string;
}
export declare class BookingBookRequestBodyItemsTravellers extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **first name** of *this* traveller
     */
    firstname?: string;
    /**
     * **indicator**: `true` if this traveler is the lead traveler
     */
    leadTraveller?: boolean;
    /**
     * **surname** of *this* traveler
     */
    surname?: string;
    /**
     * **title** of the traveler (e.g `'Mr'`, `'Mrs'`, `'Ms'`, `'Miss'`, `'Mstr'`, `'Dr'`)
     */
    title?: string;
}
export declare class BookingBookRequestBodyItems extends SpeakeasyBase {
    /**
     * **array** of objects containing booking questions and the answers provided for them for *this* product
     *
     * @remarks
     * - If a booking question is available in the `bookingQuestions` array in the response from [/product](#operation/product) for *this* product, the matching `bookingQuestionAnswers` must be passed to *this* service.
     * - If a product does not have any booking questions, you can omit the `bookingQuestionAnswers` array in your request.
     * - Any invalid or unrequired booking-question answers that are passed to *this* service will be ignored (and, no exceptions will be raised)
     * - You will need to include this array if [/product](#operation/product) returns any questions in the `bookingQuestions` array.
     *
     */
    bookingQuestionAnswers?: BookingBookRequestBodyItemsBookingQuestionAnswers[];
    /**
     * **specifer** of the hotel
     *
     * @remarks
     * If [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured (as per the hotel service id field); or, use an alternative `hotelId`, such as:
     *
     *  - `"notBooked"`: the customer has not yet booked their hotel
     *  - `"notListed"`: the customer's hotel is not listed
     *
     *  If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).
     *
     */
    hotelId?: string;
    /**
     * **specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.)
     */
    languageOptionCode?: string;
    /**
     * **object** containing partner details at a per-item level
     */
    partnerItemDetail?: BookingBookRequestBodyItemsPartnerItemDetail;
    /**
     * **details** about the hotel pick-up point (must be provided if the `hotelId` selected by the user is `'notListed'` or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup` is `true`.
     */
    pickupPoint?: string;
    /**
     * **unique alphanumeric identifier** of the product to be booked
     */
    productCode?: string;
    /**
     * **text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required
     */
    specialRequirements?: string;
    /**
     * **specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to `'DEFAULT'`.)
     */
    tourGradeCode?: string;
    /**
     * **date** of travel for the item in format yyyy-mm-dd
     */
    travelDate?: string;
    /**
     * **array** of traveler names, details and whether they are the lead traveller
     */
    travellers?: BookingBookRequestBodyItemsTravellers[];
}
/**
 * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
 *
 * @remarks
 *
 */
export declare class BookingBookRequestBodyPartnerDetail extends SpeakeasyBase {
    /**
     * **unique alphanumeric reference code** for the distributor
     *
     * @remarks
     * - Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.
     * - Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.
     *
     */
    distributorRef?: string;
}
export declare class BookingBookRequestBody extends SpeakeasyBase {
    /**
     * **object** containing details about the primary contact (**note**: this contact needn't be a traveller)
     */
    booker?: BookingBookRequestBodyBooker;
    /**
     * **currency code** for the currency the booking will be submitted in (you will be billed in this currency)
     */
    currencyCode?: string;
    /**
     * **specifier**: `true` if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`.
     */
    demo?: boolean;
    /**
     * **array** of items to be booked
     */
    items?: BookingBookRequestBodyItems[];
    /**
     * Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information
     *
     * @remarks
     *
     */
    partnerDetail?: BookingBookRequestBodyPartnerDetail;
}
export declare class BookingBookRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: BookingBookRequestBody;
}
export declare class BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
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
export declare class BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions extends SpeakeasyBase {
    /**
     * **currency-formatted** amount that will be refunded if the cancellation is processed now.
     */
    amountRefundable?: string;
    /**
     * **array** of cancellation policy objects
     */
    cancellationFromTourDate?: BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditionsCancellationFromTourDate[];
    /**
     * **natural-language description** of the terms and conditions for *this* product
     */
    termsAndConditions?: string;
}
export declare class BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands extends SpeakeasyBase {
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    ageBandId?: number;
    /**
     * **numeric** number of travelers in *this* age band
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
export declare class BookingBook200ApplicationJSONDataItemSummaries extends SpeakeasyBase {
    applePassSupported?: boolean;
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
     * **currency code** for the currency in which pricing is displayed for *this* item
     */
    currencyCode?: string;
    /**
     * **natural-language description** of *this* item's departure location
     */
    departsFrom?: string;
    /**
     * **natural-language description** of *this* item's departure point
     */
    departurePoint?: string;
    /**
     * **HTML-formatted address** of *this* item's departure point
     */
    departurePointAddress?: string;
    /**
     * **natural-language description** of directions regarding *this* item's departure point
     */
    departurePointDirections?: string;
    /**
     * **unique numeric identifer** of the destination of *this* item
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
    hoursConfirmed?: string;
    /**
     * **numeric identifer** of *this* item
     */
    itemId?: number;
    /**
     * Ignore (Viator only)
     */
    itineraryId?: number;
    /**
     * **code** for the language that this product operates in
     */
    languageServicesCode?: string;
    /**
     * **numeric merchant net rate** of *this* item
     */
    lastRetailPrice?: number;
    /**
     * **currency-formatted merchant net rate** of *this* item
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
     * **numeric merchant net rate** for *this* item"
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
    merchantTermsAndConditions?: BookingBook200ApplicationJSONDataItemSummariesMerchantTermsAndConditions;
    /**
     * ignore (Viator only)
     */
    obfsId?: number;
    /**
     * ignore (Viator only)
     */
    passbooks?: string;
    /**
     * **identifer** for the pick-up hotel
     */
    pickupHotelId?: string;
    /**
     * **natural-language name** of the pick-up hotel
     */
    pickupHotelName?: string;
    /**
     * **numeric merchant total price** for *this* item
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
     * **numeric merchant total price** in USD
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
    /**
     * **sort order** of *this* item summary
     */
    sortOrder?: number;
    /**
     * **starting time** of this product
     */
    startingTime?: string;
    /**
     * **natural-language name** of *this* product's supplier
     */
    supplierName?: string;
    /**
     * **telephone number** of *this* product's supplier
     */
    supplierPhoneNumber?: string;
    /**
     * ignore (Viator only)
     */
    termsAndConditions?: Record<string, any>;
    /**
     * **identifer** of *this* tour grade
     */
    tourGradeCode?: string;
    /**
     * **natural-language description** of *this* tour grade
     */
    tourGradeDescription?: string;
    /**
     * **date** of travel
     */
    travelDate?: string;
    /**
     * **array** of objects detailing the traveler age bands
     */
    travellerAgeBands?: BookingBook200ApplicationJSONDataItemSummariesTravellerAgeBands[];
    /**
     * Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints
     */
    voucherKey?: string;
    /**
     * ignore (Viator only)
     */
    voucherOption?: string;
    /**
     * **natural-language description** of the requirements pertaining to this voucher
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
export declare class BookingBook200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **email address** of the entity that made *this* booking
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
     * **currency code** of the currency in which *this* booking was made
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
    itemSummaries?: BookingBook200ApplicationJSONDataItemSummaries[];
    /**
     * ignore (Viator only)
     */
    itineraryId?: number;
    /**
     * ignore (Viator only)
     */
    omniPreRuleList?: string;
    /**
     * ignore (Viator only)
     */
    paypalRedirectURL?: string;
    /**
     * ignore (Viator only)
     */
    rulesApplied?: string;
    /**
     * ignore (Viator only)
     */
    securityToken?: string;
    /**
     * **sort order** for *this* object
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
     * **numeric merchant total price** of *this* booking in USD
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
export declare class BookingBook200ApplicationJSON extends SpeakeasyBase {
    data?: BookingBook200ApplicationJSONData;
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
export declare class BookingBookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bookingBook200ApplicationJSONObject?: BookingBook200ApplicationJSON;
}
