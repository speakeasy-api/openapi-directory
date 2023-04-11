import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetConversationMessagesRequest extends SpeakeasyBase {
    /**
     * The ID of the conversation to return messages from.
     */
    conversationId: string;
    /**
     * Client device pixel ratio used to determine thumbnail size (default 1.0).
     */
    devicePixelRatio?: number;
    /**
     * If set to 1, the conversation will be returned along with the messages.
     */
    includeConversation?: number;
    /**
     * The page of messages to return.
     */
    page?: number;
    /**
     * The number of messages to return per page (must be >= 1 and <= 30).
     */
    perPage?: number;
}
/**
 * The messages and page data.  The conversation data is optional and is only returned if the include_conversation parameter is set.
 *
 * @remarks
 *
 */
export declare class GetConversationMessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * A conversation between the current user and another user.
     */
    conversation?: shared.Conversation;
    messages?: shared.Message[];
    page?: number;
    perPage?: number;
}
export declare class GetConversationMessagesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The messages and page data.  The conversation data is optional and is only returned if the include_conversation parameter is set.
     *
     * @remarks
     *
     */
    getConversationMessages200ApplicationJSONObject?: GetConversationMessages200ApplicationJSON;
}
