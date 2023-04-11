import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsDeleteCommentRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the comment.
     */
    commentId: number;
    /**
     * The unique identifier of the gist.
     */
    gistId: string;
}
export declare class GistsDeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
