package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkSwitchPortScheduleRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkSwitchPortScheduleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portSchedule")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule portSchedule;
    public UpdateNetworkSwitchPortScheduleRequestBody withPortSchedule(UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule portSchedule) {
        this.portSchedule = portSchedule;
        return this;
    }
}