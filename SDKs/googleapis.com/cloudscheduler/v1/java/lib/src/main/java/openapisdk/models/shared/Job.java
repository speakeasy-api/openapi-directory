package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * Configuration for a job. The maximum allowed size for a job is 1MB.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appEngineHttpTarget")
    public AppEngineHttpTarget appEngineHttpTarget;
    public Job withAppEngineHttpTarget(AppEngineHttpTarget appEngineHttpTarget) {
        this.appEngineHttpTarget = appEngineHttpTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attemptDeadline")
    public String attemptDeadline;
    public Job withAttemptDeadline(String attemptDeadline) {
        this.attemptDeadline = attemptDeadline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Job withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("httpTarget")
    public HttpTarget httpTarget;
    public Job withHttpTarget(HttpTarget httpTarget) {
        this.httpTarget = httpTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptTime")
    public String lastAttemptTime;
    public Job withLastAttemptTime(String lastAttemptTime) {
        this.lastAttemptTime = lastAttemptTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pubsubTarget")
    public PubsubTarget pubsubTarget;
    public Job withPubsubTarget(PubsubTarget pubsubTarget) {
        this.pubsubTarget = pubsubTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retryConfig")
    public RetryConfig retryConfig;
    public Job withRetryConfig(RetryConfig retryConfig) {
        this.retryConfig = retryConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public String schedule;
    public Job withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduleTime")
    public String scheduleTime;
    public Job withScheduleTime(String scheduleTime) {
        this.scheduleTime = scheduleTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public JobStateEnum state;
    public Job withState(JobStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Status status;
    public Job withStatus(Status status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeZone")
    public String timeZone;
    public Job withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userUpdateTime")
    public String userUpdateTime;
    public Job withUserUpdateTime(String userUpdateTime) {
        this.userUpdateTime = userUpdateTime;
        return this;
    }
}