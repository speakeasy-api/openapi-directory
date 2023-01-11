package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupConfiguration
 * Database instance backup configuration.
**/
public class BackupConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupRetentionSettings")
    public BackupRetentionSettings backupRetentionSettings;
    public BackupConfiguration withBackupRetentionSettings(BackupRetentionSettings backupRetentionSettings) {
        this.backupRetentionSettings = backupRetentionSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryLogEnabled")
    public Boolean binaryLogEnabled;
    public BackupConfiguration withBinaryLogEnabled(Boolean binaryLogEnabled) {
        this.binaryLogEnabled = binaryLogEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public BackupConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BackupConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public String location;
    public BackupConfiguration withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pointInTimeRecoveryEnabled")
    public Boolean pointInTimeRecoveryEnabled;
    public BackupConfiguration withPointInTimeRecoveryEnabled(Boolean pointInTimeRecoveryEnabled) {
        this.pointInTimeRecoveryEnabled = pointInTimeRecoveryEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationLogArchivingEnabled")
    public Boolean replicationLogArchivingEnabled;
    public BackupConfiguration withReplicationLogArchivingEnabled(Boolean replicationLogArchivingEnabled) {
        this.replicationLogArchivingEnabled = replicationLogArchivingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public BackupConfiguration withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionLogRetentionDays")
    public Integer transactionLogRetentionDays;
    public BackupConfiguration withTransactionLogRetentionDays(Integer transactionLogRetentionDays) {
        this.transactionLogRetentionDays = transactionLogRetentionDays;
        return this;
    }
}