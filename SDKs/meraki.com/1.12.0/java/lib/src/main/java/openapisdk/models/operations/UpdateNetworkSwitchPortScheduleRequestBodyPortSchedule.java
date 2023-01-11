package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule
 *     The schedule for switch port scheduling. Schedules are applied to days of the week.
 *     When it's empty, default schedule with all days of a week are configured.
 *     Any unspecified day in the schedule is added as a default schedule configuration of the day.
 * 
**/
public class UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday friday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withFriday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleFriday friday) {
        this.friday = friday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday monday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withMonday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleMonday monday) {
        this.monday = monday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("saturday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday saturday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withSaturday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSaturday saturday) {
        this.saturday = saturday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sunday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday sunday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withSunday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleSunday sunday) {
        this.sunday = sunday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thursday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday thursday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withThursday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleThursday thursday) {
        this.thursday = thursday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tuesday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday tuesday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withTuesday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleTuesday tuesday) {
        this.tuesday = tuesday;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wednesday")
    public UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday wednesday;
    public UpdateNetworkSwitchPortScheduleRequestBodyPortSchedule withWednesday(UpdateNetworkSwitchPortScheduleRequestBodyPortScheduleWednesday wednesday) {
        this.wednesday = wednesday;
        return this;
    }
}