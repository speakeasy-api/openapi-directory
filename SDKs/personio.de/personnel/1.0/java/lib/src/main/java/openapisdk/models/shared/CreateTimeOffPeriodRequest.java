package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTimeOffPeriodRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public CreateTimeOffPeriodRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("employee_id")
    public Long employeeId;
    public CreateTimeOffPeriodRequest withEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonProperty("end_date")
    public LocalDate endDate;
    public CreateTimeOffPeriodRequest withEndDate(LocalDate endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonProperty("half_day_end")
    public Boolean halfDayEnd;
    public CreateTimeOffPeriodRequest withHalfDayEnd(Boolean halfDayEnd) {
        this.halfDayEnd = halfDayEnd;
        return this;
    }
    @JsonProperty("half_day_start")
    public Boolean halfDayStart;
    public CreateTimeOffPeriodRequest withHalfDayStart(Boolean halfDayStart) {
        this.halfDayStart = halfDayStart;
        return this;
    }
    @JsonProperty("start_date")
    public LocalDate startDate;
    public CreateTimeOffPeriodRequest withStartDate(LocalDate startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonProperty("time_off_type_id")
    public Long timeOffTypeId;
    public CreateTimeOffPeriodRequest withTimeOffTypeId(Long timeOffTypeId) {
        this.timeOffTypeId = timeOffTypeId;
        return this;
    }
}