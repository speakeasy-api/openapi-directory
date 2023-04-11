import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A thread in Google Chat.
 */
export declare class Thread extends SpeakeasyBase {
    /**
     * Resource name of the thread. Example: spaces/{space}/threads/{thread}
     */
    name?: string;
    /**
     * Optional. Opaque thread identifier. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/crudl/messages#start_or_reply_to_a_message_thread). For other requests, this is an output only field.
     */
    threadKey?: string;
}
