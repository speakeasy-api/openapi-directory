import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchVersionNumberCSCategoryExtRequest extends SpeakeasyBase {
    /**
     * Bottom right position of the bounding box. This is specified as a comma separated string composed of lat., lon.
     */
    btmRight?: string;
    /**
     * Query string. Must be properly URL encoded.
     */
    category: string;
    /**
     * Comma separated string of country codes. This will limit the search to the specified countries.
     */
    countrySet?: string;
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
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
     * Latitude where results should be biased.
     *
     * @remarks
     * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
     */
    lat?: number;
    /**
     * Maximum number of search results that will be returned.
     */
    limit?: number;
    /**
     * Longitude where results should be biased
     *
     * @remarks
     * NOTE: supplying a lat/lon without a radius will return search results biased to that point.
     */
    lon?: number;
    /**
     * Starting offset of the returned results within the full result set.
     */
    ofs?: number;
    /**
     * If radius <b>and</b> position are set, the results will be constrained to the defined area. The radius parameter is specified in meters.
     */
    radius?: number;
    /**
     * Top left position of the bounding box. This is specified as a comma separated string composed of lat., lon.
     */
    topLeft?: string;
    /**
     * If the "typeahead" flag is set, the query will be interpreted as a partial input and the search will enter <b>predictive</b> mode.
     */
    typeahead?: boolean;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
    /**
     * Geopolitical View.
     */
    view?: shared.ViewEnum;
}
export declare class GetSearchVersionNumberCSCategoryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
