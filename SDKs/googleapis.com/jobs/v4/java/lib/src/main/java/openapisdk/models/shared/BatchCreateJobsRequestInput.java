package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchCreateJobsRequestInput
 * Request to create a batch of jobs.
**/
public class BatchCreateJobsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public JobInput[] jobs;
    public BatchCreateJobsRequestInput withJobs(JobInput[] jobs) {
        this.jobs = jobs;
        return this;
    }
}