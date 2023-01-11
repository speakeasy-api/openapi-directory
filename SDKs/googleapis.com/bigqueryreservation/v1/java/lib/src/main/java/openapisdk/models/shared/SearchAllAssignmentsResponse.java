package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchAllAssignmentsResponse
 * The response for ReservationService.SearchAllAssignments.
**/
public class SearchAllAssignmentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignments")
    public Assignment[] assignments;
    public SearchAllAssignmentsResponse withAssignments(Assignment[] assignments) {
        this.assignments = assignments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public SearchAllAssignmentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}