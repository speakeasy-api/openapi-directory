import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SearchSearchRouteTypesEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class SearchSearchRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Placeholder for future development; currently unavailable
     */
    includeAddresses?: boolean;
    /**
     * Indicates if outlets will be returned in response (default = true)
     */
    includeOutlets?: boolean;
    /**
     * Filter by geographic coordinate of latitude
     */
    latitude?: number;
    /**
     * Filter by geographic coordinate of longitude
     */
    longitude?: number;
    /**
     * Indicates whether to find routes by suburbs in the search term (default = true)
     */
    matchRouteBySuburb?: boolean;
    /**
     * Indicates whether to search for stops according to a metlink stop ID (default = false)
     */
    matchStopByGtfsStopId?: boolean;
    /**
     * Indicates whether to find stops by suburbs in the search term (default = true)
     */
    matchStopBySuburb?: boolean;
    /**
     * Filter by maximum distance (in metres) from location specified via latitude and longitude parameters
     */
    maxDistance?: number;
    /**
     * Filter by route_type; values returned via RouteTypes API (note: stops and routes are ordered by route_types specified)
     */
    routeTypes?: SearchSearchRouteTypesEnum[];
    /**
     * Search text (note: if search text is numeric and/or less than 3 characters, the API will only return routes)
     */
    searchTerm: string;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class SearchSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Stops, routes and myki ticket outlets that contain the search term (note: stops and routes are ordered by route_type by default).
     */
    v3SearchResult?: shared.V3SearchResult;
}
