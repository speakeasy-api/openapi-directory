import { SpeakeasyBase } from "../../../internal/utils";
import { OperationProgress } from "./operationprogress";
import { Status } from "./status";
import { StatusCondition } from "./statuscondition";
/**
 * The operation type.
 */
export declare enum OperationOperationTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    CreateCluster = "CREATE_CLUSTER",
    DeleteCluster = "DELETE_CLUSTER",
    UpgradeMaster = "UPGRADE_MASTER",
    UpgradeNodes = "UPGRADE_NODES",
    RepairCluster = "REPAIR_CLUSTER",
    UpdateCluster = "UPDATE_CLUSTER",
    CreateNodePool = "CREATE_NODE_POOL",
    DeleteNodePool = "DELETE_NODE_POOL",
    SetNodePoolManagement = "SET_NODE_POOL_MANAGEMENT",
    AutoRepairNodes = "AUTO_REPAIR_NODES",
    AutoUpgradeNodes = "AUTO_UPGRADE_NODES",
    SetLabels = "SET_LABELS",
    SetMasterAuth = "SET_MASTER_AUTH",
    SetNodePoolSize = "SET_NODE_POOL_SIZE",
    SetNetworkPolicy = "SET_NETWORK_POLICY",
    SetMaintenancePolicy = "SET_MAINTENANCE_POLICY"
}
/**
 * The current status of the operation.
 */
export declare enum OperationStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Aborting = "ABORTING"
}
/**
 * This operation resource represents operations that may have happened or are happening on the cluster. All fields are output only.
 */
export declare class Operation extends SpeakeasyBase {
    /**
     * Which conditions caused the current cluster state. Deprecated. Use field error instead.
     */
    clusterConditions?: StatusCondition[];
    /**
     * Detailed operation progress, if available.
     */
    detail?: string;
    /**
     * [Output only] The time the operation completed, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    endTime?: string;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    error?: Status;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string;
    /**
     * The server-assigned ID for the operation.
     */
    name?: string;
    /**
     * Which conditions caused the current node pool state. Deprecated. Use field error instead.
     */
    nodepoolConditions?: StatusCondition[];
    /**
     * The operation type.
     */
    operationType?: OperationOperationTypeEnum;
    /**
     * Information about operation (or operation stage) progress.
     */
    progress?: OperationProgress;
    /**
     * Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output only] The time the operation started, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    startTime?: string;
    /**
     * The current status of the operation.
     */
    status?: OperationStatusEnum;
    /**
     * Output only. If an error has occurred, a textual description of the error. Deprecated. Use field error instead.
     */
    statusMessage?: string;
    /**
     * Server-defined URL for the target of the operation.
     */
    targetLink?: string;
    /**
     * The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation is taking place. This field is deprecated, use location instead.
     */
    zone?: string;
}
