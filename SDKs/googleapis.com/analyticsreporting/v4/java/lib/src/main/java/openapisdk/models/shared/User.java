package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * Contains information to identify a particular user uniquely.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserTypeEnum type;
    public User withType(UserTypeEnum type) {
        this.type = type;
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