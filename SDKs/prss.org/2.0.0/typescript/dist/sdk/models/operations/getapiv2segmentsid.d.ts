import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV2SegmentsIdSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2SegmentsIdRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2SegmentsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Authorization failed, or the user is not permitted to view the segment.
     */
    error?: shared.ErrorT;
    /**
     * The segment with the given ID.
     */
    segment?: shared.Segment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
