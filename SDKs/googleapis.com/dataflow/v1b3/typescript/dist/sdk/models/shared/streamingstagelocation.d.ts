import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the location of a streaming computation stage, for stage-to-stage communication.
 */
export declare class StreamingStageLocation extends SpeakeasyBase {
    /**
     * Identifies the particular stream within the streaming Dataflow job.
     */
    streamId?: string;
}
