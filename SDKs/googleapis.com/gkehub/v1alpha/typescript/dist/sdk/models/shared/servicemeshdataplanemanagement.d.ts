import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceMeshStatusDetails } from "./servicemeshstatusdetails";
/**
 * Lifecycle status of data plane management.
 */
export declare enum ServiceMeshDataPlaneManagementStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Disabled = "DISABLED",
    FailedPrecondition = "FAILED_PRECONDITION",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stalled = "STALLED",
    NeedsAttention = "NEEDS_ATTENTION",
    Degraded = "DEGRADED"
}
/**
 * Status of data plane management. Only reported per-member.
 */
export declare class ServiceMeshDataPlaneManagement extends SpeakeasyBase {
    /**
     * Explanation of the status.
     */
    details?: ServiceMeshStatusDetails[];
    /**
     * Lifecycle status of data plane management.
     */
    state?: ServiceMeshDataPlaneManagementStateEnum;
}
