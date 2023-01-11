package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlSettings
 * Settings for creating a Cloud SQL database instance.
**/
public class CloudSqlSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationPolicy")
    public CloudSqlSettingsActivationPolicyEnum activationPolicy;
    public CloudSqlSettings withActivationPolicy(CloudSqlSettingsActivationPolicyEnum activationPolicy) {
        this.activationPolicy = activationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoStorageIncrease")
    public Boolean autoStorageIncrease;
    public CloudSqlSettings withAutoStorageIncrease(Boolean autoStorageIncrease) {
        this.autoStorageIncrease = autoStorageIncrease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityType")
    public CloudSqlSettingsAvailabilityTypeEnum availabilityType;
    public CloudSqlSettings withAvailabilityType(CloudSqlSettingsAvailabilityTypeEnum availabilityType) {
        this.availabilityType = availabilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmekKeyName")
    public String cmekKeyName;
    public CloudSqlSettings withCmekKeyName(String cmekKeyName) {
        this.cmekKeyName = cmekKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collation")
    public String collation;
    public CloudSqlSettings withCollation(String collation) {
        this.collation = collation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskSizeGb")
    public String dataDiskSizeGb;
    public CloudSqlSettings withDataDiskSizeGb(String dataDiskSizeGb) {
        this.dataDiskSizeGb = dataDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskType")
    public CloudSqlSettingsDataDiskTypeEnum dataDiskType;
    public CloudSqlSettings withDataDiskType(CloudSqlSettingsDataDiskTypeEnum dataDiskType) {
        this.dataDiskType = dataDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseFlags")
    public java.util.Map<String, String> databaseFlags;
    public CloudSqlSettings withDatabaseFlags(java.util.Map<String, String> databaseFlags) {
        this.databaseFlags = databaseFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseVersion")
    public CloudSqlSettingsDatabaseVersionEnum databaseVersion;
    public CloudSqlSettings withDatabaseVersion(CloudSqlSettingsDatabaseVersionEnum databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipConfig")
    public SqlIpConfig ipConfig;
    public CloudSqlSettings withIpConfig(SqlIpConfig ipConfig) {
        this.ipConfig = ipConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPassword")
    public String rootPassword;
    public CloudSqlSettings withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPasswordSet")
    public Boolean rootPasswordSet;
    public CloudSqlSettings withRootPasswordSet(Boolean rootPasswordSet) {
        this.rootPasswordSet = rootPasswordSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryZone")
    public String secondaryZone;
    public CloudSqlSettings withSecondaryZone(String secondaryZone) {
        this.secondaryZone = secondaryZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public CloudSqlSettings withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageAutoResizeLimit")
    public String storageAutoResizeLimit;
    public CloudSqlSettings withStorageAutoResizeLimit(String storageAutoResizeLimit) {
        this.storageAutoResizeLimit = storageAutoResizeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public String tier;
    public CloudSqlSettings withTier(String tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public CloudSqlSettings withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public CloudSqlSettings withZone(String zone) {
        this.zone = zone;
        return this;
    }
}