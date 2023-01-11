package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RestoreBackupContext
 * Database instance restore from backup context. Backup context contains source instance id and project id.
**/
public class RestoreBackupContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backupRunId")
    public String backupRunId;
    public RestoreBackupContext withBackupRunId(String backupRunId) {
        this.backupRunId = backupRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public RestoreBackupContext withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public RestoreBackupContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public String project;
    public RestoreBackupContext withProject(String project) {
        this.project = project;
        return this;
    }
}