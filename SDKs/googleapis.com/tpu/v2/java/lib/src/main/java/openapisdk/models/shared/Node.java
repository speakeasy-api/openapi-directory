package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Node
 * A TPU instance.
**/
public class Node {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceleratorType")
    public String acceleratorType;
    public Node withAcceleratorType(String acceleratorType) {
        this.acceleratorType = acceleratorType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiVersion")
    public NodeApiVersionEnum apiVersion;
    public Node withApiVersion(NodeApiVersionEnum apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cidrBlock")
    public String cidrBlock;
    public Node withCidrBlock(String cidrBlock) {
        this.cidrBlock = cidrBlock;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Node withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDisks")
    public AttachedDisk[] dataDisks;
    public Node withDataDisks(AttachedDisk[] dataDisks) {
        this.dataDisks = dataDisks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Node withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health")
    public NodeHealthEnum health;
    public Node withHealth(NodeHealthEnum health) {
        this.health = health;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthDescription")
    public String healthDescription;
    public Node withHealthDescription(String healthDescription) {
        this.healthDescription = healthDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Node withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Node withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, String> metadata;
    public Node withMetadata(java.util.Map<String, String> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Node withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;
    public Node withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkEndpoints")
    public NetworkEndpoint[] networkEndpoints;
    public Node withNetworkEndpoints(NetworkEndpoint[] networkEndpoints) {
        this.networkEndpoints = networkEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runtimeVersion")
    public String runtimeVersion;
    public Node withRuntimeVersion(String runtimeVersion) {
        this.runtimeVersion = runtimeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulingConfig")
    public SchedulingConfig schedulingConfig;
    public Node withSchedulingConfig(SchedulingConfig schedulingConfig) {
        this.schedulingConfig = schedulingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccount serviceAccount;
    public Node withServiceAccount(ServiceAccount serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shieldedInstanceConfig")
    public ShieldedInstanceConfig shieldedInstanceConfig;
    public Node withShieldedInstanceConfig(ShieldedInstanceConfig shieldedInstanceConfig) {
        this.shieldedInstanceConfig = shieldedInstanceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public NodeStateEnum state;
    public Node withState(NodeStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("symptoms")
    public Symptom[] symptoms;
    public Node withSymptoms(Symptom[] symptoms) {
        this.symptoms = symptoms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Node withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}