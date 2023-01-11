import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Pubsub } from "./pubsub";
import { PubsubInput } from "./pubsub";



// Transport
/** 
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export class Transport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsub" })
  pubsub?: Pubsub;
}


// TransportInput
/** 
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export class TransportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsub" })
  pubsub?: PubsubInput;
}
