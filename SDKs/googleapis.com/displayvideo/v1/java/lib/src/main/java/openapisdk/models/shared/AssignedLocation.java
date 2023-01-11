package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssignedLocation
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
**/
public class AssignedLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedLocationId")
    public String assignedLocationId;
    public AssignedLocation withAssignedLocationId(String assignedLocationId) {
        this.assignedLocationId = assignedLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AssignedLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public AssignedLocation withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}