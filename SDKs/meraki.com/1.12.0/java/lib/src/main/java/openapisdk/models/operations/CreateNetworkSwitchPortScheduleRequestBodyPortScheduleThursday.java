package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
 * The schedule object for Thursday.
**/
public class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withTo(String to) {
        this.to = to;
        return this;
    }
}