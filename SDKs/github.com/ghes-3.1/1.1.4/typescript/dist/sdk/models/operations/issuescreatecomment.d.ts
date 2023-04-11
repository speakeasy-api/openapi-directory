import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesCreateCommentRequestBody extends SpeakeasyBase {
    /**
     * The contents of the comment.
     */
    body: string;
}
export declare class IssuesCreateCommentRequest extends SpeakeasyBase {
    requestBody: IssuesCreateCommentRequestBody;
    /**
     * The number that identifies the issue.
     */
    issueNumber: number;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
export declare class IssuesCreateCommentResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issueComment?: shared.IssueComment;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
