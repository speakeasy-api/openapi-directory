import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
 */
export declare class MeshIstio extends SpeakeasyBase {
    /**
     * Identifier for the mesh in which this Istio service is defined. Corresponds to the mesh_uid metric label in Istio metrics.
     */
    meshUid?: string;
    /**
     * The name of the Istio service underlying this service. Corresponds to the destination_service_name metric label in Istio metrics.
     */
    serviceName?: string;
    /**
     * The namespace of the Istio service underlying this service. Corresponds to the destination_service_namespace metric label in Istio metrics.
     */
    serviceNamespace?: string;
}
