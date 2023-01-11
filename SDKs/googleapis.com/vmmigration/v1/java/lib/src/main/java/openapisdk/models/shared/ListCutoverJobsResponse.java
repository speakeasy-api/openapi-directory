package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCutoverJobsResponse
 * Response message for 'ListCutoverJobs' request.
**/
public class ListCutoverJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cutoverJobs")
    public CutoverJob[] cutoverJobs;
    public ListCutoverJobsResponse withCutoverJobs(CutoverJob[] cutoverJobs) {
        this.cutoverJobs = cutoverJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCutoverJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListCutoverJobsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}