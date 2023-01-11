package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreInput
 * Represents both a request to Restore some portion of a Backup into a target GKE cluster and a record of the restore operation itself. Next id: 18
**/
public class RestoreInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public String backup;
    public RestoreInput withBackup(String backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public RestoreInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public RestoreInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreConfig")
    public RestoreConfig restoreConfig;
    public RestoreInput withRestoreConfig(RestoreConfig restoreConfig) {
        this.restoreConfig = restoreConfig;
        return this;
    }
}