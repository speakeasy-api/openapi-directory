import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * **sort order** in which to return the results that is *one of*:
 *
 * @remarks
 *   * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)
 *   * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)
 *   * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)
 *   * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)
 *   * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)
 *
 */
export declare enum TaxonomyAttractionsRequestBodySortOrderEnum {
    SeoPublishedDateD = "SEO_PUBLISHED_DATE_D",
    SeoPublishedDateA = "SEO_PUBLISHED_DATE_A",
    SeoReviewAvgRatingD = "SEO_REVIEW_AVG_RATING_D",
    SeoReviewAvgRatingA = "SEO_REVIEW_AVG_RATING_A",
    SeoAlphabetical = "SEO_ALPHABETICAL"
}
export declare class TaxonomyAttractionsRequestBody extends SpeakeasyBase {
    /**
     * **unique numeric identifier** of the destination in which to search for attractions
     */
    destId?: number;
    /**
     * **sort order** in which to return the results that is *one of*:
     *
     * @remarks
     *   * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)
     *   * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)
     *   * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)
     *   * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)
     *   * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)
     *
     */
    sortOrder?: TaxonomyAttractionsRequestBodySortOrderEnum;
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
export declare class TaxonomyAttractionsRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: TaxonomyAttractionsRequestBody;
}
export declare class TaxonomyAttractions200ApplicationJSONData extends SpeakeasyBase {
    /**
     * **name** of the city in which the attraction is located
     */
    attractionCity?: string;
    /**
     * **latitude component** of the attraction's location
     */
    attractionLatitude?: number;
    /**
     * **longitude component** of the attraction's location
     */
    attractionLongitude?: number;
    /**
     * **name** of the state in which the attraction is located
     */
    attractionState?: string;
    /**
     * **street address** of the attraction
     */
    attractionStreetAddress?: string;
    /**
     * **unique numeric identifier** of the the destination associated with the attraction
     */
    destinationId?: number;
    /**
     * **URL-formatted title** of the attraction page
     */
    pageUrlName?: string;
    /**
     * **number** of user photos published for the attraction
     */
    photoCount?: number;
    /**
     * **unique numeric identifier** of the attraction's primary destination
     */
    primaryDestinationId?: number;
    /**
     * **natural-language name** of the attraction's primary destination
     */
    primaryDestinationName?: string;
    /**
     * **URL-formatted name** of the destination associated with *this* attraction
     */
    primaryDestinationUrlName?: string;
    /**
     * **number** of products associated with the attraction
     */
    productCount?: number;
    /**
     * **conventionally-formatted date** on which the attraction was listed
     */
    publishedDate?: string;
    /**
     * **average user rating** of the attraction
     */
    rating?: number;
    /**
     * **unique numeric identifier** of the attraction
     *
     * @remarks
     * - use as an input for [/search/products](#operation/searchProducts)
     *
     */
    seoId?: number;
    /**
     * **sort order** of *this* listing
     */
    sortOrder?: number;
    /**
     * **URL** for the attraction's high-resolution thumbnail image
     */
    thumbnailHiResURL?: string;
    /**
     * **URL** the attraction's thumbnail image
     */
    thumbnailURL?: string;
    /**
     * **natural-language title** of the attraction
     */
    title?: string;
    /**
     * ignore (Viator only)
     */
    webURL?: string;
}
/**
 * Success
 */
export declare class TaxonomyAttractions200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of attraction objects
     */
    data?: TaxonomyAttractions200ApplicationJSONData[];
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
export declare class TaxonomyAttractionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    taxonomyAttractions200ApplicationJSONObject?: TaxonomyAttractions200ApplicationJSON;
}
