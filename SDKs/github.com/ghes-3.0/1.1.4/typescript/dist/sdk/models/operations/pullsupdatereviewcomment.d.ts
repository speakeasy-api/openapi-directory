import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsUpdateReviewCommentRequestBody extends SpeakeasyBase {
    /**
     * The text of the reply to the review comment.
     */
    body: string;
}
export declare class PullsUpdateReviewCommentRequest extends SpeakeasyBase {
    requestBody: PullsUpdateReviewCommentRequestBody;
    /**
     * comment_id parameter
     */
    commentId: number;
    owner: string;
    repo: string;
}
export declare class PullsUpdateReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReviewComment?: shared.PullRequestReviewComment;
}
