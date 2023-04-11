import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MarkConversationReadRequestBody extends SpeakeasyBase {
    /**
     * The ID of the newest message in the conversation that the current user has read.
     */
    messageId: string;
}
export declare class MarkConversationReadRequest extends SpeakeasyBase {
    requestBody: MarkConversationReadRequestBody;
    /**
     * The ID of the conversation to mark as read.
     */
    conversationId: string;
}
export declare class MarkConversationReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
