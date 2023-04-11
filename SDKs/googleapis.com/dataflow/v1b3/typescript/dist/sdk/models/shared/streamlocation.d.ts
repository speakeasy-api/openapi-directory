import { SpeakeasyBase } from "../../../internal/utils";
import { CustomSourceLocation } from "./customsourcelocation";
import { PubsubLocation } from "./pubsublocation";
import { StreamingSideInputLocation } from "./streamingsideinputlocation";
import { StreamingStageLocation } from "./streamingstagelocation";
/**
 * Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
 */
export declare class StreamLocation extends SpeakeasyBase {
    /**
     * Identifies the location of a custom souce.
     */
    customSourceLocation?: CustomSourceLocation;
    /**
     * Identifies a pubsub location to use for transferring data into or out of a streaming Dataflow job.
     */
    pubsubLocation?: PubsubLocation;
    /**
     * Identifies the location of a streaming side input.
     */
    sideInputLocation?: StreamingSideInputLocation;
    /**
     * Identifies the location of a streaming computation stage, for stage-to-stage communication.
     */
    streamingStageLocation?: StreamingStageLocation;
}
