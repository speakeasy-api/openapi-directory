package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday
 * The schedule object for Thursday.
**/
public class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday withTo(String to) {
        this.to = to;
        return this;
    }
}