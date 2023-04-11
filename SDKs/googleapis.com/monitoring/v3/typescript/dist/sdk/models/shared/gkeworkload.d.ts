import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
 */
export declare class GkeWorkload extends SpeakeasyBase {
    /**
     * The name of the parent cluster.
     */
    clusterName?: string;
    /**
     * The location of the parent cluster. This may be a zone or region.
     */
    location?: string;
    /**
     * The name of the parent namespace.
     */
    namespaceName?: string;
    /**
     * Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself.
     */
    projectId?: string;
    /**
     * The name of this workload.
     */
    topLevelControllerName?: string;
    /**
     * The type of this workload (for example, "Deployment" or "DaemonSet")
     */
    topLevelControllerType?: string;
}
/**
 * A GKE Workload (Deployment, StatefulSet, etc). The field names correspond to the metadata labels on monitored resources that fall under a workload (for example, k8s_container or k8s_pod).
 */
export declare class GkeWorkloadInput extends SpeakeasyBase {
    /**
     * The name of the parent cluster.
     */
    clusterName?: string;
    /**
     * The location of the parent cluster. This may be a zone or region.
     */
    location?: string;
    /**
     * The name of the parent namespace.
     */
    namespaceName?: string;
    /**
     * The name of this workload.
     */
    topLevelControllerName?: string;
    /**
     * The type of this workload (for example, "Deployment" or "DaemonSet")
     */
    topLevelControllerType?: string;
}
