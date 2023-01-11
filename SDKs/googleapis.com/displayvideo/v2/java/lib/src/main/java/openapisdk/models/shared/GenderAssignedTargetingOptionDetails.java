package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenderAssignedTargetingOptionDetails
 * Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
public class GenderAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public GenderAssignedTargetingOptionDetailsGenderEnum gender;
    public GenderAssignedTargetingOptionDetails withGender(GenderAssignedTargetingOptionDetailsGenderEnum gender) {
        this.gender = gender;
        return this;
    }
}