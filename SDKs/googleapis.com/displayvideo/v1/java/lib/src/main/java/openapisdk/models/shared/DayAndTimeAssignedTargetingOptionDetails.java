package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DayAndTimeAssignedTargetingOptionDetails
 * Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
**/
public class DayAndTimeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dayOfWeek")
    public DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum dayOfWeek;
    public DayAndTimeAssignedTargetingOptionDetails withDayOfWeek(DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endHour")
    public Integer endHour;
    public DayAndTimeAssignedTargetingOptionDetails withEndHour(Integer endHour) {
        this.endHour = endHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startHour")
    public Integer startHour;
    public DayAndTimeAssignedTargetingOptionDetails withStartHour(Integer startHour) {
        this.startHour = startHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZoneResolution")
    public DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum timeZoneResolution;
    public DayAndTimeAssignedTargetingOptionDetails withTimeZoneResolution(DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum timeZoneResolution) {
        this.timeZoneResolution = timeZoneResolution;
        return this;
    }
}