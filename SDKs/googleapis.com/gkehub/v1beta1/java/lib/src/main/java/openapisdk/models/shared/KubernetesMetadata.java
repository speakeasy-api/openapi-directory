package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KubernetesMetadata
 * KubernetesMetadata provides informational metadata for Memberships representing Kubernetes clusters.
**/
public class KubernetesMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetesApiServerVersion")
    public String kubernetesApiServerVersion;
    public KubernetesMetadata withKubernetesApiServerVersion(String kubernetesApiServerVersion) {
        this.kubernetesApiServerVersion = kubernetesApiServerVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memoryMb")
    public Integer memoryMb;
    public KubernetesMetadata withMemoryMb(Integer memoryMb) {
        this.memoryMb = memoryMb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeCount")
    public Integer nodeCount;
    public KubernetesMetadata withNodeCount(Integer nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeProviderId")
    public String nodeProviderId;
    public KubernetesMetadata withNodeProviderId(String nodeProviderId) {
        this.nodeProviderId = nodeProviderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public KubernetesMetadata withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcpuCount")
    public Integer vcpuCount;
    public KubernetesMetadata withVcpuCount(Integer vcpuCount) {
        this.vcpuCount = vcpuCount;
        return this;
    }
}