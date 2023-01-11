package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attempt
 * The status of a task attempt.
**/
public class Attempt {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dispatchTime")
    public String dispatchTime;
    public Attempt withDispatchTime(String dispatchTime) {
        this.dispatchTime = dispatchTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseStatus")
    public Status responseStatus;
    public Attempt withResponseStatus(Status responseStatus) {
        this.responseStatus = responseStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseTime")
    public String responseTime;
    public Attempt withResponseTime(String responseTime) {
        this.responseTime = responseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public Attempt withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
}