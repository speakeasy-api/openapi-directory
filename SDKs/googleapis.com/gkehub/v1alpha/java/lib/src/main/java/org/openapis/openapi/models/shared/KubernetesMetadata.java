/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KubernetesMetadata - KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
 */
public class KubernetesMetadata {
    /**
     * Output only. Kubernetes API server version string as reported by `/version`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesApiServerVersion")
    public String kubernetesApiServerVersion;

    public KubernetesMetadata withKubernetesApiServerVersion(String kubernetesApiServerVersion) {
        this.kubernetesApiServerVersion = kubernetesApiServerVersion;
        return this;
    }
    
    /**
     * Output only. The total memory capacity as reported by the sum of all Kubernetes nodes resources, defined in MB.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMb")
    public Integer memoryMb;

    public KubernetesMetadata withMemoryMb(Integer memoryMb) {
        this.memoryMb = memoryMb;
        return this;
    }
    
    /**
     * Output only. Node count as reported by Kubernetes nodes resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeCount")
    public Integer nodeCount;

    public KubernetesMetadata withNodeCount(Integer nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    
    /**
     * Output only. Node providerID as reported by the first node in the list of nodes on the Kubernetes endpoint. On Kubernetes platforms that support zero-node clusters (like GKE-on-GCP), the node_count will be zero and the node_provider_id will be empty.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeProviderId")
    public String nodeProviderId;

    public KubernetesMetadata withNodeProviderId(String nodeProviderId) {
        this.nodeProviderId = nodeProviderId;
        return this;
    }
    
    /**
     * Output only. The time at which these details were last updated. This update_time is different from the Membership-level update_time since EndpointDetails are updated internally for API consumers.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;

    public KubernetesMetadata withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    
    /**
     * Output only. vCPU count as reported by Kubernetes nodes resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpuCount")
    public Integer vcpuCount;

    public KubernetesMetadata withVcpuCount(Integer vcpuCount) {
        this.vcpuCount = vcpuCount;
        return this;
    }
    
    public KubernetesMetadata(){}
}
