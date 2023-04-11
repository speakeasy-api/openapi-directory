import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList extends SpeakeasyBase {
    position?: string;
    radius?: number;
    type?: string;
    vertices?: string[];
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequestBody extends SpeakeasyBase {
    geometryList?: PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList[];
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtRequest extends SpeakeasyBase {
    requestBody?: PostSearchVersionNumberGeometrySearchQueryExtRequestBody;
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
     * Query string. Must be properly URL encoded.
     */
    query: string;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class PostSearchVersionNumberGeometrySearchQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
