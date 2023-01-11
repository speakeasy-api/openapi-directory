package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOsPolicyAssignmentReportsResponse
 * A response message for listing OS Policy assignment reports including the page of results and page token.
**/
public class ListOsPolicyAssignmentReportsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOsPolicyAssignmentReportsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyAssignmentReports")
    public OsPolicyAssignmentReport[] osPolicyAssignmentReports;
    public ListOsPolicyAssignmentReportsResponse withOsPolicyAssignmentReports(OsPolicyAssignmentReport[] osPolicyAssignmentReports) {
        this.osPolicyAssignmentReports = osPolicyAssignmentReports;
        return this;
    }
}