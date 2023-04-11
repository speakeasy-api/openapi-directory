import { SpeakeasyBase } from "../../../internal/utils";
import { StreamingComputationConfig } from "./streamingcomputationconfig";
/**
 * A task that carries configuration information for streaming computations.
 */
export declare class StreamingConfigTask extends SpeakeasyBase {
    /**
     * Chunk size for commit streams from the harness to windmill.
     */
    commitStreamChunkSizeBytes?: string;
    /**
     * Chunk size for get data streams from the harness to windmill.
     */
    getDataStreamChunkSizeBytes?: string;
    /**
     * Maximum size for work item commit supported windmill storage layer.
     */
    maxWorkItemCommitBytes?: string;
    /**
     * Set of computation configuration information.
     */
    streamingComputationConfigs?: StreamingComputationConfig[];
    /**
     * Map from user step names to state families.
     */
    userStepToStateFamilyNameMap?: Record<string, string>;
    /**
     * If present, the worker must use this endpoint to communicate with Windmill Service dispatchers, otherwise the worker must continue to use whatever endpoint it had been using.
     */
    windmillServiceEndpoint?: string;
    /**
     * If present, the worker must use this port to communicate with Windmill Service dispatchers. Only applicable when windmill_service_endpoint is specified.
     */
    windmillServicePort?: string;
}
