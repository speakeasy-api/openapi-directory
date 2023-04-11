import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information specifying an Anthos Cluster.
 */
export declare class AnthosCluster extends SpeakeasyBase {
    /**
     * Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
     */
    membership?: string;
}
