package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BulkEditAssignedUserRolesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAssignedUserRoles")
    public AssignedUserRole[] createdAssignedUserRoles;
    public BulkEditAssignedUserRolesResponse withCreatedAssignedUserRoles(AssignedUserRole[] createdAssignedUserRoles) {
        this.createdAssignedUserRoles = createdAssignedUserRoles;
        return this;
    }
}