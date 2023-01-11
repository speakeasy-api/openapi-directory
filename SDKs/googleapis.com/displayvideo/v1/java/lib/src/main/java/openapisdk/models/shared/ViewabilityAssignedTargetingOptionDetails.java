package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViewabilityAssignedTargetingOptionDetails
 * Assigned viewability targeting option details. This will be populated in the viewability_details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
**/
public class ViewabilityAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public ViewabilityAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewability")
    public ViewabilityAssignedTargetingOptionDetailsViewabilityEnum viewability;
    public ViewabilityAssignedTargetingOptionDetails withViewability(ViewabilityAssignedTargetingOptionDetailsViewabilityEnum viewability) {
        this.viewability = viewability;
        return this;
    }
}