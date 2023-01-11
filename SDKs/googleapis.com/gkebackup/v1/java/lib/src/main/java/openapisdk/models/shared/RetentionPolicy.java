package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetentionPolicy
 * RetentionPolicy defines a Backup retention policy for a BackupPlan.
**/
public class RetentionPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupDeleteLockDays")
    public Integer backupDeleteLockDays;
    public RetentionPolicy withBackupDeleteLockDays(Integer backupDeleteLockDays) {
        this.backupDeleteLockDays = backupDeleteLockDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupRetainDays")
    public Integer backupRetainDays;
    public RetentionPolicy withBackupRetainDays(Integer backupRetainDays) {
        this.backupRetainDays = backupRetainDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locked")
    public Boolean locked;
    public RetentionPolicy withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
}