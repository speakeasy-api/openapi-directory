import { SpeakeasyBase } from "../../../internal/utils";
import { Pubsub, PubsubInput } from "./pubsub";
/**
 * Represents the transport intermediaries created for the trigger in order to deliver events.
 */
export declare class TransportInput extends SpeakeasyBase {
    /**
     * Represents a Pub/Sub transport.
     */
    pubsub?: PubsubInput;
}
/**
 * Represents the transport intermediaries created for the trigger in order to deliver events.
 */
export declare class Transport extends SpeakeasyBase {
    /**
     * Represents a Pub/Sub transport.
     */
    pubsub?: Pubsub;
}
