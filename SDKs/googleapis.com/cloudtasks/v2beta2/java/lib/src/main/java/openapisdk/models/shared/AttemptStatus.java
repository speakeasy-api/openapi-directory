package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttemptStatus
 * The status of a task attempt.
**/
public class AttemptStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispatchTime")
    public String dispatchTime;
    public AttemptStatus withDispatchTime(String dispatchTime) {
        this.dispatchTime = dispatchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Status responseStatus;
    public AttemptStatus withResponseStatus(Status responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseTime")
    public String responseTime;
    public AttemptStatus withResponseTime(String responseTime) {
        this.responseTime = responseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public AttemptStatus withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}