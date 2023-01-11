package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DigitalContentLabelAssignedTargetingOptionDetailsInput
 * Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
public class DigitalContentLabelAssignedTargetingOptionDetailsInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedTargetingOptionId")
    public String excludedTargetingOptionId;
    public DigitalContentLabelAssignedTargetingOptionDetailsInput withExcludedTargetingOptionId(String excludedTargetingOptionId) {
        this.excludedTargetingOptionId = excludedTargetingOptionId;
        return this;
    }
}