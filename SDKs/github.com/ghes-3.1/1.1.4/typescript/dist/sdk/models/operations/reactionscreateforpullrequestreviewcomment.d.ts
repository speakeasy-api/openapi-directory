import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The [reaction type](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#reaction-types) to add to the pull request review comment.
 */
export declare enum ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}
export declare class ReactionsCreateForPullRequestReviewCommentRequestBody extends SpeakeasyBase {
    /**
     * The [reaction type](https://docs.github.com/enterprise-server@3.1/rest/reference/reactions#reaction-types) to add to the pull request review comment.
     */
    content: ReactionsCreateForPullRequestReviewCommentRequestBodyContentEnum;
}
export declare class ReactionsCreateForPullRequestReviewCommentRequest extends SpeakeasyBase {
    requestBody: ReactionsCreateForPullRequestReviewCommentRequestBody;
    /**
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class ReactionsCreateForPullRequestReviewCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Reaction exists
     */
    reaction?: shared.Reaction;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
