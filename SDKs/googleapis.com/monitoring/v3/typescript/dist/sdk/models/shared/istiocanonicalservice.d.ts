import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
 */
export declare class IstioCanonicalService extends SpeakeasyBase {
    /**
     * The name of the canonical service underlying this service. Corresponds to the destination_canonical_service_name metric label in label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio).
     */
    canonicalService?: string;
    /**
     * The namespace of the canonical service underlying this service. Corresponds to the destination_canonical_service_namespace metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio).
     */
    canonicalServiceNamespace?: string;
    /**
     * Identifier for the Istio mesh in which this canonical service is defined. Corresponds to the mesh_uid metric label in Istio metrics (https://cloud.google.com/monitoring/api/metrics_istio).
     */
    meshUid?: string;
}
