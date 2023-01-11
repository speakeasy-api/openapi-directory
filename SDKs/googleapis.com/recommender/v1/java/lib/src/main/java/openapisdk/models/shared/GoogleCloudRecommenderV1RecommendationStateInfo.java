package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecommenderV1RecommendationStateInfo
 * Information for state. Contains state and metadata.
**/
public class GoogleCloudRecommenderV1RecommendationStateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public GoogleCloudRecommenderV1RecommendationStateInfoStateEnum state;
    public GoogleCloudRecommenderV1RecommendationStateInfo withState(GoogleCloudRecommenderV1RecommendationStateInfoStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateMetadata")
    public java.util.Map<String, String> stateMetadata;
    public GoogleCloudRecommenderV1RecommendationStateInfo withStateMetadata(java.util.Map<String, String> stateMetadata) {
        this.stateMetadata = stateMetadata;
        return this;
    }
}