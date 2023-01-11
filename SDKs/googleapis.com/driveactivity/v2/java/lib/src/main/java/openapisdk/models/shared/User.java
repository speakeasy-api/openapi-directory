package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * User
 * Information about an end user.
**/
public class User {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedUser")
    public java.util.Map<String, Object> deletedUser;
    public User withDeletedUser(java.util.Map<String, Object> deletedUser) {
        this.deletedUser = deletedUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knownUser")
    public KnownUser knownUser;
    public User withKnownUser(KnownUser knownUser) {
        this.knownUser = knownUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknownUser")
    public java.util.Map<String, Object> unknownUser;
    public User withUnknownUser(java.util.Map<String, Object> unknownUser) {
        this.unknownUser = unknownUser;
        return this;
    }
}