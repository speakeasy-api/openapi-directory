package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveGroupMigrationRequest
 * Request message for 'RemoveMigration' request.
**/
public class RemoveGroupMigrationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migratingVm")
    public String migratingVm;
    public RemoveGroupMigrationRequest withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}