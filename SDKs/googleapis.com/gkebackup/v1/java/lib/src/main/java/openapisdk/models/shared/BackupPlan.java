package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupPlan
 * Defines the configuration and scheduling for a "line" of Backups.
**/
public class BackupPlan {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupConfig")
    public BackupConfig backupConfig;
    public BackupPlan withBackupConfig(BackupConfig backupConfig) {
        this.backupConfig = backupConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupSchedule")
    public Schedule backupSchedule;
    public BackupPlan withBackupSchedule(Schedule backupSchedule) {
        this.backupSchedule = backupSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public BackupPlan withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public BackupPlan withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deactivated")
    public Boolean deactivated;
    public BackupPlan withDeactivated(Boolean deactivated) {
        this.deactivated = deactivated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public BackupPlan withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public BackupPlan withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public BackupPlan withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BackupPlan withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protectedPodCount")
    public Integer protectedPodCount;
    public BackupPlan withProtectedPodCount(Integer protectedPodCount) {
        this.protectedPodCount = protectedPodCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionPolicy")
    public RetentionPolicy retentionPolicy;
    public BackupPlan withRetentionPolicy(RetentionPolicy retentionPolicy) {
        this.retentionPolicy = retentionPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public BackupPlan withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public BackupPlan withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}