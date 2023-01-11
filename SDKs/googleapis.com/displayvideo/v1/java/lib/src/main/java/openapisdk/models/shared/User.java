package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * A single user in Display & Video 360.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedUserRoles")
    public AssignedUserRole[] assignedUserRoles;
    public User withAssignedUserRoles(AssignedUserRole[] assignedUserRoles) {
        this.assignedUserRoles = assignedUserRoles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public User withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public User withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public User withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public User withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}