package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Initiator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("joined")
    public InitiatorJoined joined;
    public Initiator withJoined(InitiatorJoined joined) {
        this.joined = joined;
        return this;
    }
}