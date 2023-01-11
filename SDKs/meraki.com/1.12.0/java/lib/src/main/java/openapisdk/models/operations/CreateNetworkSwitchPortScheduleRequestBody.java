package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkSwitchPortScheduleRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateNetworkSwitchPortScheduleRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("portSchedule")
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule portSchedule;
    public CreateNetworkSwitchPortScheduleRequestBody withPortSchedule(CreateNetworkSwitchPortScheduleRequestBodyPortSchedule portSchedule) {
        this.portSchedule = portSchedule;
        return this;
    }
}