package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedUserRolesRequestInput
 * Request message for BulkEditAssignedUserRoles.
**/
public class BulkEditAssignedUserRolesRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAssignedUserRoles")
    public AssignedUserRoleInput[] createdAssignedUserRoles;
    public BulkEditAssignedUserRolesRequestInput withCreatedAssignedUserRoles(AssignedUserRoleInput[] createdAssignedUserRoles) {
        this.createdAssignedUserRoles = createdAssignedUserRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedAssignedUserRoles")
    public String[] deletedAssignedUserRoles;
    public BulkEditAssignedUserRolesRequestInput withDeletedAssignedUserRoles(String[] deletedAssignedUserRoles) {
        this.deletedAssignedUserRoles = deletedAssignedUserRoles;
        return this;
    }
}