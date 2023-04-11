import { SpeakeasyBase } from "../../../internal/utils";
import { MountedDataDisk } from "./mounteddatadisk";
import { StreamingComputationRanges } from "./streamingcomputationranges";
/**
 * A type of streaming computation task.
 */
export declare enum StreamingComputationTaskTaskTypeEnum {
    StreamingComputationTaskUnknown = "STREAMING_COMPUTATION_TASK_UNKNOWN",
    StreamingComputationTaskStop = "STREAMING_COMPUTATION_TASK_STOP",
    StreamingComputationTaskStart = "STREAMING_COMPUTATION_TASK_START"
}
/**
 * A task which describes what action should be performed for the specified streaming computation ranges.
 */
export declare class StreamingComputationTask extends SpeakeasyBase {
    /**
     * Contains ranges of a streaming computation this task should apply to.
     */
    computationRanges?: StreamingComputationRanges[];
    /**
     * Describes the set of data disks this task should apply to.
     */
    dataDisks?: MountedDataDisk[];
    /**
     * A type of streaming computation task.
     */
    taskType?: StreamingComputationTaskTaskTypeEnum;
}
