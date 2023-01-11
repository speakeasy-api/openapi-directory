package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedLocationsResponse
 * Response message for AssignedLocationService.BulkEditAssignedLocations.
**/
public class BulkEditAssignedLocationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedLocations")
    public AssignedLocation[] assignedLocations;
    public BulkEditAssignedLocationsResponse withAssignedLocations(AssignedLocation[] assignedLocations) {
        this.assignedLocations = assignedLocations;
        return this;
    }
}