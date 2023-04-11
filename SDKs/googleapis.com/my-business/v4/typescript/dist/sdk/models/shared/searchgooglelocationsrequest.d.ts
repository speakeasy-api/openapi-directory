import { SpeakeasyBase } from "../../../internal/utils";
import { LocationInput } from "./location";
/**
 * Request message for GoogleLocations.SearchGoogleLocations.
 */
export declare class SearchGoogleLocationsRequestInput extends SpeakeasyBase {
    /**
     * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
     */
    location?: LocationInput;
    /**
     * Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.
     */
    query?: string;
    /**
     * The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.
     */
    resultCount?: number;
}
