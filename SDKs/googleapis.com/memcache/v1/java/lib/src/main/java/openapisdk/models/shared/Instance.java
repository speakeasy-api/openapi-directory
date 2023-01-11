package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * A Memorystore for Memcached instance
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetwork")
    public String authorizedNetwork;
    public Instance withAuthorizedNetwork(String authorizedNetwork) {
        this.authorizedNetwork = authorizedNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Instance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discoveryEndpoint")
    public String discoveryEndpoint;
    public Instance withDiscoveryEndpoint(String discoveryEndpoint) {
        this.discoveryEndpoint = discoveryEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Instance withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceMessages")
    public InstanceMessage[] instanceMessages;
    public Instance withInstanceMessages(InstanceMessage[] instanceMessages) {
        this.instanceMessages = instanceMessages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Instance withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenancePolicy")
    public GoogleCloudMemcacheV1MaintenancePolicy maintenancePolicy;
    public Instance withMaintenancePolicy(GoogleCloudMemcacheV1MaintenancePolicy maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceSchedule")
    public MaintenanceSchedule maintenanceSchedule;
    public Instance withMaintenanceSchedule(MaintenanceSchedule maintenanceSchedule) {
        this.maintenanceSchedule = maintenanceSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memcacheFullVersion")
    public String memcacheFullVersion;
    public Instance withMemcacheFullVersion(String memcacheFullVersion) {
        this.memcacheFullVersion = memcacheFullVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memcacheNodes")
    public Node[] memcacheNodes;
    public Instance withMemcacheNodes(Node[] memcacheNodes) {
        this.memcacheNodes = memcacheNodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memcacheVersion")
    public InstanceMemcacheVersionEnum memcacheVersion;
    public Instance withMemcacheVersion(InstanceMemcacheVersionEnum memcacheVersion) {
        this.memcacheVersion = memcacheVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Instance withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeConfig")
    public NodeConfig nodeConfig;
    public Instance withNodeConfig(NodeConfig nodeConfig) {
        this.nodeConfig = nodeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodeCount")
    public Integer nodeCount;
    public Instance withNodeCount(Integer nodeCount) {
        this.nodeCount = nodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public MemcacheParameters parameters;
    public Instance withParameters(MemcacheParameters parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public InstanceStateEnum state;
    public Instance withState(InstanceStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Instance withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zones")
    public String[] zones;
    public Instance withZones(String[] zones) {
        this.zones = zones;
        return this;
    }
}