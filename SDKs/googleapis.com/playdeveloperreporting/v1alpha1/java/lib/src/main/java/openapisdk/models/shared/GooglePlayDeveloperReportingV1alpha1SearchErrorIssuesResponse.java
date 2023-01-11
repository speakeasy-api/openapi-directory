package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
 * Response with a paginated list of issues that matched the request.
**/
public class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorIssues")
    public GooglePlayDeveloperReportingV1alpha1ErrorIssue[] errorIssues;
    public GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse withErrorIssues(GooglePlayDeveloperReportingV1alpha1ErrorIssue[] errorIssues) {
        this.errorIssues = errorIssues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}