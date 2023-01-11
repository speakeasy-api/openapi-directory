package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult
 * PredictionResult represents the recommendation prediction results.
**/
public class GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemMetadata")
    public java.util.Map<String, Object> itemMetadata;
    public GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult withItemMetadata(java.util.Map<String, Object> itemMetadata) {
        this.itemMetadata = itemMetadata;
        return this;
    }
}