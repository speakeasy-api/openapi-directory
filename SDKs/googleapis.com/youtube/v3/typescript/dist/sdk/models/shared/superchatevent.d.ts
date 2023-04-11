import { SpeakeasyBase } from "../../../internal/utils";
import { SuperChatEventSnippet } from "./superchateventsnippet";
/**
 * A `__superChatEvent__` resource represents a Super Chat purchase on a YouTube channel.
 */
export declare class SuperChatEvent extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * The ID that YouTube assigns to uniquely identify the Super Chat event.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string `"youtube#superChatEvent"`.
     */
    kind?: string;
    snippet?: SuperChatEventSnippet;
}
