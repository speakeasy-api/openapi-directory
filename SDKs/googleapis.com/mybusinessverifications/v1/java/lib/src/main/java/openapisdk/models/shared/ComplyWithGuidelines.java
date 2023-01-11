package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComplyWithGuidelines
 * Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).
**/
public class ComplyWithGuidelines {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendationReason")
    public ComplyWithGuidelinesRecommendationReasonEnum recommendationReason;
    public ComplyWithGuidelines withRecommendationReason(ComplyWithGuidelinesRecommendationReasonEnum recommendationReason) {
        this.recommendationReason = recommendationReason;
        return this;
    }
}