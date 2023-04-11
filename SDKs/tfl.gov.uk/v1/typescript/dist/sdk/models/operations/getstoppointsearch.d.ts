import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetStopPointSearchRequest extends SpeakeasyBase {
    /**
     * True to only return stations in that have Fares data available for single fares to another station.
     */
    faresOnly?: boolean;
    /**
     * If true, returns results including HUBs.
     */
    includeHubs?: boolean;
    /**
     * An optional, parameter separated list of the lines to filter by
     */
    lines?: string[];
    /**
     * An optional result limit, defaulting to and with a maximum of 50. Since children of the stop point heirarchy are returned for matches,
     *
     * @remarks
     *             it is possible that the flattened result set will contain more than 50 items.
     */
    maxResults?: number;
    /**
     * An optional, parameter separated list of the modes to filter by
     */
    modes?: string[];
    /**
     * The query string, case-insensitive. Leading and trailing wildcards are applied automatically.
     */
    query: string;
    /**
     * If the national-rail mode is included, this flag will filter the national rail stations so that only those operated by TfL are returned
     */
    tflOperatedNationalRailStationsOnly?: boolean;
}
export declare class GetStopPointSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tflApiPresentationEntitiesSearchResponse?: shared.TflApiPresentationEntitiesSearchResponse;
}
