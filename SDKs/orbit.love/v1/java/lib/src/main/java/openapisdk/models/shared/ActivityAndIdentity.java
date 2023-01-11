package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActivityAndIdentity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public Object activity;
    public ActivityAndIdentity withActivity(Object activity) {
        this.activity = activity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identity")
    public Identity identity;
    public ActivityAndIdentity withIdentity(Identity identity) {
        this.identity = identity;
        return this;
    }
}