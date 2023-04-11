import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposUpdateCommitCommentRequestBody extends SpeakeasyBase {
    /**
     * The contents of the comment
     */
    body: string;
}
export declare class ReposUpdateCommitCommentRequest extends SpeakeasyBase {
    requestBody: ReposUpdateCommitCommentRequestBody;
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
export declare class ReposUpdateCommitCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commitComment?: shared.CommitComment;
}
