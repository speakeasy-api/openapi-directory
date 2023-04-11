import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Status } from "./status";
/**
 * Represents a conversation with "direct message" visibility.
 *
 * @see {@link https://docs.joinmastodon.org/entities/conversation/}
 */
export declare class Conversation extends SpeakeasyBase {
    /**
     * Participants in the conversation.
     */
    accounts: Account[];
    /**
     * Local database ID of the conversation. Cast from an integer, but not guaranteed to be a number
     */
    id: string;
    /**
     * Represents a status posted by an account.
     */
    lastStatus?: Status;
    /**
     * Is the conversation currently marked as unread?
     */
    unread: boolean;
}
