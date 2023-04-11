import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPolicy } from "./networkpolicy";
/**
 * SetNetworkPolicyRequest enables/disables network policy for a cluster.
 */
export declare class SetNetworkPolicyRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
     */
    networkPolicy?: NetworkPolicy;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
