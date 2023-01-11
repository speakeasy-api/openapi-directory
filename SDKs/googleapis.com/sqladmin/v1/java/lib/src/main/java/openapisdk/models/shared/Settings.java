package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Settings
 * Database instance settings.
**/
public class Settings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationPolicy")
    public SettingsActivationPolicyEnum activationPolicy;
    public Settings withActivationPolicy(SettingsActivationPolicyEnum activationPolicy) {
        this.activationPolicy = activationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeDirectoryConfig")
    public SqlActiveDirectoryConfig activeDirectoryConfig;
    public Settings withActiveDirectoryConfig(SqlActiveDirectoryConfig activeDirectoryConfig) {
        this.activeDirectoryConfig = activeDirectoryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizedGaeApplications")
    public String[] authorizedGaeApplications;
    public Settings withAuthorizedGaeApplications(String[] authorizedGaeApplications) {
        this.authorizedGaeApplications = authorizedGaeApplications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityType")
    public SettingsAvailabilityTypeEnum availabilityType;
    public Settings withAvailabilityType(SettingsAvailabilityTypeEnum availabilityType) {
        this.availabilityType = availabilityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupConfiguration")
    public BackupConfiguration backupConfiguration;
    public Settings withBackupConfiguration(BackupConfiguration backupConfiguration) {
        this.backupConfiguration = backupConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collation")
    public String collation;
    public Settings withCollation(String collation) {
        this.collation = collation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorEnforcement")
    public SettingsConnectorEnforcementEnum connectorEnforcement;
    public Settings withConnectorEnforcement(SettingsConnectorEnforcementEnum connectorEnforcement) {
        this.connectorEnforcement = connectorEnforcement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crashSafeReplicationEnabled")
    public Boolean crashSafeReplicationEnabled;
    public Settings withCrashSafeReplicationEnabled(Boolean crashSafeReplicationEnabled) {
        this.crashSafeReplicationEnabled = crashSafeReplicationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskSizeGb")
    public String dataDiskSizeGb;
    public Settings withDataDiskSizeGb(String dataDiskSizeGb) {
        this.dataDiskSizeGb = dataDiskSizeGb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataDiskType")
    public SettingsDataDiskTypeEnum dataDiskType;
    public Settings withDataDiskType(SettingsDataDiskTypeEnum dataDiskType) {
        this.dataDiskType = dataDiskType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseFlags")
    public DatabaseFlags[] databaseFlags;
    public Settings withDatabaseFlags(DatabaseFlags[] databaseFlags) {
        this.databaseFlags = databaseFlags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseReplicationEnabled")
    public Boolean databaseReplicationEnabled;
    public Settings withDatabaseReplicationEnabled(Boolean databaseReplicationEnabled) {
        this.databaseReplicationEnabled = databaseReplicationEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletionProtectionEnabled")
    public Boolean deletionProtectionEnabled;
    public Settings withDeletionProtectionEnabled(Boolean deletionProtectionEnabled) {
        this.deletionProtectionEnabled = deletionProtectionEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denyMaintenancePeriods")
    public DenyMaintenancePeriod[] denyMaintenancePeriods;
    public Settings withDenyMaintenancePeriods(DenyMaintenancePeriod[] denyMaintenancePeriods) {
        this.denyMaintenancePeriods = denyMaintenancePeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insightsConfig")
    public InsightsConfig insightsConfig;
    public Settings withInsightsConfig(InsightsConfig insightsConfig) {
        this.insightsConfig = insightsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipConfiguration")
    public IpConfiguration ipConfiguration;
    public Settings withIpConfiguration(IpConfiguration ipConfiguration) {
        this.ipConfiguration = ipConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Settings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationPreference")
    public LocationPreference locationPreference;
    public Settings withLocationPreference(LocationPreference locationPreference) {
        this.locationPreference = locationPreference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maintenanceWindow")
    public MaintenanceWindow maintenanceWindow;
    public Settings withMaintenanceWindow(MaintenanceWindow maintenanceWindow) {
        this.maintenanceWindow = maintenanceWindow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordValidationPolicy")
    public PasswordValidationPolicy passwordValidationPolicy;
    public Settings withPasswordValidationPolicy(PasswordValidationPolicy passwordValidationPolicy) {
        this.passwordValidationPolicy = passwordValidationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricingPlan")
    public SettingsPricingPlanEnum pricingPlan;
    public Settings withPricingPlan(SettingsPricingPlanEnum pricingPlan) {
        this.pricingPlan = pricingPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationType")
    public SettingsReplicationTypeEnum replicationType;
    public Settings withReplicationType(SettingsReplicationTypeEnum replicationType) {
        this.replicationType = replicationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingsVersion")
    public String settingsVersion;
    public Settings withSettingsVersion(String settingsVersion) {
        this.settingsVersion = settingsVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sqlServerAuditConfig")
    public SqlServerAuditConfig sqlServerAuditConfig;
    public Settings withSqlServerAuditConfig(SqlServerAuditConfig sqlServerAuditConfig) {
        this.sqlServerAuditConfig = sqlServerAuditConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageAutoResize")
    public Boolean storageAutoResize;
    public Settings withStorageAutoResize(Boolean storageAutoResize) {
        this.storageAutoResize = storageAutoResize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageAutoResizeLimit")
    public String storageAutoResizeLimit;
    public Settings withStorageAutoResizeLimit(String storageAutoResizeLimit) {
        this.storageAutoResizeLimit = storageAutoResizeLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public String tier;
    public Settings withTier(String tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public Settings withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userLabels")
    public java.util.Map<String, String> userLabels;
    public Settings withUserLabels(java.util.Map<String, String> userLabels) {
        this.userLabels = userLabels;
        return this;
    }
}