import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest extends SpeakeasyBase {
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * Indexes for which extended postal codes should be included in the results. Available indexes are:
     *
     * @remarks
     *   - <b>Addr</b> = Address ranges
     *   - <b>Geo</b> = Geographies
     *   - <b>PAD</b> = Point Addresses
     *   - <b>POI</b> = Points of Interest
     *   - <b>Str</b> = Streets
     *   - <b>XStr</b> = Cross Streets (intersections)
     */
    extendedPostalCodesFor?: string;
    /**
     * The directional heading in degrees, usually similar to the course along a road segment. Entered in degrees, measured clockwise from north (so north is 0, east is 90, etc.)
     */
    heading: number;
    /**
     * A comma separated list of indexes which should be utilized for the search. Item order does not matter. Available indexes are:
     *
     * @remarks
     *   - <b>Addr</b> = Address range interpolation (when there is no PAD)
     *   - <b>Geo</b> = Geographies
     *   - <b>PAD</b> = Point Addresses
     *   - <b>POI</b> = Points of interest
     *   - <b>Str</b> = Streets
     *   - <b>Xstr</b> = Cross Streets (intersections)
     */
    idxSet?: string;
    /**
     * Language in which search results should be returned. Should be one of <a href="/search-api/search-api-documentation/supported-languages">supported IETF language tags</a>, case insensitive.
     */
    language?: string;
    /**
     * Maximum number of search results that will be returned.
     */
    limit?: number;
    /**
     * Multiplies the limit by N to gather more candidate POIs, which will then be sorted by drive distance, returning only the top candidates according to the limit.
     */
    multiplier?: number;
    /**
     * This is specified as a comma separated string composed of lat., lon.
     */
    position: string;
    /**
     * Query string. Must be properly URL encoded.
     */
    query: string;
    /**
     * Only return results that arrive from routing engine within this time limit.
     */
    routingTimeout?: number;
    /**
     * If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
     */
    typeahead?: boolean;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
