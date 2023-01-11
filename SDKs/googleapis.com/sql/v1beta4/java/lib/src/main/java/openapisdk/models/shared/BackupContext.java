package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BackupContext
 * Backup context.
**/
public class BackupContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupId")
    public String backupId;
    public BackupContext withBackupId(String backupId) {
        this.backupId = backupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public BackupContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
}