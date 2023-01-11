package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KnownUser
 * A known user.
**/
public class KnownUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCurrentUser")
    public Boolean isCurrentUser;
    public KnownUser withIsCurrentUser(Boolean isCurrentUser) {
        this.isCurrentUser = isCurrentUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("personName")
    public String personName;
    public KnownUser withPersonName(String personName) {
        this.personName = personName;
        return this;
    }
}