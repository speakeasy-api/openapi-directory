import { SpeakeasyBase } from "../../../internal/utils";
import { LiveChatBanSnippet } from "./livechatbansnippet";
/**
 * A `__liveChatBan__` resource represents a ban for a YouTube live chat.
 */
export declare class LiveChatBan extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the ban.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#liveChatBan"`.
     */
    kind?: string;
    snippet?: LiveChatBanSnippet;
}
