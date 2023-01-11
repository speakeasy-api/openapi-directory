package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesRestoreBackupRequest
 * Database instance restore backup request.
**/
public class InstancesRestoreBackupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restoreBackupContext")
    public RestoreBackupContext restoreBackupContext;
    public InstancesRestoreBackupRequest withRestoreBackupContext(RestoreBackupContext restoreBackupContext) {
        this.restoreBackupContext = restoreBackupContext;
        return this;
    }
}