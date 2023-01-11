package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProximityLocationListAssignedTargetingOptionDetails
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
**/
public class ProximityLocationListAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityLocationListId")
    public String proximityLocationListId;
    public ProximityLocationListAssignedTargetingOptionDetails withProximityLocationListId(String proximityLocationListId) {
        this.proximityLocationListId = proximityLocationListId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximityRadiusRange")
    public ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum proximityRadiusRange;
    public ProximityLocationListAssignedTargetingOptionDetails withProximityRadiusRange(ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum proximityRadiusRange) {
        this.proximityRadiusRange = proximityRadiusRange;
        return this;
    }
}