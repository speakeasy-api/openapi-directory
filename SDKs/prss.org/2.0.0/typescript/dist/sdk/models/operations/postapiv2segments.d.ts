import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV2SegmentsSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class PostApiV2SegmentsRequestBody extends SpeakeasyBase {
    /**
     * The URI to the segment content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'.
     */
    cdDriveUri: string;
    /**
     * The ID of the episode that owns the segment.
     */
    episodeId: number;
    /**
     * The incue for the segment. Defaults to the program segment incue.
     */
    inCue?: string;
    /**
     * The outcue for the segment. Defaults to the program segment outcue.
     */
    outCue?: string;
    /**
     * The segment number of the segment.
     */
    segmentNumber: number;
}
export declare class PostApiV2SegmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The request is missing required data or invalid.
     */
    error?: shared.ErrorT;
    /**
     * The created segment with fields populated.
     */
    segment?: shared.Segment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
