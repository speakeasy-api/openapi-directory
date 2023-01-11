package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateJobsRequestInput
 * Request to update a batch of jobs.
**/
public class BatchUpdateJobsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public JobInput[] jobs;
    public BatchUpdateJobsRequestInput withJobs(JobInput[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public BatchUpdateJobsRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
}