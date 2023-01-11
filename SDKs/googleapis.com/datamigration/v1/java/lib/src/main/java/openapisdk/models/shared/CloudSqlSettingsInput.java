package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudSqlSettingsInput
 * Settings for creating a Cloud SQL database instance.
**/
public class CloudSqlSettingsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationPolicy")
    public CloudSqlSettingsActivationPolicyEnum activationPolicy;
    public CloudSqlSettingsInput withActivationPolicy(CloudSqlSettingsActivationPolicyEnum activationPolicy) {
        this.activationPolicy = activationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoStorageIncrease")
    public Boolean autoStorageIncrease;
    public CloudSqlSettingsInput withAutoStorageIncrease(Boolean autoStorageIncrease) {
        this.autoStorageIncrease = autoStorageIncrease;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityType")
    public CloudSqlSettingsAvailabilityTypeEnum availabilityType;
    public CloudSqlSettingsInput withAvailabilityType(CloudSqlSettingsAvailabilityTypeEnum availabilityType) {
        this.availabilityType = availabilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cmekKeyName")
    public String cmekKeyName;
    public CloudSqlSettingsInput withCmekKeyName(String cmekKeyName) {
        this.cmekKeyName = cmekKeyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collation")
    public String collation;
    public CloudSqlSettingsInput withCollation(String collation) {
        this.collation = collation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskSizeGb")
    public String dataDiskSizeGb;
    public CloudSqlSettingsInput withDataDiskSizeGb(String dataDiskSizeGb) {
        this.dataDiskSizeGb = dataDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskType")
    public CloudSqlSettingsDataDiskTypeEnum dataDiskType;
    public CloudSqlSettingsInput withDataDiskType(CloudSqlSettingsDataDiskTypeEnum dataDiskType) {
        this.dataDiskType = dataDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseFlags")
    public java.util.Map<String, String> databaseFlags;
    public CloudSqlSettingsInput withDatabaseFlags(java.util.Map<String, String> databaseFlags) {
        this.databaseFlags = databaseFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseVersion")
    public CloudSqlSettingsDatabaseVersionEnum databaseVersion;
    public CloudSqlSettingsInput withDatabaseVersion(CloudSqlSettingsDatabaseVersionEnum databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipConfig")
    public SqlIpConfig ipConfig;
    public CloudSqlSettingsInput withIpConfig(SqlIpConfig ipConfig) {
        this.ipConfig = ipConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rootPassword")
    public String rootPassword;
    public CloudSqlSettingsInput withRootPassword(String rootPassword) {
        this.rootPassword = rootPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryZone")
    public String secondaryZone;
    public CloudSqlSettingsInput withSecondaryZone(String secondaryZone) {
        this.secondaryZone = secondaryZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceId")
    public String sourceId;
    public CloudSqlSettingsInput withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageAutoResizeLimit")
    public String storageAutoResizeLimit;
    public CloudSqlSettingsInput withStorageAutoResizeLimit(String storageAutoResizeLimit) {
        this.storageAutoResizeLimit = storageAutoResizeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public String tier;
    public CloudSqlSettingsInput withTier(String tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public CloudSqlSettingsInput withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public CloudSqlSettingsInput withZone(String zone) {
        this.zone = zone;
        return this;
    }
}