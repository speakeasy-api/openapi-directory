import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerOnClusterState } from "./policycontrolleronclusterstate";
import { PolicyControllerPolicyContentState } from "./policycontrollerpolicycontentstate";
/**
 * The overall Policy Controller lifecycle state observed by the Hub Feature controller.
 */
export declare enum PolicyControllerMembershipStateStateEnum {
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
 * **Policy Controller**: State for a single cluster.
 */
export declare class PolicyControllerMembershipState extends SpeakeasyBase {
    /**
     * Currently these include (also serving as map keys): 1. "admission" 2. "audit" 3. "mutation"
     */
    componentStates?: Record<string, PolicyControllerOnClusterState>;
    /**
     * The state of the template library and any bundles included in the chosen version of the manifest TODO (b/271878194): Remove this
     */
    contentStates?: Record<string, PolicyControllerOnClusterState>;
    /**
     * The state of the policy controller policy content
     */
    policyContentState?: PolicyControllerPolicyContentState;
    /**
     * The overall Policy Controller lifecycle state observed by the Hub Feature controller.
     */
    state?: PolicyControllerMembershipStateStateEnum;
}
