package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPatchJobsResponse
 * A response message for listing patch jobs.
**/
public class ListPatchJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListPatchJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("patchJobs")
    public PatchJob[] patchJobs;
    public ListPatchJobsResponse withPatchJobs(PatchJob[] patchJobs) {
        this.patchJobs = patchJobs;
        return this;
    }
}