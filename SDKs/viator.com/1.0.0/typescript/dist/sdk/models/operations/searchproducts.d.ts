import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * **sort order** in which to return the results that is *one of*:
 *
 * @remarks
 *
 *   - `"TOP_SELLERS"`: the top sellers
 *   - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)
 *   - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)
 *   - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)
 *   - `"PRICE_FROM_D"`: descending by price (high -&gt; low)
 *
 */
export declare enum SearchProductsRequestBodySortOrderEnum {
    TopSellers = "TOP_SELLERS",
    ReviewAvgRatingA = "REVIEW_AVG_RATING_A",
    ReviewAvgRatingD = "REVIEW_AVG_RATING_D",
    PriceFromA = "PRICE_FROM_A",
    PriceFromD = "PRICE_FROM_D"
}
export declare class SearchProductsRequestBody extends SpeakeasyBase {
    /**
     * **unique numeric identifier** of *this* product category to search within
     *
     * @remarks
     * - `categoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
     * - at present, it is not possible to use `catId` in conjunction with `seoId`
     *
     */
    catId?: number;
    /**
     * **currency** in which to display product prices
     */
    currencyCode?: string;
    /**
     * **unique numeric identifier** of the destination in which to search for products
     *
     * @remarks
     * - `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
     * - use **EITHER** `destId` **OR** `seoId`, but not both
     *
     */
    destId?: number;
    /**
     * **end date delimiter** for the search (must be in the future)
     *
     * @remarks
     * - e.g., `'2019-10-21'`
     *
     */
    endDate?: string;
    /**
     * **search restriction specifier** for products associated with an attraction uniquely identified by `seoId`
     *
     * @remarks
     * - use **EITHER** `destId` **OR** `seoId`, but not both
     *
     */
    seoId?: string;
    /**
     * **sort order** in which to return the results that is *one of*:
     *
     * @remarks
     *
     *   - `"TOP_SELLERS"`: the top sellers
     *   - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)
     *   - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)
     *   - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)
     *   - `"PRICE_FROM_D"`: descending by price (high -&gt; low)
     *
     */
    sortOrder?: SearchProductsRequestBodySortOrderEnum;
    /**
     * **start date delimiter** for the search (must be in the future)
     *
     * @remarks
     * - e.g., `'2018-10-21'`
     *
     */
    startDate?: string;
    /**
     * **unique numeric identifier** of *this* product subcategory to search within
     *
     * @remarks
     * - `subcategoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service
     * - at present, it is not possible to use `subCatId` in conjunction with `seoId`
     *
     */
    subCatId?: number;
    /**
     * **start and end rows** to return in the format {start}-{end}
     *
     * @remarks
     * - e.g. `'1-10'`, `'11-20'`
     *
     * **Note**:
     * - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`
     * - if `topX` is not specified, the default is `'1-100'`
     *
     */
    topX?: string;
}
export declare class SearchProductsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: SearchProductsRequestBody;
}
export declare class SearchProducts200ApplicationJSONData extends SpeakeasyBase {
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
     * **list** of unique numeric category identifiers for *this* product
     *
     * @remarks
     * - the `categoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    catIds?: number[];
    /**
     * **unique alphanumeric identifier** of *this* product
     */
    code?: string;
    /**
     * **indicator** of the currency in which *this* product's prices are displayed
     */
    currencyCode?: string;
    /**
     * **natural-language description** of the duration of *this* product
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
    pas?: Record<string, any>;
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
    primaryGroupId?: number;
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
    rrpformatted?: string;
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
     * **HTML-formatted natural-language description** of *this* product
     */
    shortDescription?: string;
    /**
     * **short natural-language title** of *this* product (for use when there is a need to conserve space)
     */
    shortTitle?: string;
    /**
     * **sort order** for *this* product
     */
    sortOrder?: number;
    /**
     * ignore (Viator only)
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
    sslSupported?: any;
    /**
     * **list** of unique numeric subcategory identifiers for *this* product
     *
     * @remarks
     * - the `subcategoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service
     *
     */
    subCatIds?: number[];
    /**
     * **unique identifier** of *this* product's supplier in text string format
     */
    supplierCode?: string;
    /**
     * **natural-language name** of *this* product's supplier
     */
    supplierName?: string;
    /**
     * **URL** for the high resolution thumbnail for *this* product
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
     * ignore (Viator only)
     */
    uniqueShortDescription?: string;
    /**
     * ignore (Viator only) – videos are not available to partners
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
export declare class SearchProducts200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of product objects
     */
    data?: SearchProducts200ApplicationJSONData[];
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
export declare class SearchProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    searchProducts200ApplicationJSONObject?: SearchProducts200ApplicationJSON;
}
