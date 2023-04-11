import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Booking services
 */
export declare class BookingServices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * /booking/availability
     *
     * @remarks
     * Get the tour-grade with the lowest price that is available for a product on each day of the specified month
     *
     * This service:
     * - returns
     * - useful when displaying a calendar of available tours
     * - For more information, see: [Availability services](#section/Key-concepts/Availability-services)
     * - **Notes:**
     *   - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.
     *
     *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
     *
     */
    bookingAvailability(req: operations.BookingAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.BookingAvailabilityResponse>;
    /**
     * /booking/availability/dates
     *
     * @remarks
     * Get dates on which a product is available
     *
     * This service:
     * - retrieves all available dates for a product, excluding days it does not operate and blocked-out dates
     * - returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix
     * - useful to present the user with a list of dates for selection on which *this* product is available for booking
     * - **Notes**:
     *
     *   - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades
     *   - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
     *
     */
    bookingAvailabilityDates(req: operations.BookingAvailabilityDatesRequest, config?: AxiosRequestConfig): Promise<operations.BookingAvailabilityDatesResponse>;
    /**
     * /booking/availability/tourgrades
     *
     * @remarks
     * Get the tour grades of a product that are currently available
     *
     * This service reports:
     * - all tour grades for the specified product, on the specified day, that are available for the specified age bands
     * - the pricing breakdown and the total depending on the travel date and traveler mix
     *
     * **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
     *
     */
    bookingAvailabilityTourgrades(req: operations.BookingAvailabilityTourgradesRequest, config?: AxiosRequestConfig): Promise<operations.BookingAvailabilityTourgradesResponse>;
    /**
     * /booking/availability/tourgrades/pricingmatrix
     *
     * @remarks
     * Get a pricing matrix that includes availability and tour-grades for a product
     *
     * Given a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.
     *
     * - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
     *
     */
    bookingAvailabilityTourgradesPricingmatrix(req: operations.BookingAvailabilityTourgradesPricingmatrixRequest, config?: AxiosRequestConfig): Promise<operations.BookingAvailabilityTourgradesPricingmatrixResponse>;
    /**
     * /booking/book
     *
     * @remarks
     * Make a booking
     *
     * For more information, see:
     *
     *   - [Cancellation policy](#section/Key-concepts/Cancellation-policy)
     *   - [Booking concepts](#section/Key-concepts/Booking-concepts)
     *   - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)
     *   - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)
     *   - [Supplier communications](#section/Key-concepts/Supplier-communications)
     *
     */
    bookingBook(req: operations.BookingBookRequest, config?: AxiosRequestConfig): Promise<operations.BookingBookResponse>;
    /**
     * /booking/calculateprice
     *
     * @remarks
     * Confirm the price of a tour / activity prior to booking
     *
     * For more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)
     *
     * - **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time
     *
     */
    bookingCalculateprice(req: operations.BookingCalculatepriceRequest, config?: AxiosRequestConfig): Promise<operations.BookingCalculatepriceResponse>;
    /**
     * /booking/hotels
     *
     * @remarks
     * Get hotel pick-ups
     * Lists the hotel pickups available for either a product or a destination
     *
     */
    bookingHotels(req: operations.BookingHotelsRequest, config?: AxiosRequestConfig): Promise<operations.BookingHotelsResponse>;
    /**
     * /booking/mybookings
     *
     * @remarks
     * Get a user's bookings with travel dates in the future.
     *
     * This service can also be used to check the status of a booking.
     *
     * **Provide either:**
     * - A `voucherKey`, **or...**
     * - An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))
     *
     */
    bookingMybookings(req: operations.BookingMybookingsRequest, config?: AxiosRequestConfig): Promise<operations.BookingMybookingsResponse>;
    /**
     * /booking/pastbooking
     *
     * @remarks
     * Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.
     *
     * **Note**: this service will only return past bookings that were made with the same API key that was used to make the booking
     *
     * **Sample query parameters**:
     * - email=apitest@viator.com&amp;itemId=580669678
     *
     * **or**
     * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678
     *
     * **email**
     * - The email address passed must match the email address associated with the booking
     *
     * **Departure details**
     *
     * - Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response.
     * - These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.
     *
     * For more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)
     *
     */
    bookingPastbooking(req: operations.BookingPastbookingRequest, config?: AxiosRequestConfig): Promise<operations.BookingPastbookingResponse>;
    /**
     * /booking/pricingmatrix
     *
     * @remarks
     * Get the pricing matrix for tour-grades, product age bands and pax mixes
     *
     * For more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)
     *
     */
    bookingPricingmatrix(req: operations.BookingPricingmatrixRequest, config?: AxiosRequestConfig): Promise<operations.BookingPricingmatrixResponse>;
    /**
     * /booking/status
     *
     * @remarks
     * Get the booking status for multiple items based on different criteria
     *
     * This service:
     * - is ideally be used in software for bulk updates of pending bookings
     * - returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)
     * - will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings
     * - rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;
     * - For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)
     *
     * **Exceeding the rate limit**
     * - You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:
     * ```javascript
     * {
     *     "data": null
     *     "vmid": 221002
     *     "errorMessage": ["Access allowed every 30 minutes"]
     *     "errorType": "EXCEPTION"
     *     "dateStamp": "2013-03-26T10:28:51+0000"
     *     "errorReference": 55315512721712161381352771
     *     "errorMessageText": ["Access allowed every 30 minutes"]
     *     "success": false
     *     "totalCount": 1
     *     "errorName": "PollingDeniedException"
     * }
     * ```
     *
     */
    bookingStatus(req: operations.BookingStatusRequest, config?: AxiosRequestConfig): Promise<operations.BookingStatusResponse>;
    /**
     * /booking/status/items
     *
     * @remarks
     * Get brief booking statuses
     *
     * This service is similar to [/booking/status](#operation/bookingStatus) in that it:
     * - retrieves the booking status for multiple items based on different criteria
     * - has the same request parameters as [/booking/status](#operation/bookingStatus)
     *
     * However, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).
     *
     */
    bookingStatusItems(req: operations.BookingStatusItemsRequest, config?: AxiosRequestConfig): Promise<operations.BookingStatusItemsResponse>;
    /**
     * /booking/voucher
     *
     * @remarks
     * Get voucher details
     * - Use this service to retrieve the voucher details of a booked item.
     * - The data returned is HTML-formatted and can be wrapped in a header and/or footer.
     *
     * **Sample query parameters**
     * - leadLastName=Simpson test&amp;itemId=580669678
     *
     * **or**
     * - voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true
     *
     */
    bookingVoucher(req: operations.BookingVoucherRequest, config?: AxiosRequestConfig): Promise<operations.BookingVoucherResponse>;
    /**
     * /bookings/{booking-reference}/cancel
     *
     * @remarks
     * Submits a cancellation request for the specified booking
     *
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     *
     * **Note**:
     *
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`
     *
     */
    cancelBooking(req: operations.CancelBookingRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CancelBookingResponse>;
    /**
     * /bookings/{booking-reference}/cancel-quote
     *
     * @remarks
     * Retrieves a quote for the cancellation of a booking
     *
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     *
     * **Note**:
     *
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`
     *
     */
    cancelBookingQuote(req: operations.CancelBookingQuoteRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CancelBookingQuoteResponse>;
    /**
     * /bookings/cancel-reasons
     *
     * @remarks
     * Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).
     *
     * For information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)
     *
     * **Note**:
     *
     *   * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.
     *   * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`
     *
     */
    cancellationReasons(req: operations.CancellationReasonsRequest, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CancellationReasonsResponse>;
}
