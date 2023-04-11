import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSourceVmDetails } from "./awssourcevmdetails";
import { CloneJob } from "./clonejob";
import { ComputeEngineTargetDefaults, ComputeEngineTargetDefaultsInput } from "./computeenginetargetdefaults";
import { CutoverJob } from "./cutoverjob";
import { ReplicationCycle, ReplicationCycleInput } from "./replicationcycle";
import { ReplicationSync } from "./replicationsync";
import { SchedulePolicy } from "./schedulepolicy";
import { Status } from "./status";
/**
 * Output only. State of the MigratingVm.
 */
export declare enum MigratingVmStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Ready = "READY",
    FirstSync = "FIRST_SYNC",
    Active = "ACTIVE",
    CuttingOver = "CUTTING_OVER",
    Cutover = "CUTOVER",
    FinalSync = "FINAL_SYNC",
    Paused = "PAUSED",
    Finalizing = "FINALIZING",
    Finalized = "FINALIZED",
    Error = "ERROR"
}
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
 */
export declare class MigratingVm extends SpeakeasyBase {
    /**
     * Represent the source AWS VM details.
     */
    awsSourceVmDetails?: AwsSourceVmDetails;
    /**
     * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
     */
    computeEngineTargetDefaults?: ComputeEngineTargetDefaults;
    /**
     * Output only. The time the migrating VM was created (this refers to this resource and not to the time it was installed in the source).
     */
    createTime?: string;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    currentSyncInfo?: ReplicationCycle;
    /**
     * The description attached to the migrating VM by the user.
     */
    description?: string;
    /**
     * The display name attached to the MigratingVm by the user.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * Output only. The group this migrating vm is included in, if any. The group is represented by the full path of the appropriate Group resource.
     */
    group?: string;
    /**
     * The labels of the migrating VM.
     */
    labels?: Record<string, string>;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    lastReplicationCycle?: ReplicationCycle;
    /**
     * ReplicationSync contain information about the last replica sync to the cloud.
     */
    lastSync?: ReplicationSync;
    /**
     * Output only. The identifier of the MigratingVm.
     */
    name?: string;
    /**
     * A policy for scheduling replications.
     */
    policy?: SchedulePolicy;
    /**
     * Output only. The recent clone jobs performed on the migrating VM. This field holds the vm's last completed clone job and the vm's running clone job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.
     */
    recentCloneJobs?: CloneJob[];
    /**
     * Output only. The recent cutover jobs performed on the migrating VM. This field holds the vm's last completed cutover job and the vm's running cutover job, if one exists. Note: To have this field populated you need to explicitly request it via the "view" parameter of the Get/List request.
     */
    recentCutoverJobs?: CutoverJob[];
    /**
     * The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.
     */
    sourceVmId?: string;
    /**
     * Output only. State of the MigratingVm.
     */
    state?: MigratingVmStateEnum;
    /**
     * Output only. The last time the migrating VM state was updated.
     */
    stateTime?: string;
    /**
     * Output only. The last time the migrating VM resource was updated.
     */
    updateTime?: string;
}
/**
 * MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
 */
export declare class MigratingVmInput extends SpeakeasyBase {
    /**
     * Represent the source AWS VM details.
     */
    awsSourceVmDetails?: AwsSourceVmDetails;
    /**
     * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
     */
    computeEngineTargetDefaults?: ComputeEngineTargetDefaultsInput;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    currentSyncInfo?: ReplicationCycleInput;
    /**
     * The description attached to the migrating VM by the user.
     */
    description?: string;
    /**
     * The display name attached to the MigratingVm by the user.
     */
    displayName?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * The labels of the migrating VM.
     */
    labels?: Record<string, string>;
    /**
     * ReplicationCycle contains information about the current replication cycle status.
     */
    lastReplicationCycle?: ReplicationCycleInput;
    /**
     * ReplicationSync contain information about the last replica sync to the cloud.
     */
    lastSync?: ReplicationSync;
    /**
     * A policy for scheduling replications.
     */
    policy?: SchedulePolicy;
    /**
     * The unique ID of the VM in the source. The VM's name in vSphere can be changed, so this is not the VM's name but rather its moRef id. This id is of the form vm-.
     */
    sourceVmId?: string;
}
