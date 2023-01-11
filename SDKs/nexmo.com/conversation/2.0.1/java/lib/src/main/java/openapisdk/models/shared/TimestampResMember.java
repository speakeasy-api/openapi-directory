package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TimestampResMember {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invited")
    public String invited;
    public TimestampResMember withInvited(String invited) {
        this.invited = invited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("joined")
    public String joined;
    public TimestampResMember withJoined(String joined) {
        this.joined = joined;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("left")
    public String left;
    public TimestampResMember withLeft(String left) {
        this.left = left;
        return this;
    }
}