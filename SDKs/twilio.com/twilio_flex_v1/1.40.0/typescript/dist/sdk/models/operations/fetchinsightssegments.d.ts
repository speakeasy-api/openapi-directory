import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchInsightsSegmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class FetchInsightsSegmentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchInsightsSegmentsRequest extends SpeakeasyBase {
    /**
     * To unique id of the segment
     */
    segmentId: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class FetchInsightsSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InsightsSegments?: shared.FlexV1InsightsSegments;
}
