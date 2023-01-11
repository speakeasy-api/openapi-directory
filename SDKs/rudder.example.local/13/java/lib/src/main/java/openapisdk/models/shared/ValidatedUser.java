package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidatedUser
 * list of users with their workflow settings
**/
public class ValidatedUser {
    @JsonProperty("isValidated")
    public Boolean isValidated;
    public ValidatedUser withIsValidated(Boolean isValidated) {
        this.isValidated = isValidated;
        return this;
    }
    @JsonProperty("userExists")
    public Boolean userExists;
    public ValidatedUser withUserExists(Boolean userExists) {
        this.userExists = userExists;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public ValidatedUser withUsername(String username) {
        this.username = username;
        return this;
    }
}