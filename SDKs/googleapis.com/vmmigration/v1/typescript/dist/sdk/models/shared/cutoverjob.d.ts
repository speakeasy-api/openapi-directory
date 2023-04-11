import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeEngineTargetDetails } from "./computeenginetargetdetails";
import { CutoverStep } from "./cutoverstep";
import { Status } from "./status";
/**
 * Output only. State of the cutover job.
 */
export declare enum CutoverJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Cancelled = "CANCELLED",
    Cancelling = "CANCELLING",
    Active = "ACTIVE",
    AdaptingOs = "ADAPTING_OS"
}
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
 */
export declare class CutoverJob extends SpeakeasyBase {
    /**
     * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
     */
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    /**
     * Output only. The time the cutover job was created (as an API call, not when it was actually created in the target).
     */
    createTime?: string;
    /**
     * Output only. The time the cutover job had finished.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Output only. The name of the cutover job.
     */
    name?: string;
    /**
     * Output only. The current progress in percentage of the cutover job.
     */
    progressPercent?: number;
    /**
     * Output only. State of the cutover job.
     */
    state?: CutoverJobStateEnum;
    /**
     * Output only. A message providing possible extra details about the current state.
     */
    stateMessage?: string;
    /**
     * Output only. The time the state was last updated.
     */
    stateTime?: string;
    /**
     * Output only. The cutover steps list representing its progress.
     */
    steps?: CutoverStep[];
}
/**
 * CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
 */
export declare class CutoverJobInput extends SpeakeasyBase {
    /**
     * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
     */
    computeEngineTargetDetails?: ComputeEngineTargetDetails;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
}
