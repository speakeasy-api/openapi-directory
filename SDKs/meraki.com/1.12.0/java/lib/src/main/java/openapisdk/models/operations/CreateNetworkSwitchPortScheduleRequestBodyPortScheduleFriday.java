package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday
 * The schedule object for Friday.
**/
public class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday withTo(String to) {
        this.to = to;
        return this;
    }
}