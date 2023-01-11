package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOsPolicyAssignmentRevisionsResponse
 * A response message for listing all revisions for a OS policy assignment.
**/
public class ListOsPolicyAssignmentRevisionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOsPolicyAssignmentRevisionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyAssignments")
    public OsPolicyAssignment[] osPolicyAssignments;
    public ListOsPolicyAssignmentRevisionsResponse withOsPolicyAssignments(OsPolicyAssignment[] osPolicyAssignments) {
        this.osPolicyAssignments = osPolicyAssignments;
        return this;
    }
}