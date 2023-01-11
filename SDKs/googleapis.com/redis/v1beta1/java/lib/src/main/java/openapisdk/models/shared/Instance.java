package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Instance
 * A Memorystore for Redis instance.
**/
public class Instance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeLocationId")
    public String alternativeLocationId;
    public Instance withAlternativeLocationId(String alternativeLocationId) {
        this.alternativeLocationId = alternativeLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authEnabled")
    public Boolean authEnabled;
    public Instance withAuthEnabled(Boolean authEnabled) {
        this.authEnabled = authEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetwork")
    public String authorizedNetwork;
    public Instance withAuthorizedNetwork(String authorizedNetwork) {
        this.authorizedNetwork = authorizedNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMaintenanceVersions")
    public String[] availableMaintenanceVersions;
    public Instance withAvailableMaintenanceVersions(String[] availableMaintenanceVersions) {
        this.availableMaintenanceVersions = availableMaintenanceVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectMode")
    public InstanceConnectModeEnum connectMode;
    public Instance withConnectMode(InstanceConnectModeEnum connectMode) {
        this.connectMode = connectMode;
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
    @JsonProperty("currentLocationId")
    public String currentLocationId;
    public Instance withCurrentLocationId(String currentLocationId) {
        this.currentLocationId = currentLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedKey")
    public String customerManagedKey;
    public Instance withCustomerManagedKey(String customerManagedKey) {
        this.customerManagedKey = customerManagedKey;
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
    @JsonProperty("host")
    public String host;
    public Instance withHost(String host) {
        this.host = host;
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
    @JsonProperty("locationId")
    public String locationId;
    public Instance withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenancePolicy")
    public MaintenancePolicy maintenancePolicy;
    public Instance withMaintenancePolicy(MaintenancePolicy maintenancePolicy) {
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
    @JsonProperty("maintenanceVersion")
    public String maintenanceVersion;
    public Instance withMaintenanceVersion(String maintenanceVersion) {
        this.maintenanceVersion = maintenanceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeGb")
    public Integer memorySizeGb;
    public Instance withMemorySizeGb(Integer memorySizeGb) {
        this.memorySizeGb = memorySizeGb;
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
    @JsonProperty("nodes")
    public NodeInfo[] nodes;
    public Instance withNodes(NodeInfo[] nodes) {
        this.nodes = nodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistenceConfig")
    public PersistenceConfig persistenceConfig;
    public Instance withPersistenceConfig(PersistenceConfig persistenceConfig) {
        this.persistenceConfig = persistenceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("persistenceIamIdentity")
    public String persistenceIamIdentity;
    public Instance withPersistenceIamIdentity(String persistenceIamIdentity) {
        this.persistenceIamIdentity = persistenceIamIdentity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public Instance withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readEndpoint")
    public String readEndpoint;
    public Instance withReadEndpoint(String readEndpoint) {
        this.readEndpoint = readEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readEndpointPort")
    public Integer readEndpointPort;
    public Instance withReadEndpointPort(Integer readEndpointPort) {
        this.readEndpointPort = readEndpointPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readReplicasMode")
    public InstanceReadReplicasModeEnum readReplicasMode;
    public Instance withReadReplicasMode(InstanceReadReplicasModeEnum readReplicasMode) {
        this.readReplicasMode = readReplicasMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redisConfigs")
    public java.util.Map<String, String> redisConfigs;
    public Instance withRedisConfigs(java.util.Map<String, String> redisConfigs) {
        this.redisConfigs = redisConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redisVersion")
    public String redisVersion;
    public Instance withRedisVersion(String redisVersion) {
        this.redisVersion = redisVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaCount")
    public Integer replicaCount;
    public Instance withReplicaCount(Integer replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public Instance withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryIpRange")
    public String secondaryIpRange;
    public Instance withSecondaryIpRange(String secondaryIpRange) {
        this.secondaryIpRange = secondaryIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCerts")
    public TlsCertificate[] serverCaCerts;
    public Instance withServerCaCerts(TlsCertificate[] serverCaCerts) {
        this.serverCaCerts = serverCaCerts;
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
    @JsonProperty("statusMessage")
    public String statusMessage;
    public Instance withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReasons")
    public InstanceSuspensionReasonsEnum[] suspensionReasons;
    public Instance withSuspensionReasons(InstanceSuspensionReasonsEnum[] suspensionReasons) {
        this.suspensionReasons = suspensionReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public InstanceTierEnum tier;
    public Instance withTier(InstanceTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryptionMode")
    public InstanceTransitEncryptionModeEnum transitEncryptionMode;
    public Instance withTransitEncryptionMode(InstanceTransitEncryptionModeEnum transitEncryptionMode) {
        this.transitEncryptionMode = transitEncryptionMode;
        return this;
    }
}