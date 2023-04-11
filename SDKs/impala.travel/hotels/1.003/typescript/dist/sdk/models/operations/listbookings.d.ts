import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListBookingsRequest extends SpeakeasyBase {
    /**
     * Allows for filtering based on creation date and time of the booking in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?created[lte]=2020-11-04T19:37:37Z&created[gte]=2020-11-04T15:56:37.000Z`
     */
    created?: Record<string, any>;
    /**
     * Allows for filtering based on departure date of the booking in ISO 8601 format (e.g. `2021-12-01`). Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?end[lte]=2021-12-25&end[gte]=2021-12-15`
     */
    end?: Record<string, any>;
    /**
     * Pagination offset. Defaults to 0 if omitted.
     */
    offset?: number;
    /**
     * Pagination size. Defaults to 100 if omitted.
     */
    size?: number;
    /**
     * Order in which the results should be sorted. Currently allows you to sort by `createdAt` and `updatedAt`. Specify multiple paramaters by separating with commas
     */
    sortBy?: string;
    /**
     * Allows for filtering based on arrival date of the booking in ISO 8601 format (e.g. `2021-12-01`). Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?start[lte]=2021-12-20&start[gte]=2021-12-10`
     */
    start?: Record<string, any>;
    /**
     * Allows for filtering based on the date and time the booking was last updated, in ISO 8601 format (e.g. `2020-11-04T17:37:37Z`) and UTC timezone. Available modifiers include less than (`lt`), greater than (`gt`), lower than or equal to (`lte`), greater than or equal to (`gte`) and equal to (`eq`). Usage example: `?updated[lte]=2020-11-04T19:37:37Z&updated[gte]=2020-11-04T15:56:37.000Z`
     */
    updated?: Record<string, any>;
}
/**
 * Returns a paginated list of bookings (filtered based on your query parameters).
 */
export declare class ListBookings200ApplicationJSON extends SpeakeasyBase {
    data: shared.Booking[];
    /**
     * Information that helps paginate through lists of resources.
     */
    pagination: shared.Pagination;
}
export declare class ListBookingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Your request was sent without or with an incorrect API key. This most frequently happens when the `x-api-key` header wasn't added or contains an incorrect value. This might also happen if you're trying to access the production API endpoints with a sandbox API key or vice versa.
     */
    genericError?: shared.GenericError;
    /**
     * Returns a paginated list of bookings (filtered based on your query parameters).
     */
    listBookings200ApplicationJSONObject?: ListBookings200ApplicationJSON;
    /**
     * Your request wasn't formatted correctly and therefore couldn't be processed. This most frequently happens when query parameters or request body values are missing, incorrectly formatted or added where they don't exist (e.g. due to typos). We're including a list of `validations` to point out where things are going wrong and should be fixed.
     */
    validationError?: shared.ValidationError;
}
