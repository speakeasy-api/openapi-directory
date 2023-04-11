import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyControllerOnClusterState } from "./policycontrolleronclusterstate";
/**
 * The state of the policy controller policy content
 */
export declare class PolicyControllerPolicyContentState extends SpeakeasyBase {
    /**
     * The state of the any bundles included in the chosen version of the manifest
     */
    bundleStates?: Record<string, PolicyControllerOnClusterState>;
    /**
     * OnClusterState represents the state of a sub-component of Policy Controller.
     */
    templateLibraryState?: PolicyControllerOnClusterState;
}
