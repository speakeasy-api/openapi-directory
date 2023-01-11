package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class AttendancePeriodsResponseDataAttributes {
    @JsonProperty("break")
    public Long break_;
    public AttendancePeriodsResponseDataAttributes withBreak(Long break_) {
        this.break_ = break_;
        return this;
    }
    @JsonProperty("comment")
    public String comment;
    public AttendancePeriodsResponseDataAttributes withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public AttendancePeriodsResponseDataAttributes withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("employee")
    public Long employee;
    public AttendancePeriodsResponseDataAttributes withEmployee(Long employee) {
        this.employee = employee;
        return this;
    }
    @JsonProperty("end_time")
    public String endTime;
    public AttendancePeriodsResponseDataAttributes withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("is_holiday")
    public Boolean isHoliday;
    public AttendancePeriodsResponseDataAttributes withIsHoliday(Boolean isHoliday) {
        this.isHoliday = isHoliday;
        return this;
    }
    @JsonProperty("is_on_time_off")
    public Boolean isOnTimeOff;
    public AttendancePeriodsResponseDataAttributes withIsOnTimeOff(Boolean isOnTimeOff) {
        this.isOnTimeOff = isOnTimeOff;
        return this;
    }
    @JsonProperty("start_time")
    public String startTime;
    public AttendancePeriodsResponseDataAttributes withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}