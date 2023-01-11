package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChannelGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoAssign")
    public Boolean autoAssign;
    public ChannelGroup withAutoAssign(Boolean autoAssign) {
        this.autoAssign = autoAssign;
        return this;
    }
}