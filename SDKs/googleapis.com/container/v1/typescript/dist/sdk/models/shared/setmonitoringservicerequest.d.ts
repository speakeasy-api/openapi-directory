import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetMonitoringServiceRequest sets the monitoring service of a cluster.
 */
export declare class SetMonitoringServiceRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * Required. The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    monitoringService?: string;
    /**
     * The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/* /locations/* /clusters/*`.
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
