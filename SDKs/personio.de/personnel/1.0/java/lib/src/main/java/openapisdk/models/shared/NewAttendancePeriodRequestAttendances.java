package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;

public class NewAttendancePeriodRequestAttendances {
    @JsonProperty("break")
    public Integer break_;
    public NewAttendancePeriodRequestAttendances withBreak(Integer break_) {
        this.break_ = break_;
        return this;
    }
    @JsonProperty("comment")
    public String comment;
    public NewAttendancePeriodRequestAttendances withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public NewAttendancePeriodRequestAttendances withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("employee")
    public Long employee;
    public NewAttendancePeriodRequestAttendances withEmployee(Long employee) {
        this.employee = employee;
        return this;
    }
    @JsonProperty("end_time")
    public String endTime;
    public NewAttendancePeriodRequestAttendances withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonProperty("start_time")
    public String startTime;
    public NewAttendancePeriodRequestAttendances withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}