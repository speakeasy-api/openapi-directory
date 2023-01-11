package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobsResponse
 * ListJob Response.
**/
public class ListJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public Job[] jobs;
    public ListJobsResponse withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListJobsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}