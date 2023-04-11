import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies the location of a streaming side input.
 */
export declare class StreamingSideInputLocation extends SpeakeasyBase {
    /**
     * Identifies the state family where this side input is stored.
     */
    stateFamily?: string;
    /**
     * Identifies the particular side input within the streaming Dataflow job.
     */
    tag?: string;
}
