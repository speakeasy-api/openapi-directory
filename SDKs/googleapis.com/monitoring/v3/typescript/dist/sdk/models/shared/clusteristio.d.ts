import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Istio service scoped to a single Kubernetes cluster. Learn more at https://istio.io. Clusters running OSS Istio will have their services ingested as this type.
 */
export declare class ClusterIstio extends SpeakeasyBase {
    /**
     * The name of the Kubernetes cluster in which this Istio service is defined. Corresponds to the cluster_name resource label in k8s_cluster resources.
     */
    clusterName?: string;
    /**
     * The location of the Kubernetes cluster in which this Istio service is defined. Corresponds to the location resource label in k8s_cluster resources.
     */
    location?: string;
    /**
     * The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics.
     */
    serviceName?: string;
    /**
     * The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics.
     */
    serviceNamespace?: string;
}
