import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
 */
export declare class GkeService extends SpeakeasyBase {
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
     * The name of this service.
     */
    serviceName?: string;
}
/**
 * GKE Service. The "service" here represents a Kubernetes service object (https://kubernetes.io/docs/concepts/services-networking/service). The field names correspond to the resource labels on k8s_service monitored resources (https://cloud.google.com/monitoring/api/resources#tag_k8s_service).
 */
export declare class GkeServiceInput extends SpeakeasyBase {
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
     * The name of this service.
     */
    serviceName?: string;
}
