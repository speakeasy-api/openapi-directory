package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelRequired {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBroadcastOnly")
    public Boolean isBroadcastOnly;
    public ChannelRequired withIsBroadcastOnly(Boolean isBroadcastOnly) {
        this.isBroadcastOnly = isBroadcastOnly;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ChannelRequired withTitle(String title) {
        this.title = title;
        return this;
    }
}