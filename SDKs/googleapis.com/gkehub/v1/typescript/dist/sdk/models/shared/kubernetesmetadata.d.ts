import { SpeakeasyBase } from "../../../internal/utils";
/**
 * KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
 */
export declare class KubernetesMetadata extends SpeakeasyBase {
    /**
     * Output only. Kubernetes API server version string as reported by `/version`.
     */
    kubernetesApiServerVersion?: string;
    /**
     * Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.
     */
    memoryMb?: number;
    /**
     * Output only. Node count as reported by Kubernetes nodes resources.
     */
    nodeCount?: number;
    /**
     * Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty.
     */
    nodeProviderId?: string;
    /**
     * Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.
     */
    updateTime?: string;
    /**
     * Output only. vCPU count as reported by Kubernetes nodes resources.
     */
    vcpuCount?: number;
}
