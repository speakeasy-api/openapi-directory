package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ActivityActor
 * User doing the action.
**/
public class ActivityActor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callerType")
    public String callerType;
    public ActivityActor withCallerType(String callerType) {
        this.callerType = callerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ActivityActor withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("key")
    public String key;
    public ActivityActor withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileId")
    public String profileId;
    public ActivityActor withProfileId(String profileId) {
        this.profileId = profileId;
        return this;
    }
}