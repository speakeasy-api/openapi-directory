import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReplyToPostRequestBody extends SpeakeasyBase {
    /**
     * The message to send to the post author.
     */
    message: string;
    /**
     * A comma separated list of the IDs of the photos that should be attached to this reply.
     */
    photoIds?: string;
}
export declare class ReplyToPostRequest extends SpeakeasyBase {
    requestBody: ReplyToPostRequestBody;
    /**
     * The ID of the post to reply to.
     */
    postId: string;
}
export declare class ReplyToPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
