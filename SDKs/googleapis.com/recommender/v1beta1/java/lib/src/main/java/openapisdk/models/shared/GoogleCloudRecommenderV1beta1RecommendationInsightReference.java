package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1RecommendationInsightReference
 * Reference to an associated insight.
**/
public class GoogleCloudRecommenderV1beta1RecommendationInsightReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insight")
    public String insight;
    public GoogleCloudRecommenderV1beta1RecommendationInsightReference withInsight(String insight) {
        this.insight = insight;
        return this;
    }
}