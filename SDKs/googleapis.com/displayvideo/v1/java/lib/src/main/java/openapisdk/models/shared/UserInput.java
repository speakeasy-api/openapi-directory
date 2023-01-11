package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserInput
 * A single user in Display & Video 360.
**/
public class UserInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedUserRoles")
    public AssignedUserRoleInput[] assignedUserRoles;
    public UserInput withAssignedUserRoles(AssignedUserRoleInput[] assignedUserRoles) {
        this.assignedUserRoles = assignedUserRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UserInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserInput withEmail(String email) {
        this.email = email;
        return this;
    }
}