package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeConfig
 * The configuration information for the Kubernetes Engine nodes running the Apache Airflow software.
**/
public class NodeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diskSizeGb")
    public Integer diskSizeGb;
    public NodeConfig withDiskSizeGb(Integer diskSizeGb) {
        this.diskSizeGb = diskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableIpMasqAgent")
    public Boolean enableIpMasqAgent;
    public NodeConfig withEnableIpMasqAgent(Boolean enableIpMasqAgent) {
        this.enableIpMasqAgent = enableIpMasqAgent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAllocationPolicy")
    public IpAllocationPolicy ipAllocationPolicy;
    public NodeConfig withIpAllocationPolicy(IpAllocationPolicy ipAllocationPolicy) {
        this.ipAllocationPolicy = ipAllocationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public NodeConfig withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("machineType")
    public String machineType;
    public NodeConfig withMachineType(String machineType) {
        this.machineType = machineType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPodsPerNode")
    public Integer maxPodsPerNode;
    public NodeConfig withMaxPodsPerNode(Integer maxPodsPerNode) {
        this.maxPodsPerNode = maxPodsPerNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public NodeConfig withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthScopes")
    public String[] oauthScopes;
    public NodeConfig withOauthScopes(String[] oauthScopes) {
        this.oauthScopes = oauthScopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public NodeConfig withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subnetwork")
    public String subnetwork;
    public NodeConfig withSubnetwork(String subnetwork) {
        this.subnetwork = subnetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public NodeConfig withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}