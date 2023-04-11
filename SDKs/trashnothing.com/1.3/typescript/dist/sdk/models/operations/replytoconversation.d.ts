import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplyToConversationRequestBody extends SpeakeasyBase {
    /**
     * The content of the reply.
     */
    content: string;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * A comma separated list of the IDs of the photos that should be attached to this message.
     */
    photoIds?: string;
}
export declare class ReplyToConversationRequest extends SpeakeasyBase {
    requestBody: ReplyToConversationRequestBody;
    /**
     * The ID of the conversation to reply to.
     */
    conversationId: string;
}
export declare class ReplyToConversationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The new message sent to the conversation.
     */
    message?: shared.Message;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
