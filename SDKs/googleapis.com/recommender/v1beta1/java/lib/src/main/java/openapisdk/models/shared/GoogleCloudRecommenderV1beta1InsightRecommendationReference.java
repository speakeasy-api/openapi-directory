package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1InsightRecommendationReference
 * Reference to an associated recommendation.
**/
public class GoogleCloudRecommenderV1beta1InsightRecommendationReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendation")
    public String recommendation;
    public GoogleCloudRecommenderV1beta1InsightRecommendationReference withRecommendation(String recommendation) {
        this.recommendation = recommendation;
        return this;
    }
}