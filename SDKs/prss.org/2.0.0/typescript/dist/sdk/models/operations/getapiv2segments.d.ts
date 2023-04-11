import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SegmentsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
/**
 * The sort order of the list of segments, based on segment ID. If unspecified, the segments are returned in random order. If using paging to iterate through the results, sort order should be specified.
 */
export declare enum GetApiV2SegmentsOrderByIDEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetApiV2SegmentsRequest extends SpeakeasyBase {
    /**
     * The ID of the episode that owns the segment.
     */
    episodeId: number;
    /**
     * The sort order of the list of segments, based on segment ID. If unspecified, the segments are returned in random order. If using paging to iterate through the results, sort order should be specified.
     */
    orderById?: GetApiV2SegmentsOrderByIDEnum;
    /**
     * The number of items to return. Must be between 0 and 500, inclusive.
     */
    pageSize?: number;
    /**
     * The start page of the results to return. The first item is indexed at 0.
     */
    pageStart?: number;
    segmentNumber?: number;
}
export declare class GetApiV2SegmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view this episode or its segments.
     */
    error?: shared.ErrorT;
    /**
     * The segments matching the query parameters
     */
    segments?: shared.Segment[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
