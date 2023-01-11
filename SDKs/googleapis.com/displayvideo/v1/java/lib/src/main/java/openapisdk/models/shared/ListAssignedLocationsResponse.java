package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAssignedLocationsResponse
 * Response message for AssignedLocationService.ListAssignedLocations.
**/
public class ListAssignedLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedLocations")
    public AssignedLocation[] assignedLocations;
    public ListAssignedLocationsResponse withAssignedLocations(AssignedLocation[] assignedLocations) {
        this.assignedLocations = assignedLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAssignedLocationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}