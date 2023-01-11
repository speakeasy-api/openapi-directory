package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GenderTargetingOptionDetails
 * Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
**/
public class GenderTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gender")
    public GenderTargetingOptionDetailsGenderEnum gender;
    public GenderTargetingOptionDetails withGender(GenderTargetingOptionDetailsGenderEnum gender) {
        this.gender = gender;
        return this;
    }
}