package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListJobsForWorkflowRun200ApplicationJson {
    @JsonProperty("jobs")
    public openapisdk.models.shared.Job[] jobs;
    public ActionsListJobsForWorkflowRun200ApplicationJson withJobs(openapisdk.models.shared.Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListJobsForWorkflowRun200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}