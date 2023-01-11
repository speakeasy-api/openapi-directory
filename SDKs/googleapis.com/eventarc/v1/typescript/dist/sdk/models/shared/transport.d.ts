import { SpeakeasyBase } from "../../../internal/utils";
import { Pubsub } from "./pubsub";
import { PubsubInput } from "./pubsub";
/**
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export declare class Transport extends SpeakeasyBase {
    pubsub?: Pubsub;
}
/**
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export declare class TransportInput extends SpeakeasyBase {
    pubsub?: PubsubInput;
}
