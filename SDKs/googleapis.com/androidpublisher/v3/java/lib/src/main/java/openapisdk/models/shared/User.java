package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * A user resource.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessState")
    public UserAccessStateEnum accessState;
    public User withAccessState(UserAccessStateEnum accessState) {
        this.accessState = accessState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerAccountPermissions")
    public UserDeveloperAccountPermissionsEnum[] developerAccountPermissions;
    public User withDeveloperAccountPermissions(UserDeveloperAccountPermissionsEnum[] developerAccountPermissions) {
        this.developerAccountPermissions = developerAccountPermissions;
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
    @JsonProperty("expirationTime")
    public String expirationTime;
    public User withExpirationTime(String expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grants")
    public Grant[] grants;
    public User withGrants(Grant[] grants) {
        this.grants = grants;
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
    @JsonProperty("partial")
    public Boolean partial;
    public User withPartial(Boolean partial) {
        this.partial = partial;
        return this;
    }
}