import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
/**
 * SetAddonsRequest sets the addons associated with the cluster.
 */
export declare class SetAddonsConfigRequest extends SpeakeasyBase {
    /**
     * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
     */
    addonsConfig?: AddonsConfig;
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/* /locations/* /clusters/*`.
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
