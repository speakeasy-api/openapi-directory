import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
 */
export declare class GkeNamespace extends SpeakeasyBase {
    /**
     * The name of the parent cluster.
     */
    clusterName?: string;
    /**
     * The location of the parent cluster. This may be a zone or region.
     */
    location?: string;
    /**
     * The name of this namespace.
     */
    namespaceName?: string;
    /**
     * Output only. The project this resource lives in. For legacy services migrated from the Custom type, this may be a distinct project from the one parenting the service itself.
     */
    projectId?: string;
}
/**
 * GKE Namespace. The field names correspond to the resource metadata labels on monitored resources that fall under a namespace (for example, k8s_container or k8s_pod).
 */
export declare class GkeNamespaceInput extends SpeakeasyBase {
    /**
     * The name of the parent cluster.
     */
    clusterName?: string;
    /**
     * The location of the parent cluster. This may be a zone or region.
     */
    location?: string;
    /**
     * The name of this namespace.
     */
    namespaceName?: string;
}
