package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday
 * The schedule object for Sunday.
**/
public class UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to")
    public String to;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday withTo(String to) {
        this.to = to;
        return this;
    }
}