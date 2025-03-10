import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
 */
export declare class MeshCertificates extends SpeakeasyBase {
    /**
     * enable_certificates controls issuance of workload mTLS certificates. If set, the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster, which can then be configured by creating a WorkloadCertificateConfig Custom Resource. Requires Workload Identity (workload_pool must be non-empty).
     */
    enableCertificates?: boolean;
}
