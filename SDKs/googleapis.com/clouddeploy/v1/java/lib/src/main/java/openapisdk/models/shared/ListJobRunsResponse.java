package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListJobRunsResponse
 * ListJobRunsResponse is the response object returned by `ListJobRuns`.
**/
public class ListJobRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobRuns")
    public JobRun[] jobRuns;
    public ListJobRunsResponse withJobRuns(JobRun[] jobRuns) {
        this.jobRuns = jobRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListJobRunsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListJobRunsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}