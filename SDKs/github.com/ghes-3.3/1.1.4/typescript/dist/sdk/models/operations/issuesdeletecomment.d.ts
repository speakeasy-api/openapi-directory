import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IssuesDeleteCommentRequest extends SpeakeasyBase {
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
export declare class IssuesDeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
