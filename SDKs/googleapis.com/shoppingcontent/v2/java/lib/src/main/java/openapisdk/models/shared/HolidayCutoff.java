package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class HolidayCutoff {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadlineDate")
    public String deadlineDate;
    public HolidayCutoff withDeadlineDate(String deadlineDate) {
        this.deadlineDate = deadlineDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadlineHour")
    public Long deadlineHour;
    public HolidayCutoff withDeadlineHour(Long deadlineHour) {
        this.deadlineHour = deadlineHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadlineTimezone")
    public String deadlineTimezone;
    public HolidayCutoff withDeadlineTimezone(String deadlineTimezone) {
        this.deadlineTimezone = deadlineTimezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holidayId")
    public String holidayId;
    public HolidayCutoff withHolidayId(String holidayId) {
        this.holidayId = holidayId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibleFromDate")
    public String visibleFromDate;
    public HolidayCutoff withVisibleFromDate(String visibleFromDate) {
        this.visibleFromDate = visibleFromDate;
        return this;
    }
}