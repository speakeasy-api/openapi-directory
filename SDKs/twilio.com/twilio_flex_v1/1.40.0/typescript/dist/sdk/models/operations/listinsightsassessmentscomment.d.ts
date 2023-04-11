import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInsightsAssessmentsCommentServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInsightsAssessmentsCommentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInsightsAssessmentsCommentRequest extends SpeakeasyBase {
    /**
     * The id of the agent.
     */
    agentId?: string;
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
export declare class ListInsightsAssessmentsCommentListInsightsAssessmentsCommentResponseMeta extends SpeakeasyBase {
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
export declare class ListInsightsAssessmentsCommentListInsightsAssessmentsCommentResponse extends SpeakeasyBase {
    comments?: shared.FlexV1InsightsAssessmentsComment[];
    meta?: ListInsightsAssessmentsCommentListInsightsAssessmentsCommentResponseMeta;
}
export declare class ListInsightsAssessmentsCommentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInsightsAssessmentsCommentResponse?: ListInsightsAssessmentsCommentListInsightsAssessmentsCommentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
