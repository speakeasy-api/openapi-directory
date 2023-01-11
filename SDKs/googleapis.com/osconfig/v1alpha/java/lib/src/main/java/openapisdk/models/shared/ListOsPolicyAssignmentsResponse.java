package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListOsPolicyAssignmentsResponse
 * A response message for listing all assignments under given parent.
**/
public class ListOsPolicyAssignmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListOsPolicyAssignmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyAssignments")
    public OsPolicyAssignment[] osPolicyAssignments;
    public ListOsPolicyAssignmentsResponse withOsPolicyAssignments(OsPolicyAssignment[] osPolicyAssignments) {
        this.osPolicyAssignments = osPolicyAssignments;
        return this;
    }
}