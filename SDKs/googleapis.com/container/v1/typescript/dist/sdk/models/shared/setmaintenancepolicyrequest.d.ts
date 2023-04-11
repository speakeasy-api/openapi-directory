import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenancePolicy } from "./maintenancepolicy";
/**
 * SetMaintenancePolicyRequest sets the maintenance policy for a cluster.
 */
export declare class SetMaintenancePolicyRequest extends SpeakeasyBase {
    /**
     * Required. The name of the cluster to update.
     */
    clusterId?: string;
    /**
     * MaintenancePolicy defines the maintenance policy to be used for the cluster.
     */
    maintenancePolicy?: MaintenancePolicy;
    /**
     * The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).
     */
    projectId?: string;
    /**
     * Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.
     */
    zone?: string;
}
