import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Conversation Request Payload Object
 */
export declare class CreateConversationRequestBody extends SpeakeasyBase {
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
/**
 * Create / Update Conversation Response Payload Object
 */
export declare class CreateConversation200ApplicationJSON extends SpeakeasyBase {
    /**
     * A link towards a conversation included in Conversation API
     */
    href: string;
    /**
     * The unique identifier for this conversation
     */
    id: string;
}
export declare class CreateConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create / Update Conversation Response Payload Object
     */
    createConversation200ApplicationJSONObject?: CreateConversation200ApplicationJSON;
}
