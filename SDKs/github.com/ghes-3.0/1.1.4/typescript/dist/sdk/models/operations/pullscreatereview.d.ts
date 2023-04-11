import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsCreateReviewRequestBodyComments extends SpeakeasyBase {
    /**
     * Text of the review comment.
     */
    body: string;
    line?: number;
    /**
     * The relative path to the file that necessitates a review comment.
     */
    path: string;
    /**
     * The position in the diff where you want to add a review comment. Note this value is not the same as the line number in the file. For help finding the position value, read the note below.
     */
    position?: number;
    side?: string;
    startLine?: number;
    startSide?: string;
}
/**
 * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#submit-a-review-for-a-pull-request) when you are ready.
 */
export declare enum PullsCreateReviewRequestBodyEventEnum {
    Approve = "APPROVE",
    RequestChanges = "REQUEST_CHANGES",
    Comment = "COMMENT"
}
export declare class PullsCreateReviewRequestBody extends SpeakeasyBase {
    /**
     * **Required** when using `REQUEST_CHANGES` or `COMMENT` for the `event` parameter. The body text of the pull request review.
     */
    body?: string;
    /**
     * Use the following table to specify the location, destination, and contents of the draft review comment.
     */
    comments?: PullsCreateReviewRequestBodyComments[];
    /**
     * The SHA of the commit that needs a review. Not using the latest commit SHA may render your review comment outdated if a subsequent commit modifies the line you specify as the `position`. Defaults to the most recent commit in the pull request when you do not specify a value.
     */
    commitId?: string;
    /**
     * The review action you want to perform. The review actions include: `APPROVE`, `REQUEST_CHANGES`, or `COMMENT`. By leaving this blank, you set the review action state to `PENDING`, which means you will need to [submit the pull request review](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#submit-a-review-for-a-pull-request) when you are ready.
     */
    event?: PullsCreateReviewRequestBodyEventEnum;
}
export declare class PullsCreateReviewRequest extends SpeakeasyBase {
    requestBody?: PullsCreateReviewRequestBody;
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsCreateReviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    pullRequestReview?: shared.PullRequestReview;
    /**
     * Validation failed
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
