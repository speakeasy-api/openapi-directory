import { SpeakeasyBase } from "../../../internal/utils";
import { CycleStep } from "./cyclestep";
import { MigrationWarning } from "./migrationwarning";
import { Status } from "./status";
/**
 * State of the ReplicationCycle.
 */
export declare enum ReplicationCycleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}
/**
 * ReplicationCycle contains information about the current replication cycle status.
 */
export declare class ReplicationCycle extends SpeakeasyBase {
    /**
     * The cycle's ordinal number.
     */
    cycleNumber?: number;
    /**
     * The time the replication cycle has ended.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The identifier of the ReplicationCycle.
     */
    name?: string;
    /**
     * The current progress in percentage of this cycle.
     */
    progress?: number;
    /**
     * The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.
     */
    progressPercent?: number;
    /**
     * The time the replication cycle has started.
     */
    startTime?: string;
    /**
     * State of the ReplicationCycle.
     */
    state?: ReplicationCycleStateEnum;
    /**
     * The cycle's steps list representing its progress.
     */
    steps?: CycleStep[];
    /**
     * The accumulated duration the replication cycle was paused.
     */
    totalPauseDuration?: string;
    /**
     * Output only. Warnings that occurred during the cycle.
     */
    warnings?: MigrationWarning[];
}
/**
 * ReplicationCycle contains information about the current replication cycle status.
 */
export declare class ReplicationCycleInput extends SpeakeasyBase {
    /**
     * The cycle's ordinal number.
     */
    cycleNumber?: number;
    /**
     * The time the replication cycle has ended.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The identifier of the ReplicationCycle.
     */
    name?: string;
    /**
     * The current progress in percentage of this cycle.
     */
    progress?: number;
    /**
     * The current progress in percentage of this cycle. Was replaced by 'steps' field, which breaks down the cycle progression more accurately.
     */
    progressPercent?: number;
    /**
     * The time the replication cycle has started.
     */
    startTime?: string;
    /**
     * State of the ReplicationCycle.
     */
    state?: ReplicationCycleStateEnum;
    /**
     * The cycle's steps list representing its progress.
     */
    steps?: CycleStep[];
    /**
     * The accumulated duration the replication cycle was paused.
     */
    totalPauseDuration?: string;
}
