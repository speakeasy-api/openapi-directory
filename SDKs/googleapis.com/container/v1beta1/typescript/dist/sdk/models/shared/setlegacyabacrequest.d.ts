import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetLegacyAbacRequest enables or disables the ABAC authorization mechanism for a cluster.
 */
export declare class SetLegacyAbacRequest extends SpeakeasyBase {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. Whether ABAC authorization will be enabled in the cluster.
     */
    enabled?: boolean;
    /**
     * The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
