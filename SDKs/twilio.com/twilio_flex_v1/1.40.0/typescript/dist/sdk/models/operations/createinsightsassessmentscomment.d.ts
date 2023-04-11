import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInsightsAssessmentsCommentServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInsightsAssessmentsCommentSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest extends SpeakeasyBase {
    /**
     * The id of the agent.
     */
    agentId: string;
    /**
     * The ID of the category
     */
    categoryId: string;
    /**
     * The name of the category
     */
    categoryName: string;
    /**
     * The Assessment comment.
     */
    comment: string;
    /**
     * The offset
     */
    offset: number;
    /**
     * The id of the segment.
     */
    segmentId: string;
    /**
     * The email id of the user.
     */
    userEmail: string;
    /**
     * The name of the user.
     */
    userName: string;
}
export declare class CreateInsightsAssessmentsCommentRequest extends SpeakeasyBase {
    requestBody?: CreateInsightsAssessmentsCommentCreateInsightsAssessmentsCommentRequest;
    /**
     * The Token HTTP request header
     */
    token?: string;
}
export declare class CreateInsightsAssessmentsCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InsightsAssessmentsComment?: shared.FlexV1InsightsAssessmentsComment;
}
