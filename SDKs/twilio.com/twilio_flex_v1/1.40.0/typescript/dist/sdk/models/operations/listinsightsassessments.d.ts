import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsAssessmentsServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsAssessmentsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsAssessmentsRequest extends SpeakeasyBase {
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
     * The id of the segment.
     */
    segmentId?: string;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class ListInsightsAssessmentsListInsightsAssessmentsResponseMeta extends SpeakeasyBase {
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
export declare class ListInsightsAssessmentsListInsightsAssessmentsResponse extends SpeakeasyBase {
    assessments?: shared.FlexV1InsightsAssessments[];
    meta?: ListInsightsAssessmentsListInsightsAssessmentsResponseMeta;
}
export declare class ListInsightsAssessmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsAssessmentsResponse?: ListInsightsAssessmentsListInsightsAssessmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
