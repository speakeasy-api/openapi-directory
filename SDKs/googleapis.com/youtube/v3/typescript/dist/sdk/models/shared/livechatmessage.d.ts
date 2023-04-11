import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatMessageAuthorDetails } from "./livechatmessageauthordetails";
import { LiveChatMessageSnippet } from "./livechatmessagesnippet";
/**
 * A *liveChatMessage* resource represents a chat message in a YouTube Live Chat.
 */
export declare class LiveChatMessage extends SpeakeasyBase {
    authorDetails?: LiveChatMessageAuthorDetails;
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the message.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatMessage".
     */
    kind?: string;
    /**
     * Next ID: 33
     */
    snippet?: LiveChatMessageSnippet;
}
