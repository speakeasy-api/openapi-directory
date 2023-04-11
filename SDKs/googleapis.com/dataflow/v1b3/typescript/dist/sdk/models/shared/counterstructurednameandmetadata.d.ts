import { SpeakeasyBase } from "../../../internal/utils";
import { CounterMetadata } from "./countermetadata";
import { CounterStructuredName } from "./counterstructuredname";
/**
 * A single message which encapsulates structured name and metadata for a given counter.
 */
export declare class CounterStructuredNameAndMetadata extends SpeakeasyBase {
    /**
     * CounterMetadata includes all static non-name non-value counter attributes.
     */
    metadata?: CounterMetadata;
    /**
     * Identifies a counter within a per-job namespace. Counters whose structured names are the same get merged into a single value for the job.
     */
    name?: CounterStructuredName;
}
