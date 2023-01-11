package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1beta1RecommendationStateInfo
 * Information for state. Contains state and metadata.
**/
public class GoogleCloudRecommenderV1beta1RecommendationStateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum state;
    public GoogleCloudRecommenderV1beta1RecommendationStateInfo withState(GoogleCloudRecommenderV1beta1RecommendationStateInfoStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMetadata")
    public java.util.Map<String, String> stateMetadata;
    public GoogleCloudRecommenderV1beta1RecommendationStateInfo withStateMetadata(java.util.Map<String, String> stateMetadata) {
        this.stateMetadata = stateMetadata;
        return this;
    }
}