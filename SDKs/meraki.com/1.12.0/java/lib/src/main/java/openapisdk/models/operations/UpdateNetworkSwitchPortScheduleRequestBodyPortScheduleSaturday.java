package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday
 * The schedule object for Saturday.
**/
public class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday withTo(String to) {
        this.to = to;
        return this;
    }
}