package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DigitalContentLabelTargetingOptionDetails
 * Represents a targetable digital content label rating tier. This will be populated in the digital_content_label_details field of the TargetingOption when targeting_type is `TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION`.
**/
public class DigitalContentLabelTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentRatingTier")
    public DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum contentRatingTier;
    public DigitalContentLabelTargetingOptionDetails withContentRatingTier(DigitalContentLabelTargetingOptionDetailsContentRatingTierEnum contentRatingTier) {
        this.contentRatingTier = contentRatingTier;
        return this;
    }
}