package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeInput
 * A TPU instance.
**/
public class NodeInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public String acceleratorType;
    public NodeInput withAcceleratorType(String acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrBlock")
    public String cidrBlock;
    public NodeInput withCidrBlock(String cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDisks")
    public AttachedDisk[] dataDisks;
    public NodeInput withDataDisks(AttachedDisk[] dataDisks) {
        this.dataDisks = dataDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public NodeInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public NodeHealthEnum health;
    public NodeInput withHealth(NodeHealthEnum health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public NodeInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public NodeInput withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public NodeInput withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeVersion")
    public String runtimeVersion;
    public NodeInput withRuntimeVersion(String runtimeVersion) {
        this.runtimeVersion = runtimeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulingConfig")
    public SchedulingConfig schedulingConfig;
    public NodeInput withSchedulingConfig(SchedulingConfig schedulingConfig) {
        this.schedulingConfig = schedulingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccount serviceAccount;
    public NodeInput withServiceAccount(ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public ShieldedInstanceConfig shieldedInstanceConfig;
    public NodeInput withShieldedInstanceConfig(ShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public NodeInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}