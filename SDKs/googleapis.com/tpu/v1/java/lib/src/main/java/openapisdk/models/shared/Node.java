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
    @JsonProperty("ipAddress")
    public String ipAddress;
    public Node withIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
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
    @JsonProperty("name")
    public String name;
    public Node withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public Node withNetwork(String network) {
        this.network = network;
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
    @JsonProperty("port")
    public String port;
    public Node withPort(String port) {
        this.port = port;
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
    public String serviceAccount;
    public Node withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
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
    @JsonProperty("tensorflowVersion")
    public String tensorflowVersion;
    public Node withTensorflowVersion(String tensorflowVersion) {
        this.tensorflowVersion = tensorflowVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useServiceNetworking")
    public Boolean useServiceNetworking;
    public Node withUseServiceNetworking(Boolean useServiceNetworking) {
        this.useServiceNetworking = useServiceNetworking;
        return this;
    }
}