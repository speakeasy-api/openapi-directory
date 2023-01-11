package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkSwitchPortScheduleRequestBodyPortSchedule
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 * 
**/
public class CreateNetworkSwitchPortScheduleRequestBodyPortSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday friday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withFriday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday monday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withMonday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday saturday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withSaturday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday sunday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withSunday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday thursday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withThursday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday tuesday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withTuesday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday wednesday;
    public CreateNetworkSwitchPortScheduleRequestBodyPortSchedule withWednesday(CreateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}