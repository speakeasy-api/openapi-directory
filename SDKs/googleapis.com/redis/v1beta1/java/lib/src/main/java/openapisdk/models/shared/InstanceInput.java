package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceInput
 * A Memorystore for Redis instance.
**/
public class InstanceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternativeLocationId")
    public String alternativeLocationId;
    public InstanceInput withAlternativeLocationId(String alternativeLocationId) {
        this.alternativeLocationId = alternativeLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authEnabled")
    public Boolean authEnabled;
    public InstanceInput withAuthEnabled(Boolean authEnabled) {
        this.authEnabled = authEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedNetwork")
    public String authorizedNetwork;
    public InstanceInput withAuthorizedNetwork(String authorizedNetwork) {
        this.authorizedNetwork = authorizedNetwork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableMaintenanceVersions")
    public String[] availableMaintenanceVersions;
    public InstanceInput withAvailableMaintenanceVersions(String[] availableMaintenanceVersions) {
        this.availableMaintenanceVersions = availableMaintenanceVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectMode")
    public InstanceConnectModeEnum connectMode;
    public InstanceInput withConnectMode(InstanceConnectModeEnum connectMode) {
        this.connectMode = connectMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerManagedKey")
    public String customerManagedKey;
    public InstanceInput withCustomerManagedKey(String customerManagedKey) {
        this.customerManagedKey = customerManagedKey;
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
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public InstanceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationId")
    public String locationId;
    public InstanceInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenancePolicy")
    public MaintenancePolicyInput maintenancePolicy;
    public InstanceInput withMaintenancePolicy(MaintenancePolicyInput maintenancePolicy) {
        this.maintenancePolicy = maintenancePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceSchedule")
    public MaintenanceScheduleInput maintenanceSchedule;
    public InstanceInput withMaintenanceSchedule(MaintenanceScheduleInput maintenanceSchedule) {
        this.maintenanceSchedule = maintenanceSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceVersion")
    public String maintenanceVersion;
    public InstanceInput withMaintenanceVersion(String maintenanceVersion) {
        this.maintenanceVersion = maintenanceVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memorySizeGb")
    public Integer memorySizeGb;
    public InstanceInput withMemorySizeGb(Integer memorySizeGb) {
        this.memorySizeGb = memorySizeGb;
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
    @JsonProperty("persistenceConfig")
    public PersistenceConfigInput persistenceConfig;
    public InstanceInput withPersistenceConfig(PersistenceConfigInput persistenceConfig) {
        this.persistenceConfig = persistenceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readReplicasMode")
    public InstanceReadReplicasModeEnum readReplicasMode;
    public InstanceInput withReadReplicasMode(InstanceReadReplicasModeEnum readReplicasMode) {
        this.readReplicasMode = readReplicasMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redisConfigs")
    public java.util.Map<String, String> redisConfigs;
    public InstanceInput withRedisConfigs(java.util.Map<String, String> redisConfigs) {
        this.redisConfigs = redisConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redisVersion")
    public String redisVersion;
    public InstanceInput withRedisVersion(String redisVersion) {
        this.redisVersion = redisVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicaCount")
    public Integer replicaCount;
    public InstanceInput withReplicaCount(Integer replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reservedIpRange")
    public String reservedIpRange;
    public InstanceInput withReservedIpRange(String reservedIpRange) {
        this.reservedIpRange = reservedIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryIpRange")
    public String secondaryIpRange;
    public InstanceInput withSecondaryIpRange(String secondaryIpRange) {
        this.secondaryIpRange = secondaryIpRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suspensionReasons")
    public InstanceSuspensionReasonsEnum[] suspensionReasons;
    public InstanceInput withSuspensionReasons(InstanceSuspensionReasonsEnum[] suspensionReasons) {
        this.suspensionReasons = suspensionReasons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public InstanceTierEnum tier;
    public InstanceInput withTier(InstanceTierEnum tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transitEncryptionMode")
    public InstanceTransitEncryptionModeEnum transitEncryptionMode;
    public InstanceInput withTransitEncryptionMode(InstanceTransitEncryptionModeEnum transitEncryptionMode) {
        this.transitEncryptionMode = transitEncryptionMode;
        return this;
    }
}