package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddGroupMigrationRequest
 * Request message for 'AddGroupMigration' request.
**/
public class AddGroupMigrationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("migratingVm")
    public String migratingVm;
    public AddGroupMigrationRequest withMigratingVm(String migratingVm) {
        this.migratingVm = migratingVm;
        return this;
    }
}