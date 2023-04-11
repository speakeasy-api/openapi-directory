import { SpeakeasyBase } from "../../../internal/utils";
/**
 * StartIPRotationRequest creates a new IP for the cluster and then performs a node upgrade on each node pool to point to the new IP.
 */
export declare class StartIPRotationRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Whether to rotate credentials during IP rotation.
     */
    rotateCredentials?: boolean;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
