import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Conversation Request Payload Object
 */
export declare class ReplaceConversationRequestBody extends SpeakeasyBase {
    /**
     * The display name for the conversation. It does not have to be unique
     */
    displayName?: string;
    /**
     * A link to an image for conversations' and users' avatars
     */
    imageUrl?: string;
    /**
     * Unique name for a conversation
     */
    name?: string;
    /**
     * Conversation properties
     */
    properties?: shared.ConversationProperties;
}
export declare class ReplaceConversationRequest extends SpeakeasyBase {
    /**
     * Conversation Request Payload Object
     */
    requestBody?: ReplaceConversationRequestBody;
    /**
     * Conversation ID
     */
    conversationId: string;
}
/**
 * Create / Update Conversation Response Payload Object
 */
export declare class ReplaceConversation200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a conversation included in Conversation API
     */
    href: string;
    /**
     * The unique identifier for this conversation
     */
    id: string;
}
export declare class ReplaceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create / Update Conversation Response Payload Object
     */
    replaceConversation200ApplicationJSONObject?: ReplaceConversation200ApplicationJSON;
}
