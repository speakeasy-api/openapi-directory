import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * An event indicating a received message or truncation event.
 */
export declare class PubsubEvent extends SpeakeasyBase {
    /**
     * Indicates that this subscription has been deleted. (Note that pull subscribers will always receive NOT_FOUND in response in their pull request on the subscription, rather than seeing this boolean.)
     */
    deleted?: boolean;
    /**
     * A message data and its labels.
     */
    message?: PubsubMessage;
    /**
     * The subscription that received the event.
     */
    subscription?: string;
    /**
     * Indicates that this subscription has been truncated.
     */
    truncated?: boolean;
}
