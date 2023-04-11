import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListHotelsRequest extends SpeakeasyBase {
    /**
     * Allows for filtering based on the country of a property. The only available modifier for this parameter is equal to (`eq`). Usage example: `?country[eq]=GBR`
     */
    country?: Record<string, any>;
    /**
     * Allows for filtering based on the date and time when this hotel was first added to the Impala platform, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?created[lte]=2020-11-04T19:37:37Z&created[gte]=2020-11-04T15:56:37.000Z`
     */
    created?: Record<string, any>;
    /**
     * The departure day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).
     */
    end?: string;
    /**
     * A comma-separated list of hotel ids you wish to filter by (e.g. `60a06628-2c71-44bf-9685-efbd2df4179e,60a06628-2c71-44bf-9685-efbd2df4179e`).
     */
    hotelIds?: string[];
    /**
     * The WGS 84 latitude of the location to search around (e.g. `58.386186`).
     */
    latitude?: number;
    /**
     * The WGS 84 longitude of the location to search around (e.g. `-9.952549`).
     */
    longitude?: number;
    /**
     * Allows for filtering based on the property name. Available modifiers include equal to (`eq`) or case insensitive search (`like`). Usage example: `?name[like]=palace`
     */
    name?: Record<string, any>;
    /**
     * Offset from the first hotel in the result (for pagination).
     */
    offset?: number;
    /**
     * The distance (in meters) to search around the specified location (e.g. `10000` for 10 km).
     */
    radius?: number;
    /**
     * Number of hotels returned on a given page (pagination).
     */
    size?: number;
    /**
     * Order in which the results should be sorted. Currently allows you to sort by `name` (alphabetical), star `rating`, and `distance_m` in meters from the specified latitude/longitude. Allows for a comma-separated list of of arguments with modifiers for `:asc` (ascending) and `:desc` (descending) ordering.
     */
    sortBy?: string;
    /**
     * Allows for filtering based on the starRating of a property. Available modifiers include less than (`lt`), greater than (`gt`), less than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?starRating[gt]=3&starRating[lt]=5`
     */
    starRating?: Record<string, any>;
    /**
     * The arrival day of the desired stay range in ISO 8601 format (`YYYY-MM-DD`).
     */
    start?: string;
    /**
     * Allows for filtering based on the date and time the content of this hotel was last updated, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?updated[lte]=2020-11-04T19:37:37Z&updated[gte]=2020-11-04T15:56:37.000Z`
     */
    updated?: Record<string, any>;
}
/**
 * Returns a paginated list of hotels.
 */
export declare class ListHotels200ApplicationJSON extends SpeakeasyBase {
    data?: shared.HotelFullDetail[];
    /**
     * Information that helps paginate through lists of resources.
     */
    pagination?: shared.Pagination;
}
export declare class ListHotelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
     */
    genericError?: shared.GenericError;
    /**
     * Returns a paginated list of hotels.
     */
    listHotels200ApplicationJSONObject?: ListHotels200ApplicationJSON;
    /**
     * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
