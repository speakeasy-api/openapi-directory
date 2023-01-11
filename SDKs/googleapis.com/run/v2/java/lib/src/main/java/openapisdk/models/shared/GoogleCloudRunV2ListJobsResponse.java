package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ListJobsResponse
 * Response message containing a list of Jobs.
**/
public class GoogleCloudRunV2ListJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public GoogleCloudRunV2Job[] jobs;
    public GoogleCloudRunV2ListJobsResponse withJobs(GoogleCloudRunV2Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudRunV2ListJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}