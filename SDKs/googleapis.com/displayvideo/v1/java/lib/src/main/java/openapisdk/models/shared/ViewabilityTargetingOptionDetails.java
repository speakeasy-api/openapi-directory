package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ViewabilityTargetingOptionDetails
 * Represents a targetable viewability. This will be populated in the viewability_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_VIEWABILITY`.
**/
public class ViewabilityTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewability")
    public ViewabilityTargetingOptionDetailsViewabilityEnum viewability;
    public ViewabilityTargetingOptionDetails withViewability(ViewabilityTargetingOptionDetailsViewabilityEnum viewability) {
        this.viewability = viewability;
        return this;
    }
}