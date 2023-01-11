package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupPlanInput
 * Defines the configuration and scheduling for a "line" of Backups.
**/
public class BackupPlanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupConfig")
    public BackupConfig backupConfig;
    public BackupPlanInput withBackupConfig(BackupConfig backupConfig) {
        this.backupConfig = backupConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupSchedule")
    public Schedule backupSchedule;
    public BackupPlanInput withBackupSchedule(Schedule backupSchedule) {
        this.backupSchedule = backupSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public BackupPlanInput withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deactivated")
    public Boolean deactivated;
    public BackupPlanInput withDeactivated(Boolean deactivated) {
        this.deactivated = deactivated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BackupPlanInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public BackupPlanInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPolicy")
    public RetentionPolicy retentionPolicy;
    public BackupPlanInput withRetentionPolicy(RetentionPolicy retentionPolicy) {
        this.retentionPolicy = retentionPolicy;
        return this;
    }
}