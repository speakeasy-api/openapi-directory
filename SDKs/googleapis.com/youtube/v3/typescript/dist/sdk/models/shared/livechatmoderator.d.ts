import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatModeratorSnippet } from "./livechatmoderatorsnippet";
/**
 * A *liveChatModerator* resource represents a moderator for a YouTube live chat. A chat moderator has the ability to ban/unban users from a chat, remove message, etc.
 */
export declare class LiveChatModerator extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the moderator.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#liveChatModerator".
     */
    kind?: string;
    snippet?: LiveChatModeratorSnippet;
}
