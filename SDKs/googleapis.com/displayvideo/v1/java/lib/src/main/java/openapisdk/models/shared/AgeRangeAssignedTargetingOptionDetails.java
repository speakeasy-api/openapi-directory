package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgeRangeAssignedTargetingOptionDetails
 * Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
public class AgeRangeAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRange")
    public AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum ageRange;
    public AgeRangeAssignedTargetingOptionDetails withAgeRange(AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum ageRange) {
        this.ageRange = ageRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingOptionId")
    public String targetingOptionId;
    public AgeRangeAssignedTargetingOptionDetails withTargetingOptionId(String targetingOptionId) {
        this.targetingOptionId = targetingOptionId;
        return this;
    }
}