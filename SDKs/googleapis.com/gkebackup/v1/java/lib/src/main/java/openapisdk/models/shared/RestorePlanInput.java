package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestorePlanInput
 * The configuration of a potential series of Restore operations to be performed against Backups belong to a particular BackupPlan. Next id: 11
**/
public class RestorePlanInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupPlan")
    public String backupPlan;
    public RestorePlanInput withBackupPlan(String backupPlan) {
        this.backupPlan = backupPlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public RestorePlanInput withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RestorePlanInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public RestorePlanInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreConfig")
    public RestoreConfig restoreConfig;
    public RestorePlanInput withRestoreConfig(RestoreConfig restoreConfig) {
        this.restoreConfig = restoreConfig;
        return this;
    }
}