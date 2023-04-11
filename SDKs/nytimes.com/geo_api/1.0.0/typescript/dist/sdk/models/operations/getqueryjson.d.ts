import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * When facets is set to 1, a count of all facets will be included in the response.
 */
export declare enum GetQueryJsonFacetsEnum {
    Zero = "0",
    One = "1"
}
export declare class GetQueryJsonRequest extends SpeakeasyBase {
    /**
     * Start date to end date in the following format- YYYY-MM-DD:YYYY-MM-DD
     */
    dateRange?: string;
    /**
     * The elevation of the specified place, in meters.
     */
    elevation?: number;
    /**
     * When facets is set to 1, a count of all facets will be included in the response.
     */
    facets?: GetQueryJsonFacetsEnum;
    /**
     * Filters search results based on the facets provided.  For more information on the values you can filter on, see Facets.
     *
     * @remarks
     *
     */
    filter?: string;
    /**
     * The latitude of the specified place.
     *
     * @remarks
     *
     */
    latitude?: string;
    /**
     * Limits the number of results returned
     */
    limit?: number;
    /**
     * The longitude of the specified place.
     */
    longitude?: string;
    /**
     * A displayable name for the specified place.
     */
    name?: string;
    /**
     * Sets the starting point of the result set
     */
    offset?: number;
    /**
     * Search keywords to perform a text search on the fields: web_description, event_name and venue_name. 'AND' searches can be performed by wrapping query terms in quotes. If you do not specify a query, all results will be returned.
     *
     * @remarks
     *
     */
    query?: string;
    /**
     * Sorts your results on the fields specified. <br/> `sort_value1+[asc | desc],sort_value2+[asc|desc],[...]`<br/> Appending +asc to a facet or response will sort results on that value in ascending order. Appending +desc to a facet or response  will sort results in descending order. You can sort on multiple fields. You can sort on any facet. For the list of responses you can sort on, see the Sortable Field column in the Response table. <br/><br/>If you are doing a spatial search with the ll parameter, you can also sort by the distance from the center of the search: dist+[asc | desc] <br/> **Note:** either +asc or +desc is required when using the sort parameter.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Along with ne, forms a bounded box using the longitude and latitude coordinates specified as the southwest corner. The search results are limited to the resulting box. Two float values, separated by a comma `latitude,longitude` <br/> The ne parameter is required to use this parameter.
     */
    sw?: string;
}
/**
 * An array of events
 */
export declare class GetQueryJson200ApplicationJSON extends SpeakeasyBase {
    results?: shared.Event[];
}
export declare class GetQueryJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of events
     */
    getQueryJSON200ApplicationJSONObject?: GetQueryJson200ApplicationJSON;
}
