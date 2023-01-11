package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserInput
 * A user resource.
**/
public class UserInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("developerAccountPermissions")
    public UserDeveloperAccountPermissionsEnum[] developerAccountPermissions;
    public UserInput withDeveloperAccountPermissions(UserDeveloperAccountPermissionsEnum[] developerAccountPermissions) {
        this.developerAccountPermissions = developerAccountPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserInput withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expirationTime")
    public String expirationTime;
    public UserInput withExpirationTime(String expirationTime) {
        this.expirationTime = expirationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserInput withName(String name) {
        this.name = name;
        return this;
    }
}