import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CompleteIPRotationRequest moves the cluster master back into single-IP mode.
 */
export declare class CompleteIPRotationRequest extends SpeakeasyBase {
    /**
     * Required. Deprecated. The name of the cluster. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/* /locations/* /clusters/*`.
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
