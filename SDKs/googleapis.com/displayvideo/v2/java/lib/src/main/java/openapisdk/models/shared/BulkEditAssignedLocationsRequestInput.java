package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEditAssignedLocationsRequestInput
 * Request message for AssignedLocationService.BulkEditAssignedLocations.
**/
public class BulkEditAssignedLocationsRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdAssignedLocations")
    public AssignedLocationInput[] createdAssignedLocations;
    public BulkEditAssignedLocationsRequestInput withCreatedAssignedLocations(AssignedLocationInput[] createdAssignedLocations) {
        this.createdAssignedLocations = createdAssignedLocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletedAssignedLocations")
    public String[] deletedAssignedLocations;
    public BulkEditAssignedLocationsRequestInput withDeletedAssignedLocations(String[] deletedAssignedLocations) {
        this.deletedAssignedLocations = deletedAssignedLocations;
        return this;
    }
}