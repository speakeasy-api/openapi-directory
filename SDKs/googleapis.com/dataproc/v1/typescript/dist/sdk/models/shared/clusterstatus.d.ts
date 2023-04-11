import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The cluster's state.
 */
export declare enum ClusterStatusStateEnum {
    Unknown = "UNKNOWN",
    Creating = "CREATING",
    Running = "RUNNING",
    Error = "ERROR",
    ErrorDueToUpdate = "ERROR_DUE_TO_UPDATE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Starting = "STARTING",
    Repairing = "REPAIRING"
}
/**
 * Output only. Additional state information that includes status reported by the agent.
 */
export declare enum ClusterStatusSubstateEnum {
    Unspecified = "UNSPECIFIED",
    Unhealthy = "UNHEALTHY",
    StaleStatus = "STALE_STATUS"
}
/**
 * The status of a cluster and its instances.
 */
export declare class ClusterStatus extends SpeakeasyBase {
    /**
     * Optional. Output only. Details of cluster's state.
     */
    detail?: string;
    /**
     * Output only. The cluster's state.
     */
    state?: ClusterStatusStateEnum;
    /**
     * Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)).
     */
    stateStartTime?: string;
    /**
     * Output only. Additional state information that includes status reported by the agent.
     */
    substate?: ClusterStatusSubstateEnum;
}
