import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CommentsPutRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    /**
     * The unique identifier of the comment you wish to update.
     */
    commentId: string;
}
export declare class CommentsPutResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
