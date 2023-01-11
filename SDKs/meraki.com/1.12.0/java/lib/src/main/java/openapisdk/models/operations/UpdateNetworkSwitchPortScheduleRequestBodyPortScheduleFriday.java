package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
 * The schedule object for Friday.
**/
public class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withTo(String to) {
        this.to = to;
        return this;
    }
}