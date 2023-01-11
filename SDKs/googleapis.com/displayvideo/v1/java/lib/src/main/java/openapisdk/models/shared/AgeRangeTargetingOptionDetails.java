package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgeRangeTargetingOptionDetails
 * Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
**/
public class AgeRangeTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ageRange")
    public AgeRangeTargetingOptionDetailsAgeRangeEnum ageRange;
    public AgeRangeTargetingOptionDetails withAgeRange(AgeRangeTargetingOptionDetailsAgeRangeEnum ageRange) {
        this.ageRange = ageRange;
        return this;
    }
}