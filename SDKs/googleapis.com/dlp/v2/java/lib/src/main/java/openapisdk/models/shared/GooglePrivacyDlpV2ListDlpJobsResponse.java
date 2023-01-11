package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ListDlpJobsResponse
 * The response message for listing DLP jobs.
**/
public class GooglePrivacyDlpV2ListDlpJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public GooglePrivacyDlpV2DlpJob[] jobs;
    public GooglePrivacyDlpV2ListDlpJobsResponse withJobs(GooglePrivacyDlpV2DlpJob[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePrivacyDlpV2ListDlpJobsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}