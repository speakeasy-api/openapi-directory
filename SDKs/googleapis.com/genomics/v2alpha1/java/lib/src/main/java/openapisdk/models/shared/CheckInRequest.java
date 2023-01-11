package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CheckInRequest
 * The parameters to the CheckIn method.
**/
public class CheckInRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deadlineExpired")
    public java.util.Map<String, Object> deadlineExpired;
    public CheckInRequest withDeadlineExpired(java.util.Map<String, Object> deadlineExpired) {
        this.deadlineExpired = deadlineExpired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public java.util.Map<String, Object> event;
    public CheckInRequest withEvent(java.util.Map<String, Object> event) {
        this.event = event;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public TimestampedEvent[] events;
    public CheckInRequest withEvents(TimestampedEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public Status result;
    public CheckInRequest withResult(Status result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sosReport")
    public String sosReport;
    public CheckInRequest withSosReport(String sosReport) {
        this.sosReport = sosReport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerStatus")
    public WorkerStatus workerStatus;
    public CheckInRequest withWorkerStatus(WorkerStatus workerStatus) {
        this.workerStatus = workerStatus;
        return this;
    }
}