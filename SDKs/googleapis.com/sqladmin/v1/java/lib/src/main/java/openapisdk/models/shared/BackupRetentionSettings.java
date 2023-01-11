package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupRetentionSettings
 * We currently only support backup retention by specifying the number of backups we will retain.
**/
public class BackupRetentionSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retainedBackups")
    public Integer retainedBackups;
    public BackupRetentionSettings withRetainedBackups(Integer retainedBackups) {
        this.retainedBackups = retainedBackups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retentionUnit")
    public BackupRetentionSettingsRetentionUnitEnum retentionUnit;
    public BackupRetentionSettings withRetentionUnit(BackupRetentionSettingsRetentionUnitEnum retentionUnit) {
        this.retentionUnit = retentionUnit;
        return this;
    }
}