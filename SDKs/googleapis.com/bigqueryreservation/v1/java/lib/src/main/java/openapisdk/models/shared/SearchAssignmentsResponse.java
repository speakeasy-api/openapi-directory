package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchAssignmentsResponse
 * The response for ReservationService.SearchAssignments.
**/
public class SearchAssignmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignments")
    public Assignment[] assignments;
    public SearchAssignmentsResponse withAssignments(Assignment[] assignments) {
        this.assignments = assignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchAssignmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}