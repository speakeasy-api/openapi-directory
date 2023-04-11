import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsSegmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsSegmentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsSegmentsRequest extends SpeakeasyBase {
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The list of reservation Ids
     */
    reservationId?: string[];
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class ListInsightsSegmentsListInsightsSegmentsResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListInsightsSegmentsListInsightsSegmentsResponse extends SpeakeasyBase {
    meta?: ListInsightsSegmentsListInsightsSegmentsResponseMeta;
    segments?: shared.FlexV1InsightsSegments[];
}
export declare class ListInsightsSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsSegmentsResponse?: ListInsightsSegmentsListInsightsSegmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
