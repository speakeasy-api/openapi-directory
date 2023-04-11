import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubEvent } from "./pubsubevent";
/**
 * Either a PubsubMessage or a truncation event. One of these two must be populated.
 */
export declare class PullResponse extends SpeakeasyBase {
    /**
     * This ID must be used to acknowledge the received event or message.
     */
    ackId?: string;
    /**
     * An event indicating a received message or truncation event.
     */
    pubsubEvent?: PubsubEvent;
}
