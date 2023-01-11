package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListInboundSsoAssignmentsResponse
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
**/
public class ListInboundSsoAssignmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inboundSsoAssignments")
    public InboundSsoAssignment[] inboundSsoAssignments;
    public ListInboundSsoAssignmentsResponse withInboundSsoAssignments(InboundSsoAssignment[] inboundSsoAssignments) {
        this.inboundSsoAssignments = inboundSsoAssignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListInboundSsoAssignmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}