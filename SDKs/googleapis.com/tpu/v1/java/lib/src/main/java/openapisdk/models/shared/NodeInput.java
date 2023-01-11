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
    @JsonProperty("ipAddress")
    public String ipAddress;
    public NodeInput withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
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
    @JsonProperty("network")
    public String network;
    public NodeInput withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public String port;
    public NodeInput withPort(String port) {
        this.port = port;
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
    @JsonProperty("tensorflowVersion")
    public String tensorflowVersion;
    public NodeInput withTensorflowVersion(String tensorflowVersion) {
        this.tensorflowVersion = tensorflowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useServiceNetworking")
    public Boolean useServiceNetworking;
    public NodeInput withUseServiceNetworking(Boolean useServiceNetworking) {
        this.useServiceNetworking = useServiceNetworking;
        return this;
    }
}