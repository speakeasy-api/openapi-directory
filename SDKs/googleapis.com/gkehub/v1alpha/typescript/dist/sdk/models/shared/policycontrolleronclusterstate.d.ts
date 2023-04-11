import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The lifecycle state of this component.
 */
export declare enum PolicyControllerOnClusterStateStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    NotInstalled = "NOT_INSTALLED",
    Installing = "INSTALLING",
    Active = "ACTIVE",
    Updating = "UPDATING",
    Decommissioning = "DECOMMISSIONING",
    ClusterError = "CLUSTER_ERROR",
    HubError = "HUB_ERROR",
    Suspended = "SUSPENDED"
}
/**
 * OnClusterState represents the state of a sub-component of Policy Controller.
 */
export declare class PolicyControllerOnClusterState extends SpeakeasyBase {
    /**
     * Surface potential errors or information logs.
     */
    details?: string;
    /**
     * The lifecycle state of this component.
     */
    state?: PolicyControllerOnClusterStateStateEnum;
}
