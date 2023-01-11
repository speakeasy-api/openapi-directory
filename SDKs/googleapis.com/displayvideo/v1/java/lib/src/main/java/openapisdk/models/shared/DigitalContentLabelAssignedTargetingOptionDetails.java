package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DigitalContentLabelAssignedTargetingOptionDetails
 * Targeting details for digital content label. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
public class DigitalContentLabelAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentRatingTier")
    public DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum contentRatingTier;
    public DigitalContentLabelAssignedTargetingOptionDetails withContentRatingTier(DigitalContentLabelAssignedTargetingOptionDetailsContentRatingTierEnum contentRatingTier) {
        this.contentRatingTier = contentRatingTier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedTargetingOptionId")
    public String excludedTargetingOptionId;
    public DigitalContentLabelAssignedTargetingOptionDetails withExcludedTargetingOptionId(String excludedTargetingOptionId) {
        this.excludedTargetingOptionId = excludedTargetingOptionId;
        return this;
    }
}