package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAttendancePeriodRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("break")
    public Integer break_;
    public UpdateAttendancePeriodRequest withBreak(Integer break_) {
        this.break_ = break_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public UpdateAttendancePeriodRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public LocalDate date;
    public UpdateAttendancePeriodRequest withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_time")
    public String endTime;
    public UpdateAttendancePeriodRequest withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public UpdateAttendancePeriodRequest withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
}