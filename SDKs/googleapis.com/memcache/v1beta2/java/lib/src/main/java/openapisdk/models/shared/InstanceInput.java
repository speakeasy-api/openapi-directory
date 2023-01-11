package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * A Memorystore for Memcached instance
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetwork")
    public String authorizedNetwork;
    public InstanceInput withAuthorizedNetwork(String authorizedNetwork) {
        this.authorizedNetwork = authorizedNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public InstanceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceMessages")
    public InstanceMessage[] instanceMessages;
    public InstanceInput withInstanceMessages(InstanceMessage[] instanceMessages) {
        this.instanceMessages = instanceMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public InstanceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenancePolicy")
    public GoogleCloudMemcacheV1beta2MaintenancePolicyInput maintenancePolicy;
    public InstanceInput withMaintenancePolicy(GoogleCloudMemcacheV1beta2MaintenancePolicyInput maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memcacheVersion")
    public InstanceMemcacheVersionEnum memcacheVersion;
    public InstanceInput withMemcacheVersion(InstanceMemcacheVersionEnum memcacheVersion) {
        this.memcacheVersion = memcacheVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public InstanceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeConfig")
    public NodeConfig nodeConfig;
    public InstanceInput withNodeConfig(NodeConfig nodeConfig) {
        this.nodeConfig = nodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeCount")
    public Integer nodeCount;
    public InstanceInput withNodeCount(Integer nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public MemcacheParametersInput parameters;
    public InstanceInput withParameters(MemcacheParametersInput parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public InstanceInput withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}