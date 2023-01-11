package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * Job represents an operation for a `Rollout`.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployJob")
    public java.util.Map<String, Object> deployJob;
    public Job withDeployJob(java.util.Map<String, Object> deployJob) {
        this.deployJob = deployJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Job withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobRun")
    public String jobRun;
    public Job withJobRun(String jobRun) {
        this.jobRun = jobRun;
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
    @JsonProperty("verifyJob")
    public java.util.Map<String, Object> verifyJob;
    public Job withVerifyJob(java.util.Map<String, Object> verifyJob) {
        this.verifyJob = verifyJob;
        return this;
    }
}