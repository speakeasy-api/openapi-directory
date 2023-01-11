package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NetworkUnblockResponseInvalidDurationInvalidParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public NetworkUnblockResponseInvalidDurationInvalidParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public String reason;
    public NetworkUnblockResponseInvalidDurationInvalidParameters withReason(String reason) {
        this.reason = reason;
        return this;
    }
}