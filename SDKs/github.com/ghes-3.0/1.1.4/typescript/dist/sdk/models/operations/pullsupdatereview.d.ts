import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsUpdateReviewRequestBody extends SpeakeasyBase {
    /**
     * The body text of the pull request review.
     */
    body: string;
}
export declare class PullsUpdateReviewRequest extends SpeakeasyBase {
    requestBody: PullsUpdateReviewRequestBody;
    owner: string;
    pullNumber: number;
    repo: string;
    /**
     * review_id parameter
     */
    reviewId: number;
}
export declare class PullsUpdateReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    pullRequestReview?: shared.PullRequestReview;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
