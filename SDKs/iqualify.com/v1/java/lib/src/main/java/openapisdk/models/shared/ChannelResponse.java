package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ChannelResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBroadcastOnly")
    public Boolean isBroadcastOnly;
    public ChannelResponse withIsBroadcastOnly(Boolean isBroadcastOnly) {
        this.isBroadcastOnly = isBroadcastOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ChannelResponse withTitle(String title) {
        this.title = title;
        return this;
    }
}