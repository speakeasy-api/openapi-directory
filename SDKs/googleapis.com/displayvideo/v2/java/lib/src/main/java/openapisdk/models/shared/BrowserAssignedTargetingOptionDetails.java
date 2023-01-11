package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BrowserAssignedTargetingOptionDetails
 * Details for assigned browser targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BROWSER`.
**/
public class BrowserAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public BrowserAssignedTargetingOptionDetails withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negative")
    public Boolean negative;
    public BrowserAssignedTargetingOptionDetails withNegative(Boolean negative) {
        this.negative = negative;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public BrowserAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}