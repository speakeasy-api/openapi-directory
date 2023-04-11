import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * - `"VOUCHER_PAPER_ONLY"`: Paper Vouchers only accepted
 *
 * @remarks
 * - `"VOUCHER_E"`: EVouchers + Paper Vouchers accepted
 *
 */
export declare enum ProductVoucherOptionEnum {
    VoucherPaperOnly = "VOUCHER_PAPER_ONLY",
    VoucherE = "VOUCHER_E"
}
export declare class ProductRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    /**
     * **unique alphanumeric identifier** of the product
     */
    code?: string;
    /**
     * **currency code** for the currency in which pricing is displayed
     *
     * @remarks
     * - default=`'USD'`
     *
     */
    currencyCode?: string;
    /**
     * **specifier:**
     *
     * @remarks
     * - `true`: return **all** tour grades, including those that are not available
     * - `false`: only display tour grades that *are* available
     *
     */
    excludeTourGradeAvailability?: boolean;
    /**
     * **specifier** as to whether or not to show 'unavailable' products:
     *
     * @remarks
     *
     *   - `true`: return *both* available and unavailable products
     *   - `false`: return *only* available products (default)
     *
     */
    showUnavailable?: boolean;
    /**
     * **specifier** of the order in which to return reviews
     *
     * @remarks
     *
     * Sort order options:
     *
     *   - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average
     *   - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average
     *   - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review
     *
     */
    sortOrder?: shared.SortOrderREVIEWEnum;
    /**
     * - `"VOUCHER_PAPER_ONLY"`: Paper Vouchers only accepted
     *
     * @remarks
     * - `"VOUCHER_E"`: EVouchers + Paper Vouchers accepted
     *
     */
    voucherOption?: ProductVoucherOptionEnum;
}
export declare class Product200ApplicationJSONDataAgeBands extends SpeakeasyBase {
    /**
     * **indicator**: `true` if *this* age band describes adults (not children)
     */
    adult?: boolean;
    /**
     * **numeric lower age limit** of the age range defined by *this* age band
     */
    ageFrom?: number;
    /**
     * **numeric upper age limit** of the age range included in *this* age band
     */
    ageTo?: number;
    /**
     * **unique numeric identifier** for the age band
     *
     * @remarks
     * - See: [Working with age bands](#section/Appendices/Working-with-age-bands)
     *
     */
    bandId?: number;
    /**
     * **number** of participants in *this* age band required to book the product
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
     * **sort order** for *this* age band object
     */
    sortOrder?: number;
    /**
     * **indicator**: `true` if members of this age band are considered to be adults
     */
    treatAsAdult?: boolean;
}
export declare class Product200ApplicationJSONDataBookingQuestions extends SpeakeasyBase {
    /**
     * **natural-language instructions** for *this* booking question
     *
     * @remarks
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    message?: string;
    /**
     * **unique numeric identifier** for *this* booking question
     *
     * @remarks
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    questionId?: number;
    /**
     * **boolean indicator**:
     *
     * @remarks
     * - `true` if the answer to *this* booking question &lt;u&gt;must&lt;/u&gt; be included in the request object to the b service when booking *this* product
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    required?: boolean;
    /**
     * **sort order** for *this* booking question
     */
    sortOrder?: number;
    /**
     * **unique alphanumeric identifier** for the booking question
     *
     * @remarks
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    stringQuestionId?: string;
    /**
     * **natural-language subtitle** for *this* booking question
     *
     * @remarks
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    subTitle?: string;
    /**
     * **natural-language title** for *this* booking question
     *
     * @remarks
     * - **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information
     *
     */
    title?: string;
}
export declare class Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate extends SpeakeasyBase {
    /**
     * **number** of days prior to the tour start date that *this* policy window begins
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
     * Usually shows the Unix timestamp giving the exact time the policy ends. `null` in /product as no booking has yet been made.
     */
    policyEndTimestamp?: number;
    /**
     * Usually shows the Unix timestamp giving the exact time the policy commences. `null` in /product as no booking has yet been made.
     */
    policyStartTimestamp?: number;
}
export declare class Product200ApplicationJSONDataMerchantTermsAndConditions extends SpeakeasyBase {
    /**
     * Usually shows the total amount refundable if the cancellation is processed now. `null` in /product as no booking has been made.
     */
    amountRefundable?: number;
    cancellationFromTourDate?: Product200ApplicationJSONDataMerchantTermsAndConditionsCancellationFromTourDate[];
    /**
     * **numeric identifier** for the merchant terms and conditions type for *this* product
     */
    merchantTermsAndConditionsType?: number;
    /**
     * **natural-language description** of the terms and conditions for *this* product
     */
    termsAndConditions?: string;
}
export declare class Product200ApplicationJSONDataPassengerAttributes extends SpeakeasyBase {
    /**
     * ignore (Viator only)
     */
    customAttributeKgs?: string;
    /**
     * ignore (Viator only)
     */
    customAttributeLbs?: string;
    /**
     * ignore (Viator only)
     */
    errorMissingMessage?: string;
    /**
     * ignore (Viator only)
     */
    errorValidationMessage?: string;
    /**
     * ignore (Viator only)
     */
    questionId?: string;
    /**
     * ignore (Viator only)
     */
    required?: boolean;
    /**
     * ignore (Viator only)
     */
    title?: string;
    /**
     * ignore (Viator only)
     */
    validateType?: string;
}
export declare class Product200ApplicationJSONDataProductPhotos extends SpeakeasyBase {
    /**
     * **natural-language caption** for *this* photo
     */
    caption?: string;
    /**
     * **URL** of *this* photo
     */
    photoURL?: string;
    /**
     * **natural-language name** of the supplier of *this* photo
     */
    supplier?: string;
}
export declare class Product200ApplicationJSONDataTourGrades extends SpeakeasyBase {
    /**
     * **currency code** of the currency *this* product's tour grades prices are shown in
     */
    currencyCode?: string;
    /**
     * **language code** of the standard language for *this* tour grade
     */
    defaultLanguageCode?: string;
    /**
     * **unique alphanumeric identifier** of *this* tour grade
     */
    gradeCode?: string;
    /**
     * **departure time** for *this* tour grade if available
     */
    gradeDepartureTime?: string;
    /**
     * **natural-language description** of *this* tour grade
     */
    gradeDescription?: string;
    /**
     * **natural-language description** of *this* tour grade
     */
    gradeTitle?: string;
    /**
     * **dictionary** of language service codes and their natural-language descriptors
     */
    langServices?: Record<string, string>;
    /**
     * Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate
     *
     * @remarks
     *
     * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    merchantNetPriceFrom?: number;
    /**
     * Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)
     *
     * @remarks
     *
     * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    merchantNetPriceFromFormatted?: string;
    /**
     * **numeric suggested retail price** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFrom?: number;
    /**
     * **currency-formatted suggested retail price** for *this* tour grade
     *
     * @remarks
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFromFormatted?: string;
    /**
     * **sort order** of *this* tour grade
     */
    sortOrder?: number;
}
/**
 * **object** containing product details
 */
export declare class Product200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **array** of HTML-formatted clauses providing additional information about *this* product, such as:
     *
     * @remarks
     * - when the confirmation will be received (i.e. at time of booking, or within 48 hours of booking etc)
     * - accessibility options; such as whether wheelchair access is available
     * - particulars about the pick-up location and process
     * - **Note**: may contain basic HTML mark-up tags – e.g., br, li, b, u, p, i, ul and ol
     *
     */
    additionalInfo?: string[];
    /**
     * ignore (Viator only)
     */
    admission?: string;
    /**
     * **array** of age band objects detailing the age bands available for *this* product
     *
     * @remarks
     *
     * - **note**: only the age bands listed here can book this product using the [/booking/book](#operation/bookingBook) service
     *
     */
    ageBands?: Product200ApplicationJSONDataAgeBands[];
    /**
     * **indicator**: `true` if all traveler names are required.&lt;br /&gt;**Note**: if set to `true`, then all passenger names must be included in the booking request, and all must be unique. Placeholder names cannot be used.
     */
    allTravellerNamesRequired?: boolean;
    /**
     * **indicator**: `true` if Apple Wallet is supported
     */
    applePassSupported?: boolean;
    /**
     * ignore (Viator only)
     */
    available?: boolean;
    /**
     * **booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made
     *
     * @remarks
     *
     * *one of* the following:
     * - `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification
     * - `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified
     * - `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services
     * - `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.
     *
     * If a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period
     *
     */
    bookingEngineId?: shared.BookingEngineIdEnum;
    bookingQuestions?: Product200ApplicationJSONDataBookingQuestions[];
    /**
     * **list** of unique numeric category identifiers that *this* product falls under
     *
     * @remarks
     * - `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    catIds?: number[];
    /**
     * **name** of city or destination that *this* product operates in
     */
    city?: string;
    /**
     * **unique alphanumeric identifier** of *this* product
     */
    code?: string;
    /**
     * **natural-language name** of the country in which *this* product operates
     */
    country?: string;
    /**
     * **currency** in which to display *this* product's pricing details
     */
    currencyCode?: string;
    /**
     * **HTML-formatted natural-language description** of *this* product's departure location
     */
    departurePoint?: string;
    /**
     * **HTML-formatted natural-language description** of *this* product's departure times
     *
     * @remarks
     * - may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol
     *
     */
    departureTime?: string;
    /**
     * **HTML-formatted natural-language description** of extra information pertaining to product departure times
     */
    departureTimeComments?: string;
    /**
     * **HTML-formatted natural-language description** of *this* product (extended)
     */
    description?: string;
    /**
     * **unique numeric identifier** of the destination in which *this* product is located
     *
     * @remarks
     * - `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
     *
     */
    destinationId?: number;
    /**
     * **natural-language description** of *this* product's duration
     */
    duration?: string;
    /**
     * ignore (Viator only)
     */
    essential?: string;
    /**
     * **array** of HTML-formatted natural-language exclusions for *this* product
     *
     * @remarks
     * - may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol
     *
     */
    exclusions?: string[];
    /**
     * ignore (Viator only)
     */
    highlights?: number;
    /**
     * **indicator**: `true` if *this* product offers hotel pick-up; if so, you will need to collect the user's hotel details
     */
    hotelPickup?: boolean;
    /**
     * **array** of HTML-formatted features included in *this* product
     *
     * @remarks
     * - may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol
     *
     */
    inclusions?: string[];
    /**
     * **HTML-formatted description** of the itinerary of *this* tour if available
     *
     * @remarks
     * - may contain basic HTML tags; e.g., br, li, b, u, p, i, ul and ol
     *
     */
    itinerary?: string;
    /**
     * **natural-language description** of *this* product's location
     *
     * @remarks
     * -  can be a combination of the country and city, or a custom location
     *
     */
    location?: string;
    /**
     * **URL** of this product's map (usually an image)
     */
    mapURL?: string;
    /**
     * **maximum number of travelers** allowed per-booking for *this* product
     */
    maxTravellerCount?: number;
    /**
     * ignore (Viator only)
     *
     * @remarks
     *
     *
     * For cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object
     *
     */
    merchantCancellable?: boolean;
    /**
     * Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate
     *
     * @remarks
     *
     * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    merchantNetPriceFrom?: number;
    /**
     * Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)
     *
     * @remarks
     *
     * For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)
     *
     */
    merchantNetPriceFromFormatted?: string;
    merchantTermsAndConditions?: Product200ApplicationJSONDataMerchantTermsAndConditions;
    /**
     * **number** of hours before the travel date that *this* product will be 'on-request' for
     *
     * @remarks
     * - this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`
     * - an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date
     * - **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API
     *
     */
    onRequestPeriod?: number;
    /**
     * Ignore (Viator only)
     *
     * @remarks
     *
     */
    onSale?: boolean;
    /**
     * **HTML-formatted natural-language description** of *this* product's operation frequency
     */
    operates?: string;
    /**
     * **number** of panoramic images available for *this* product
     */
    panoramaCount?: number;
    /**
     * ignore (Viator only)
     */
    pas?: Record<string, any>;
    /**
     * ignore (Viator only)
     */
    passengerAttributes?: Product200ApplicationJSONDataPassengerAttributes[];
    /**
     * **number** of user photos available for *this* product
     */
    photoCount?: number;
    /**
     * **suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.
     *
     * @remarks
     *
     *
     *   - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    price?: number;
    /**
     * **currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter
     *
     * @remarks
     *
     * - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)
     *
     */
    priceFormatted?: string;
    /**
     * **unique numeric identifier** of *this* product's primary destination
     */
    primaryDestinationId?: number;
    /**
     * **natural-language name** of *this* product's primary destination
     */
    primaryDestinationName?: string;
    /**
     * **URL-formatted name** of the destination in which *this* product is located
     */
    primaryDestinationUrlName?: string;
    /**
     * ignore (Viator only)
     */
    primaryGroupId?: string;
    /**
     * **array** of image objects detailing images available for *this* product
     */
    productPhotos?: Product200ApplicationJSONDataProductPhotos[];
    /**
     * **URL-formatted name** of *this* product
     */
    productUrlName?: string;
    /**
     * **average user rating** of *this* product
     *
     * @remarks
     *
     * users rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;
     *
     * the `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received
     *
     */
    rating?: number;
    /**
     * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
     *
     * @remarks
     *
     * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
     *
     * - **note**: see response sample for structure
     *
     */
    ratingCounts?: shared.RatingCounts;
    /**
     * **natural-language name** of the region in which *this* product operates
     */
    region?: string;
    /**
     * **HTML-formatted natural-language description** of *this* product's drop-off details (if available)
     */
    returnDetails?: string;
    /**
     * **number** of user reviews that have been submitted by users for *this* product
     *
     * @remarks
     *
     * If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.
     *
     */
    reviewCount?: number;
    /**
     * **array** of user review objects
     *
     * @remarks
     *
     * The number of reviews returned here will either be the number of reviews you are entitled to according to your account configuration; or, if you are not limited in the number of reviews you can receive, will be a maxiumum of 24 reviews. If the value of `reviewCount` in this response exceeds 24, you can use the [/product/reviews](#operation/productReviews) endpoint to retrieve the remainder of the reviews.
     *
     */
    reviews?: shared.ReviewObject[];
    /**
     * **numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     */
    rrp?: number;
    /**
     * **currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     */
    rrpFormatted?: string;
    /**
     * ignore (Viator only)
     *
     * @remarks
     *
     * **Note**: The information that was previously returned in this field is available in the `additionalInfo`, `inclusions` and `description` fields
     *
     */
    salesPoints?: string[];
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
     * **natural-language description** (shortened) of *this* product
     */
    shortDescription?: string;
    /**
     * **natural-language title** (shortened) of *this* product
     */
    shortTitle?: string;
    /**
     * **natural-language description** of any special offers available for *this* product when `specialOfferAvailable` is `true`.
     *
     * @remarks
     * - empty string if there are no specials available
     * - See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     *
     */
    specialOffer?: string;
    /**
     * **indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     */
    specialOfferAvailable?: boolean;
    /**
     * ignore (Viator only)
     */
    specialReservation?: boolean;
    /**
     * ignore (Viator only)
     */
    specialReservationDetails?: string;
    /**
     * ignore (Viator only)
     */
    sslSupported?: boolean;
    /**
     * **list** of unique numeric subcategory identifiers that *this* product falls under
     *
     * @remarks
     * - `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    subCatIds?: number[];
    /**
     * **unique identification code** of *this* product's supplier
     */
    supplierCode?: string;
    /**
     * **name** of *this* product's supplier
     */
    supplierName?: string;
    /**
     * **URL** of *this* product's high-resolution thumbnail image
     */
    thumbnailHiResURL?: string;
    /**
     * **URL** for *this* product's thumbnail image
     */
    thumbnailURL?: string;
    /**
     * **natural-language title** of *this* product
     */
    title?: string;
    /**
     * **array** of tour grade objects available for *this* product
     */
    tourGrades?: Product200ApplicationJSONDataTourGrades[];
    /**
     * **indicator**:
     *
     * @remarks
     * - `true`: tour grades are available for this product, meaning you will need to display these tour grades to the user and include a tour grade when booking *this* product
     * - `false`: only a default tour grade is available for *this* product
     *
     */
    tourGradesAvailable?: boolean;
    /**
     * **numeric indicator** of the language translation level for *this* product that is one of:
     *
     * @remarks
     * - `0`: no translation (English only)
     * - `80`: full machine translation
     * - `100`: full human translation
     *
     * See: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information
     *
     */
    translationLevel?: shared.TranslationLevelEnum;
    /**
     * **array** of user photo objects
     */
    userPhotos?: shared.PhotoObject[];
    /**
     * ignore (Viator only) – videos are not available to partners
     */
    videoCount?: number;
    /**
     * ignore (Viator only) – videos are not available to partners
     */
    videos?: string;
    /**
     * **specifier** of the type(s) of vouchers that can be used:
     *
     * @remarks
     *
     *   - `VOUCHER_PAPER_ONLY` - *only* printed paper vouchers accepted
     *   - `VOUCHER_E` - e-vouchers + printed paper vouchers accepted
     *
     */
    voucherOption?: string;
    /**
     * **natural-language description** of any requirements pertaining to the use of the voucher
     */
    voucherRequirements?: any;
    /**
     * ignore (Viator only)
     */
    webURL?: string;
}
/**
 * Success
 */
export declare class Product200ApplicationJSON extends SpeakeasyBase {
    /**
     * **object** containing product details
     */
    data?: Product200ApplicationJSONData;
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
export declare class ProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    product200ApplicationJSONObject?: Product200ApplicationJSON;
}
