import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AvailableProductsRequestBody extends SpeakeasyBase {
    /**
     * **currency** in which to display product pricing
     *
     * @remarks
     * - default: `'USD'`
     *
     */
    currencyCode?: string;
    /**
     * **end date** of the date range to search within (must be in the future)
     */
    endDate?: string;
    /**
     * **number of adult travelers** who wish to participate
     *
     * @remarks
     * - default: `1`
     *
     */
    numAdults?: number;
    /**
     * **array of unique alphanumeric product identifiers** specifying which products to find the availability of
     *
     * @remarks
     * - maximum: `50`
     *
     */
    productCodes?: string[];
    /**
     * **start date** of the date range to search within (must be in the future)
     */
    startDate?: string;
}
export declare class AvailableProductsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: AvailableProductsRequestBody;
}
/**
 * **pricing object** for *this* tour grade
 */
export declare class AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote extends SpeakeasyBase {
    /**
     * **general retail price** of *this* tour grade formatted according to the example
     */
    generalRetailPrice?: string;
    /**
     * ignore (Viator only)
     */
    merchantNetPrice?: string;
    /**
     * **retail price** of *this* tour grade formatted according to the example
     */
    retailPrice?: string;
}
export declare class AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates extends SpeakeasyBase {
    /**
     * **list of dates** on which *this* tour grade is available formatted according to the example
     */
    dateList?: string;
    /**
     * **lowest sale price** for *this* tour grade formatted according to the example
     */
    priceFrom?: string;
    /**
     * **pricing object** for *this* tour grade
     */
    priceQuote?: AvailableProducts200ApplicationJSONDataPasTourGradesAvailDatesPriceQuote;
}
export declare class AvailableProducts200ApplicationJSONDataPasTourGrades extends SpeakeasyBase {
    /**
     * **array of objects** with availability and pricing information for *this* tour grade
     */
    availDates?: AvailableProducts200ApplicationJSONDataPasTourGradesAvailDates[];
    /**
     * **booking modality specifier** for *this* tour grade
     */
    bookingEngine?: string;
    /**
     * **natural-language description** of *this* tour grade
     */
    description?: string;
    /**
     * **dictionary** of language codes to array of textual language service descriptors available for *this* tour grade
     */
    languageServices?: Record<string, any[]>;
    /**
     * ignore (Viator only)
     */
    sapi?: boolean;
    /**
     * **natural-language title** of *this* tour grade
     */
    title?: string;
    /**
     * **alphanumeric identifier** for *this* tour grade
     */
    tourGradeCode?: string;
}
/**
 * **object** detailing product availability
 *
 * @remarks
 * - `pas` stands for Product Availability Schema
 *
 */
export declare class AvailableProducts200ApplicationJSONDataPas extends SpeakeasyBase {
    /**
     * ignore (Viator only)
     */
    incompleteQuote?: boolean;
    /**
     * **unique alphanumeric identifier** of *this* product
     */
    productCode?: string;
    /**
     * ignore (Viator only)
     */
    removedChildAges?: string[];
    /**
     * **dictionary** of tour grade alphanumeric codes to tour grade objects
     */
    tourGrades?: Record<string, AvailableProducts200ApplicationJSONDataPasTourGrades>;
    /**
     * **alphanumeric code** indicating the combination of adults and children being enquired about
     */
    travellerMix?: string;
}
export declare class AvailableProducts200ApplicationJSONData extends SpeakeasyBase {
    /**
     * ignore (Viator only)
     */
    admission?: string;
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
    /**
     * **list** of unique numeric category identifiers that this product falls under
     *
     * @remarks
     * - `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    catIds?: number[];
    /**
     * **unique alphanumeric identifier** of *this* product
     */
    code?: string;
    /**
     * Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed
     */
    currencyCode?: string;
    /**
     * **natural-language description** of *this* product's duration
     */
    duration?: string;
    /**
     * ignore (Viator only)
     */
    essential?: string;
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
     * **number** of panoramic images available for *this* product
     */
    panoramaCount?: number;
    /**
     * **object** detailing product availability
     *
     * @remarks
     * - `pas` stands for Product Availability Schema
     *
     */
    pas?: AvailableProducts200ApplicationJSONDataPas;
    /**
     * **number** of user photos published for *this* product
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
     * **URL-formatted name** of *this* product's primary destination
     */
    primaryDestinationUrlName?: string;
    /**
     * ignore (Viator only)
     */
    primaryGroupId?: string;
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
     * **number** of user reviews that have been submitted by users for *this* product
     *
     * @remarks
     *
     * If your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.
     *
     */
    reviewCount?: number;
    /**
     * **numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     */
    rrp?: number;
    /**
     * **currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.
     */
    rrpFormatted?: string;
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
     * **natural-language description** (short) of *this* product
     */
    shortDescription?: string;
    /**
     * **natural-language title (shortened)** of *this* product
     */
    shortTitle?: string;
    /**
     * **sort order** of this result object
     */
    sortOrder?: number;
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
     * **list** of unique numeric subcategory identifiers that this product falls under
     *
     * @remarks
     * - `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    subCatIds?: number[];
    /**
     * **unique identifier** of *this* product's supplier
     */
    supplierCode?: string;
    /**
     * **natural-language name** of *this* product's supplier
     */
    supplierName?: string;
    /**
     * **URL** of *this* product's high resolution thumbnail image
     */
    thumbnailHiResURL?: string;
    /**
     * **URL** of *this* product's thumbnail image
     */
    thumbnailURL?: string;
    /**
     * **natural-language title** of *this* product
     */
    title?: string;
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
     * **natural-language description** of *this* product
     */
    uniqueShortDescription?: string;
    /**
     * ignore (Viator only) – videos are not available to partners
     *
     * @remarks
     *
     */
    videoCount?: number;
    /**
     * ignore (Viator only)
     */
    webURL?: string;
}
/**
 * Success
 */
export declare class AvailableProducts200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of product objects
     */
    data?: AvailableProducts200ApplicationJSONData[];
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
export declare class AvailableProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    availableProducts200ApplicationJSONObject?: AvailableProducts200ApplicationJSON;
}
