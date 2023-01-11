package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday
 * The schedule object for Wednesday.
**/
public class CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday withTo(String to) {
        this.to = to;
        return this;
    }
}