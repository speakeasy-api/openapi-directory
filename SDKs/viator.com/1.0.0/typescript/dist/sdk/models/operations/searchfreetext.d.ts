import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchFreetextRequestBodySearchTypesEnum {
    Product = "PRODUCT",
    Destination = "DESTINATION",
    Attraction = "ATTRACTION",
    Recommendation = "RECOMMENDATION"
}
export declare class SearchFreetextRequestBody extends SpeakeasyBase {
    /**
     * **currency code** for the currency in which to display product pricing information
     */
    currencyCode?: string;
    /**
     * **unique numeric identifier** of the destination to search within
     *
     * @remarks
     * - `destinationId` can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service
     *
     */
    destId?: number;
    /**
     * **array** of search domain specifiers where each item is *one of*:
     *
     * @remarks
     *   - `"PRODUCT"`: a tour / activity
     *   - `"DESTINATION"`: continent, country, city, region
     *   - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)
     *   - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)
     *
     */
    searchTypes?: SearchFreetextRequestBodySearchTypesEnum[];
    /**
     * **sort order** in which to return the results that is *one of*:
     *
     * @remarks
     *
     *   - `'TOP_SELLERS'`: the top sellers
     *   - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)
     *   - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)
     *   - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)
     *   - `'PRICE_FROM_D'`: descending by price (high -&gt; low)
     *
     */
    sortOrder?: shared.SortOrderEnum;
    /**
     * **text** to search for
     */
    text?: string;
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
export declare class SearchFreetextRequest extends SpeakeasyBase {
    /**
     * Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)
     *
     * @remarks
     *
     */
    acceptLanguage: string;
    requestBody?: SearchFreetextRequestBody;
}
/**
 * Success
 */
export declare class SearchFreetext200ApplicationJSON extends SpeakeasyBase {
    /**
     * **array** of search results
     */
    data?: shared.SearchFreetextResponse[];
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
export declare class SearchFreetextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    searchFreetext200ApplicationJSONObject?: SearchFreetext200ApplicationJSON;
}
