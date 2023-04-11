import { SpeakeasyBase } from "../../../internal/utils";
/**
 * UpdateMasterRequest updates the master of the cluster.
 */
export declare class UpdateMasterRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. The Kubernetes version to change the master to. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
     */
    masterVersion?: string;
    /**
     * The name (project, location, cluster) of the cluster to update. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    name?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
