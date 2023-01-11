package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCloneJobsResponse
 * Response message for 'ListCloneJobs' request.
**/
public class ListCloneJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloneJobs")
    public CloneJob[] cloneJobs;
    public ListCloneJobsResponse withCloneJobs(CloneJob[] cloneJobs) {
        this.cloneJobs = cloneJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCloneJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCloneJobsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}