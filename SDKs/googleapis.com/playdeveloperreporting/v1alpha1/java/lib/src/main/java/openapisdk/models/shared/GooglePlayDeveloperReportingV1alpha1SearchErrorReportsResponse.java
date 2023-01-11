package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
 * Response with a paginated list of error reports matching the search query.
**/
public class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorReports")
    public GooglePlayDeveloperReportingV1alpha1ErrorReport[] errorReports;
    public GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse withErrorReports(GooglePlayDeveloperReportingV1alpha1ErrorReport[] errorReports) {
        this.errorReports = errorReports;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}